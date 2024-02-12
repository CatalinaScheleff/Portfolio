import styled from "styled-components";

export const AboutCon = styled.div`
  /* background-color: green; */
  min-height: 90%;
  width: 90vw;
  display: grid;
  grid-template-areas: 'title'
                        'content';
  grid-template-rows: 130px auto;
  padding: 15px;
  margin: 20px 0 20px;
  @media (max-width: 700px) {
    grid-template-rows: 40px auto;
  }
`;

export const AboutTitleCon = styled.div`
  /* background-color: brown; */
  grid-area: title;
  display: grid;
  padding: 10px;
`;

export const AboutTitle = styled.h1`
  /* color: #264653; */
  color: #586f7c;
  font-size: 5vw;
  @media (max-width: 700px) {
    font-size: 2em;
  }
`;

export const AboutTextCon = styled.div`
  /* background-color: purple; */
  grid-area: content;
  display: grid;
  place-items: center;
`;

export const AboutText = styled.div`
  /* background-color: #95CEC7; */
  background-color: #b8dbd9;
  width: 70%;
  height: fit-content;
  text-align: center;
  padding: 4%;
  min-width: 250px;
  border-radius: 25px;
  font-size: 1em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 700px) {
    width: 80vw;
    margin-top: 27px;
    padding: 7%;
  }
`;