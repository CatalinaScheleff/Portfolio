import styled from "styled-components";

export const FormCon = styled.div`
    background-color: #95CEC7;
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
  border: 2px solid #264653;
  border-radius: 25px;
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
  /* background-color: #b30925; */
  grid-area: name;
  font-size: 2em;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const EmailCon = styled.div`
  /* background-color: blue; */
  grid-area: email;
  font-size: 2em;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const InputNameCon = styled.div`
  /* background-color: pink; */
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
  /* background-color: #179427; */
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
  /* background-color: blue; */
  grid-area: message;
  font-size: 2em;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const MessageInputCon = styled.div`
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
/* background-color: brown; */
  grid-area: button;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  padding: 10px;
`;

export const SendButton = styled.button`
width: 100px;
background-color: #e1ecf4;
border-radius: 3px;
border: 1px solid #7aa7c7;
box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
color: #39739d;
font-size: 15px;
padding: 8px .8em;

  &:hover,
  &:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;

export const ResetButton = styled.button`
 width: 100px;
`;

// <!-- HTML !-->
// <button class="button-8" role="button">Button 8</button>

// /* CSS */
// .button-8 {
//   background-color: #e1ecf4;
//   border-radius: 3px;
//   border: 1px solid #7aa7c7;
//   box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
//   box-sizing: border-box;
//   color: #39739d;
//   cursor: pointer;
//   display: inline-block;
//   font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
//   font-size: 13px;
//   font-weight: 400;
//   line-height: 1.15385;
//   margin: 0;
//   outline: none;
//   padding: 8px .8em;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: baseline;
//   white-space: nowrap;
// }

// .button-8:hover,
// .button-8:focus {
//   background-color: #b3d3ea;
//   color: #2c5777;
// }

// .button-8:focus {
//   box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
// }

// .button-8:active {
//   background-color: #a0c7e4;
//   box-shadow: none;
//   color: #2c5777;
// }