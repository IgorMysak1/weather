import { getLocalStorage } from "../pages";
export const attribute = () => {
  const checkLocalStorage = getLocalStorage("settings")["theme"];
  document.documentElement.setAttribute(
    "data-theme",
    checkLocalStorage ? "dark" : "light"
  );
};
