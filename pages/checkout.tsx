import Head from "next/head";
import { useState } from "react";
import Navigator from "components/shared/navigator/navigator";
import CheckoutTemplate from "components/checkout/checkoutTemplate/checkoutTemplate";
import { Main } from "styles/global/globalStyles";
import CheckoutModal from "components/checkout/checkoutModal/checkoutModal";
import Overlay from "components/shared/overlay/overlay";
import { useAppSelector } from "redux/types/reduxTypes";

const Checkout = () => {
  //TODO: State => Get modal state value from root state
  const showModal = useAppSelector(state => state.modal.value)

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
      </Main>
      {showModal && <CheckoutModal />}
      {showModal && <Overlay maxOverlay />}
    </>
  );
};

export default Checkout;
