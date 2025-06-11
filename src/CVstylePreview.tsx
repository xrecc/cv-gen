import { CVelements } from "./types";
import { Document, Page, Text, Image, View } from "@react-pdf/renderer";
function CVStylePreview({
  photoUrl,
  firstname,
  lastname,
  email,
  phonenumber,
  dateOfBirth,
  city,
  description,
  skills,
  hobbies,
  works,
  educations,
  certificates,
  languages,
  clauseText,
  styleCV,
}: CVelements) {
  console.log("preview style: " + `${styleCV}-a4-page`);
  return (
    <>
      <div>
        <div className={`${styleCV}-a4-page`}>
          <div className="style1-section">
            <p className="style1-cvTitle">CV</p>
            <div className="style1-personalDataSection">
              <img src={photoUrl} className="style1-image" />
              <div>
                <div className="style1-personalInfo">
                  <img src="/icons1/name.png" className="style1-imageIcon" />
                  Imię i nazwisko:
                  <p className="style1-personalData">
                    {firstname} {lastname}
                  </p>
                </div>
                <div className="style1-personalInfo">
                  <img src="/icons1/email.png" className="style1-imageIcon" />
                  Email:
                  <p className="style1-personalData">{email}</p>
                </div>
                <div className="style1-personalInfo">
                  <img src="/icons1/phone.png" className="style1-imageIcon" />
                  Numer telefonu:
                  <p className="style1-personalData">{phonenumber}</p>
                </div>
                <div className="style1-personalInfo">
                  <img src="/icons1/date.png" className="style1-imageIcon" />
                  Data urodzenia:
                  <p className="style1-personalData">
                    {dateOfBirth?.toLocaleDateString()}
                  </p>
                </div>
                <div className="style1-personalInfo">
                  <img src="/icons1/city.png" className="style1-imageIcon" />
                  Miejsce zamieszkania:
                  <p className="style1-personalData">{city}</p>
                </div>
                <div className="style1-personalInfo">
                  <img src="/icons1/bio.png" className="style1-imageIcon" />O
                  mnie:
                  <p className="style1-personalData">{description}</p>
                </div>
              </div>
            </div>
            <div className="style1-otherDataSection">
              {skills.length > 0 ? (
                <p className="style1-info">
                  <img src="icons1/skill.png" className="style1-imageIcon" />
                  Umiejętności
                </p>
              ) : (
                ""
              )}
              <div className="style1-skillSection">
                {skills.map((skill) => (
                  <p key={skill.id} className="style1-skillText">
                    {skill.value.trim()}
                  </p>
                ))}
              </div>
              {works.length > 0 ? (
                <p className="style1-info">
                  <img src="/icons1/carrer.png" className="style1-imageIcon" />
                  Kariera:
                </p>
              ) : (
                ""
              )}
              {works.map((work) => (
                <p key={work.id} className="style1-skillText">
                  {work.dateOfStart} - {work.dateOfEnd}, {work.nameOfCompany},{" "}
                  {work.position}, {work.description}
                </p>
              ))}
              {educations.length > 0 ? (
                <p className="style1-info">
                  <img src="/icons1/carrer.png" className="style1-imageIcon" />
                  Wykształcenie
                </p>
              ) : (
                ""
              )}
              {educations.map((education) => (
                <p key={education.id} className="style1-skillText">
                  {education.dateOfStart} - {education.dateOfEnd},{" "}
                  {education.nameOfSchool}, {education.fieldOfStudy},{" "}
                  {education.degree}, {education.description}
                </p>
              ))}
              {certificates.length > 0 ? (
                <p className="style1-info">
                  <img
                    src="/icons1/certificate.png"
                    className="style1-imageIcon"
                  />{" "}
                  Certyfikaty
                </p>
              ) : (
                ""
              )}
              {certificates.map((certificate) => (
                <p key={certificate.id} className="style1-skillText">
                  {certificate.year}, {certificate.nameOfCertificate},{" "}
                  {certificate.description}
                </p>
              ))}
              {languages.length > 0 ? (
                <p className="style1-info">
                  <img
                    src="/icons1/language.png"
                    className="style1-imageIcon"
                  />{" "}
                  Języki obce
                </p>
              ) : (
                ""
              )}
              {languages.map((language) => (
                <p key={language.id} className="style1-skillText">
                  {language.language} - {language.level}
                </p>
              ))}
              {hobbies.length > 0 ? (
                <p className="style1-info">
                  <img src="/icons1/hobby.png" className="style1-imageIcon" />
                  Zainteresowania
                </p>
              ) : (
                ""
              )}
              <div className="style1-hobbySection">
                {hobbies.map((hobby) => (
                  <p key={hobby.id} className="style1-hobbyText">
                    {hobby.value.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="style1-clause">{clauseText}</p>
        </div>
      </div>
    </>
  );
}
export default CVStylePreview;
