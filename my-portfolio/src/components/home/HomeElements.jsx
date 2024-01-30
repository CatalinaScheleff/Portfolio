import styled from "styled-components";

export const HomeCon = styled.div`
  background-color: green;
  min-height: 90%;
  width: 90vw;
  display: grid;
  place-items: center;
`;

export const HomeTitleCon = styled.div`
  background-color: brown;
  display: grid;
  place-items: center;
  padding: 10px;
`;

export const HomeTitle = styled.h1`
  background-color: grey;
  font-size: 7vw;
`;

export const HomeTextCon = styled.div`
  background-color: purple;
  width: 60vw;
  max-width: 1000px;
  height: 50vh;
  display: grid;
  place-items: center;
  @media (max-width: 700px) {
    width: 80vw;
  }
`;

export const HomeText = styled.p`
  background-color: grey;
  font-size: 2vw;
  text-align: center;
  margin: 3%;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;


