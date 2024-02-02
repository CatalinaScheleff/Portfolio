import { useState, useEffect } from "react";
import {
  CaretDown,
  MenuA,
  MenuButton,
  MenuCon,
  WorkCon,
  WorkContent1,
  WorkContent2,
  WorkContent3,
  WorkContentCon,
  WorkMenuCon,
  WorkTitle,
  WorkTitleCon,
} from "../components/work/WorkElements";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export const Work = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const workMenu = document.getElementById("WorkMenuCon");
      if (workMenu && !workMenu.contains(event.target)) {
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
        </WorkTitleCon>

        <WorkMenuCon id="WorkMenuCon">
          {isMenuOpen && (
            <MenuCon isOpen={isMenuOpen}>
              <MenuA href="#WorkContent1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButton>Inspirational Quote Generator</MenuButton>
              </MenuA>
              <MenuA href="#WorkContent2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButton>Apple Geeks</MenuButton>
              </MenuA>
              <MenuA href="#WorkContent3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButton>Rick and Morty BLOG</MenuButton>
              </MenuA>
            </MenuCon>
          )}
        </WorkMenuCon>

        <WorkContentCon id="WorkContentCon">
          <WorkContent1 id="WorkContent1"></WorkContent1>
          <WorkContent2 id="WorkContent2"></WorkContent2>
          <WorkContent3 id="WorkContent3"></WorkContent3>
        </WorkContentCon>
      </WorkCon>
    </>
  );
};
