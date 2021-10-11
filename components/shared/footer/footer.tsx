import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FooterContainer,
  FooterWrap,
  FooterDesignWrap,
  FooterDesign,
  FooterContentOne,
  FooterLogoWrap,
  FooterLogo,
  FooterMenu,
  MenuWrap,
  MenuWrapItem,
  FooterContentTwo,
  FooterInfoWrap,
  FooterInfo,
  FooterSocialWrap,
  FooterSocial,
  FooterSocialItem,
  SocialLink,
  Social,
  FooterContentThree,
  FooterCopyrightWrap,
  FooterCopyright,
  FooterSocialMobile,
} from "components/shared/footer/footerStyles";

interface FooterProps {
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
    socials: {
      icon: string;
      label: string;
      link: string;
    }[];
  };
}

const Footer = ({ data }: FooterProps): JSX.Element => {
  //TODO: Destructure data object
  const { logo, menu, footer, socials } = data;

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterDesignWrap>
          <FooterDesign />
        </FooterDesignWrap>
        <FooterContentOne>
          <FooterLogoWrap>
            <FooterLogo>
              <Link href={logo.link}>
                <a>
                  <Image src={logo.image} alt={logo.imageAlt} />
                </a>
              </Link>
            </FooterLogo>
          </FooterLogoWrap>
          <FooterMenu>
            <MenuWrap>
              {menu.map((menuItem, index) => {
                return (
                  <MenuWrapItem key={index}>
                    <Link href={menuItem.link}>{menuItem.title}</Link>
                  </MenuWrapItem>
                );
              })}
            </MenuWrap>
          </FooterMenu>
        </FooterContentOne>
        <FooterContentTwo>
          <FooterInfoWrap>
            <FooterInfo>{footer.information}</FooterInfo>
          </FooterInfoWrap>
          <FooterSocialWrap>
            <FooterSocial>
              {socials.map((social, index) => {
                return (
                  <FooterSocialItem key={index}>
                    <SocialLink href={social.link} aria-label={social.label}>
                      <Social className={social.icon} />
                    </SocialLink>
                  </FooterSocialItem>
                );
              })}
            </FooterSocial>
          </FooterSocialWrap>
        </FooterContentTwo>
        <FooterContentThree>
          <FooterCopyrightWrap>
            <FooterCopyright>{footer.copyright}</FooterCopyright>
          </FooterCopyrightWrap>
          <FooterSocialMobile>
            {socials.map((social, index) => {
              return (
                <FooterSocialItem key={index}>
                  <SocialLink href={social.link} aria-label={social.label}>
                    <Social className={social.icon} />
                  </SocialLink>
                </FooterSocialItem>
              );
            })}
          </FooterSocialMobile>
        </FooterContentThree>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
