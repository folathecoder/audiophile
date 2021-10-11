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
        --color-sec-100: hsl(21, 94%, 75%);
        --color-sec-200: hsl(0, 0%, 100%);
        --color-sec-300: hsl(0, 0%, 0%);
        --color-sec-400: hsl(0, 0%, 19%);
        --color-sec-500: hsl(0, 0%, 59%);

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
    li {
        list-style: none;
    }
    ///////////////////////////////////////////////////////
    //TODO: BASE STYLES
    body {
        max-width: 100%;
        font-family: var(--font-pry-100);
        font-weight: var(--font-weight-400);
        background-color: var(--color-pry-300);
        color: var(--color-pry-200);
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

    }

    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: var(--font-weight-400);
        letter-spacing: 0.080625rem;
    }
    
`;

export const Main = styled.main`
  min-height: 100vh;
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
