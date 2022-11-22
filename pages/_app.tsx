import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmootionCache";
import persist from "mst-persist";
import { SnackbarProvider } from "notistack";
import { RootStoreProvider } from "../store/root-store-context";
import { rootStore } from "../store/root-store";
import Layout from "../components/layouts/main";
import "../styles/globals.css";
import Head from "next/head";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  if (typeof window !== "undefined") {
    // window is undefined in Node
    persist("techStore", rootStore).then(() => {
      console.log("persisted");
    });
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Tech Store - All products that you find"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Tech Store - PEIT React 3"
        ></meta>
        <meta
          name="og:description"
          property="og:description"
          content="Tech Store - All products that you find"
        ></meta>
        <meta
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GXEN3xg2tf-gMG7SDnVdVQ0ax79ixhoMe4OzNAocNCIGcvMhTug-UeOV0doXmhJWe2o&usqp=CAU"
          property="og:image"
        ></meta>
        <meta name="twitter:card" content="Tech Store - PEIT React 3"></meta>
        <title>Tech Store - PEIT React 3</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <RootStoreProvider value={rootStore}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </RootStoreProvider>
          </SnackbarProvider>
          <div id="snackbarhelper" />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
