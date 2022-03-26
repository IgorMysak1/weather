import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { HourlyWeather } from "../pages/HourlyWeather";
import { RealTime } from "../pages/RealTime";
import { Forecaste } from "../pages/Forecaste";
import { NotFoundPage } from "../pages/NotFoundPage";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/time" element={<RealTime />} />
      <Route path="/forecaste" element={<Forecaste />} />
      <Route path="/hourly_weather" element={<HourlyWeather />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
