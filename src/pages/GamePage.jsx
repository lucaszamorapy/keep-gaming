import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import StatsPie from "../components/StatsPie";
import GameDescription from "../components/games/GameDescription";
import Loading from "../utils/loading/Loading";
import GamePlatform from "../components/games/GamePlatform";
import GameStore from "../components/games/GameStore";
import Head from "../helper/Head";

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const GamePage = () => {
  const { id } = useParams();
  const { request } = useFetch();
  const [game, setGame] = useState();

  useEffect(() => {
    const getGame = async (url) => {
      const { json } = await request(url);
      if (json) {
        setGame(json);
      }
      console.log(game);
    };

    const gameDetailsURL = `${gamesURL}games/${id}?${apiKey}`;
    getGame(gameDetailsURL);
  }, [id]);

  return (
    <section className="mt-[120px] px-5 lg:px-0">
      <div className="container animeLeft ">
        {game ? (
          <>
            <Head
              title={`${game.name}`}
              description={"Home do site Keep Gaming"}
            />
            <GameDescription data={game} />
            <GamePlatform data={game} />
            <div className="grid gap-10 mt-10 grid-cols-1 lg:grid-cols-2">
              <GameStore data={game} />
              <StatsPie stats={game} width={350} height={250} />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default GamePage;
