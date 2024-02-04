import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterCon = styled.div`
        background-color: #264653;
    display: grid;
    place-items: center;
`
export const FooterTextCon = styled.div`
display: flex;
justify-content: center;
color: white;
`;

export const Emoji = styled.p`
  font-size: 10px;
  margin-top: 4px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  margin: 0 4px 0 4px;
  color: white;
`;