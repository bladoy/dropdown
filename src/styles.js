import styled from "styled-components";
import { ReactComponent as ChevronIcon } from "./icons/Chevron.svg";

const OutsideContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const InputContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 20px;
  left: 50%;
`;

const Input = styled.input`
  color: #252525;
  height: 18px;
  width: 156px;
  border-radius: 6px;
  outline: none;
  border: solid 1px #d7d2cc;
  padding: 8px 30px 8px 12px;
  ${({ dropdownOpen }) =>
    dropdownOpen &&
    `
    border: solid 2px #4063F6;
    padding: 7px 29px 7px 11px;
    `}
  ${({ hideCaret }) =>
    hideCaret &&
    `
    caret-color: transparent; 
    font-size: 0;
  `}
  ::placeholder {
    color: #6d6b70;
  }
`;

const Chevron = styled(ChevronIcon)`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const OptionsContainer = styled.section`
  width: 200px;
  position: absolute;
  top: 54px;
  left: 50%;
  background-color: white;
  max-height: 210px;
  overflow: auto;
  box-shadow: 0px 2px 16px 2px rgba(26, 34, 37, 0.15);
  border-radius: 6px;
  padding: 8px 0;
`;

const Option = styled.div`
  color: #252525;
  padding: 8px 16px 8px 12px;
  img {
    margin: auto 12px auto 12px;
  }
  :hover {
    cursor: pointer;
    background-color: #f9f8f7;
  }

  ${({ selected }) =>
    selected && ` background-color: #4063F614; color: #4063F6; `}
`;

const SelectedOption = styled.div`
  position: absolute;
  top: 8px;
  left: 15px;
  display: flex;
  align-items: center;
  img {
    margin-right: 8.5px;
  }
`;

const LoadMoreButton = styled.button`
  width: 100%;
  padding: 8px;
  font-weight: bold;
  border: none;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: #f9f8f7;
  }
`;
export {
  OutsideContainer,
  InputContainer,
  Input,
  Chevron,
  OptionsContainer,
  Option,
  SelectedOption,
  LoadMoreButton,
};
