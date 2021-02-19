import styled from "styled-components";

export const Card = styled.div`
  width: 145px;
  background: #fff;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 15px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.4);

    img {
      border-color: rgba(0, 0, 0, 0.4);
    }
  }

  img {
    width: 130px;
    height: 130px;
    border: 6px solid #e0e0e0;
    border-radius: 50%;
  }

  span {
    color: #2f3030;
    font-size: 1rem;
    padding-top: 8px;
    margin-bottom: 8px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
`;
