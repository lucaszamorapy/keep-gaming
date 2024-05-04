import React from "react";
import ImageSkeleton from "../../utils/imageSkeleton/imageSkeleton";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";

const DeveloperCard = ({ data, showLink }) => {
  return (
    <div className="flex flex-col ">
      <ImageSkeleton src={data.image_background} alt={data.name} />
      <div className="flex flex-col px-3 pt-2 pb-5 bg-gamingBlack200 lg:h-[215px]">
        <h2 className="text-2xl mt-2">{data.name}</h2>
        <div className="flex flex-wrap gap-2 items-center">
          {data.games.slice(0, 3).map((game, index) => (
            <div
              key={index}
              className="text-white bg-yellow-600 rounded-full px-2 text-lg border-2 border-gamingYellow300"
            >
              {game.name}
            </div>
          ))}
        </div>
      </div>
      {showLink && (
        <Link to={`/developer/${data.id}`}>
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

export default DeveloperCard;
