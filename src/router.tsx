import { lazy, Suspense, type ReactNode } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import RouteFallback from "./components/routing/RouteFallback";

const HomePage = lazy(() => import("./pages/HomePage"));
const RoomsPage = lazy(() => import("./pages/RoomsPage"));
const HolidaysPage = lazy(() => import("./pages/HolidaysPage"));
const PesachPage = lazy(() => import("./pages/PesachPage"));
const SukkotPage = lazy(() => import("./pages/SukkotPage"));
const YearRoundPage = lazy(() => import("./pages/YearRoundPage"));
const KosherJewishLifePage = lazy(() => import("./pages/KosherJewishLifePage"));
const CostaRicaGuidePage = lazy(() => import("./pages/CostaRicaGuidePage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function LazyPage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<RouteFallback />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <LazyPage><HomePage /></LazyPage> },
      { path: "rooms", element: <LazyPage><RoomsPage /></LazyPage> },
      { path: "holidays", element: <LazyPage><HolidaysPage /></LazyPage> },
      { path: "pesach", element: <LazyPage><PesachPage /></LazyPage> },
      { path: "sukkot", element: <LazyPage><SukkotPage /></LazyPage> },
      { path: "year-round", element: <LazyPage><YearRoundPage /></LazyPage> },
      { path: "dining", element: <LazyPage><KosherJewishLifePage /></LazyPage> },
      { path: "kosher-jewish-life", element: <Navigate to="/dining" replace /> },
      { path: "costa-rica-guide", element: <LazyPage><CostaRicaGuidePage /></LazyPage> },
      { path: "faq", element: <LazyPage><FaqPage /></LazyPage> },
      { path: "contact", element: <LazyPage><ContactPage /></LazyPage> },
      { path: "dining-kashrut", element: <Navigate to="/dining" replace /> },
      { path: "jewish-life", element: <Navigate to="/dining" replace /> },
      { path: "experiences", element: <Navigate to="/costa-rica-guide" replace /> },
      { path: "plan-your-stay", element: <Navigate to="/contact" replace /> },
      { path: "*", element: <LazyPage><NotFoundPage /></LazyPage> },
    ],
  },
]);
