import {
  ButtonsCon,
  EmailCon,
  FormCon,
  InputEmail,
  InputEmailCon,
  InputMessage,
  InputName,
  InputNameCon,
  MessageCon,
  MessageInputCon,
  NameCon,
  ResetButton,
  SendButton,
} from "./ContactFormElements";

export const ContactForm = () => {
  return (
    <form action="https://formspree.io/f/xwkgvdgz" method="POST">
      <FormCon id="FormCon">
        <NameCon id="NameCon">Name</NameCon>
        <EmailCon id="NameCon">Email</EmailCon>
        <InputNameCon id="InputNameCon">
          <InputName id="InputName" type="text" name="name" required />
        </InputNameCon>
        <InputEmailCon id="InputEmailCon">
          <InputEmail id="InputEmail" type="text" name="email" required />
        </InputEmailCon>
        <MessageCon id="MessageCon">Message</MessageCon>
        <MessageInputCon id="MessageInputCon">
          <InputMessage id="InputMessage" type="text" name="message" required />
        </MessageInputCon>
        <ButtonsCon id="ButtonsCon">
          <SendButton id="SendButton" type="submit">Send</SendButton>
          <ResetButton id="ResetButton" type="reset">Reset</ResetButton>
        </ButtonsCon>
      </FormCon>
    </form>
  );
};
