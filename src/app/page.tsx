import {Categories, NewProducts, PopularProducts} from "@/features";
import {Banner, FeaturesBlock} from "@/widgets/home";

export default function Home() {
  return (
    <>
      {/*<Banner/>*/}
      <Categories/>
      <NewProducts/>
      <FeaturesBlock/>
      {/*<PopularProducts/>*/}
    </>
  );
}
