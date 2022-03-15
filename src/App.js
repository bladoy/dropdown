import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  storeCountries,
  updateFilteredCountries,
  setSelectedCountry,
} from "./actions";
import { SelectedOption } from "./styles";
import { fetchData, useOnOutsideClick } from "./utils";
import DropdownSearch from "./components/DropdownSearch";
import { FETCH_URL } from "./constants";

function App() {
  const dispatch = useDispatch();
  const [optionsShown, setOptionsShown] = useState(5);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hideCaret, setHideCaret] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const allCountries = useSelector((state) => state.allCountries);
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const selectedCountry = useSelector((state) => state.selectedCountry);

  useEffect(() => {
    fetchData(FETCH_URL).then((data) => {
      const mappedData = data.map((item) => ({
        value: item.name.toLowerCase(),
        label: item.name,
        icon: item.flag,
      }));
      dispatch(storeCountries(mappedData));
      dispatch(updateFilteredCountries(mappedData));
    });
  }, []);

  const outsideClickHandler = () => {
    setDropdownOpen(false);
    setOptionsShown(5);
  };

  useOnOutsideClick(containerRef, outsideClickHandler);

  // Displays the selected country in the dropdown with max of 2 countries above and below
  const showCountrySet = () => {
    const selectedCountryIndex = allCountries.indexOf(selectedCountry);
    if (selectedCountryIndex >= 0) {
      const startSlice =
        selectedCountryIndex - 2 >= 0 ? selectedCountryIndex - 2 : 0;
      const endSlice =
        selectedCountryIndex + 3 <= allCountries.length
          ? selectedCountryIndex + 3
          : allCountries.length;
      const newFilteredCountries = allCountries.slice(startSlice, endSlice);
      dispatch(updateFilteredCountries(newFilteredCountries));
    }
  };

  const onOptionClick = (option) => {
    setDropdownOpen(false);
    setHideCaret(true);
    setInputValue(option.value);
    dispatch(setSelectedCountry(option));
  };

  const onInputClick = () => {
    setDropdownOpen(true);
    if (inputRef) {
      inputRef.current.focus();
    }
    if (selectedCountry) {
      showCountrySet();
      setHideCaret(true);
    }
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    setHideCaret(false);
    const filtered = allCountries.filter((item) =>
      item.value.includes(e.target.value.toLowerCase())
    );
    dispatch(setSelectedCountry(null));
    dispatch(updateFilteredCountries(filtered));
  };

  const onLoadMoreClick = () => {
    setOptionsShown(optionsShown + 5);
  };

  const renderSelectedOption = () => (
    <SelectedOption>
      <img src={selectedCountry.icon} width={"14.5px"} height={"10px"} />
      {selectedCountry.label}
    </SelectedOption>
  );

  const inputProps = {
    inputRef,
    onInputClick,
    onInputChange,
    inputValue,
    renderSelectedOption,
    hideCaret: hideCaret,
  };

  const dropdownProps = {
    containerRef,
    filteredOptions: filteredCountries,
    dropdownOpen,
    optionsShown,
    onOptionClick,
    selectedOption: selectedCountry,
    onLoadMoreClick,
  };

  if (allCountries.length) {
    return <DropdownSearch {...inputProps} {...dropdownProps} />;
  }

  return null;
}

export default App;
