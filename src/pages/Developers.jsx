import React from "react";
import Banner from "../components/banner/Banner";
import AllDataAPI from "../components/AllDataAPI";

const Developers = () => {
  return (
    <section className="animeLeft">
      <Banner />
      <AllDataAPI slug={"developers"} />
    </section>
  );
};

export default Developers;
