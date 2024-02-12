import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarCon = styled.div`
    /* background-color: #264653; */
    /* background-color: #586f7c; */
    background-color: black;

    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
`

export const NavbarLeftCon = styled.div`
  /* background-color: lightgreen; */
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto auto auto;
  width: fit-content;
  margin-left: 5vw;
  
  @media (max-width: 700px) {
    display: ${(props) => (props['data-isopen'] ? "grid" : "none")};
    grid-template-columns: auto;
    width: 90%;
    position: absolute;
    right: 5vw;
    top: 80px;
    background-color: white;
    z-index: 2;
    padding: 10px 0 10px;
    border: 2px solid #264653;
    border-top: white;
    border-radius: 0 0 25px 25px;
  }
`;

export const HomeLink = styled(Link)`
text-decoration: none;
  font-weight: bold;
  font-size: 1.5em;
  margin-right: 1vw;
  color: #f4f4f9;
  @media (max-width: 700px) {
    margin: 5px 0 5px;
    color: black;
  }
`;

export const ContentLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  margin-right: 1vw;
  color: #f4f4f9;
  @media (max-width: 700px) {
    margin: 5px 0 5px;
    color: black;
  }
`;

export const NavbarRightCon = styled.div`
  /* background-color: blueviolet; */
  margin-right: 5vw;
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
`;

export const NavbarIconButton = styled.button`
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  background-color: black;
  border: none;
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
  color: black;
`;

export const IconLink = styled(Link)`
  
`;