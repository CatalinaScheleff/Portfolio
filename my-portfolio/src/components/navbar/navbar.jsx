import { Link } from "react-router-dom"
import { ContentP, HamburgerButton, HamburgerCon, HomeP, NavbarCon, NavbarIcon, NavbarIconButton, NavbarLeftCon, NavbarRightCon } from "./NavbarElements"
import linkedinLogo from "../../assets/linkedin-logo.png"
import githubLogo from "../../assets/githubLogo.jpg"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <NavbarCon id="NavbarCon">
            <NavbarLeftCon isOpen={isMenuOpen}>
                <HomeP>Home</HomeP>
                <ContentP>About</ContentP>
                <ContentP>Work</ContentP>
                <ContentP>Certification</ContentP>
                <ContentP>Contact</ContentP>
            </NavbarLeftCon>
            <HamburgerCon>
            <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
      &#9776;
    </HamburgerButton>
    </HamburgerCon>
            <NavbarRightCon>
            <Link to={'https://www.linkedin.com/in/catalina-scheleff-caceres/'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <NavbarIconButton>
                <NavbarIcon id="Icon" src={linkedinLogo}/>
                </NavbarIconButton>
             </Link>
             <Link to={'https://github.com/CatalinaScheleff'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <NavbarIconButton >
                <NavbarIcon id="Icon" src={githubLogo}/>
                </NavbarIconButton>
             </Link>
            </NavbarRightCon>
        </NavbarCon>
    )
}