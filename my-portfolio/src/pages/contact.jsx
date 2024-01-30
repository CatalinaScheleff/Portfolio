import { Link } from "react-router-dom";
import { ContactCon, ContactFormCon, ContactIconsCon, ContactTitle, ContactTitleCon, IconButton } from "../components/contact/ContactElements";
import { ContactForm } from "../components/contactForm/ContactForm";




export const Contact = () => {
  return (
    <>
      <ContactCon id="ContactCon">
        <ContactTitleCon id="ContactTitleCon">
            <ContactTitle>Contact</ContactTitle>
        </ContactTitleCon>
        <ContactFormCon id="ContactTextCon">
          
          <ContactForm id="ContactForm">
            
          </ContactForm>
          <ContactIconsCon id="ContactIconsCon">
             <Link to={'https://w.app/3YtU9p'} style={{textDecoration: 'none'}}>
                <IconButton>X</IconButton>
             </Link>
             <Link to={'mailto:catalina.scheleff@gmail.com'} style={{textDecoration: 'none'}}>
                <IconButton></IconButton>
             </Link>
             <Link to={'https://w.app/3YtU9p'} style={{textDecoration: 'none'}}>
                <IconButton></IconButton>
             </Link>
             <Link to={'https://w.app/3YtU9p'} style={{textDecoration: 'none'}}>
                <IconButton></IconButton>
             </Link>
            </ContactIconsCon>
        </ContactFormCon>
      </ContactCon>
    </>
  );
};
 