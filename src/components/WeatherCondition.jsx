const WeatherCondition = ({ condition: { temp, text } }) => {
  return (
    <div className="flex flex-col">
      <span className="text-6xl font-bold">{temp}°</span>
      <span className="text-2xl font-thin">{text}</span>
    </div>
  );
};

export default WeatherCondition;
