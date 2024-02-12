import { useState, useEffect } from "react";
import {
  CaretDown,
  CaretDownMenuCon,
  ContentGif,
  ContentLink,
  ContentTextCon,
  ContentTitle,
  MenuA,
  MenuButton,
  MenuCon,
  WorkCon,
  WorkContent,
  WorkContentCon,
  WorkMenuCon,
  WorkTitle,
  WorkTitleCon,
} from "../components/work/WorkElements";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import quoteGenerator from '../assets/QuoteGenerator.gif'
import appleGeeks from '../assets/AppleGeeks.gif'
import rickAndMorty from '../assets/rickandmorty.gif'

export const Work = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const workMenu = document.getElementById("CaretDownMenuCon");
      if (workMenu && !workMenu.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleCaretDownClick = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <>
      <WorkCon id="WorkCon">
        <WorkTitleCon id="WorkTitleCon">
          <WorkTitle>Work</WorkTitle>
          <CaretDown icon={faAngleDown} onClick={handleCaretDownClick} />
          {isMenuOpen && (
            <CaretDownMenuCon id="CaretDownMenuCon" isOpen={isMenuOpen}>
              <MenuA href="#WorkContent1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButton>Inspirational Quote Generator</MenuButton>
              </MenuA>
              <MenuA href="#WorkContent2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButton>Apple Geeks</MenuButton>
              </MenuA>
              <MenuA href="#WorkContent3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButton>Rick and Morty BLOG</MenuButton>
              </MenuA>
            </CaretDownMenuCon>
          )}
        </WorkTitleCon>

        <WorkMenuCon id="WorkMenuCon">
            <MenuCon id="MenuCon">
              <MenuA href="#InspirationalQuoteGenerator">
                <MenuButton>Inspirational Quote Generator</MenuButton>
              </MenuA>
              <MenuA href="#AppleGeeks">
                <MenuButton>Apple Geeks</MenuButton>
              </MenuA>
              <MenuA href="#RickAndMortyBlog">
                <MenuButton>Rick and Morty BLOG</MenuButton>
              </MenuA>
            </MenuCon>
        </WorkMenuCon>

        <WorkContentCon id="WorkContentCon">

          <WorkContent id="InspirationalQuoteGenerator">
            <ContentGif src={quoteGenerator}/>
            <ContentTitle>Inspirational Quote Generator</ContentTitle>
            <ContentTextCon>
            <p>Personal project to generate and download images with inspirational quotes</p>
            <p>With the help of FreeCodeCamp, I was able to create a random quote generator using the ZenQuotes API.</p>
            <p>This website was deployed using AWS.</p>
            <p>HTML/CSS - Styled-components - React.js - REST API - AWS - Typescript - Node.js - Next.js</p>
            <br/>
            <p>Github: </p>
            <ContentLink to={'https://github.com/CatalinaScheleff/Inspirational-Quote-Generator-1'} target='_blank' rel='noreferrer'>
            https://github.com/CatalinaScheleff/Inspirational-Quote-Generator-1
            </ContentLink>
            <p>Website:</p>
            <ContentLink to={'https://prod.dowkawkcqzyzh.amplifyapp.com'} target='_blank' rel='noreferrer'>
            https://prod.dowkawkcqzyzh.amplifyapp.com
            </ContentLink>
            </ContentTextCon>
          </WorkContent>

          <WorkContent id="AppleGeeks">
            <ContentGif src={appleGeeks}/>
            <ContentTitle>Apple Geeks</ContentTitle>
            <ContentTextCon>
            <p>Online platform dedicated exclusively to the publication and promotion of services related to the range of Apple products.</p>
            <p>HTML/CSS - Javascript - React.js - Bootstrap - Python - Flask - REST API - JWT</p>
            <br/>
            <p>Github: </p>
            <ContentLink to={'https://github.com/CatalinaScheleff/Apple-Geeks'} target='_blank' rel='noreferrer'>
            https://github.com/CatalinaScheleff/Apple-Geeks
            </ContentLink>
            </ContentTextCon>
          </WorkContent>

          <WorkContent id="RickAndMortyBlog">
            <ContentGif src={rickAndMorty}/>
            <ContentTitle>Rick and Morty Blog</ContentTitle>
            <ContentTextCon>
            <p>A web application involving the reading and visualization of data related to the &apos;Rick and Morty&apos; series.</p>
            <p>HTML/CSS - Javascript - React.js - Bootstrap - REST APIs</p>
            <br/>
            <p>Github: </p>
            <ContentLink to={'https://github.com/CatalinaScheleff/RickAndMorty-blog-reading-list'} target='_blank' rel='noreferrer'>
            https://github.com/CatalinaScheleff/RickAndMorty-blog-reading-list
            </ContentLink>
            </ContentTextCon>
          </WorkContent>

        </WorkContentCon>
      </WorkCon>
    </>
  );
};
