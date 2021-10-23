import Head from "next/head";
import Navigator from "components/shared/navigator/navigator";
import CheckoutTemplate from "components/checkout/checkoutTemplate/checkoutTemplate";
import { Main } from "styles/global/globalStyles";

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
      </Main>
    </>
  );
};

export default Checkout;
