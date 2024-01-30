import styled from "styled-components";

export const ContactCon = styled.div`
  background-color: green;
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

export const ContactTitleCon = styled.div`
  background-color: brown;
  grid-area: title;
  display: grid;
  padding: 10px;
`;

export const ContactTitle = styled.h1`
  background-color: lightblue;
  font-size: 5vw;
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const ContactTextCon = styled.div`
  background-color: purple;
  grid-area: content;
  display: grid;
  place-items: center;
`;

export const ContactText = styled.div`
  background-color: antiquewhite;
  margin: 3%;
  width: 70%;
  height: 400px;
  display: grid;
  place-items: center;
  padding: 2%;
`;

export const ContactP = styled.p`
  background-color: grey;
  font-size: 2em;
  /* min-width:200px; */
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

