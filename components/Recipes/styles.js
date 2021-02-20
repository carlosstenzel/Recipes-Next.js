import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  background: #fff;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 15px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 65px;
  transition: all 1s;

  &:hover {
    -webkit-box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.4);

    img {
      border-color: rgba(0, 0, 0, 0.4);
    }
  }

  .image {
    margin-top: -60px;
    z-index: 3;
  }

  img {
    width: 150px;
    height: 150px;

    border: 6px solid #e0e0e0;
    border-radius: 50%;
    transition: all 1s;
  }

  .name {
    padding-left: 10px;
    padding-right: 10px;
  }

  span {
    color: #2f3030;
    font-size: 1.1rem;
    padding-top: 8px;
    margin-bottom: 8px;
  }
`;
