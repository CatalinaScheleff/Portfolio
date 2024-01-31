import styled from "styled-components";

export const FormCon = styled.div`
  background-color: aquamarine;
  width: 600px;
  height: 350px;
  display: grid;
  grid-template-areas:
    "name email"
    "inputname inputemail"
    "message message"
    "inputmessage inputmessage"
    "button button";
  grid-template-columns: 40% auto;
  grid-template-rows: 15% 20% 15% auto 15%;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 250px;
    height: 600px;
    grid-template-areas:
      "name" 
      "inputname" 
      "email"
      "inputemail"
      "message"
      "inputmessage"
      "button";
    grid-template-columns: auto;
    grid-template-rows: 7% 10% 7% 10% 7% auto 10%;
    padding: 10px;
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
  height: 83%;
  font-size: 1em;
  padding-left: 10px;
  @media (max-width: 700px) {
    width: 95%;
  }
`;
 
export const InputEmailCon = styled.div`
  background-color: #179427;
  grid-area: inputemail;
 
`;

export const InputEmail = styled.input`
  width: 93.5%;
  height: 50%;
  font-size: 1em;
  padding: 10px;
  @media (max-width: 700px) {
    width: 91.5%;
  }
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
  width: 96.5%;
  @media (max-width: 700px) {
    height: 80px;
  }
`;

export const InputMessage = styled.textarea`
  width: 100%;
  height: 80%;
  font-size: 1em;
  padding: 10px;
  @media (max-width: 700px) {
    width: 95.5%;
    height: 230px;
  }
`;

export const ButtonsCon = styled.div`
background-color: brown;
  grid-area: button;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  padding: 10px;
`;

export const SendButton = styled.button`
width: 100px;
`;

export const ResetButton = styled.button`
 width: 100px;
`;
