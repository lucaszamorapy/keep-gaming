import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

const GameStore = ({ game }) => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-5xl uppercase">Lojas</h1>
      <div className="flex flex-col gap-5">
        {game.stores.map((item, index) => (
          <div
            className="border-2 flex rounded-xl border-gamingBlack100 justify-between py-3 items-center px-5"
            key={index}
          >
            <p className="text-xl">{item.store.name}</p>
            <Link target="_blank" to={`//${item.store.domain}`}>
              <Button
                buttonText={"Ver loja"}
                styleCard={false}
                style={
                  "text-white uppercase rounded-full py-2 px-5 bg-gamingBlack100 hover:bg-opacity-60 duration-300 ease-in-out "
                }
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameStore;
