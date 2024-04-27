import React from "react";
import ImageSkeleton from "../../utils/imageSkeleton/imageSkeleton";
import { FaStar } from "react-icons/fa";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";

const GameCard = ({ game, showLink }) => {
  return (
    <div className="flex flex-col ">
      <ImageSkeleton src={game.background_image} alt={game.name} />
      <div className="flex flex-col px-3 pt-2 pb-5  bg-gamingBlack200">
        <div className="flex justify-between flex-wrap ">
          <div className="flex gap-2 items-center">
            {game.genres.map((genre, index) => (
              <p className="text-white text-lg border-b-2 border-gamingYellow300">
                {genre.name}
              </p>
            ))}
          </div>
          <div className="flex gap-2 justify-center items-center">
            <FaStar />
            <p>{game.rating}</p>
          </div>
        </div>
        <h2 className="text-2xl mt-2">{game.name}</h2>
        <div className="flex mt-2 gap-2">
          <p className="text-lg border-2 py-1 px-5 bg-purple-950 border-purple-800 rounded-full">
            {game.esrb_rating.name}
          </p>
        </div>
      </div>
      {showLink && (
        <Link to={`/game/${game.id}`}>
          <Button buttonText={"Ver detalhes"} style={"rounded-b-xl"} />
        </Link>
      )}
    </div>
  );
};

export default GameCard;
