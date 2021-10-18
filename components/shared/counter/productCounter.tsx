import { useState, useEffect } from "react";
import {
  CounterWrap,
  Form,
  ButtonWrap,
  Button,
  CounterInput,
  CounterButton,
} from "components/shared/counter/productCounterStyles";
import { PRODUCT_CTA } from "helpers/constants";

const ProductCounter = () => {
  let initialInput: {
    productNumber: number;
  };

  //TODO: Manage form input state
  const [formInputs, setFormInputs] = useState({
    productNumber: null,
  });

  //TODO: Manage product number state
  const [productNumber, setProductNumber] = useState(1);

  //TODO: Handle => Extract the form input value(s)
  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.valueAsNumber;
    setFormInputs({ ...formInputs, [name]: value });
  };

  //TODO: Handle => Submit form value when certain conditions are met
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      formInputs &&
      Number.isInteger(formInputs.productNumber) &&
      formInputs.productNumber >= 1
    ) {
      setProductNumber(formInputs.productNumber);
      // const productCountInput = document.getElementById("productNumber") as HTMLInputElement;
      // productCountInput.valueAsNumber = productNumber
    }
  };

  //TODO: Handle => Increase product number onClick
  const handleIncrease = () => {
    setProductNumber((prevPoductNumber) => {
      return prevPoductNumber + 1;
    });
  };

  //TODO: Handle => Decrease product number onClick
  const handleDecrease = () => {
    if (productNumber > 1) {
      setProductNumber((prevPoductNumber) => {
        return prevPoductNumber - 1;
      });
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <CounterWrap>
        <ButtonWrap>
          <Button
            aria-label="reduce number of product"
            onClick={handleDecrease}
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
            value={productNumber}
            onChange={handleFormChange}
          />
        </CounterInput>
        <ButtonWrap>
          <Button
            aria-label="increase number of product"
            onClick={handleIncrease}
          >
            <i className="fas fa-plus"></i>
          </Button>
        </ButtonWrap>
      </CounterWrap>
      <CounterButton>{PRODUCT_CTA}</CounterButton>
    </Form>
  );
};

export default ProductCounter;
