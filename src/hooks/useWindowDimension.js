//How use?
// function YourComponent() {
//   const [width, height] = useWindowDimension();
//   return (
//     <>
//       Window width: {width}, Window height: {height}
//     </>
//   );
// }
// OR
// const [width] = useWindowDimension();
// const resizeWindow = () => {};
// useEffect(() => {
//   resizeWindow();
// }, [width]);

import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export const useWindowDimension = () => {
  const [dimension, setDimension] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100);
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);
  return dimension;
};
