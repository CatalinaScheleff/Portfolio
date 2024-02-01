import {
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

export const Work = () => {

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <WorkCon id="WorkCon">
        <WorkTitleCon id="WorkTitleCon">
            <WorkTitle>Work</WorkTitle>
        </WorkTitleCon>
        <WorkMenuCon id="WorkMenuCon">
          <MenuCon>
            <MenuButton>
              <MenuA href="#WorkContent1">Inspirational Quote Generator</MenuA>
            </MenuButton>
            <MenuButton>
              <MenuA href="#WorkContent2">Apple Geeks</MenuA>
            </MenuButton>
            <MenuButton>
              <MenuA href="#WorkContent3">Rick and Morty BLOG</MenuA>
            </MenuButton>
          </MenuCon>
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
