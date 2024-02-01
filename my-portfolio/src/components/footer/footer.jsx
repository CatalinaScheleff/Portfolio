import { Link } from "react-router-dom"
import { Emoji, FooterCon, FooterTextCon } from "./FooterElements"


export const Footer = () => {
    return (
        <FooterCon id="FooterCon">
            <FooterTextCon>
            Developed by 
            <Link to={'https://github.com/CatalinaScheleff'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', marginLeft: '4px', marginRight: '4px'}}>
            Cata
            </Link>
            <Emoji>🔥</Emoji>
            </FooterTextCon>
        </FooterCon>
    )
}