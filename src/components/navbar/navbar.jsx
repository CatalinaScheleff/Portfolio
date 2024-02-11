import { Link } from "react-router-dom"
import { ContentLink, HamburgerButton, HamburgerCon, HamburguerIcon, HomeLink, NavbarCon, NavbarIcon, NavbarIconButton, NavbarLeftCon, NavbarRightCon } from "./NavbarElements"
import linkedinLogo from "../../assets/linkedin-logo.png"
import githubLogo from "../../assets/githubLogo.png"
import { useEffect, useState } from "react"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbarMenu = document.getElementById("NavbarLeftCon");
            if (navbarMenu && !navbarMenu.contains(event.target) && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    },[isMenuOpen]);

    const handleHamburguerClick = (event) => {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <NavbarCon id="NavbarCon">
            <NavbarLeftCon id="NavbarLeftCon" data-isopen={isMenuOpen}>

                <HomeLink to="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</HomeLink>
                <ContentLink to="/about" onClick={() => setIsMenuOpen(!isMenuOpen)}>About</ContentLink>
                <ContentLink to="/work" onClick={() => setIsMenuOpen(!isMenuOpen)}>Work</ContentLink>
                {/* <ContentLink to="/certification" onClick={() => setIsMenuOpen(!isMenuOpen)}>Certification</ContentLink> */}
                <ContentLink to="/contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</ContentLink>
            </NavbarLeftCon>
            <HamburgerCon>
            <HamburgerButton onClick={handleHamburguerClick}>
            <HamburguerIcon icon={faBars} />
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