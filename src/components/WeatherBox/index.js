export default function WeatherBox({dayxData}) {
    // Create a new Date object from the datetime string
    let date = new Date(dayxData.datetime);
    // Get the name of the day using the toLocaleDateString method
    let day = date.toLocaleDateString('default', {weekday: 'long'});
    return (
        <div>
            <h1>{dayxData && day}</h1>
            <h1>{dayxData && `${dayxData.temp}ºC`}</h1>
        </div>
    )
}