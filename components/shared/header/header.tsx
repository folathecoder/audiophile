import Link from "next/link";
import Image from "next/image";
import {
  HeaderContainer,
  HeaderWrap,
  MobileNav,
  MobileToggle,
  HeaderLogoWrap,
  HeaderLogo,
  HeaderMenu,
  MenuWrap,
  MenuWrapItem,
  CartWrap,
  Cart,
} from "components/shared/header/headerStyles";

interface HeaderProps {
  data: {
    logo: {
      image: string;
      imageAlt: string;
      link: string;
    };
    menu: {
      title: string;
      link: string;
      active: boolean;
    }[];
    footer: {
      information: string | number;
      copyright: string | number;
    };
    cart: {
      icon: string;
    };
    socials: {
      icon: string;
      label: string;
      link: string;
    }[];
  };
}

const Header = ({ data }: HeaderProps): JSX.Element => {
  const { logo, menu, cart } = data;
  return (
    <HeaderContainer>
      <HeaderWrap>
        <MobileNav>
          <MobileToggle>
            <i className="fas fa-bars" />
          </MobileToggle>
        </MobileNav>

        <HeaderLogoWrap>
          <HeaderLogo>
            <Link href={logo.link}>
              <a>
                <Image src={logo.image} alt={logo.imageAlt} />
              </a>
            </Link>
          </HeaderLogo>
        </HeaderLogoWrap>
        <HeaderMenu>
          <MenuWrap>
            {menu.map((menuItem, index) => {
              return (
                <MenuWrapItem key={index}>
                  <Link href={menuItem.link}>{menuItem.title}</Link>
                </MenuWrapItem>
              );
            })}
          </MenuWrap>
        </HeaderMenu>
        <CartWrap>
          <Cart>
            <Image src={cart.icon} alt={logo.imageAlt} />
          </Cart>
        </CartWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
