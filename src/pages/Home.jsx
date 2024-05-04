import Banner from "../components/banner/Banner";
import AllDataAPI from "../components/AllDataAPI";

const Home = () => {
  return (
    <section className="animeLeft">
      <Banner />
      <AllDataAPI slug={"games"} />
    </section>
  );
};

export default Home;
