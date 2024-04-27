import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Search from "../../utils/Search";
import GameCard from "../gameCard/GameCard";
import logo from "/logo/keep-gaming.png";

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const AllGames = () => {
  const [games, setGames] = useState([]);
  const { request, loading, setLoading } = useFetch();

  useEffect(() => {
    const getGames = async () => {
      const url = `${gamesURL}games?${apiKey}`;
      const { json } = await request(url);
      if (json && json.results) {
        setGames(json.results); // assuming json.results is the array of games
      }
    };
    getGames();
  }, [request]);
  console.log(games);

  return (
    <section className="px-5 mt-20 lg:px-0">
      <div className="container">
        <div className="flex gap-5 items-center">
          <img src={logo} className="w-[100px]" alt="" />
          <Search />
        </div>
        <h1 className="text-7xl mt-10 mb-5">Todos os Jogos</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
          {games.map((game, index) => (
            <GameCard game={game} key={index} showLink={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllGames;
