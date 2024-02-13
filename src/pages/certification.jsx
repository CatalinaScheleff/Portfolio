import {
  CertificationCon,
  CertificationContent,
  CertificationContentCon,
  CertificationH1,
  CertificationImg,
  CertificationTitle,
  CertificationTitleCon,
} from "../components/certification/CertificationElements";
import certification4Geeks from "../assets/certification4Geeks.png";

export const Certification = () => {
  return (
    <>
      <CertificationCon id="CertificationCon">
        <CertificationTitleCon id="CertificationTitleCon">
          <CertificationTitle>Certification</CertificationTitle>
        </CertificationTitleCon>
        <CertificationContentCon id="CertificationContentCon">
          <CertificationContent>
            <CertificationImg id="CertificationImg" src={certification4Geeks} />
            <CertificationH1>
              Full Stack Developer - 4Geeks Academy
            </CertificationH1>
          </CertificationContent>
        </CertificationContentCon>
      </CertificationCon>
    </>
  );
};
