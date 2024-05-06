import Banner from "../components/banner/Banner";
import AllDataAPI from "../components/AllDataAPI";

const Stores = () => {
  return (
    <section className="animeLeft">
      <Banner />
      <AllDataAPI slug={"stores"} />
    </section>
  );
};

export default Stores;
