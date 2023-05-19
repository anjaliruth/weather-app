import SearchBar from "../SearchBar";
import WeatherBox from "../WeatherBox";
import { useState, useEffect } from "react";
export default function MainWeatherWindow() {
  //create a state variable for the city that users will input
  //Lifted state from the SearchBar component because the city is needed in the WeatherBox component

  const [todayData, setTodayData] = useState("");
  //forecast for tomorrow
  const [day1Data, setDay1Data] = useState("");
  //forecast for the day after tomorrow
  const [day2Data, setDay2Data] = useState("");
  //forecast for the day after the day after tomorrow
  const [day3Data, setDay3Data] = useState("");
  //separate state just for the city because the city is at the top of the API response, and not inthe nested Data onject
  const [location, setLocation] = useState("London");
  //do the API call here
  //call the API
  //API is called in the useEffect hook
  //city is a dependency of the useEffect hook
  //the useEffect hook will be called when the city changes
  //need to get the city from the search bar
  //the search bar will be a child component of the MainWeatherWindow
  //city here is a variable, not the state. I have passed the state into the handleSearchClick function in the SearchBar component, which now becomes a parameter when its called in the function handleSearchClick on line 21.
  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?&city=${location}&key=${process.env.API_KEY}`
      );
      
      const data = await response.json();
      setLocation(data.city_name);
      setTodayData(data.data[0]);
      setDay1Data(data.data[1]);
      setDay2Data(data.data[2]);
      setDay3Data(data.data[3]);
      console.log(data);
    }
    getWeather();
  }, [location]);

  // //all the actions i want to run while i am fetching data
  // function handleSearchClick(location) {
  //   // Call the getWeather function with the current city state value
  //   getWeather(location);
  // }
  function handleSearchClick(location) {
    setLocation(location);
  }
  // Create a new Date object from the datetime string
  let date = new Date(todayData.datetime);
  // Get the name of the day using the toLocaleDateString method
  let day = date.toLocaleDateString("default", { weekday: "long" });

  //the city will be a state variable (useState hook)
  console.log(todayData);

  function getWeatherEmoji(description) {
    switch (description) {
      case "Clear sky":
        return "☀️";
      case "Few clouds":
        return "🌤️";
      case "Scattered clouds":
        return "🌥️";
      case "Broken clouds":
        return "🌥️";
      case "Overcast clouds":
        return "☁️";
      case "Light rain":
        return "🌧️";
      case "Moderate rain":
        return "🌧️";
      case "Heavy rain":
        return "⛈️";
      case "Freezing rain":
        return "❄️🌧️";
      case "Light shower rain":
        return "🌧️";
      case "Shower rain":
        return "🌧️";
      case "Heavy shower rain":
        return "⛈️";
      case "Light snow":
        return "❄️";
      case "Snow":
        return "❄️";
      case "Heavy snow":
        return "❄️🌨️";
      case "Sleet":
        return "❄️🌧️";
      case "Light shower sleet":
        return "❄️🌧️";
      case "Shower sleet":
        return "❄️🌧️";
      case "Light rain and snow":
        return "❄️🌧️";
      case "Rain and snow":
        return "❄️🌧️";
      case "Light shower snow":
        return "❄️🌨️";
      case "Shower snow":
        return "❄️🌨️";
      case "Heavy shower snow":
        return "❄️🌨️";
      case "Mist":
        return "🌫️";
      case "Smoke":
        return "🌫️";
      case "Haze":
        return "🌫️";
      case "Sand/dust":
        return "🌫️";
      case "Fog":
        return "🌫️";
      case "Freezing fog":
        return "❄️🌫️";
      case "Patches of fog":
        return "🌫️";
      case "Patches of smoke":
        return "🌫️";
      case "Patches of haze":
        return "🌫️";
      case "Patches of sand/dust":
        return "🌫️";
      case "Drizzle":
        return "🌧️";
      case "Freezing drizzle":
        return "❄️🌧️";
      case "Light intensity drizzle":
        return "🌧️";
      case "Shower drizzle":
        return "🌧️";
      case "Heavy intensity drizzle":
        return "🌧️";
      default:
        return "❓";
    }
  }

  return (
    <div className="display">
      <SearchBar handleSearchClick={handleSearchClick} />
      <div className="today">
        <div className="todayData">
          <h1>{todayData && location}</h1>
          <h1>{todayData && day}</h1>

          <h1>{todayData && `${todayData.temp.toFixed(0)}ºC`}</h1>
          <h1>{todayData && todayData.weather.description}</h1>
          
        </div>
        <div className="weatherEmoji">
          <h1 className="emoji1">
            {todayData && getWeatherEmoji(todayData.weather.description)}
          </h1>
          
        
        </div>
      </div>
      <div className="forecastTogether">
        <WeatherBox dayxData={day1Data} getEmoji={getWeatherEmoji} />
        <WeatherBox dayxData={day2Data} getEmoji={getWeatherEmoji} />
        <WeatherBox dayxData={day3Data} getEmoji={getWeatherEmoji} />
      </div>
    </div>
  );
}
