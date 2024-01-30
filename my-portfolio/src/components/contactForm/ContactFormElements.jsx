import styled from "styled-components";

export const FormCon = styled.div`
  background-color: aquamarine;
  width: 50vw;
  height: 400px;
  display: grid;
  grid-template-areas: 'nameTitle emailTitle'
                       'input input'
                       'messageTitle messageTitle'
                       'inputMessage' ;
                       
  @media (max-width: 700px) {
    width: 80vw;
    height: 70vw;
  }
`;





