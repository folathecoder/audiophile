import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";
import { useRouter } from "next/router";

const NavigatorContainer = styled.section`
  max-width: 100%;
  padding: 0rem 1rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem 2rem;
  }
`;
const NavigatorWrap = styled.div`
  min-height: 2.1875rem;
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  align-items: flex-end;

  @media ${QUERIES.tabletMini} {
    min-height: 3.25rem;
  }

  @media ${QUERIES.desktop} {
    min-height: 6rem;
  }
`;
const Navigate = styled.button`
  text-transform: capitalize;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: var(--font-weight-300);
  background-color: transparent;
  color: var(--color-pry-200);
  letter-spacing: 0.05rem;

  &:hover {
    transition: var(--transition);
    color: var(--color-pry-100);
  }
`;

const Navigator = (): JSX.Element => {
  const router = useRouter();

  //TODO: Handle => Navigate to previous page
  const handleNavigator = () => {
    router.back();
  };
  
  return (
    <NavigatorContainer>
      <NavigatorWrap>
        <Navigate onClick={handleNavigator}>go back</Navigate>
      </NavigatorWrap>
    </NavigatorContainer>
  );
};

export default Navigator;
