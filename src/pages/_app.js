import React, { useEffect } from 'react';
import App from 'next/app';
import Router from 'next/router';
import ReactGA from 'react-ga';
import ContextProvider from "@/context/ContextProvider";
import Head from 'next/head'; // Import Head component
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/oslim-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/the-sayinistic-font/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "jarallax/dist/jarallax.css";
import "tiny-slider/dist/tiny-slider.css";
import "@/styles/style.css";
import "@/styles/responsive.css";

ReactGA.initialize('G-7CNE6BFXDV');

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    };

    // Initialize Google Analytics page view tracking
    handleRouteChange(window.location.pathname);

    // Set up listener for route changes
    Router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up event listener on component unmount
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//ccdn.mobildev.in/9b00f9bffca44517a5b34d6f0ba641b0.js"
          data-token="SnR6wvl3KF01Mt60J6cn"
          charset="UTF-8"
        />
      </Head>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
