import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WorkCon = styled.div`
  /* background-color: green; */
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
  /* background-color: brown; */
  grid-area: title;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 10px;
`;

export const WorkTitle = styled.h1`
  font-size: 5vw;
  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const CaretDown = styled(FontAwesomeIcon)`
  font-size: 7vw;
  margin-right: 4vw;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const WorkMenuCon = styled.div`
/* background-color: orange; */
grid-area: menu;
position: relative;
`; 

export const MenuCon = styled.div`
  /* background-color: #b02685; */
  display: grid;
  /* padding: 20px; */
  position: fixed;
  width: 20vw;
  border: 2px solid #264653;
  border-radius: 25px;
  @media (max-width: 700px) {
  display: none;
  }
`;

export const CaretDownMenuCon = styled.div`
  background-color: #b02685;
  display: none;

  @media (max-width: 700px) {
    display: ${(props) => (props.isOpen ? "grid" : "none")};
    grid-template-columns: auto;
    position: absolute;
    top: 23%;
    right: 5vw; 
    z-index: 1;
    padding: 10px 0 10px;
    width: 60vw;
  }
`;

export const MenuButton = styled.button`
  text-align: left;
  height: 4vw;
font-size: 1.2vw;
padding-left: 0.5vw;
width: 100%;
background-color: transparent;
border: #264653;
@media (max-width: 700px) {
  text-align: end;
  padding-right: 0.5vw;
  height: 40px;
  font-size: 4vw;
}
`;

export const MenuA = styled.a`
text-decoration: none;

`;

export const WorkContentCon = styled.div`
  /* background-color: purple; */
  grid-area: content;
  display: grid;
  place-items: center;
`;

export const WorkContent1 = styled.div`
  background-color: #95CEC7;
  margin: 0 3% 6% 3%;
  width: 90%;
  height: 600px;
  border: 2px solid #264653;
  border-radius: 25px;;
`;

export const WorkContent2 = styled.div`
  background-color: #95CEC7;
  margin: 0 3% 6% 3%;
  width: 90%;
  height: 600px;
  border: 2px solid #264653;
  border-radius: 25px;
`;

export const WorkContent3 = styled.div`
  background-color: #95CEC7;
  margin: 0 3% 3% 3%;
  width: 90%;
  height: 600px;
  border: 2px solid #264653;
  border-radius: 25px;
`;
