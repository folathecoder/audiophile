import Navigator from "components/shared/navigator/navigator";
import CheckoutTemplate from "components/checkout/checkoutTemplate/checkoutTemplate";
import { Main } from "styles/global/globalStyles";

const Checkout = () => {
  return (
    <>
      <Main gray>
        <Navigator />
        <CheckoutTemplate />
      </Main>
    </>
  );
};

export default Checkout;
