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
`;

export const HomeP = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin-right: 1vw;
`;

export const ContentP = styled.p`
  font-size: 1.5em;
  margin-right: 1vw;
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
  width: 80%
`;
