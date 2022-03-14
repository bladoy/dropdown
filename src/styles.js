import styled from "styled-components";
const OutsideContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const InputContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  ::after {
    position: relative;
    content: " ";
    display: inline-block;
    right: 20px;
    width: 0.3em;
    height: 0.3em;
    border-right: 0.2em solid #999999;
    border-top: 0.2em solid #999999;
    transform: rotate(135deg);
  }
`;

const Input = styled.input`
  height: 30px;
  width: 200px;
  border-radius: 4px;
  outline: none;
  border: 2px solid
    ${({ dropdownOpen }) => (dropdownOpen ? " #303ddb" : "#999999")};
  padding: 0 10px;
  ${({ hideCaret }) =>
    hideCaret &&
    `
    caret-color: transparent; 
    font-size: 0;
  `}
`;

const OptionsContainer = styled.section`
  width: 220px;
  position: absolute;
  top: 54px;
  left: 50%;
  background-color: white;
  border: 1px solid blue;
  border-radius: 4px;
  max-height: 300px;
  overflow: auto;
  box-shadow: 0px 5px 16px 4px rgba(0, 0, 0, 0.5);
`;

const Option = styled.div`
  padding: 10px 20px;
  ${({ selected }) =>
    selected && ` background-color: #e5eef3; color: #6404e3; `}
  img {
    margin-right: 8px;
  }

  :hover {
    cursor: pointer;
    background-color: #e5eef3;
    color: #6404e3;
  }
`;

const SelectedOption = styled.div`
  position: absolute;
  top: 5px;
  left: 15px;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
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
    background-color: #e5eef3;
  }
`;
export {
  OutsideContainer,
  InputContainer,
  Input,
  OptionsContainer,
  Option,
  SelectedOption,
  LoadMoreButton,
};
