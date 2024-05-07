import React from "react";
import ImageSkeleton from "../../utils/imageSkeleton/imageSkeleton";
import { FaStar } from "react-icons/fa";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";

const GameCard = ({ data, showLink }) => {
  return (
    <div className="flex flex-col ">
      <ImageSkeleton src={data.background_image} alt={data.name} />
      <div className="flex flex-col px-3 pt-2 pb-5 bg-gamingBlack200 lg:h-[185px]">
        <div className="flex justify-between flex-wrap ">
          <div className="flex gap-2 items-center">
            {data.genres.map((genre, index) => (
              <p
                key={index}
                className="text-white text-lg border-b-2 border-gamingYellow300"
              >
                {genre.name}
              </p>
            ))}
          </div>
          <div className="flex gap-2 justify-center items-center">
            <FaStar />
            <p>{data.rating}</p>
          </div>
        </div>
        <h2 className="text-2xl mt-2">{data.name}</h2>
        <div className="flex mt-2 gap-2">
          {data.esrb_rating && (
            <p className="text-lg border-2 py-1 px-5 bg-purple-950 border-purple-800 rounded-full">
              {data.esrb_rating.name}
            </p>
          )}
        </div>
      </div>
      {showLink && (
        <Link to={`/game/${data.id}`}>
          <Button
            buttonText={"Ver detalhes"}
            styleCard={true}
            style={"rounded-b-xl"}
          />
        </Link>
      )}
    </div>
  );
};

export default GameCard;
