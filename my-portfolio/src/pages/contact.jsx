import { Link } from "react-router-dom";
import { ContactCon, ContactFormCon, ContactIconsCon, ContactTitle, ContactTitleCon, Icon, IconButton } from "../components/contact/ContactElements";
import { ContactForm } from "../components/contactForm/ContactForm";
import gmailLogo from "../assets/gmailLogo.png"
import githubLogo from "../assets/githubLogo.jpg"
import linkedinLogo from "../assets/linkedin-logo.png"
import whatsappLogo from "../assets/whatsappLogo.png"



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
                <IconButton>
                <Icon id="Icon" src={whatsappLogo}/>
                </IconButton>
             </Link>
             <Link to={'mailto:catalina.scheleff@gmail.com'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <IconButton>
                    <Icon id="Icon" src={gmailLogo}/>
                </IconButton>
             </Link>
             <Link to={'https://www.linkedin.com/in/catalina-scheleff-caceres/'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <IconButton>
                <Icon id="Icon" src={linkedinLogo}/>
                </IconButton>
             </Link>
             <Link to={'https://github.com/CatalinaScheleff'} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <IconButton >
                <Icon id="Icon" src={githubLogo}/>
                </IconButton>
             </Link>
            </ContactIconsCon>
        </ContactFormCon> 
      </ContactCon>
    </>
  );
};
 