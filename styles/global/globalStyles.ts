import styled, { createGlobalStyle, css } from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const GlobalStyles = createGlobalStyle`
    ///////////////////////////////////////////////////////
    // TODO: ROOT VALUES
    :root {
        // COLORS
        --color-pry-100: hsl(22, 65%, 57%);
        --color-pry-200: hsl(0, 0%, 6%);
        --color-pry-300: hsl(0, 0%, 95%);
        --color-pry-400: hsl(0, 0%, 98%);
        --color-pry-500: hsl(0, 0%, 89%);
        --color-pry-600:  hsl(0, 0%, 81%);
        --color-sec-100: hsl(21, 94%, 75%);
        --color-sec-200: hsl(0, 0%, 100%);
        --color-sec-300: hsl(0, 0%, 0%);
        --color-sec-400: hsl(0, 0%, 10%);
        --color-sec-500: hsl(0, 0%, 95%);
        --color-sec-600: hsl(0, 0%, 90%);
        --color-sec-700: hsl(0, 0%, 48%);

        // FONTS
        --font-pry-100: 'Manrope', sans-serif;
        --font-weight-100: 200;
        --font-weight-200: 400; 
        --font-weight-300: 500; 
        --font-weight-400: 700; 

        // WIDTH
        --max-container: 69.375rem;
        --center-container: 0 auto;

        //BORDER
        --border-radius: 0.5rem;

        //ANIMATION 
        --transition: all 0.5s;
    }
    ///////////////////////////////////////////////////////
    //TODO: DEFAULT STYLE RESETS

    html {
        scrollbar-width: none;
    }
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
    li {
        list-style: none;
    }

    //! Remove all animations and transitions for people that prefer not to see them
    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

    ::-webkit-scrollbar {
        display: none !important;
    }
    ///////////////////////////////////////////////////////
    //TODO: BASE STYLES
    body {
        font-family: var(--font-pry-100);
        font-weight: var(--font-weight-400);
        background-color: var(--color-sec-200);
        color: var(--color-pry-200);
        position: relative;
        --ms-overflow-style: none
    }
    ///////////////////////////////////////////////////////
    //TODO: TYPOGRAPHY

    a {
        text-decoration: none;
        color: var(--color-pry-300);
        font-size: 0.8125rem;
        line-height: 1.5625rem;
        letter-spacing: 0.1rem;
        display: flex;
        align-items: center;
        transition: var(--transition);

        &:hover {
            transition: var(--transition);
            color: var(--color-pry-100);
        }

        &:active {
            transition: var(--transition);
            color: var(--color-pry-100);
        }
    }

    p {
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        font-weight: var(--font-weight-100);
        letter-spacing: 0.05rem;

    }

    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: var(--font-weight-400);
        letter-spacing: 0.080625rem;

        @media ${QUERIES.tabletMini} {
            font-size: 3.5rem;
            line-height: 3.625rem;
        }

        @media ${QUERIES.tablet} {
            letter-spacing: 0.125rem;
        }
    }

    h2 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        letter-spacing: 0.1rem;

        @media ${QUERIES.mobile} {
            font-size: 3.5rem;
            line-height: 3.625rem;
        }
    }

    
    h3 {
        font-size: 0.9375rem;
        line-height: 1.2rem;
        letter-spacing: 0.1rem;

        @media ${QUERIES.tablet} {
            font-size: 1.125rem;
            line-height: 1.5rem;
        }
    }
    
`;

export const Main = styled.main`
  min-height: 100vh;

  ${({ gray }) =>
    gray &&
    css`
      background-color: var(--color-pry-500);
      margin-bottom: -2rem;
    `}
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
