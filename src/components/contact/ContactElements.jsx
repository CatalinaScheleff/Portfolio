import styled from "styled-components";

export const ContactCon = styled.div`
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

export const ContactTitleCon = styled.div`
  /* background-color: brown; */
  grid-area: title;
  height: fit-content;
  display: grid;
  padding: 10px;
`;

export const ContactTitle = styled.h1`
  /* background-color: lightblue; */
  color: #586f7c;
  font-size: 5vw;
  height: 6vw;
  @media (max-width: 700px) {
    font-size: 2em;
  }
`;

export const ContactFormCon = styled.div`
  /* background-color: purple; */
  grid-area: content;
  display: grid;
  place-items: center;
  
  box-sizing: border-box;
  @media (max-width: 700px) {
    height: 750px;
  }
`;

export const ContactIconsCon = styled.div`
  /* background-color: beige; */
  width: 50vw;
  height: 60px;
  display: grid;
  grid-template-areas: 'icon icon icon'; //add icon for whatsapp
  margin-top: 10px;
  justify-content: space-around;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const IconButton = styled.button`
   border: 1px solid black;
  width: 60px;
  height: 60px;
  grid-area: icon;
  padding: 5px;
  background-color: transparent;
  border: none;
  @media (max-width: 700px) {
    margin: 5px
  }
`;

export const Icon = styled.img`
  width:50px;
  height: 50px;
  object-fit: contain;
`;



