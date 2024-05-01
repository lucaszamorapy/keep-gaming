import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import StatsPie from "../components/StatsPie";
import GameDescription from "../components/GameDescription";
import Loading from "../utils/loading/Loading";
import GamePlatform from "../components/GamePlatform";
import GameStore from "../components/GameStore";

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
            <GameDescription game={game} />
            <GamePlatform game={game} />
            <div className="grid gap-10 mt-10 grid-cols-1 lg:grid-cols-2">
              <GameStore game={game} />
              <StatsPie game={game} width={300} height={250} />
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
