import {
  AboutCon,
  AboutText,
  AboutTextCon,
  AboutTitle,
  AboutTitleCon,
} from "../components/about/AboutElements.jsx";

export const About = () => {
  return (
    <>
      <AboutCon id="AboutCon">
        <AboutTitleCon id="AboutTitleCon">
          <AboutTitle>About</AboutTitle>
        </AboutTitleCon>
        <AboutTextCon id="AboutTextCon">
          <AboutText id="AboutText">
            <p>
              I am a certified full stack developer trained at 4Geeks Academy.
              My expertise encompasses a range of technologies, including HTML,
              CSS, JavaScript, React, Bootstrap, Python, Flask, SQLAlchemy, JWT,
              Jest, API REST development and integration, and Git for version
              control. I have actively participated in various projects,
              utilizing agile methodologies with tools such as Trello and
              incorporating web design principles using Figma.
            </p>
            <br />
            <p>
              Currently, I am proactively expanding my skill set by learning
              additional technologies such as TypeScript, AWS,
              Styled-components, Next.js, and Node.js.
            </p>
            <br />
            <p>
              In addition to my technical proficiencies, I possess strong
              written and verbal communication skills in English. I thrive in
              collaborative environments, while also demonstrating the
              capability to manage projects independently.
            </p>
            <br />
            <p>
              I am deeply committed to fostering multiculturalism and I value
              diversity as a powerful component of any collaborative
              environment. I believe in creating a workplace where everyone
              feels respected, appreciated, and empowered to contribute their
              unique perspectives and talents, and this commitment drives my
              approach to project management and collaboration.
            </p>
            <br />
            <p>
              I am excited to continue my professional growth within the
              development field, driven by a passion for learning and expanding
              my knowledge.
            </p>
          </AboutText>
        </AboutTextCon>
      </AboutCon>
    </>
  );
};
