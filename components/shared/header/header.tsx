import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HeaderContainer,
  HeaderWrap,
  MobileNav,
  MobileToggle,
  MobileMenu,
  HeaderLogoWrap,
  HeaderLogo,
  HeaderMenu,
  MenuWrap,
  MenuWrapItem,
  CartWrap,
  Cart,
} from "components/shared/header/headerStyles";
import MenuCard from "components/shared/menuCard/menuCard";
import Overlay from "components/shared/overlay/overlay";

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
      cta: string;
      image: {
        src: any;
        alt: string;
      };
    }[];
    cart: {
      icon: string;
      iconAlt: string;
    };
  };
}

const Header = ({ data }: HeaderProps): JSX.Element => {
  //TODO: Destructure the "data" object
  const { logo, menu, cart } = data;

  //TODO: Manage the dropdown menu toggle
  const [menuToggle, setMenuToggle] = useState(false);

  //TODO: Event => Add click event to toggle the dropdown menu button
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <HeaderContainer>
      <HeaderWrap>
        <MobileNav>
          <MobileToggle onClick={handleMenuToggle}>
            {menuToggle ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars" />
            )}
          </MobileToggle>
          {menuToggle && (
            <MobileMenu>
              {menu.slice(1, 4).map((menuItem, index) => {
                return <MenuCard key={index} data={menuItem} />;
              })}
            </MobileMenu>
          )}
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
            <Image src={cart.icon} alt={cart.iconAlt} />
          </Cart>
        </CartWrap>
      </HeaderWrap>
      <Overlay />
      {/* {menuToggle && <Overlay />} */}
    </HeaderContainer>
  );
};

export default Header;
