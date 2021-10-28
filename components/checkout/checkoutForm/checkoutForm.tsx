import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes";
import {
  Form,
  FormSection,
  CheckoutHeading,
  FormSectionHeading,
  FormInputWrap,
  FormInput,
  FormLabel,
  FormError,
  FormBreak,
  FormPaymentWrap,
  FormPaymentHeading,
  FormPaymentOption,
  FormPaymentInput,
  EmoneyWrap,
  CashOnWrap,
  CashOnImage,
  CashOnContent,
} from "components/checkout/checkoutForm/checkoutFormStyles";
import { schema } from "helpers/yupSchema";
import { checkoutFormData } from "redux/slices/checkoutFormSlice";
import { modalOpen } from "redux/slices/modalSlice";
import { checkFormSubmit } from "redux/slices/formSubmitSlice";
import type { InputDataType } from "data/types/checkoutInputType";
import { toast } from "react-toastify";
import { toastAction } from "helpers/toastify";

const CheckoutForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  //TODO: State => Get the cart items from state
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  //TODO: Maintain payment mode prefrence state
  const [paymentMode, setPaymentMode] = useState<boolean>(true);

  //TODO: React-Hook-Form custom hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //TODO: Function that collects all the form data and push the updated form data to the main state => It also opens the checkout modal and changes the state of the form (to check if the form is submitted or not)
  const submitForm = (data: InputDataType) => {
    if (cartItems.length === 0) {
      toast.error(`Your cart is empty!`, toastAction);
    } else {
      if (data) {
        dispatch(checkoutFormData(data));
        dispatch(checkFormSubmit(true));
        dispatch(modalOpen(true));
      } else {
        dispatch(checkFormSubmit(false));
      }
    }
  };

  //TODO: Handle => "Cash On Delivery" onClick
  const handleOnDelivery = () => {
    setPaymentMode(false);
  };

  //TODO: Handle => "E-Money" onClick
  const handleOnEmoney = () => {
    setPaymentMode(true);
  };

  //TODO: Handle => Extract payment mode prefrence and user details from localStorage
  useEffect(() => {
    const getPaymentMode = localStorage.getItem("paymentMode");
    setPaymentMode(JSON.parse(getPaymentMode));
  }, []);

  //TODO: Handle => Save payment mode prefrence and user details on checkout to localStorage
  useEffect(() => {
    localStorage.setItem("paymentMode", JSON.stringify(paymentMode));
  });

  return (
    <Form id="checkoutForm" onSubmit={handleSubmit(submitForm)}>
      <CheckoutHeading>checkout</CheckoutHeading>
      <FormSection>
        <FormSectionHeading>billing details</FormSectionHeading>
        <FormInputWrap>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="name">name</label>
                <FormError role="alert">
                  {errors.name && "Enter your name!"}
                </FormError>
              </FormLabel>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Alexei Ward"
                {...register("name")}
              />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="email">email address</label>
                <FormError role="alert">
                  {errors.email && "Wrong email format!"}
                </FormError>
              </FormLabel>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="alexei@mail.com"
                {...register("email")}
              />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="phone">phone number</label>
                <FormError role="alert">
                  {errors.phone && "Wrong phone format!"}
                </FormError>
              </FormLabel>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 202-555-0136"
                {...register("phone")}
              />
            </FormInput>
          </FormBreak>
        </FormInputWrap>
      </FormSection>
      <FormSection>
        <FormSectionHeading>shipping info</FormSectionHeading>
        <FormInputWrap>
          <FormInput>
            <FormLabel>
              <label htmlFor="address">address</label>
              <FormError role="alert">
                {errors.address && "Enter your address!"}
              </FormError>
            </FormLabel>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="1137 Williams Avenue"
              {...register("address")}
            />
          </FormInput>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="zipCode">zip code</label>
                <FormError role="alert">
                  {errors.zipCode && "Enter your Zip Code!"}
                </FormError>
              </FormLabel>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                placeholder="10001"
                {...register("zipCode")}
              />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="city">city</label>
                <FormError role="alert">
                  {errors.city && "Enter your city!"}
                </FormError>
              </FormLabel>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="new york"
                {...register("city")}
              />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="country">country</label>
                <FormError role="alert">
                  {errors.country && "Enter your country!"}
                </FormError>
              </FormLabel>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="united states"
                {...register("country")}
              />
            </FormInput>
          </FormBreak>
        </FormInputWrap>
        <FormInputWrap>
          <FormSectionHeading>payment details</FormSectionHeading>
          <FormPaymentWrap>
            <FormPaymentHeading>payment method</FormPaymentHeading>
            <FormPaymentOption>
              <FormPaymentInput>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="emoney"
                  value="e-Money"
                  onClick={handleOnEmoney}
                  checked={paymentMode === true ? true : false}
                />

                <label htmlFor="emoney">e-Money</label>
              </FormPaymentInput>
              <FormPaymentInput>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value="Cash on Delivery"
                  onClick={handleOnDelivery}
                  checked={paymentMode === false ? true : false}
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </FormPaymentInput>
            </FormPaymentOption>
          </FormPaymentWrap>
        </FormInputWrap>
        {paymentMode && (
          <EmoneyWrap>
            <FormInputWrap className="customInput">
              <FormBreak>
                <FormInput>
                  <FormLabel>
                    <label htmlFor="emoneyNumber">e-Money Number</label>
                    <FormError role="alert">
                      {errors.emoneyNumber && "Enter your e-Money Number!"}
                    </FormError>
                  </FormLabel>
                  <input
                    type="text"
                    name="emoneyNumber"
                    id="emoneyNumber"
                    placeholder="238521993"
                    {...register("emoneyNumber")}
                  />
                </FormInput>
              </FormBreak>
              <FormBreak>
                <FormInput>
                  <FormLabel>
                    <label htmlFor="emoneyPin">e-Money PIN</label>
                    <FormError role="alert">
                      {errors.emoneyPin && "Enter your e-Money Pin!"}
                    </FormError>
                  </FormLabel>
                  <input
                    type="text"
                    name="emoneyPin"
                    id="emoneyPin"
                    placeholder="6891"
                    {...register("emoneyPin")}
                  />
                </FormInput>
              </FormBreak>
            </FormInputWrap>
          </EmoneyWrap>
        )}
        {!paymentMode && (
          <CashOnWrap>
            <CashOnImage>
              <Image
                src="/images/shared/payondelivery.png"
                alt="pay on delivery"
                layout="fill"
              />
            </CashOnImage>
            <CashOnContent>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </CashOnContent>
          </CashOnWrap>
        )}
      </FormSection>
    </Form>
  );
};

export default CheckoutForm;
