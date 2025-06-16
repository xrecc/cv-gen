import { CVelements } from "./types";
function CVstylePreview({
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
  return (
    <>
      <div>
        <div className={`${styleCV}-a4-page`}>
          <div className={`${styleCV}-section`}>
            <p className={`${styleCV}-cvTitle`}>CV</p>
            <div className={`${styleCV}-personalDataSection`}>
              <img src={photoUrl} className={`${styleCV}-image`} />
              <div>
                <div className={`${styleCV}-personalInfo`}>
                  <img
                    src={`/icons/${styleCV}/name.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Imię i nazwisko:
                  <p className={`${styleCV}-personalData`}>
                    {firstname} {lastname}
                  </p>
                </div>
                <div className={`${styleCV}-personalInfo`}>
                  <img
                    src={`/icons/${styleCV}/email.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Email:
                  <p className={`${styleCV}-personalData`}>{email}</p>
                </div>
                <div className={`${styleCV}-personalInfo`}>
                  <img
                    src={`/icons/${styleCV}/phone.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Numer telefonu:
                  <p className={`${styleCV}-personalData`}>{phonenumber}</p>
                </div>
                <div className={`${styleCV}-personalInfo`}>
                  <img
                    src={`/icons/${styleCV}/date.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Data urodzenia:
                  <p className={`${styleCV}-personalData`}>
                    {dateOfBirth?.toLocaleDateString()}
                  </p>
                </div>
                <div className={`${styleCV}-personalInfo`}>
                  <img
                    src={`/icons/${styleCV}/city.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Miejsce zamieszkania:
                  <p className={`${styleCV}-personalData`}>{city}</p>
                </div>
                <div className={`${styleCV}-personalInfo`}>
                  <img
                    src={`/icons/${styleCV}/bio.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  O mnie:
                  <p className={`${styleCV}-personalData`}>{description}</p>
                </div>
              </div>
            </div>
            <div className={`${styleCV}-otherDataSection`}>
              {skills.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`icons/${styleCV}/skill.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Umiejętności
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-skillSection`}>
                {skills.map((skill) => (
                  <p key={skill.id} className={`${styleCV}-skillText`}>
                    {skill.value.trim()}
                  </p>
                ))}
              </div>
              {works.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/icons/${styleCV}/carrer.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Kariera:
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-workSection`}>
                {works.map((work) => (
                  <p key={work.id} className={`${styleCV}-workText`}>
                    {work.dateOfStart} - {work.dateOfEnd}, {work.nameOfCompany},{" "}
                    {work.position}, {work.description}
                  </p>
                ))}
              </div>
              {educations.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/icons/${styleCV}/school.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Wykształcenie
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-educationSection`}>
                {educations.map((education) => (
                  <p key={education.id} className={`${styleCV}-educationText`}>
                    {education.dateOfStart} - {education.dateOfEnd},{" "}
                    {education.nameOfSchool}, {education.fieldOfStudy},{" "}
                    {education.degree}, {education.description}
                  </p>
                ))}
              </div>
              {certificates.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/icons/${styleCV}/certificate.png`}
                    className={`${styleCV}-imageIcon`}
                  />{" "}
                  Certyfikaty
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-certificateSection`}>
                {certificates.map((certificate) => (
                  <p
                    key={certificate.id}
                    className={`${styleCV}-certificateText`}
                  >
                    {certificate.year}, {certificate.nameOfCertificate},{" "}
                    {certificate.description}
                  </p>
                ))}
              </div>
              {languages.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/icons/${styleCV}/language.png"`}
                    className={`${styleCV}-imageIcon`}
                  />{" "}
                  Języki obce
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-languageSection`}>
                {languages.map((language) => (
                  <p key={language.id} className={`${styleCV}-languageText`}>
                    {language.language} - {language.level}
                  </p>
                ))}
              </div>
              {hobbies.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/icons/${styleCV}/hobby.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  Zainteresowania
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-hobbySection`}>
                {hobbies.map((hobby) => (
                  <p key={hobby.id} className={`${styleCV}-hobbyText`}>
                    {hobby.value.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className={`${styleCV}-clause`}>{clauseText}</p>
        </div>
      </div>
    </>
  );
}
export default CVstylePreview;
