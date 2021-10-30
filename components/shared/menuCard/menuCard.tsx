import Link from "next/link";
import Image from "next/image";

import {
  CardContainer,
  CardImage,
  CardShadow,
  CardHeading,
  CardLinkWrap,
} from "components/shared/menuCard/menuCardStyles";

interface MenuCardProps {
  data: {
    title: string;
    link: string;
    active: boolean;
    cta: string;
    image: {
      src: any;
      alt: string;
    };
  };
  event?: () => void;
}

const MenuCard = ({ data, event }: MenuCardProps): JSX.Element => {
  return (
    <Link href={data.link} passHref>
      <CardContainer onClick={event}>
        <CardImage className="card-image">
          <Image src={data.image.src} alt={data.image.alt} />
        </CardImage>
        <CardShadow className="card-shadow">
          <Image
            src="/images/shared/shadow.png"
            alt=""
            role="presentation"
            layout="fill"
          />
        </CardShadow>
        <CardHeading>{data.title}</CardHeading>
        <CardLinkWrap>
          <Link href={data.link} passHref>
            <a>
              {data.cta}{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </Link>
        </CardLinkWrap>
      </CardContainer>
    </Link>
  );
};

export default MenuCard;
