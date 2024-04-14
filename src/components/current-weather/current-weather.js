import "./current-weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>

        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
     
      </div>
      <div className="bottom">
        <p className="temparature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
            <div className="parameter-row">
                <spam className="paremeter-label ">Details</spam>
            </div>
            <div className="parameter-row">
                <spam className="paremeter-label">Feels like</spam>
                <spam className="paremeter-value">{Math.round(data.main.feels_like)}°C</spam>
            </div>
            <div className="parameter-row">
                <spam className="paremeter-label">wind</spam>
                <spam className="paremeter-value">{data.wind.speed} m/s</spam>
            </div>
            <div className="parameter-row">
                <spam className="paremeter-label">Humidity</spam>
                <spam className="paremeter-value">{data.main.humidity} %</spam>
            </div>
            <div className="parameter-row">
                <spam className="paremeter-label">Pressure</spam>
                <spam className="paremeter-value">{data.main.pressure} hpa</spam>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
