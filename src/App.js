import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//
import {
  Header,
  dispatchIp,
  RouterConfig,
  getSettingsItems,
  getLocalStorage,
  setLocalStorage,
  attribute,
} from "./components";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchIp());
    const checkLocalStorage = getLocalStorage("settings");
    if (checkLocalStorage === null) {
      setLocalStorage("settings", {
        theme: false,
        speed: false,
        time: false,
      });
      attribute();
    } else {
      dispatch(getSettingsItems(checkLocalStorage));
      attribute();
    }
  }, []);
  return (
    <div className="_container">
      <Header />
      <RouterConfig />
    </div>
  );
};

export default App;

//----current -----
// last_updated: "2022-02-17 20:30"
// wind_kph: 29.9 || wind_mph: 18.6
// pressure_mb: 994
// humidity: 75
//----forecast => forecastday =>astro
// moonrise: "06:32 PM" || moonset: "08:19 AM" || sunrise: "07:31 AM" || sunset: "05:46 PM"
// date: "2022-02-17"

//----forecast => forecastday =>day
// avgtemp_c: 6.2 avgtemp_f: 43.1
// maxtemp_c: 9.2 maxtemp_f: 48.6
// mintemp_c: 3.8 || mintemp_f: 38.8

// daily_chance_of_rain: 98 || daily_chance_of_snow: 0
// maxwind_kph: 56.2 || maxwind_mph: 34.9

//----forecast => forecastday => day => hour
// humidity
// pressure_mb
// temp_c: 5.3 || temp_f: 41.5
// time
// chance_of_rain: 0 || chance_of_snow: 0
// wind_kph: 28.8 || wind_mp h: 17.9
