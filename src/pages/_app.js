/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Script from "next/script";
import Head from "next/head";
import Router from 'next/router';
import ProgressScroll from "../components/Progress-Scroll";
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
import "../styles/globals.css";

Router.events.on('routeChangeStart', () => { nProgress.start()});
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Da vinci</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Component {...pageProps} />
      <ProgressScroll />

      <Script
        strategy="beforeInteractive"
        src="/js/bootstrap.bundle.min.js"
      ></Script>
        <Script strategy="lazyOnload" src="/js/main.js"></Script>
      {/* <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/simpleParallax.min.js"
      ></Script> */}
      {/* <Script
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script> */}
      {/* <Script strategy="beforeInteractive" src="/landing-preview/js/parallax.min.js" ></Script> */}
    </>
  );
}

export default MyApp;
