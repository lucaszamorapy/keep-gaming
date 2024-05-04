import AllDataAPI from "../components/AllDataAPI";
import Banner from "../components/banner/Banner";

const Platforms = () => {
  return (
    <section className="animeLeft">
      <Banner />
      <AllDataAPI slug={"platforms"} />
    </section>
  );
};

export default Platforms;
