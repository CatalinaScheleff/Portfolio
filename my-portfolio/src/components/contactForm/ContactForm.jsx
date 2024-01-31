import { EmailCon, FormCon, InputEmail, InputEmailCon, InputMessage, InputName, InputNameCon, MessageCon, MessageInputCon, NameCon } from "./ContactFormElements";

export const ContactForm = () => {
    return (
        <form action="https://formspree.io/f/xwkgvdgz" method="POST">
            <FormCon id="FormCon">
                <NameCon id="NameCon">Name</NameCon>
                <EmailCon id="NameCon">Email</EmailCon>
                <InputNameCon id="InputNameCon">
                    <InputName id="InputName" type="text"></InputName>
                </InputNameCon>
                <InputEmailCon id="InputEmailCon">
                    <InputEmail id="InputEmail" type="text"></InputEmail>
                </InputEmailCon>
                <MessageCon id="MessageCon">Message</MessageCon>
                <MessageInputCon id="MessageInputCon">
                <InputMessage id="InputMessage" type="text"></InputMessage>
                </MessageInputCon>
            </FormCon>
        </form>
    )
};
