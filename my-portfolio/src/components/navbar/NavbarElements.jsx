import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarCon = styled.div`
    background-color: red;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
`

export const NavbarLeftCon = styled.div`
  background-color: lightgreen;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto auto auto;
  width: fit-content;
  margin-left: 5vw;
  
  @media (max-width: 700px) {
    display: ${(props) => (props.isOpen ? "grid" : "none")};
    grid-template-columns: auto;
    width: 90%;
    position: absolute;
    right: 5vw;
    top: 80px;
    background-color: #ff00ae;
    z-index: 2;
    padding: 10px 0 10px
  }
`;

export const HomeLink = styled(Link)`
text-decoration: none;
  font-weight: bold;
  font-size: 1.5em;
  margin-right: 1vw;
  @media (max-width: 700px) {
    margin: 5px 0 5px;
  }
`;

export const ContentLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  margin-right: 1vw;
  @media (max-width: 700px) {
    margin: 5px 0 5px;
  }
`;

export const NavbarRightCon = styled.div`
  background-color: blueviolet;
  margin-right: 5vw;
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
`;

export const NavbarIconButton = styled.button`
  width: 60px;
  height: 60px;
  
`;

export const NavbarIcon = styled.img`
  object-fit: contain;
  width: 80%;
`;
export const HamburgerCon = styled.div`
display: none;
margin-left: 5vw;
  @media (max-width: 700px) {
    display: grid;
  place-items: center;
  }

`;
export const HamburgerButton = styled.button`
  display: none;
  width: 60px;
  height: 60px;
  @media (max-width: 700px) {
    display: block;
  }
`;

export const HamburguerIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
`;