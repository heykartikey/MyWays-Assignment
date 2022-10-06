const WeatherCondition = ({ condition: { temp, text }, temp_unit }) => {
  return (
    <div className="flex flex-col">
      <span className="text-6xl font-bold">
        {temp}°<span className="text-xl font-semibold">{temp_unit}</span>
      </span>
      <span className="text-2xl font-thin">{text}</span>
    </div>
  );
};

export default WeatherCondition;
