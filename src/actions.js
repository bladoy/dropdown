import { ACTIONS } from "./constants";
const { STORE_COUNTRIES, FILTER_COUNTRIES, SET_COUNTRY } = ACTIONS;

export const storeCountries = (data) => {
  return {
    type: STORE_COUNTRIES,
    payload: data,
  };
};

export const updateFilteredCountries = (value) => {
  return {
    type: FILTER_COUNTRIES,
    payload: value,
  };
};

export const setSelectedCountry = (option) => {
  return {
    type: SET_COUNTRY,
    payload: option,
  };
};
