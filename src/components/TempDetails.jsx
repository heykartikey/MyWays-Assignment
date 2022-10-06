const TempDetails = ({ temp: { low, high } }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="material-symbols-rounded">device_thermostat</span>
      <span className="font-semibold">(°F)</span>
      <div className="flex sm:flex-col sm:gap-0 gap-1">
        <span>Low</span>
        <span className="text-center font-semibold">{low}°</span>
      </div>
      <div className="flex sm:flex-col sm:gap-0 gap-1">
        <span>High</span>
        <span className="text-center font-semibold">{high}°</span>
      </div>
    </div>
  );
};

export default TempDetails;
