import styled from "styled-components";

export const FormCon = styled.div`
  background-color: aquamarine;
  width: 650px;
  height: 300px;
  display: grid;
  grid-template-areas:
    "name email"
    "inputname inputemail"
    "message message"
    "inputmessage inputmessage";
  grid-template-columns: 40% auto;
  grid-template-rows: 15% 20% 15%;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 80vw;
    height: 100vw;
    grid-template-areas:
      "name" 
      "inputname" 
      "email"
      "inputemail"
      "message"
      "inputmessage";
    grid-template-columns: auto;
    grid-template-rows: 12% 20% 12% 20% 12%;
  }
`;

export const NameCon = styled.div`
  background-color: #b30925;
  grid-area: name;
  font-size: 2em;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const EmailCon = styled.div`
  background-color: blue;
  grid-area: email;
  font-size: 2em;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const InputNameCon = styled.div`
  background-color: pink;
  grid-area: inputname;

`;

export const InputName = styled.input`
  width: 90%;
  height: 90%;
  font-size: 1em;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
 
export const InputEmailCon = styled.div`
  background-color: #179427;
  grid-area: inputemail;
 
`;

export const InputEmail = styled.input`
    width: 100%;
  height: 90%;
  font-size: 1em;
`;

export const MessageCon = styled.div`
  background-color: blue;
  grid-area: message;
  font-size: 2em;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const MessageInputCon = styled.div`
  background-color: #514a4b;
  grid-area: inputmessage;
  @media (max-width: 700px) {
    height: 80px;
  }
`;

export const InputMessage = styled.input`
    width: 100%;
  height: 90%;
  font-size: 1em;
`;
