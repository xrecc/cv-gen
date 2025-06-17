import { CVelements } from "./types";
import { useTranslation } from "react-i18next";
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
  links,
  clauseText,
  styleCV,
}: CVelements) {
  const { t } = useTranslation();
  return (
    <>
      <div className="pdf-style">
        <div className={`${styleCV}-a4-page`}>
          <div className={`${styleCV}-section`}>
            <p className={`${styleCV}-cvTitle`}>{t("preview.cv")}</p>
            <div className={`${styleCV}-personalDataSection`}>
              <img src={photoUrl} className={`${styleCV}-image`} />
              <div className={`${styleCV}-personalTextSection`}>
                <div className={`${styleCV}-personalData`}>
                  <div className={`${styleCV}-personalInfo`}>
                    <img
                      src={`/src/icons/${styleCV}/name.png`}
                      className={`${styleCV}-imageIcon`}
                    />
                    {t("preview.name")}
                  </div>
                  <p className={`${styleCV}-personalText`}>
                    {firstname} {lastname}
                  </p>
                </div>
                <div className={`${styleCV}-personalData`}>
                  <div className={`${styleCV}-personalInfo`}>
                    <img
                      src={`/src/icons/${styleCV}/email.png`}
                      className={`${styleCV}-imageIcon`}
                    />
                    {t("preview.email")}
                  </div>
                  <p className={`${styleCV}-personalText`}>{email}</p>
                </div>
                <div className={`${styleCV}-personalData`}>
                  <div className={`${styleCV}-personalInfo`}>
                    <img
                      src={`/src/icons/${styleCV}/phone.png`}
                      className={`${styleCV}-imageIcon`}
                    />
                    {t("preview.phonenumber")}
                  </div>
                  <p className={`${styleCV}-personalText`}>{phonenumber}</p>
                </div>
                <div className={`${styleCV}-personalData`}>
                  <div className={`${styleCV}-personalInfo`}>
                    <img
                      src={`/src/icons/${styleCV}/date.png`}
                      className={`${styleCV}-imageIcon`}
                    />
                    {t("preview.dateOfBirth")}
                  </div>
                  <p className={`${styleCV}-personalText`}>
                    {dateOfBirth?.toLocaleDateString()}
                  </p>
                </div>
                <div className={`${styleCV}-personalData`}>
                  <div className={`${styleCV}-personalInfo`}>
                    <img
                      src={`/src/icons/${styleCV}/city.png`}
                      className={`${styleCV}-imageIcon`}
                    />
                    {t("preview.city")}
                  </div>
                  <p className={`${styleCV}-personalText`}>{city}</p>
                </div>
                <div className={`${styleCV}-personalData`}>
                  <div className={`${styleCV}-personalInfo`}>
                    <img
                      src={`/src/icons/${styleCV}/bio.png`}
                      className={`${styleCV}-imageIcon`}
                    />
                    {t("preview.bio")}
                  </div>
                  <p className={`${styleCV}-personalText`}>{description}</p>
                </div>
              </div>
            </div>
            <div className={`${styleCV}-otherDataSection`}>
              {skills.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/src/icons/${styleCV}/skill.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  {t("preview.skill")}
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
                    src={`/src/icons/${styleCV}/carrer.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  {t("preview.work")}
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-workSection`}>
                {works.map((work) => (
                  <p key={work.id} className={`${styleCV}-workText`}>
                    {new Intl.DateTimeFormat("pl-PL", {
                      month: "long",
                      year: "numeric",
                    }).format(new Date(work.dateOfStart + "-01"))}{" "}
                    -{" "}
                    {new Intl.DateTimeFormat("pl-PL", {
                      month: "long",
                      year: "numeric",
                    }).format(new Date(work.dateOfEnd + "-01"))}
                    , {work.nameOfCompany}, {work.position}, {work.description}
                  </p>
                ))}
              </div>
              {educations.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/src/icons/${styleCV}/school.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  {t("preview.education")}
                </p>
              ) : (
                ""
              )}
              <div className={`${styleCV}-educationSection`}>
                {educations.map((education) => (
                  <p key={education.id} className={`${styleCV}-educationText`}>
                    {new Intl.DateTimeFormat("pl-PL", {
                      month: "long",
                      year: "numeric",
                    }).format(new Date(education.dateOfStart + "-01"))}{" "}
                    -{" "}
                    {new Intl.DateTimeFormat("pl-PL", {
                      month: "long",
                      year: "numeric",
                    }).format(new Date(education.dateOfEnd + "-01"))}
                    , {education.nameOfSchool}, {education.fieldOfStudy},{" "}
                    {education.degree}, {education.description}
                  </p>
                ))}
              </div>
              {certificates.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/src/icons/${styleCV}/certificate.png`}
                    className={`${styleCV}-imageIcon`}
                  />{" "}
                  {t("preview.certificate")}
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
                <>
                  <p className={`${styleCV}-info`}>
                    <img
                      src={`/src/icons/${styleCV}/language.png`}
                      className={`${styleCV}-imageIcon`}
                    />{" "}
                    {t("preview.language")}
                  </p>
                </>
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
              {links.length > 0 ? (
                <>
                  <p className={`${styleCV}-info`}>
                    <img
                      src={`/src/icons/${styleCV}/link.png`}
                      className={`${styleCV}-imageIcon`}
                    />{" "}
                    {t("preview.link")}
                  </p>
                </>
              ) : (
                ""
              )}
              <div className={`${styleCV}-linkSection`}>
                {links.map((link) => (
                  <p key={link.id} className={`${styleCV}-linkText`}>
                    {link.link} - {link.description}
                  </p>
                ))}
              </div>
              {hobbies.length > 0 ? (
                <p className={`${styleCV}-info`}>
                  <img
                    src={`/src/icons/${styleCV}/hobby.png`}
                    className={`${styleCV}-imageIcon`}
                  />
                  {t("preview.hobby")}
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
              <p className={`${styleCV}-clause-view`}>{clauseText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CVstylePreview;
