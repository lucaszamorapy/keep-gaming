import React from "react";
import Banner from "../components/banner/Banner";
import AllDataAPI from "../components/AllDataAPI";
import Head from "../helper/Head";

const Developers = () => {
  return (
    <section className="animeLeft">
      <Head
        title={"Developers"}
        description={"Developers do site Keep Gaming"}
      />
      <Banner />
      <AllDataAPI slug={"developers"} />
    </section>
  );
};

export default Developers;
