import styled from "styled-components";

export const HomeCon = styled.div`
  /* background-color: green; */
  min-height: 90%;
  width: 90vw;
  display: grid;
  place-items: center;
`;

export const HomeTitleCon = styled.div`
  /* background-color: brown; */
  display: grid;
  place-items: center;
  padding: 10px;
`;

export const HomeTitle = styled.h1`
  font-size: 6vw;
  color: #586f7c;
`;

export const HomeTextCon = styled.div`
  /* background-color: #2A9D8F; */
  background-color: #b8dbd9;
  width: 60vw;
  max-width: 1000px;
  height: 50vh;
  display: grid;
  place-items: center;
  /* border: 2px solid #586f7c; */
  /* border: 2px solid black; */

  border-radius: 25px;
  @media (max-width: 700px) {
    width: 80vw;
  }
`;

export const HomeText = styled.p`
  /* background-color: grey; */
  /* color: white; */
  color: black;
  font-size: 2vw;
  text-align: center;
  margin: 3%;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;


