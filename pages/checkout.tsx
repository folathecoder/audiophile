import Head from "next/head";
import { useState } from "react";
import Navigator from "components/shared/navigator/navigator";
import CheckoutTemplate from "components/checkout/checkoutTemplate/checkoutTemplate";
import { Main } from "styles/global/globalStyles";
import CheckoutModal from "components/checkout/checkoutModal/checkoutModal";
import Overlay from "components/shared/overlay/overlay";

const Checkout = () => {
  //TODO: Maintain checkout modal state
  const [showModal, setShowModal] = useState(false);

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
        <CheckoutTemplate setShowModal={setShowModal} />
      </Main>
      {showModal && <CheckoutModal />}
      {showModal && <Overlay maxOverlay />}
    </>
  );
};

export default Checkout;
