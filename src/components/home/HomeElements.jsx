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
  height: fit-content;
  text-align: center;
  border-radius: 25px;
  padding: 30px;
  font-size: 1em;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    width: 80vw;
  }
`;

