import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const cities = ["seoul", "tokyo", "new york", "hongkong"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7da855e131bffe46cfdf99679fd7bebd&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    console.log(data);
  };

  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} />
      </div>
    </div>
  );
}

export default App;
