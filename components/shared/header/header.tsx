import {
  HeaderContainer,
  HeaderWrap,
} from "components/shared/header/headerStyles";

interface HeaderProps {
  data: {
    menu: object[];
    socials: object[];
  };
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <h1>Header</h1>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
