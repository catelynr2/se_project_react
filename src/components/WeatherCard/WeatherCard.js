import "./WeatherCard.css";
import { WeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = WeatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp} °{currentTemperatureUnit}
      </div>
      <img src={imageSrcUrl} alt="Today's Weather" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
