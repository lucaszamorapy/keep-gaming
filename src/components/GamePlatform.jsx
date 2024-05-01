import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

const GamePlatform = ({ game }) => {
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl  uppercase ">Plataformas</h1>
        <div className="flex gap-5 flex-wrap">
          {game.platforms.map((item, index) => (
            <p
              className="text-lg border-2 py-1 px-5 bg-green-700 border-green-500 rounded-full"
              key={index}
            >
              {item.platform.name}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <h1 className="text-5xl uppercase ">Metacritic Plataformas</h1>
        <div className="flex justify-center gap-5 flex-wrap lg:justify-start">
          {game.metacritic_platforms.map((item, index) => (
            <div
              className="flex border-2 rounded-xl border-gamingBlack100 p-3 flex-col gap-2"
              key={index}
            >
              <h3 className="text-2xl">Metascore: {item.metascore}</h3>
              <p className="text-lg border-2 py-1 text-center px-5 bg-red-700 border-red-500 rounded-full">
                {item.platform.name}
              </p>
              <Link to={item.url} target="_blank">
                <Button
                  styleCard={false}
                  buttonText={"Ver mais detalhes"}
                  style={
                    "text-white uppercase rounded-full py-2 px-5 bg-gamingBlack100 hover:bg-opacity-60 duration-300 ease-in-out "
                  }
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamePlatform;
