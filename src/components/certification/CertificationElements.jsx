import styled from "styled-components";

export const CertificationCon = styled.div`
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

export const CertificationTitleCon = styled.div`
  /* background-color: brown; */
  grid-area: title;
  display: grid;
  padding: 10px;
`;

export const CertificationTitle = styled.h1`
  /* background-color: lightblue; */
  font-size: 5vw;
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const CertificationContentCon = styled.div`
  /* background-color: purple; */
  grid-area: content;
  display: grid;
  place-items: center;
  
`;

export const CertificationContent = styled.div`
   background-color: #95CEC7;
  /* margin: 3%; */
  width: 60%;
  height: fit-content;
  display: grid;
  place-items: center;
  padding: 2%;
  min-width: 250px;
  border: 2px solid #264653;
  border-radius: 25px;
`;

export const CertificationImg = styled.img`
  width: 70%;
  min-width: 250px;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const CertificationH1 = styled.p`
  font-size: 2vw;
  margin-top: 2%;
  @media (max-width: 700px) {
    font-size: 0.9em;
  }
`;

