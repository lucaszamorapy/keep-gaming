import Banner from "../components/banner/Banner";
import AllDataAPI from "../components/AllDataAPI";
import Head from "../helper/Head";

const Home = () => {
  return (
    <section className="animeLeft">
      <Head title={"Home"} description={"Home do site Keep Gaming"} />
      <Banner />
      <AllDataAPI slug={"games"} />
    </section>
  );
};

export default Home;
