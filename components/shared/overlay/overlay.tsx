import styled from "styled-components";

const OverlayContainer = styled.div`
  background-color: hsla(0, 0%, 0%, 0.616);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 500;
  transition: 0.5s ease-in-out;
  z-index: 500;
`;

interface OverlayProps {
  event: () => void;
}

const Overlay = ({ event }: OverlayProps): JSX.Element => {
  return <OverlayContainer onClick={event} />;
};

export default Overlay;
