import DetailsCard from "./DetailsCard";

const WeatherDetails = ({ details: { wind, astronomy, atmosphere }, units }) => {
  return (
    <div className="flex flex-col gap-2">
      <DetailsCard
        icon={<span className="material-symbols-rounded">air</span>}
        title="Wind"
        text={`${wind.speed} ${units.speed}`}
      />
      <DetailsCard
        icon={<span className="material-symbols-rounded">humidity_low</span>}
        title="Humidity"
        text={atmosphere.humidity}
      />
      <DetailsCard
        icon={<span className="material-symbols-rounded">compress</span>}
        title="Pressure"
        text={`${atmosphere.pressure} ${units.pressure}`}
      />
      <DetailsCard
        icon={<span className="material-symbols-rounded">wb_twilight</span>}
        title="Sunrise / Sunset"
        text={[astronomy.sunrise, astronomy.sunset].join(" / ")}
      />
    </div>
  );
};

export default WeatherDetails;
