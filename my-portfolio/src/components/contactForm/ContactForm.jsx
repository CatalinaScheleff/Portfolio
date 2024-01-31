import { EmailCon, FormCon, InputEmailCon, InputNameCon, MessageCon, MessageInputCon, NameCon } from "./ContactFormElements";

export const ContactForm = () => {
    return (
        <form action="https://formspree.io/f/xwkgvdgz" method="POST">
            <FormCon id="FormCon">
                <NameCon id="NameCon">Name</NameCon>
                <EmailCon id="NameCon">Email</EmailCon>
                <InputNameCon id="InputNameCon">Input</InputNameCon>
                <InputEmailCon id="InputEmailCon">Input</InputEmailCon>
                <MessageCon id="MessageCon">Message</MessageCon>
                <MessageInputCon id="MessageInputCon">Message Input</MessageInputCon>
            </FormCon>
        </form>
    )
};
