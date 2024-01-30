import styled from "styled-components";

export const AboutCon = styled.div`
  background-color: green;
  min-height: 90%;
  width: 90vw;
  display: grid;
  grid-template-areas: 'title'
                        'content';
  grid-template-rows: auto auto;
  padding: 15px;
  margin: 20px 0 20px;
`;

export const AboutTitleCon = styled.div`
  background-color: brown;
  grid-area: title;
  display: grid;
  padding: 10px;
`;

export const AboutTitle = styled.h1`
  background-color: lightblue;
  font-size: 5vw;
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const AboutTextCon = styled.div`
  background-color: purple;
  grid-area: content;
  display: grid;
  place-items: center;
`;

export const AboutText = styled.div`
  background-color: antiquewhite;
  margin: 3%;
  width: 70%;
  height: 600px;
  display: grid;
  place-items: center;
`;

export const AboutP = styled.p`
  background-color: grey;
  font-size: 2em;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

