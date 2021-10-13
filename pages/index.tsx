import { Main } from "styles/global/globalStyles";
import HeroSection from "components/home/heroSection/heroSection";
import LargeCard from "components/home/largeCard/largeCard";
import SingleCard from "components/home/singleCard/singleCard";
import DoubleCard from "components/home/doubleCard/doubleCard";
import { homeData } from "data/home/homeData";

const index = (): JSX.Element => {
  return (
    <Main>
      <HeroSection data={homeData} />
      <LargeCard data={homeData} />
      <SingleCard data={homeData} />
      <DoubleCard data={homeData} />
    </Main>
  );
};

export default index;
