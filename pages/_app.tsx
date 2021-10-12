import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyles } from "styles/global/globalStyles";
import { menuData } from "data/menuData";
import Header from "components/shared/header/header";
import Footer from "components/shared/footer/footer";
import ScrollToTop from "components/shared/scrollToTop/scrollToTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header data={menuData} />
      <Component {...pageProps} />
      <Footer data={menuData} />
      <ScrollToTop />
    </>
  );
}

export default MyApp;
