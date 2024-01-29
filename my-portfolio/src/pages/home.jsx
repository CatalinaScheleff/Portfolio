import {
  HomeCon,
  HomeText,
  HomeTextCon,
  HomeTitle,
  HomeTitleCon,
} from "../components/home/HomeElements";

export const Home = () => {
  return (
    <>
      <HomeCon id="HomeCon">
        <HomeTitleCon id="HomeTitleCon">
          <HomeTitle id="HomeTitle">Wellcome to my Portfolio!</HomeTitle>
        </HomeTitleCon>
        <HomeTextCon id="HomeTextCon">
          <HomeText id="HomeText">
            Hello! My name is Catalina Scheleff. I am a beginner Full Stack
            Developer from Chile.
          </HomeText>
        </HomeTextCon>
      </HomeCon>
    </>
  );
};
