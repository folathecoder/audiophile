import { useEffect } from "react";
import { useAppDispatch } from "redux/types/reduxTypes";
import {
  addItemToCart,
  decreaseQuantity,
  increaseQuantity,
} from "redux/slices/cartSlice";
import {
  CounterWrap,
  Form,
  ButtonWrap,
  Button,
  CounterInput,
  CounterButton,
} from "components/shared/counter/productCounterStyles";
import { PRODUCT_CTA } from "helpers/constants";
import type { ProductType } from "data/types/productType";

interface ProductCounterProps {
  custom?: boolean;
  data?: ProductType;
}

const ProductCounter = ({ custom, data }: ProductCounterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  //TODO: Handle => Submit form value when certain conditions are met
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  //TODO: Handle => Increase product number onClick
  const handleIncrease = () => {
    dispatch(increaseQuantity(data));
  };

  //TODO: Handle => Decrease product number onClick
  const handleDecrease = () => {
    dispatch(decreaseQuantity(data));
  };

  //TODO: Styling => Dynamically change dimension of counter input if "custom" props is passed
  useEffect(() => {
    if (custom) {
      const counterInputs =
        document.querySelectorAll<HTMLElement>("#productNumber");

      counterInputs.forEach((counterInput) => {
        counterInput.style.height = "2rem";
        counterInput.style.width = "2rem";
      });
    }
  });

  //TODO: Redux Event => Add product data to cart
  const addProductToCart = () => {
    dispatch(addItemToCart(data));
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <CounterWrap custom={custom}>
        <ButtonWrap>
          <Button
            aria-label="reduce number of product"
            onClick={handleDecrease}
            custom={custom}
          >
            <i className="fas fa-minus"></i>
          </Button>
        </ButtonWrap>
        <CounterInput>
          <label htmlFor="order">Enter Nuumber of product(s)</label>
          <input
            type="number"
            name="productNumber"
            id="productNumber"
            value={data.cartQuantity}
            onKeyDown={(e) => e.preventDefault}
          />
        </CounterInput>
        <ButtonWrap>
          <Button
            aria-label="increase number of product"
            onClick={handleIncrease}
            custom={custom}
          >
            <i className="fas fa-plus"></i>
          </Button>
        </ButtonWrap>
      </CounterWrap>
      <CounterButton custom={custom} onClick={addProductToCart}>
        {PRODUCT_CTA}
      </CounterButton>
    </Form>
  );
};

export default ProductCounter;
