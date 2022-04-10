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
    } else {
      dispatch(getSettingsItems(checkLocalStorage));
    }
    attribute();
  }, []);
  return (
    <div className="_container">
      <Header />
      <RouterConfig />
    </div>
  );
};

export default App;
