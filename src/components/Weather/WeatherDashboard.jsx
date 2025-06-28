import { useRef, useState } from 'react';

const WeatherDashboard = () => {
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const searchRef = useRef(null);
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [cacheWeatherData, setCacheWeatherData] = useState({})
  const [previousSearches, setPreviousSearches] = useState([])

  const fetchWeatherData = (cityInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lowerCasedInput = cityInput.toLowerCase()

            const matchedCity = Object.keys(mockWeatherData).find(
                (cityName) => cityName.toLowerCase() === lowerCasedInput
            )

            if(matchedCity){
                resolve({city: matchedCity, data: mockWeatherData[matchedCity]})
            } else {
                reject("City not found.")
            }
        }, 500)
    })
  }

  const handleSubmit = async () => {
    const cityValue = searchRef.current.value.trim();
    if (cityValue === "") return;

    try{
        const {city: matchedCity, data} = await fetchWeatherData(cityValue)
        setCity(matchedCity)
        setWeatherData(data);
        setCacheWeatherData({...cacheWeatherData, [matchedCity]: data})
        setError("");
        setPreviousSearches([...previousSearches, matchedCity])
    } catch (err) {
        setCity(null)
        setWeatherData(null);
        setError(err);
    }
  };

  const getCache = (searchCity) => {
    const cached = cacheWeatherData[searchCity];
    if (cached) {
      setCity(searchCity);
      setWeatherData(cached);
      setError("");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <input type="search" ref={searchRef} placeholder="Enter city..." />
      <button type="submit" onClick={handleSubmit}>Submit</button>

      {weatherData && (
        <div style={{ marginTop: "20px" }}>
            <h1>City: {city}</h1>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Humidity: {weatherData.humidity}</p>
          <p>Wind Speed: {weatherData.windSpeed}</p>
        </div>
      )}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {previousSearches.length > 0 && (
        <div>
            <p>Previous Searches:</p>
            {previousSearches.map((search, index) => (
                <button key={index} onClick={() => getCache(search)}>{search}</button>
            ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;