import {
  HomeCon,
  HomeTextCon,
  HomeTitle,
  HomeTitleCon,
} from "../components/home/HomeElements";

export const Home = () => {
  return (
    <>
      <HomeCon id="HomeCon">
        <HomeTitleCon id="HomeTitleCon">
          <HomeTitle id="HomeTitle">Welcome to my Portfolio!</HomeTitle>
        </HomeTitleCon>
        <HomeTextCon id="HomeTextCon">
          <h3>
            Hello! My name is Catalina Scheleff. I am a beginner Full Stack
            Developer from Chile.
          </h3><br/>
          <p>
            Thanks for checking out my portfolio! I&apos;m on a mission to kickstart
            my career in web development, and I&apos;m excited to show you what I&apos;ve
            been working on!
          </p><br/>
          <p>
          I love creating websites that are easy to use and look awesome! My goal is to make web applications that people enjoy using.
          </p><br/>
          <p>
          I&apos;m always working hard to get better and keep up with the latest trends in web development.
          </p><br/>
          <p>
          Feel free to take a look at my portfolio and see my projects. If you have any questions or want to collaborate, just drop me a message.
          </p><br/>
          <p>
          Thanks for stopping by, and I look forward to connecting with you!
          </p>
        </HomeTextCon>
      </HomeCon>
    </>
  );
};
