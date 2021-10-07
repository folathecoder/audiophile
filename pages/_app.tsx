import { GlobalStyles } from "styles/global/globalStyles";
import { menuData } from "data/menuData";
import Header from "components/shared/header";
import Footer from "components/shared/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header data={menuData} />
      <Component {...pageProps} />
      <Footer data={menuData} />
    </>
  );
}

export default MyApp;