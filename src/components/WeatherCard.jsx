import { useState } from "react";
import TempDetails from "./TempDetails";
import WeatherCondition from "./WeatherCondition";
import WeatherDetails from "./WeatherDetails";

const WeatherCard = ({
  title,
  condition,
  astronomy,
  wind,
  atmosphere,
  temp,
  units,
}) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const showDetails = () => setDetailsVisible(true);
  const hideDetails = () => setDetailsVisible(false);

  return (
    <div className="flex flex-col p-4 rounded-lg bg-white drop-shadow-lg m-4">
      <h1 className="text-2xl text-center sm:text-left">
        Weather Today in <span className="font-semibold">{title}</span>
      </h1>
      <div className="py-8 flex gap-1 flex-col sm:justify-between sm:flex-row items-center">
        <WeatherCondition condition={condition} temp_unit={units.temperature} />
        <TempDetails temp={temp} />
      </div>
      <div className="flex flex-col">
        <button
          className="bg-indigo-500 rounded px-2 py-1 text-sm text-white flex items-center drop-shadow-md self-center sm:self-start hover:bg-indigo-400 transition"
          onClick={detailsVisible ? hideDetails : showDetails}
        >
          Show {detailsVisible ? "Less" : "More"}
          <span className="material-symbols-rounded pl-1">
            {detailsVisible ? "expand_less" : "expand_more"}
          </span>
        </button>
        {detailsVisible && (
          <div className="mt-4 details">
            <WeatherDetails
              details={{
                wind,
                atmosphere,
                astronomy,
              }}
              units={units}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
