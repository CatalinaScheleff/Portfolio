import styled from "styled-components";

export const WorkCon = styled.div`
  background-color: green;
  min-height: 90%;
  width: 90vw;
  display: grid;
  grid-template-areas: 'title title'
                       'menu content';
  grid-template-rows: auto auto;
  grid-template-columns: 25%;
  padding: 15px;
  margin: 20px 0 20px;
  @media (max-width: 700px) {
    grid-template-areas: 'title'
                         'content';
    grid-template-columns: 100%;
  }
`;

export const WorkTitleCon = styled.div`
  background-color: brown;
  grid-area: title;
  display: grid;
  padding: 10px;
`;

export const WorkTitle = styled.h1`
  background-color: lightblue;
  font-size: 5vw;
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const WorkMenuCon = styled.div`
background-color: orange;
grid-area: menu;
  
`;

export const WorkContentCon = styled.div`
  background-color: purple;
  grid-area: content;
  display: grid;
  place-items: center;
`;

export const WorkContent1 = styled.div`
  background-color: antiquewhite;
  margin: 3%;
  width: 90%;
  height: 600px;
`;

export const WorkContent2 = styled.div`
   background-color: antiquewhite;
  margin: 3%; 
  width: 90%;
  height: 600px;
`;

export const WorkContent3 = styled.div`
   background-color: antiquewhite;
  margin: 3%; 
  width: 90%;
  height: 600px;
`;