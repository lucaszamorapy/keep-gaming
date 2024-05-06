import React from "react";
import ImageSkeleton from "../../utils/imageSkeleton/imageSkeleton";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";

const GlobalCard = ({ data }) => {
  return (
    <div className="flex flex-col ">
      <ImageSkeleton src={data.image_background} alt={data.name} />
      <div
        className={`flex flex-col px-3 pt-2 pb-5 bg-gamingBlack200 lg:h-[215px] ${
          data.domain ? "rounded-t-lg" : "rounded-b-lg "
        }`}
      >
        <h2 className="text-2xl mt-2">{data.name}</h2>
        <div className="flex flex-wrap gap-2 items-center">
          {data.games.slice(0, 3).map((game, index) => (
            <Link key={index} to={`/game/${game.id}`}>
              <div
                key={index}
                className="text-white bg-yellow-600 rounded-full px-2 text-lg border-2 border-gamingYellow300"
              >
                {game.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {data.domain ? (
        <Link target="_blank" to={`//${data.domain}`}>
          <Button
            buttonText={"Ver loja"}
            styleCard={false}
            style={
              "text-white uppercase rounded-b-lg w-full py-2 px-5 bg-gamingBlack100 hover:bg-opacity-60 duration-300 ease-in-out "
            }
          />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default GlobalCard;
