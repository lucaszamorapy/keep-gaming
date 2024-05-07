import Banner from "../components/banner/Banner";
import AllDataAPI from "../components/AllDataAPI";
import Head from "../helper/Head";

const Stores = () => {
  return (
    <section className="animeLeft">
      <Head title={"Stores"} description={"Stores do site Keep Gaming"} />
      <Banner />
      <AllDataAPI slug={"stores"} />
    </section>
  );
};

export default Stores;
