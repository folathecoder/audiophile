import styled, { css } from "styled-components";
import { useAppDispatch } from "redux/types/reduxTypes";
import { toggleCartMenu } from "redux/slices/cartMenuSlice";

const OverlayContainer = styled.div`
  background-color: hsla(0, 0%, 0%, 0.616);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  transition: 0.5s ease-in-out;
  z-index: 50;

  @media screen and (min-width: 787px) {
    ${({ menuOption }) =>
      menuOption &&
      css`
        display: none;
      `}
  }

  ${({ maxOverlay }) =>
    maxOverlay &&
    css`
      z-index: 2000;
    `}
`;

interface OverlayProps {
  event?: () => void;
  menuOption?: boolean;
  maxOverlay?: boolean;
}

const Overlay = ({
  event,
  menuOption,
  maxOverlay,
}: OverlayProps): JSX.Element => {
  const dispatch = useAppDispatch();

  //TODO: Event => Close cart menu when overlay is clicked
  const handleCartClose = () => {
    dispatch(toggleCartMenu(false));
  };

  return (
    <OverlayContainer
      onClick={event || handleCartClose}
      menuOption={menuOption}
      maxOverlay={maxOverlay}
    />
  );
};

export default Overlay;
