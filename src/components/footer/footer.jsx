import { Emoji, FooterCon, FooterLink, FooterTextCon } from "./FooterElements";

export const Footer = () => {
  return (
    <FooterCon id="FooterCon">
      <FooterTextCon>
        Developed by
        <FooterLink
          to={"https://github.com/CatalinaScheleff"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cata
        </FooterLink>
        <Emoji>🔥</Emoji>
      </FooterTextCon>
    </FooterCon>
  );
};
