import { SETTINGS_ITEMS } from "../CONSTANTS";

export const getSettingsItems = (settingsItems) => ({
  type: SETTINGS_ITEMS,
  settingsItems,
});
