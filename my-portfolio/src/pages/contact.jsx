import { Link } from "react-router-dom";
import { ContactCon, ContactFormCon, ContactIconsCon, ContactTitle, ContactTitleCon, IconButton } from "../components/contact/ContactElements";
import { ContactForm } from "../components/contactForm/ContactForm";
import gmailLogo from "../assets/gmailLogo.png"



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
             <Link to={'https://w.app/3YtU9p'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <IconButton></IconButton>
             </Link>
             <Link to={'mailto:catalina.scheleff@gmail.com'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <IconButton src={gmailLogo}></IconButton>
             </Link>
             <Link to={'https://www.linkedin.com/in/catalina-scheleff-caceres/'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <IconButton ></IconButton>
             </Link>
             <Link to={'https://github.com/CatalinaScheleff'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <IconButton></IconButton>
             </Link>
            </ContactIconsCon>
        </ContactFormCon>
      </ContactCon>
    </>
  );
};
 