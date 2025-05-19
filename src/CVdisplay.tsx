import {
  SkillSet,
  HobbySet,
  CarrierSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
} from "./types";

interface CVelements {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  dateOfBirth: string;
  city: string;
  description: string;
  skills: SkillSet[];
  hobbies: HobbySet[];
  carriers: CarrierSet[];
  educations: EducationSet[];
  certificates: CertificateSet[];
  languages: LanguageSet[];
}
function CVdisplay({
  firstname,
  lastname,
  email,
  phonenumber,
  dateOfBirth,
  city,
  description,
  skills,
  hobbies,
  carriers,
  educations,
  certificates,
  languages,
}: CVelements) {
  return (
    <div>
      <p>Imię: {firstname}</p>
      <p>Nazwisko: {lastname}</p>
      <p>Email: {email}</p>
      <p>Numer telefonu: {phonenumber}</p>
      <p>Data urodzenia: {dateOfBirth}</p>
      <p>Miasto: {city}</p>
      <p>Opis: {description}</p>
      <p>Umiejętności:</p>
      {skills.map((skill) => (
        <p key={skill.id}>{skill.value.trim()}</p>
      ))}
      <p>Kariera:</p>
      {carriers.map((carrier) => (
        <p key={carrier.id}>
          {carrier.nameOfCompany}, {carrier.position}, {carrier.dateOfStart} -{" "}
          {carrier.dateOfEnd}, {carrier.description}
        </p>
      ))}
      <p>Wykształcenie:</p>
      {educations.map((education) => (
        <p key={education.id}>
          {education.nameOfSchool}, {education.fieldOfStudy},{" "}
          {education.dateOfStart} - {education.dateOfEnd},{" "}
          {education.description}, {education.degree}
        </p>
      ))}
      <p>Certyfikaty:</p>
      {certificates.map((certificate) => (
        <p key={certificate.id}>
          {certificate.nameOfCertificate}, {certificate.year},{" "}
          {certificate.description}
        </p>
      ))}
      <p>Języki obce:</p>
      {languages.map((language) => (
        <p key={language.id}>
          {language.language} - {language.level}
        </p>
      ))}
      <p>Zainteresowania:</p>
      {hobbies.map((hobby) => (
        <p key={hobby.id}>{hobby.value.trim()}</p>
      ))}
      <button className="btn btn-primary">Pobierz PDF</button>
    </div>
  );
}
export default CVdisplay;
