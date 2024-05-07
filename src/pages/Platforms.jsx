import AllDataAPI from "../components/AllDataAPI";
import Banner from "../components/banner/Banner";
import Head from "../helper/Head";

const Platforms = () => {
  return (
    <section className="animeLeft">
      <Head
        title={"Plataforms"}
        description={"Platforms do site Keep Gaming"}
      />
      <Banner />
      <AllDataAPI slug={"platforms"} />
    </section>
  );
};

export default Platforms;
