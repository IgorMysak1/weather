import axios from "axios";

export const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&appid=f732220d28b4355b8a0064a6e38aff82`
    );
    return response.data;
  } catch {
    console.log("Erorr");
  }
};

export const fetchListCities = async (place) => {
  try {
    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?text=${place}&lang=en&format=json&apiKey=f1b7f94960694023b48125d6ee23d679`
    );
    return response.data;
  } catch {
    console.log("Erorr");
  }
};

export const fetchIp = async () => {
  const getIp = await axios.get("https://api.db-ip.com/v2/free/self");
  const encodedParams = new URLSearchParams();
  encodedParams.append("ip", getIp.data.ipAddress);
  const options = {
    method: "POST",
    url: "https://ip-location5.p.rapidapi.com/get_geo_info",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "ip-location5.p.rapidapi.com",
      "X-RapidAPI-Key": "e7845a5612mshe0f611758efb8f0p1578e6jsncc223770c5e8",
    },
    data: encodedParams,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch {
    alert("Turn Off VPN and reload page");
    console.log("Erorr");
  }
};
