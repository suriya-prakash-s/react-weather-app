const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6b718153aemsh95ba30199ecfdf1p103ea6jsn6b7511df8e79",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "4d5f15ebb2341abe68bbd0c83382778f";

export { GEO_API_URL, geoApiOptions, WEATHER_API_URL, WEATHER_API_KEY };
