import { SETTINGS_ITEMS } from "../CONSTANTS";

const initialValue = {
  settingsItems: {
    theme: false,
    speed: false,
    time: false,
  },
};

export const settingsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SETTINGS_ITEMS:
      return { ...state, settingsItems: action.settingsItems };
    default:
      return state;
  }
};
