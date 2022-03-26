import { convertTime, convertSpeed } from "./convert";

export const objOfForecaste = (obj) => {
  const date = new Date(obj.dt * 1000)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    })
    .replace(/ /g, " ");
  return {
    date,
    arr: [
      [
        {
          name: "Min",
          data: `${Math.floor(obj.temp.min - 273.15)}°C`,
          img: "img/forecaste/cold_temp.svg",
        },
        {
          name: "Max",
          data: `${Math.ceil(obj.temp.max - 273.15)}°C`,
          img: "img/forecaste/hot_temp.svg",
        },
      ],

      [
        {
          name: "Humidity",
          data: `${obj.humidity} %`,
          img: "img/forecaste/humidity.svg",
        },
        {
          name: "Pressure",
          data: `${obj.pressure} mm`,
          img: "img/forecaste/pressure.svg",
        },
      ],

      [
        {
          type: "speed",
          name: "Wind",
          data: `${obj.wind_speed} m/sec`,
          convertData: `${convertSpeed(obj.wind_speed)} min/mi`,
          img: "img/forecaste/windSpeed.svg",
        },
        {
          type: "speed",
          name: "Gust",
          data: ` ${obj.wind_gust} m/sec`,
          convertData: `${convertSpeed(obj.wind_gust, true)} min/mi`,
          img: "img/forecaste/windGust.svg",
        },
      ],
      [
        {
          type: "time",
          name: "Sunrise",
          data: convertTime(obj.sunrise, false),
          convertData: convertTime(obj.sunrise, true),
          img: "img/forecaste/sunrise.svg",
        },
        {
          type: "time",
          name: "Sunset",
          data: convertTime(obj.sunset, false),
          convertData: convertTime(obj.sunset, true),
          img: "img/forecaste/sunset.svg",
        },
      ],
    ],
  };
};
export const objEventsPerDay = (obj) => ({
  sunrise: obj.sunrise,
  sunset: obj.sunset,
  moonrise: obj.moonrise,
  moonset: obj.moonset,
  noon: parseInt(new Date().setHours(12, 0, 0, 0) / 1000),
});
export const objOfHourlyForecaste = (obj) => ({
  currentTime: new Date(obj.dt * 1000).getHours(),
  pressure: `${obj.pressure}mm`,
  humidity: `${obj.humidity}%`,
  clouds: `${obj.clouds}%`,
  temp: `${Math.ceil(obj.temp - 273.15)}°C`,
  wind: `${obj.wind_speed} m/sec`,
  windConvert: `${convertSpeed(obj.wind_speed)} min/mi`,
});
