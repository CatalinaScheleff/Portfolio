import styled from "styled-components";

export const HomeCon = styled.div`
    background-color: green;
    min-height: 90%;
    width: 90vw;
    display: grid;
    place-items: center;
    grid-template-rows: 20% auto;
    
    
`;

export const HomeTitleCon = styled.div`
  background-color: brown;
  display: grid;
  place-items: center;
`;
 
export const HomeTitle = styled.h1`
  background-color: grey;
  font-size: 80px;
  @media (max-width: 1000px) {
    font-size: 50px;
  }
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const HomeTextCon = styled.div`
  background-color: purple;
  width: 50vw;
  max-width: 1000px;
  height: 50vh;
  /* min-height: 500px; */
  @media (max-width: 1000px) {
    width: 80%;
  }
`;