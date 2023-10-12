import "./WeatherCard.css";
import { WeatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = WeatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} °F</div>
      <img src={imageSrcUrl} alt="Today's Weather" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
