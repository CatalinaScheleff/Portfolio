import { ContactCon, ContactP, ContactText, ContactTextCon, ContactTitle, ContactTitleCon } from "../components/contact/ContactElements";




export const Contact = () => {
  return (
    <>
      <ContactCon id="ContactCon">
        <ContactTitleCon id="ContactTitleCon">
            <ContactTitle>Contact</ContactTitle>
        </ContactTitleCon>
        <ContactTextCon id="ContactTextCon">
          <ContactText id="ContactText">
            <ContactP id="ContactP">Form</ContactP>
          </ContactText>
        </ContactTextCon>
      </ContactCon>
    </>
  );
};
 