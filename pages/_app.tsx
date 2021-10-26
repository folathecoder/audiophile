import "react-toastify/dist/ReactToastify.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "styles/global/globalStyles";
import { menuData } from "data/shared/menuData";
import Header from "components/shared/header/header";
import Footer from "components/shared/footer/footer";
import ScrollToTop from "components/shared/scrollToTop/scrollToTop";
import Overlay from "components/shared/overlay/overlay";

function MyApp({ Component, pageProps }: AppProps) {
  //TODO: Hide the overlay component initially
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <ToastContainer />
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
    </Provider>
  );
}

export default MyApp;
