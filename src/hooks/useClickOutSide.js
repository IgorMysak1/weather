import { useState, useEffect } from "react";

export const useClickOutSide = (rootElement) => {
  const [click, setClick] = useState(true);
  useEffect(() => {
    const clickOutside = (e) =>
      setClick(e.path.some((elem) => elem.className === rootElement));
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, []);
  return click;
};
