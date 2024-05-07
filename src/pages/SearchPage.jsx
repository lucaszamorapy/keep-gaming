import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Loading from "../utils/loading/Loading";
import GameCard from "../components/cards/GameCard";
import Button from "../utils/Button";

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const query = searchParams.get("q");
  const { loading, request } = useFetch();

  useEffect(() => {
    const getSearchGames = async () => {
      const searchQueryURL = `${gamesURL}games?${apiKey}&search=${query}&page_size=20`;
      const { json } = await request(searchQueryURL);
      if (json && json.results) {
        setData(json.results);
      }
    };
    getSearchGames();
  }, [query]);

  return (
    <section className="px-5 mt-32 animeLeft lg:px-0">
      <div className="flex justify-center gap-5 items-center">
        <div className="container">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <>
              <h1 className="text-5xl uppercase mb-5 lg:text-7xl">
                Exibindo resultados de {query}
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
                {data.map((item, index) => (
                  <GameCard key={index} data={item} showLink={true} />
                ))}
              </div>
            </>
          )}
          {data.length === 0 && !loading && (
            <p className="text-4xl text-center mt-20">
              Nenhum resultado encontrado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
