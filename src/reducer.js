import { ACTIONS } from "./constants";
const { STORE_COUNTRIES, FILTER_COUNTRIES, SET_COUNTRY } = ACTIONS;

const initialState = {
  allCountries: [],
  selectedCountry: null,
  filteredCountries: [],
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
      };
    case FILTER_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};
