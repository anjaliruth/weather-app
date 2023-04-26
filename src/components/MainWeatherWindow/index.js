import SearchBar from "../SearchBar"
import WeatherBox from "../WeatherBox"
import {useState } from "react"
export default function MainWeatherWindow() {
    //create a state variable for the city that users will input
    //Lifted state from the SearchBar component because the city is needed in the WeatherBox component
    const [city, setCity] = useState("");
    const [todayData, setTodayData] = useState("");
    //forecast for tomorrow
    const [day1Data, setDay1Data] = useState("");
    //forecast for the day after tomorrow
    const [day2Data, setDay2Data] = useState("");
    //forecast for the day after the day after tomorrow
    const [day3Data, setDay3Data] = useState("");
    //separate state just for the city because the city is at the top of the API response, and not inthe nested Data onject
    const [location, setLocation] = useState("");
    //do the API call here
    //call the aPI
    //API is called in the useEffect hook
    //city is a dependency of the useEffect hook
    //the useEffect hook will be called when the city changes
    //need to get the city from the search bar
    //the search bar will be a child component of the MainWeatherWindow
    //city here is a variable, not the state. I have passed the state into the handleSearchClick function in the SearchBar component, which now becomes a parameter when its called in the function handleSearchClick on line 21. 
    async function getWeather(city) {
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&city=${city}&key=44cbebc5694040768e4b8c4982357e37`)
        const data = await response.json();
        setLocation(data.city_name);
        setTodayData(data.data[0]);
        setDay1Data(data.data[1]);
        setDay2Data(data.data[2]);
        setDay3Data(data.data[3]);
        console.log(data)

    }

    //all the actions i want to run while i am fetching data
    function handleSearchClick(location) {
        // Call the getWeather function with the current city state value
        getWeather(location);
    }

    // Create a new Date object from the datetime string
    let date = new Date(todayData.datetime);
    // Get the name of the day using the toLocaleDateString method
    let day = date.toLocaleDateString('default', {weekday: 'long'});

  
    //the city will be a state variable (useState hook)
    console.log(todayData);

    return (
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '300px' }}>
            <SearchBar handleSearchClick={handleSearchClick} city={city} setCity={setCity}/>
            <h1>{todayData && location}</h1>
            <h1>{todayData && day}</h1>
            <h1>{todayData && `${todayData.temp}ºC`}</h1>
            <WeatherBox dayxData={day1Data}/>
            <WeatherBox dayxData={day2Data}/>
            <WeatherBox dayxData={day3Data}/>

        </div>
    )
}