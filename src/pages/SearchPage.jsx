import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Loading from "../utils/loading/Loading";

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [game, setGame] = useState([]);
  const query = searchParams.get("q");
  const { loading, request } = useFetch();

  useEffect(() => {
    const getSearchGames = async () => {
      const searchQueryURL = `${gamesURL}games?${apiKey}&search=${query}`;
      const { json } = await request(searchQueryURL);
      if (json && json.results) {
        setGame(json.results);
      }
    };
    console.log(game);
    getSearchGames();
  }, [query]);

  return (
    <section className="px-5 mt-20 lg:px-0">
      <div className="flex justify-center gap-5 items-center">
        <div className="container">
          {loading ? (
            <Loading />
          ) : (
            <>
              {game.map((item, index) => (
                <p key={index}>{item.name}</p>
              ))}
            </>
          )}
          {game.length === 0 && !loading && (
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
