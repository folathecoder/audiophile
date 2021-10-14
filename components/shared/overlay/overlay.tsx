import styled from "styled-components";

const OverlayContainer = styled.div`
  /* background-color: hsla(0, 0%, 0%, 0.616); */
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 500;
  transition: 0.5s ease-in-out;
  z-index: 1;
  display: none;
`;

const Overlay = (): JSX.Element => {
  return <OverlayContainer />;
};

export default Overlay;
