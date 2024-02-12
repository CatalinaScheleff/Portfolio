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
  padding: 30px 0 27px 0;
`;

export const HomeTitle = styled.h1`
  font-size: 6vw;
  color: #586f7c;
  @media (max-width: 700px) {
    font-size: 6.8vw;
  }
`;

export const HomeTextCon = styled.div`
  background-color: #b8dbd9;
  width: 60vw;
  max-width: 1000px;
  height: fit-content;
  text-align: center;
  border-radius: 25px;
  padding: 30px;
  font-size: 1em;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 700px) {
    width: 70vw;
  }
`;

