import {
  OutsideContainer,
  InputContainer,
  Input,
  OptionsContainer,
  Option,
  LoadMoreButton,
  Chevron,
} from "../styles";

const DropdownSearch = (props) => {
  const {
    inputRef,
    onInputClick,
    onInputChange,
    inputValue,
    renderSelectedOption,
    hideCaret,
    containerRef,
    filteredOptions,
    dropdownOpen,
    optionsShown,
    onOptionClick,
    selectedOption,
    onLoadMoreClick,
  } = props;
  return (
    <OutsideContainer ref={containerRef} className="outside-container">
      <InputContainer role="presentation" onClick={onInputClick}>
        <Input
          ref={inputRef}
          hideCaret={hideCaret}
          dropdownOpen={dropdownOpen}
          placeholder={!selectedOption ? "Select" : ""}
          onChange={onInputChange}
          value={inputValue}
        />
        <Chevron />
        {selectedOption && renderSelectedOption()}
      </InputContainer>

      {filteredOptions.length && dropdownOpen && (
        <OptionsContainer>
          {filteredOptions.slice(0, optionsShown).map((option) => (
            <Option
              role="presentation"
              onClick={() => onOptionClick(option)}
              key={option.label}
              selected={selectedOption && selectedOption.value === option.value}
            >
              {option.icon && (
                <img src={option.icon} width={"14.5"} height={"10px"} />
              )}
              <span>{option.label}</span>
            </Option>
          ))}
          {filteredOptions.length > optionsShown && (
            <LoadMoreButton type="button" onClick={onLoadMoreClick}>
              Load more
            </LoadMoreButton>
          )}
        </OptionsContainer>
      )}
    </OutsideContainer>
  );
};

export default DropdownSearch;
