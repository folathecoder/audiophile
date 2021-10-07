import styled, { createGlobalStyle, css } from "styled-components";
import { QUERIES } from "helpers/mediaQueries";
import bgImage from "../assets/images/shared/desktop/bg-pattern-leaf.svg";

export const GlobalStyles = createGlobalStyle`
    ///////////////////////////////////////////////////////
    // TODO: ROOT VALUES
    :root {
        // COLORS
        --color-pry-100: hsl(11, 73%, 66%);
        --color-pry-200: hsl(270, 3%, 11%);
        --color-pry-300: hsl(0, 0%, 100%);
        --color-sec-100: hsl(11, 100%, 80%);
        --color-sec-200: hsl(264, 5%, 20%);
        --color-sec-300: hsl(210, 17%, 95%);
        // FONTS
        --font-pry-100: 'Jost', sans-serif;
        --font-weight-100: 400;
        --font-weight-200: 500; 
        // WIDTH
        --max-container: 69.4375rem;
        --center-container: 0 auto;
        //BORDER
        --border-radius: 0.5rem;
        //ANIMATION 
        --transition: 0.25s ease-in-out;
    }
    ///////////////////////////////////////////////////////
    //TODO: DEFAULT STYLE RESETS
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    ///////////////////////////////////////////////////////
    //TODO: BASE STYLES
    body {
        max-width: 100%;
        min-height: 100vh;
        font-family: var(--font-pry-100);
        font-weight: var(--font-weight-100);
        background-color: var(--color-pry-300);
        color: var(--color-pry-200);
        letter-spacing: 0.1rem;
    }
    ///////////////////////////////////////////////////////
    //TODO: TYPOGRAPHY
    a {
        color: var(--color-pry-200);
        font-weight: var(--font-weight-100);
        font-size: 0.9rem;
        line-height: 1.625rem;
        &:hover {
            transition: var(--transition);
            color: var(--color-sec-200);
            border-bottom: 0.1rem solid var(--color-sec-200);
        }
    }
    
    p {
        font-size: 0.9rem;
        line-height: 1.625rem;
        color: var(--color-pry-200);
        font-weight: var(--font-weight-100);
    }
    h1, h2 {
        font-size: 2rem;
        line-height: 2.25rem;
        @media ${QUERIES.tabletMini} {
            font-size: 3rem;
            line-height: 3rem;
        }
    }
    h2 {
        @media ${QUERIES.tabletMini} {
            font-size: 2.5rem;
            line-height: 2.5rem;
        }
    }
    h3 {
        font-size: 1.25rem;
        line-height: 1.625rem;
        font-weight: var(--font-weight-100);
    }
`;

export const Main = styled.main`
  @media ${QUERIES.tablet} {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: 0rem 20rem;
    ${({ adjustBg }) =>
      adjustBg &&
      css`
        background-position: 0rem 8rem;
      `}
  }
  @media ${QUERIES.megaDesktop} {
    background-image: none;
  }
`;

export const HiddenHeader = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;
