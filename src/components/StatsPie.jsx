import React from "react";
import { VictoryPie } from "victory";

const StatsPie = ({ stats, width, height }) => {
  // Verifica se game e game.ratings são definidos
  const data =
    stats && stats.ratings
      ? stats.ratings.map((item) => ({
          x: item.title.toUpperCase(),
          y: item.percent,
        }))
      : [];

  const sliceColors = ["#fdc401", "#C89B00", "#9D7A00", "#7B6001"];

  return (
    <>
      {stats && (
        <section className="flex flex-col gap-5 ">
          <h1 className="text-5xl uppercase">Estatísticas</h1>
          <div className="border-2 rounded-xl border-gamingBlack100">
            <VictoryPie
              data={data}
              width={width}
              height={height}
              innerRadius={50}
              colorScale={sliceColors}
              style={{
                data: {
                  fillOpacity: 0.9,
                  strokeWidth: 1,
                },
                labels: {
                  fontSize: 6,
                  fill: "#fff",
                },
              }}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default StatsPie;
