import { useEffect } from "react";
import { useRouter } from "next/router";
import { Main } from "styles/global/globalStyles";
import MenuCards from "components/shared/menuCards/menuCards";
import { menuData } from "data/shared/menuData";
import CtaSection from "components/shared/ctaSection/ctaSection";
import { ctaData } from "data/shared/ctaData";

const Product = () => {
  const router = useRouter();

  //TODO: Redirect to homepage after 3 seconds of inactivity
  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <Main>
      <MenuCards data={menuData} trimHeight />
      <CtaSection data={ctaData} trimHeight />
    </Main>
  );
};

export default Product;
