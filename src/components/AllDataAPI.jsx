import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../utils/loading/Loading";
import Button from "../utils/Button";
import GameCard from "./cards/GameCard";
import GlobalCard from "./cards/GlobalCard";

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const AllDataAPI = ({ slug }) => {
  const [data, setData] = useState([]);
  const { request, loading, setLoading } = useFetch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getDataAPI = async () => {
      const url = `${gamesURL}${slug}?${apiKey}&page_size=20&page=${page}`;
      const { json } = await request(url);
      if (json && json.results) {
        setData((prevDatas) => {
          const uniqueData = json.results.filter(
            (data) => !prevDatas.find((prevData) => prevData.id === data.id)
          );
          return [...prevDatas, ...uniqueData];
        });
      }
      console.log(data);
    };

    getDataAPI();
  }, [request, page]);

  const handleLoadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <section className="px-5 mt-20 lg:px-0">
      <div className="flex gap-5 items-center">
        <div className="container">
          {data.length === 0 ? (
            <Loading />
          ) : (
            <>
              <h1 className="text-5xl uppercase mt-10 mb-5 lg:text-7xl">
                {slug}
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
                {data.map((item, index) =>
                  slug === "games" ? (
                    <GameCard key={index} data={item} showLink={true} />
                  ) : (
                    <GlobalCard key={index} data={item} />
                  )
                )}
              </div>
              <div className="flex justify-center mt-8">
                {loading ? (
                  <Loading />
                ) : (
                  <Button
                    onClick={handleLoadMore}
                    styleCard={false}
                    style={
                      "text-white uppercase rounded-lg tracking-widest py-2 px-5 bg-gamingBlack100 hover:bg-opacity-60 duration-300 ease-in-out "
                    }
                    buttonText={"Carregar Mais"}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllDataAPI;
