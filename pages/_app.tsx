import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyles } from "styles/global/globalStyles";
import { menuData } from "data/shared/menuData";
import Header from "components/shared/header/header";
import Footer from "components/shared/footer/footer";
import ScrollToTop from "components/shared/scrollToTop/scrollToTop";
import Overlay from "components/shared/overlay/overlay";
import useOverlay from "hooks/useOverlay";

function MyApp({ Component, pageProps }: AppProps) {
  const { showOverlay} = useOverlay();
  return (
    <>
      <GlobalStyles />
      <Header data={menuData} />
      <Component {...pageProps} />
      <Footer data={menuData} />
      <ScrollToTop />
      {showOverlay && <Overlay />}
    </>
  );
}

export default MyApp;
