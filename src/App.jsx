import WeatherCard from "./components/WeatherCard";
import { query } from "./data/weather.json";
import { pick } from "lodash-es";
function App() {
  const channel = query.results.channel;

  const title = [
    channel.location.city,
    channel.location.region,
    channel.location.country,
  ].join(", ");

  return (
    <div className="flex items-center justify-center h-screen bg-indigo-100">
      <WeatherCard
        title={title}
        condition={channel.item.condition}
        astronomy={channel.astronomy}
        wind={channel.wind}
        atmosphere={channel.atmosphere}
        temp={pick(channel.item.forecast[0], ["low", "high"])}
        units={channel.units}
      />
    </div>
  );
}

export default App;
