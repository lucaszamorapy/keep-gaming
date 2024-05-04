import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../utils/loading/Loading";
import Button from "../../utils/Button";
import DeveloperCard from "../cards/DeveloperCard";
const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const AllDevelopers = () => {
  const [developers, setDevelopers] = useState([]);
  const { request, loading, setLoading } = useFetch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getDevelopers = async () => {
      const url = `${gamesURL}developers?${apiKey}&page_size=20&page=${page}`;
      const { json } = await request(url);
      if (json && json.results) {
        setDevelopers((prevDevelopers) => {
          const uniqueDevelopers = json.results.filter(
            (developer) =>
              !prevDevelopers.find(
                (prevDeveloper) => prevDeveloper.id === developer.id
              )
          );
          return [...prevDevelopers, ...uniqueDevelopers];
        });
      }
    };

    getDevelopers();
  }, [request, page]);

  const handleLoadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <section className="px-5 mt-20 lg:px-0">
      <div className="flex gap-5 items-center">
        <div className="container">
          {developers.length === 0 ? (
            <Loading />
          ) : (
            <>
              <h1 className="text-5xl uppercase mt-10 mb-5 lg:text-7xl">
                Maiores Desenvolvedores
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
                {developers.map((developer, index) => (
                  <DeveloperCard key={index} data={developer} showLink={true} />
                ))}
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
                    buttonText={"Carregar Mais Desenvolvedores"}
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

export default AllDevelopers;
