export const checkDayOrNight = (sunriseUTC, sunsetUTC) => {
  if (sunriseUTC === "default") return true;
  const currentUTC = Math.floor(new Date().getTime() / 1000);
  return sunriseUTC <= currentUTC && sunsetUTC >= currentUTC;
};

export const convertTime = (timeUTC, typeTime, extraParam) => {
  if (extraParam === "Noon") return typeTime ? "12:00 PM" : "12:00";
  if (timeUTC === 0) return `Today ${extraParam.toLowerCase()} is magic`;

  const date = new Date(timeUTC * (extraParam === "current" ? 1 : 1000));
  const day = date.toLocaleDateString("de-DE", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  const hour = date.toLocaleTimeString(typeTime ? "en-US" : "UA", {
    hour: "numeric",
    minute: "numeric",
  });
  return extraParam === "current"
    ? {
        hour,
        day: day.split(".").join(""),
      }
    : hour;
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
