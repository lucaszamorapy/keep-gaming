import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import GameCard from "./GameCard";
import Loading from "../utils/loading/Loading";
import Button from "../utils/Button";

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const AllGames = () => {
  const [games, setGames] = useState([]);
  const { request, loading, setLoading } = useFetch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getGames = async () => {
      const url = `${gamesURL}games?${apiKey}&page=${page}`;
      const { json } = await request(url);
      if (json && json.results) {
        setGames((prevGames) => {
          // Filtra jogos únicos que não estão presentes na lista atual
          const uniqueGames = json.results.filter(
            (game) => !prevGames.find((prevGame) => prevGame.id === game.id)
          );
          return [...prevGames, ...uniqueGames];
        });
      }
    };

    getGames();
  }, [request, page]);

  const handleLoadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <section className="px-5 mt-20 lg:px-0">
      <div className="flex gap-5 items-center">
        <div className="container">
          {games.length === 0 ? (
            <Loading />
          ) : (
            <>
              <h1 className="text-7xl uppercase mt-10 mb-5">Todos os Jogos</h1>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
                {games.map((game, index) => (
                  <GameCard game={game} key={index} showLink={true} />
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
                    buttonText={"Carregar Mais Jogos"}
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

export default AllGames;
