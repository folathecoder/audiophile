import type { AppProps /*, AppContext */ } from "next/app";
import { useState } from "react";
import { GlobalStyles } from "styles/global/globalStyles";
import { menuData } from "data/shared/menuData";
import Header from "components/shared/header/header";
import Footer from "components/shared/footer/footer";
import ScrollToTop from "components/shared/scrollToTop/scrollToTop";
import Overlay from "components/shared/overlay/overlay";

function MyApp({ Component, pageProps }: AppProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Header
        data={menuData}
        setShowOverlay={setShowOverlay}
        showOverlay={showOverlay}
      />
      <Component {...pageProps} />
      <Footer data={menuData} />
      <ScrollToTop />
      {showOverlay && <Overlay />}
    </>
  );
}

export default MyApp;
