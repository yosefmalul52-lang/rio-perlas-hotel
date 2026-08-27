import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { usePageSeo } from "../../hooks/usePageSeo";
import { pathnameToSeoKey } from "../../content/seo";

export default function SiteLayout() {
  const { pathname, hash } = useLocation();
  useSmoothScroll(pathname, hash);
  usePageSeo(pathnameToSeoKey(pathname));

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col justify-between overflow-x-clip selection:bg-pura-green/20 selection:text-pura-green-dark">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
