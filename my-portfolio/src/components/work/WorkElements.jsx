import styled from "styled-components";

export const WorkCon = styled.div`
  background-color: green;
  width: 90vw;
  min-height: 90%;
  display: grid;
  grid-template-areas: 'title title'
                        'menu content';
  grid-template-rows: 120px auto;
  grid-template-columns: 25%;
`;

export const WorkTitleCon = styled.div`
  background-color: brown;
  grid-area: title;
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