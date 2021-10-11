import { Main } from "styles/global/globalStyles";
import HeroSection from "components/home/heroSection/heroSection";
import { homeData } from "data/home/homeData";

const index = (): JSX.Element => {
  return (
    <Main>
      <HeroSection data={homeData} />
    </Main>
  );
};

export default index;
