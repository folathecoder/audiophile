import Head from "next/head";
import Navigator from "components/shared/navigator/navigator";
import CheckoutTemplate from "components/checkout/checkoutTemplate/checkoutTemplate";
import CheckoutModal from "components/checkout/checkoutModal/checkoutModal";
import { Main } from "styles/global/globalStyles";
import Overlay from "components/shared/overlay/overlay";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout | Audiophile</title>
        <meta
          name="description"
          content="Make payment for your cool audiophile gadgets. Congrats on a great purchase!"
        />
      </Head>
      <Main gray>
        <Navigator />
        <CheckoutTemplate />
        <CheckoutModal />
        <Overlay maxOverlay/>
      </Main>
    </>
  );
};

export default Checkout;
