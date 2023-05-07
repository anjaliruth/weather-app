export default function WeatherBox({dayxData, getEmoji}) {
    // Create a new Date object from the datetime string
    let date = new Date(dayxData.datetime);
    // Get the name of the day using the toLocaleDateString method
    let day = date.toLocaleDateString('default', {weekday: 'long'});
    return (
        <div className = "forecast">
            <h1>{dayxData && day}</h1>
            <h1>{dayxData && `${dayxData.temp.toFixed(0)}ºC`}</h1>
            <h1 className = "emoji">{dayxData && getEmoji(dayxData.weather.description)} </h1>

        </div>
    )
}