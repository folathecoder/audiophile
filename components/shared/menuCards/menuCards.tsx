import {
  MenuContainer,
  MenuWrap,
} from "components/shared/menuCards/menuCardsStyles";
import MenuCard from "components/shared/menuCard/menuCard";

interface MenuCardsProps {
  data: {
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
  };
  trimHeight?: boolean;
}

const MenuCards = ({ data, trimHeight }: MenuCardsProps): JSX.Element => {
  //TODO: Destructure data object
  const { menu } = data;
  return (
    <MenuContainer trimHeight={trimHeight}>
      <MenuWrap>
        {menu.slice(1, 4).map((menuItem, index) => {
          return <MenuCard key={index} data={menuItem} />;
        })}
      </MenuWrap>
    </MenuContainer>
  );
};

export default MenuCards;
