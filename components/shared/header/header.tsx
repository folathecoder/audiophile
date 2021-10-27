import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/types/reduxTypes";
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
  CartNumber,
} from "components/shared/header/headerStyles";
import MenuCard from "components/shared/menuCard/menuCard";
import Overlay from "components/shared/overlay/overlay";
import scrollTop from "helpers/scrollTop";
import CartMenu from "components/shared/cart/cart";
import useWindow from "hooks/useWindow";
import { RootState } from "redux/store";
import { toggleCartMenu } from "redux/slices/cartMenuSlice";
import ActiveLink from "components/shared/activeLink/activeLink";
import CartCounter from "components/shared/cartCounter/cartCounter";

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
  setShowOverlay;
  showOverlay;
}

const Header = ({
  data,
  setShowOverlay,
  showOverlay,
}: HeaderProps): JSX.Element => {
  const dispatch = useAppDispatch();

  //TODO: Destructure the "data" object
  const { logo, menu, cart } = data;

  //TODO: Manage the dropdown menu toggle
  const [menuToggle, setMenuToggle] = useState(false);

  //TODO: Manage the cart menu toggle
  const cartToggle = useAppSelector((state: RootState) => state.cartMenu.value);

  //TODO: Custom hook that monitors window size
  const { size } = useWindow();

  //TODO: Event => Add click event to toggle the dropdown menu button
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
    dispatch(toggleCartMenu(false));
    scrollTop();
  };

  //TODO: Event => Remove overlay and close menu dropdown onClick
  const handleRemove = () => {
    setMenuToggle(false);
    dispatch(toggleCartMenu(false));
    scrollTop();
  };

  //TODO: Event => Remove overlay and close menu dropdown onClick without scrolling to top automatically
  const handleCustomRemove = () => {
    setMenuToggle(false);
    dispatch(toggleCartMenu(false));
  };

  //TODO: Event => Close menu dropdown onClick
  const handleMenuClose = () => {
    setMenuToggle(false);
  };

  //TODO: Event => Add click event to toggle the cart menu
  const handleCartToggle = () => {
    dispatch(toggleCartMenu(!cartToggle));
    setMenuToggle(false);
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const body = document.body;

    //TODO: Hide the main layout of the page when the mobile menu is clicked
    if (size <= 649) {
      if (menuToggle) {
        main.style.display = "none";
        footer.style.display = "none";
      } else {
        main.style.display = "block";
        footer.style.display = "block";
      }
    }
    //TODO: Hide overflow when cartToggle state is changed
    if (cartToggle) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      setShowOverlay(false);
    }
  });

  //TODO: Handle => Function that removes all menu dropdowns when "Escape" key is pressed
  const removeMenuOnEscape = (e) => {
    if (e.key === "Escape") {
      handleCustomRemove();
    }
  };

  //TODO: Event => Close all menu dropdowns when "Escape" key is pressed
  useEffect(() => {
    window.addEventListener("keydown", removeMenuOnEscape);

    return () => {
      window.removeEventListener("keydown", removeMenuOnEscape);
    };
  });

  return (
    <>
      <HeaderContainer menuToggle={menuToggle} cartToggle={cartToggle}>
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
                  return (
                    <MenuCard
                      key={index}
                      data={menuItem}
                      event={handleMenuClose}
                    />
                  );
                })}
              </MobileMenu>
            )}
          </MobileNav>
          <HeaderLogoWrap>
            <HeaderLogo>
              <Link href={logo.link}>
                <a>
                  <Image
                    src={logo.image}
                    alt={logo.imageAlt}
                    onClick={handleCustomRemove}
                  />
                </a>
              </Link>
            </HeaderLogo>
          </HeaderLogoWrap>
          <HeaderMenu>
            <MenuWrap>
              {menu.map((menuItem, index) => {
                return (
                  <MenuWrapItem key={index} onClick={handleCustomRemove}>
                    <ActiveLink href={menuItem.link}>
                      {menuItem.title}
                    </ActiveLink>
                  </MenuWrapItem>
                );
              })}
            </MenuWrap>
          </HeaderMenu>
          <CartWrap>
            <Cart>
              <Image
                src={cart.icon}
                alt=""
                aria-hidden="true"
                onClick={handleCartToggle}
              />
              <CartNumber>
                <CartCounter />
              </CartNumber>
            </Cart>
            {cartToggle && <CartMenu />}
          </CartWrap>
        </HeaderWrap>
      </HeaderContainer>
      {menuToggle && <Overlay event={handleRemove} menuOption />}
    </>
  );
};

export default Header;
