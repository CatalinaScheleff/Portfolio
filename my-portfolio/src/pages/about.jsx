
import { AboutCon, AboutP, AboutText, AboutTextCon, AboutTitle, AboutTitleCon} from "../components/about/AboutElements.jsx";


export const About = () => {
  return (
    <>
      <AboutCon id="AboutCon">
        <AboutTitleCon id="AboutTitleCon">
            <AboutTitle>About</AboutTitle>
        </AboutTitleCon>
        <AboutTextCon id="AboutTextCon">
          <AboutText id="AboutText">
            <AboutP>Hola</AboutP>
          </AboutText>
        </AboutTextCon>
      </AboutCon>
    </>
  );
};
 