import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

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
  color: #586f7c;
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
  padding: 20px 0 20px;
  position: fixed;
  width: 22vw;
  border: 2px solid #04724d;
  border-radius: 25px;
  @media (max-width: 700px) {
  display: none;
  }
`;

export const CaretDownMenuCon = styled.div`
  background-color: white;
  display: none;

  @media (max-width: 700px) {
    display: ${(props) => (props.isOpen ? "grid" : "none")};
    grid-template-columns: auto;
    position: absolute;
    top: 160px;
    right: 5vw; 
    z-index: 1;
    padding: 20px 0 20px;
    width: 60vw;
    border: 2px solid #04724d;
  border-radius: 25px;
  }
`;

export const MenuButton = styled.button`
text-align: left;
height: 4vw;
font-size: 1.2vw;
padding: 0 15px;
width: 100%;
background-color: transparent;
border: none;
transition: all 200ms ease-in-out;

  &:hover {
    background-color: #04724d;
    color: white;
  }
  &:active  {
    background-color: #023927;
    color: white;
  }
@media (max-width: 700px) {
  text-align: end;
  padding-right: 15px;
  height: 40px;
  font-size: 3.5vw;
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

export const WorkContent = styled.div`
  background-color: #b8dbd9;
  margin: 0 3% 6% 3%;
  width: 90%;
  height: fit-content;
  padding: 30px;
  border-radius: 25px;;
  text-align: center;
`;

export const WorkContent2 = styled.div`
  background-color: #b8dbd9;
  margin: 0 3% 6% 3%;
  width: 90%;
  height: 600px;
  /* border: 2px solid #264653; */
  border-radius: 25px;
`;

export const WorkContent3 = styled.div`
  background-color: #b8dbd9;
  margin: 0 3% 3% 3%;
  width: 90%;
  height: 600px;
  /* border: 2px solid #264653; */
  border-radius: 25px;
`;

export const ContentGif = styled.img`
  width: 80%;
`;

export const ContentTitle = styled.h2`
  margin: 10px;
`;

export const ContentTextCon = styled.div`
  text-align: start;
`;

export const ContentLink = styled(Link)`
  text-decoration: none;
  color: black;
`;