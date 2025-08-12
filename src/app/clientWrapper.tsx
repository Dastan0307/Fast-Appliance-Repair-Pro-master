"use client";

import { useEffect, useState, ReactNode } from "react";
import Loader from "src/ui/loader/loader";
import HeaderComponent from "@modules/header/components/headerComponent/headerComponent";
import FooterComponent from "@modules/footer/components/footerComponent/footerComponent";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import ReactGA from 'react-ga4'
import useMediaQuery from "@utils/hooks/useMediaQuery";
import HeaderMobile from "@modules/header/components/headerMobile/headerMobile";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 430px)");

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  useEffect(() => {
    ReactGA.initialize('G-Y7JJ34SKX3')
    ReactGA.send({hitType: 'pageview', page: window.location.pathname})
  }, [])

  return (
    <>
    {isMobile ? <HeaderMobile/>: <HeaderComponent />}
      {loading ? (
        <Loader />
      ) : (
        <>
          {children}
          <MultiContainer>
            <div id="modal-root" />
          </MultiContainer>
        </>
      )}
      <FooterComponent />
    </>
  );
}
