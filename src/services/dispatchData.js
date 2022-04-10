import {
  fetchIp,
  fetchForecast,
  fetchListCities,
  dataCurrLocation,
  dataCurrListCities,
  getTotalForecasteHourly,
  getEventsPerDay,
  getListDaysForecaste,
  dataSearListCities,
  getCapitalCityForecaste,
  eventsPerDay,
  objOfForecaste,
  objEventsPerDay,
  objOfHourlyForecaste,
} from "./index";

export const dispatchForecaste = (lat, lon) => {
  return async (dispatch) => {
    const response = await fetchForecast(lat, lon);
    const currentDayForecaste = response.daily[0];
    dispatch(
      getListDaysForecaste(
        response.daily.slice(0, 6).map((day) => objOfForecaste(day))
      )
    );
    dispatch(
      getEventsPerDay(
        eventsPerDay.map((event) => ({
          ...event,
          timeUTC:
            objEventsPerDay(currentDayForecaste)[
              event.event.toLocaleLowerCase()
            ],
        }))
      )
    );
    dispatch(
      getTotalForecasteHourly(
        response.hourly
          .slice(0, 24 - new Date().getHours())
          .map((day) => objOfHourlyForecaste(day))
      )
    );
  };
};
export const dispatchListCities = (place, where = "") => {
  return async (dispatch) => {
    const response = await fetchListCities(place);
    where === "current"
      ? dispatch(dataCurrListCities(response.results))
      : dispatch(dataSearListCities(response.results));
  };
};
export const dispatchCapitalCity = (capitalCity) => {
  return async (dispatch) => {
    const responseCoord = await fetchListCities(capitalCity);
    const responseData = await fetchForecast(
      responseCoord.results[0].lat,
      responseCoord.results[0].lon
    );
    dispatch(
      getCapitalCityForecaste(
        responseData.daily.slice(0, 3).map((day) => objOfForecaste(day))
      )
    );
  };
};
export const dispatchIp = () => {
  return async (dispatch) => {
    const response = await fetchIp();
    const { city, region, country, latitude, longitude } = response;
    dispatch(
      dataCurrLocation({
        city,
        region,
        country: country.name,
        latitude,
        longitude,
        capitalCity: country.capital,
      })
    );
    dispatch(dispatchForecaste(latitude, longitude));
    dispatch(dispatchCapitalCity(country.capital));
  };
};
