export default async ({ city }) => {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`);
        const data = await response.json();
        if (!data.results || data.results.length === 0) {
            return `No results found for city: ${city}`;
        }
        let firstResult = data.results[0];
        const { latitude, longitude } = firstResult;
        //return `Coordinates for ${city}: Latitude: ${latitude}, Longitude: ${longitude}`;
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,apparent_temperature,relative_humidity_2m&forecast_days=1`);
        if (!weatherResponse.ok) {
            return `Error fetching weather data: ${weatherResponse.statusText}`;
        }
        return `Weather data for ${city}:\n` +
            `Latitude: ${latitude}, Longitude: ${longitude}\n` +
            `Weather: ${JSON.stringify(await weatherResponse.json(), null, 2)}`;

        const weatherData = await weatherResponse.json();

        return JSON.stringify(weatherData, null, 2);
    } catch (error) {
        return `Error fetching weather data: ${error.message}`;
    }
}