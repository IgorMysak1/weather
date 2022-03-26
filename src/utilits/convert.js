export const checkDayOrNight = (sunriseUTC, sunsetUTC) => {
  if (sunriseUTC === "default") return true;
  const currentUTC = Math.floor(new Date().getTime() / 1000);
  return sunriseUTC <= currentUTC && sunsetUTC >= currentUTC;
};
const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm}`;
};

export const convertTime = (timeUTC, typeTime, extraParam, title) => {
  if (extraParam === "Noon") return "00:00 AM";
  if (timeUTC === 0) return `Today ${extraParam.toLowerCase()} is magic`;
  const date = new Date(timeUTC * (extraParam === "current" ? 1 : 1000));
  if (typeTime) {
    return formatAMPM(date);
  } else {
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
  }
};
export const moveHintDate = () => {
  const date = new Date();
  const procent = ((date.getHours() * 60 + date.getMinutes()) * 100) / 1440;
  const oppositeProcent = 100 - procent;
  return {
    procent: procent + "%",
    pixelsSpan: (-8 * oppositeProcent + 35 * procent) / 100 + "px",
    pixels: (0 * oppositeProcent + 102 * procent) / 100 + "px",
  };
};

export const convertSpeed = (speed) => (26.8224 / speed).toFixed(2);
