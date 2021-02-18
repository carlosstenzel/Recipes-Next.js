import styled from "styled-components";

export const Content = styled.div`
  border-radius: 5px;
  padding: 1%;
  background: #ffffff;
  border: 1px solid #f4f4f4;
  margin-top: 5px;

  & > svg {
    color: #a9acab;
    padding-right: 10px;
  }

  input {
    border: none;
    color: #a9acab;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
