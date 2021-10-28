import React from "react";
import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";
import scrollTop from "helpers/scrollTop";

const Scroll = styled.button`
  border: none;
  height: 3rem;
  width: 3rem;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0rem 1rem 1rem 0rem;
  border-radius: 100%;
  background-color: var(--color-pry-100);
  display: grid;
  place-items: center;
  transition: var(--transition);

  @media ${QUERIES.tablet} {
    margin: 0rem 2rem 2rem 0rem;
  }

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-100);
    transform: translateY(-0.3rem);
  }

  i {
    font-size: 2rem;
    color: var(--color-sec-200);
  }
`;

//TODO: Event => Jump to the top of the page when clicked
const ScrollToTop = (): JSX.Element => {
  const handleScroll = () => {
    scrollTop();
  };

  return (
    <Scroll onClick={handleScroll} aria-label="jump to top">
      <i className="fas fa-angle-up"></i>
    </Scroll>
  );
};

export default ScrollToTop;
