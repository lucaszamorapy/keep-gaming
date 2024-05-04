import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Loading from "../../utils/loading/Loading";

const GameDescription = ({ data }) => {
  if (
    !data ||
    !data.name ||
    !data.background_image ||
    !data.genres ||
    !data.esrb_rating ||
    !data.developers ||
    !data.description
  ) {
    return <Loading />; // ou qualquer outro componente de carregamento ou mensagem de erro
  }
  return (
    <section>
      <div className="flex items-center">
        <h1 className="text-7xl uppercase border-b-2 border-gamingYellow300 mb-10">
          {data.name}
        </h1>
      </div>
      <img src={data.background_image} className="rounded-xl w-full" alt="" />
      <div className="flex flex-col mt-10 gap-5">
        <h1 className="text-5xl uppercase">Descrição do Jogo</h1>
        <div className="flex gap-5 items-center flex-wrap lg:gap-10">
          <div className="flex gap-5">
            {data.genres.map((genre, index) => (
              <p
                key={index}
                className="text-white text-lg border-b-2 border-gamingYellow300"
              >
                {genre.name}
              </p>
            ))}
          </div>
          <p className="text-lg border-2 py-1 px-5 bg-purple-950 border-purple-800 rounded-full">
            {data.esrb_rating.name}
          </p>
          {data.developers.map((item, index) => (
            <Link to={`/developers/${item.id}`} key={index}>
              <p className="text-lg border-2 py-1 px-5 bg-orange-800 border-orange-600 rounded-full">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        {parse(data.description)}
      </div>
    </section>
  );
};

export default GameDescription;
