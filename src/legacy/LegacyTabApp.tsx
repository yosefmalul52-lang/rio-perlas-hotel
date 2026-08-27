import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./LegacyNavbar";
import DiscoverView from "../components/DiscoverView";
import RetreatBuilder from "../components/RetreatBuilder";
import ConciergeChat from "../components/ConciergeChat";
import { Inquiry, ChatMessage } from "../types";
import { FadeUp } from "../components/motion/PremiumReveal";
import { useLanguage } from "../context/LanguageContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  User, 
  DollarSign, 
  ChevronRight, 
  AlertCircle, 
  CheckCircle2, 
  Compass, 
  Trash2,
  MapPin,
  Utensils,
  Sun,
  Flame,
  Printer,
  ChevronLeft
} from "lucide-react";

export default function LegacyTabApp() {
  const { t, language } = useLanguage();
  useSmoothScroll();
  const [activeTab, setActiveTab] = React.useState<"discover" | "planner" | "inquiries" | "chat">("discover");
  const [inquiries, setInquiries] = React.useState<Inquiry[]>([]);
  const [chatHistory, setChatHistory] = React.useState<ChatMessage[]>([]);
  const [preSelectedRoomId, setPreSelectedRoomId] = React.useState<string | null>(null);
  const [selectedInquiryId, setSelectedInquiryId] = React.useState<string | null>(null);

  // Load inquiries and chat from local storage on mount
  React.useEffect(() => {
    try {
      const savedInquiries = localStorage.getItem("altura_inquiries");
      if (savedInquiries) {
        setInquiries(JSON.parse(savedInquiries));
      }
      const savedChat = localStorage.getItem("altura_chat");
      if (savedChat) {
        setChatHistory(JSON.parse(savedChat));
      }
    } catch (e) {
      console.error("Local storage read error:", e);
    }
  }, []);

  // Save inquiries when updated
  const saveInquiries = (updated: Inquiry[]) => {
    setInquiries(updated);
    localStorage.setItem("altura_inquiries", JSON.stringify(updated));
  };

  // Save chat when updated
  React.useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem("altura_chat", JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  const handleInquirySubmission = (newInquiry: Inquiry) => {
    const updated = [newInquiry, ...inquiries];
    saveInquiries(updated);
    setSelectedInquiryId(newInquiry.id);
    setActiveTab("inquiries");
  };

  const handleDeleteInquiry = (id: string) => {
    if (confirm(t.inquiries.deleteConfirm)) {
      const updated = inquiries.filter(i => i.id !== id);
      saveInquiries(updated);
      if (selectedInquiryId === id) {
        setSelectedInquiryId(null);
      }
    }
  };

  const handleStartPlanning = () => {
    setPreSelectedRoomId(null);
    setActiveTab("planner");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreRoom = (roomId: string) => {
    setPreSelectedRoomId(roomId);
    setActiveTab("planner");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedInquiry = inquiries.find(i => i.id === selectedInquiryId) || inquiries[0];

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-pura-green/20 selection:text-pura-green-dark">
      
      {/* Stick Luxury Header Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        inquiriesCount={inquiries.length}
      />

      {/* Main Content Render with AnimatePresence */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === "discover" && (
            <motion.div
              key="discover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DiscoverView
                onStartPlanning={handleStartPlanning}
                onExploreRoom={handleExploreRoom}
              />
            </motion.div>
          )}

          {activeTab === "planner" && (
            <motion.div
              key="planner"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <RetreatBuilder
                onInquirySubmitted={handleInquirySubmission}
                preSelectedRoomId={preSelectedRoomId}
                clearPreSelectedRoom={() => setPreSelectedRoomId(null)}
              />
            </motion.div>
          )}

          {activeTab === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <ConciergeChat
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
              />
            </motion.div>
          )}

          {activeTab === "inquiries" && (
            <motion.div
              key="inquiries"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="py-24 max-w-container-max mx-auto px-4 md:px-margin-desktop bg-surface select-text"
            >
              <div key={language}>
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest font-semibold">{t.inquiries.eyebrow}</span>
                <h1 className="font-headline-lg text-headline-lg text-primary mb-4">{t.inquiries.title}</h1>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {t.inquiries.subtitle}
                </p>
              </div>

              {inquiries.length === 0 ? (
                <div className="bg-surface-container p-12 text-center rounded border border-surface-container-high max-w-xl mx-auto shadow-sm">
                  <Clock className="w-12 h-12 text-secondary/60 mx-auto mb-4" />
                  <h3 className="font-headline-sm text-lg text-primary mb-2">{t.inquiries.emptyTitle}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                    {t.inquiries.emptyBody}
                  </p>
                  <button 
                    onClick={() => setActiveTab("planner")}
                    className="btn-cta px-6 py-3 font-label-caps text-xs uppercase tracking-widest rounded-sm shadow-md cursor-pointer"
                  >
                    {t.inquiries.emptyCta}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Side: Inquiry Selector List (4 cols) */}
                  <div className="lg:col-span-4 space-y-4">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest block font-bold">{t.inquiries.submittedLabel}</span>
                    
                    <div className="space-y-3">
                      {inquiries.map((inq) => {
                        const isSelected = selectedInquiry.id === inq.id;
                        return (
                          <div
                            key={inq.id}
                            onClick={() => setSelectedInquiryId(inq.id)}
                            className={`cursor-pointer p-5 border rounded-sm transition-all text-left ${
                              isSelected
                                ? "border-secondary bg-surface-container shadow-md"
                                : "border-surface-container-high hover:border-secondary/40 bg-surface/50"
                            }`}
                          >
                            <div className="flex justify-between items-start gap-2 mb-2">
                              <span className="font-mono text-xs text-secondary font-bold">{inq.id}</span>
                              <span className="bg-pura-bg-soft text-pura-green-dark text-[9px] font-label-caps uppercase px-2 py-0.5 rounded-sm">
                                {inq.status}
                              </span>
                            </div>
                            <h4 className="font-headline-sm text-sm text-primary mb-1">{inq.roomType}</h4>
                            <p className="text-xs text-on-surface-variant block mb-3">{inq.dates}</p>
                            <div className="flex justify-between items-center text-[10px] font-label-caps text-on-surface-variant">
                              <span className="text-[10px] font-label-caps text-on-surface-variant">{inq.partySize} {t.inquiries.adultsSuffix.toUpperCase()}</span>
                              <span className="text-primary font-bold font-mono">${inq.totalEstimatedPrice.toLocaleString()}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button 
                      onClick={() => setActiveTab("planner")}
                      className="w-full border border-dashed border-pura-green text-pura-green hover:bg-pura-green hover:text-on-primary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer text-center"
                    >
                      {t.inquiries.createNew}
                    </button>
                  </div>

                  {/* Right Side: Inquiry Detailed Card (8 cols) */}
                  <div className="lg:col-span-8 bg-surface-container p-8 md:p-10 rounded border border-surface-container-high shadow-lg space-y-8">
                    
                    {/* Active detailed head */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-surface-container-high">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-mono text-base text-secondary font-bold">{selectedInquiry.id}</span>
                          <span className="bg-pura-bg-soft text-pura-green-dark text-xs font-label-caps px-2.5 py-1 rounded-sm">
                            {t.inquiries.statusReview}
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-xl md:text-2xl text-primary">{selectedInquiry.roomType}</h2>
                        <span className="text-xs text-on-surface-variant block mt-1">{t.inquiries.submittedOn}{selectedInquiry.dateSubmitted}</span>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            window.print();
                          }}
                          className="border border-surface-container-high hover:border-secondary p-2.5 rounded text-primary hover:text-secondary bg-surface transition-colors cursor-pointer"
                          title={t.inquiries.printTitle}
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                          className="border border-red-200 hover:bg-red-50 p-2.5 rounded text-red-600 transition-colors cursor-pointer"
                          title={t.inquiries.deleteTitle}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Premium Escape Countdown Stamp */}
                    <div className="bg-surface p-6 border-l-4 border-secondary rounded shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="space-y-1">
                        <span className="font-label-caps text-[10px] text-secondary tracking-widest block font-bold">{t.inquiries.countdownLabel}</span>
                        <h4 className="font-headline-sm text-base text-primary">{t.inquiries.countdownTitle}</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {t.inquiries.countdownBody} <strong>{selectedInquiry.email}</strong> {t.inquiries.countdownBodyOr} <strong>{selectedInquiry.phone}</strong> {t.inquiries.countdownBodyEnd}
                        </p>
                      </div>

                      <div className="bg-primary-container text-on-primary p-4 rounded text-center min-w-[120px]">
                        <span className="font-mono text-2xl font-bold block text-secondary-fixed">142</span>
                        <span className="font-label-caps text-[9px] text-on-primary-container block tracking-widest">{t.inquiries.daysLabel}</span>
                      </div>
                    </div>

                    {/* Specifications table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                      <div className="space-y-4">
                        <span className="font-label-caps text-xs text-secondary tracking-wider block font-bold border-b border-surface-container-high pb-2">{t.inquiries.specsTitle}</span>
                        
                        <div className="space-y-3 font-body-md text-on-surface-variant">
                          <div className="flex justify-between">
                            <span>{t.inquiries.primaryContact}</span>
                            <strong className="text-primary font-medium">{selectedInquiry.fullName}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>{t.inquiries.bespokeDates}</span>
                            <strong className="text-primary font-medium">{selectedInquiry.dates}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>{t.inquiries.adultGuests}</span>
                            <strong className="text-primary font-medium">{selectedInquiry.partySize} {t.inquiries.adultsSuffix}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>{t.inquiries.kashrutSelection}</span>
                            <strong className="text-secondary font-medium uppercase text-xs">{selectedInquiry.kashrutTier}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <span className="font-label-caps text-xs text-secondary tracking-wider block font-bold border-b border-surface-container-high pb-2">{t.inquiries.programmingTitle}</span>
                        
                        <div className="space-y-2">
                          {selectedInquiry.activities.length === 0 ? (
                            <p className="text-on-surface-variant text-sm italic">{t.inquiries.noActivities}</p>
                          ) : (
                            selectedInquiryActivities(selectedInquiry)
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Special Requests Details */}
                    {selectedRequests(selectedInquiry) && (
                      <div className="bg-surface-container-low p-6 rounded border border-surface-container">
                        <h5 className="font-label-caps text-xs text-primary mb-2 uppercase tracking-wider font-semibold">{t.inquiries.specialTitle}</h5>
                        <p className="text-on-surface-variant text-sm leading-relaxed italic">
                          "{selectedRequests(selectedInquiry)}"
                        </p>
                      </div>
                    )}

                    {/* Price Breakdown Estimation */}
                    <div className="border-t border-surface-container-high pt-8 flex flex-col md:flex-row justify-between items-center bg-surface p-8 rounded border">
                      <div>
                        <span className="font-label-caps text-xs text-secondary tracking-widest uppercase block mb-1">{t.inquiries.costTitle}</span>
                        <h4 className="font-headline-sm text-sm text-primary">{t.inquiries.costSubtitle}</h4>
                        <p className="text-[10px] text-on-surface-variant">{t.inquiries.costNote}</p>
                      </div>

                      <div className="text-end mt-4 md:mt-0">
                        <span className="font-headline-md text-3xl text-secondary font-bold block">${selectedInquiry.totalEstimatedPrice.toLocaleString()}</span>
                        <span className="text-[9px] font-label-caps uppercase tracking-widest text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full inline-block mt-2">
                          {t.inquiries.glattIncluded}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-surface text-pura-text-body w-full py-20 px-4 md:px-margin-desktop border-t border-pura-border">
        <FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-headline-sm text-headline-sm text-pura-green-dark mb-4 tracking-widest uppercase">{t.footer.brand}</h3>
            <p className="font-body-md text-sm text-pura-text-muted max-w-sm mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4 flex-wrap">
              {t.footer.badges.map((badge) => (
              <span key={badge} className="bg-pura-surface px-3 py-1 text-[10px] font-label-caps uppercase tracking-wider rounded-sm border border-pura-border text-pura-green-dark">{badge}</span>
              ))}
            </div>
            
            <div className="mt-8 max-w-sm">
              <label className="font-label-caps text-[10px] uppercase tracking-wider block mb-2 text-pura-gold">{t.footer.newsletterLabel}</label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder={t.footer.emailPlaceholder}
                  className="flex-1 bg-pura-surface border border-pura-border text-text-main placeholder:text-text-muted/60 px-4 py-2.5 text-xs rounded-sm focus:outline-none input-ltr"
                />
                <button 
                  type="button" 
                  className="btn-premium-hover btn-cta px-4 py-2.5 text-xs font-label-caps uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  {t.footer.subscribe}
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-xs uppercase mb-4 text-pura-gold font-bold">{t.footer.exploreTitle}</h4>
            <ul className="space-y-3 text-sm text-pura-text-body font-body-md">
              <li><button onClick={() => { setActiveTab("discover"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-pura-gold transition-colors cursor-pointer">{t.footer.exploreLinks[0]}</button></li>
              <li><button onClick={() => { setActiveTab("discover"); window.scrollTo({ top: 1200, behavior: "smooth" }); }} className="hover:text-pura-gold transition-colors cursor-pointer">{t.footer.exploreLinks[1]}</button></li>
              <li><button onClick={() => { setActiveTab("discover"); window.scrollTo({ top: 2100, behavior: "smooth" }); }} className="hover:text-pura-gold transition-colors cursor-pointer">{t.footer.exploreLinks[2]}</button></li>
              <li><button onClick={() => { setActiveTab("discover"); window.scrollTo({ top: 4000, behavior: "smooth" }); }} className="hover:text-pura-gold transition-colors cursor-pointer">{t.footer.exploreLinks[3]}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-xs uppercase mb-4 text-pura-gold font-bold">{t.footer.inquireTitle}</h4>
            <ul className="space-y-3 text-sm text-pura-text-body font-body-md">
              <li><button onClick={() => setActiveTab("planner")} className="hover:text-pura-gold transition-colors cursor-pointer">{t.footer.inquireLinks[0]}</button></li>
              <li><button onClick={() => setActiveTab("chat")} className="hover:text-pura-gold transition-colors cursor-pointer">{t.footer.inquireLinks[1]}</button></li>
              <li><span className="block text-pura-text-light">{t.footer.location}</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto text-center pt-8 border-t border-pura-border-soft">
          <p className="font-body-md text-xs text-pura-text-light">
            {t.footer.copyright}
          </p>
        </div>
        </FadeUp>
      </footer>

    </div>
  );
}

// Helpers
function selectedInquiryActivities(inquiry: Inquiry) {
  return inquiry.activities.map((act, i) => (
    <div key={i} className="flex items-center gap-2 text-xs text-on-surface-variant font-body-md bg-surface p-2.5 rounded border border-surface-container">
      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
      <span>{act}</span>
    </div>
  ));
}

function selectedRequests(inquiry: Inquiry | undefined) {
  if (!inquiry) return "";
  // Split custom demands if written
  const parts = inquiry.specialRequests.split(". Reserve Minyan seats:");
  return parts[0] ? parts[0].trim() : "";
}
