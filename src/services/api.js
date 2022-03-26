import axios from "axios";

export const fetchForecast = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&appid=f732220d28b4355b8a0064a6e38aff82`
  );
  return response.data;
};

export const fetchListCities = async (place) => {
  const response = await axios.get(
    `https://api.geoapify.com/v1/geocode/search?text=${place}&lang=en&format=json&apiKey=f1b7f94960694023b48125d6ee23d679`
  );
  return response.data;
};

export const fetchIp = async () => {
  const response = await axios.get("http://ip-api.com/json");
  return response.data;
};
