import { useState } from "react";
import {
  SkillSet,
  HobbySet,
  CarrierSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
} from "./types";
import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});
interface CVelements {
  photoUrl: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  dateOfBirth?: Date;
  city: string;
  description: string;
  skills: SkillSet[];
  hobbies: HobbySet[];
  carriers: CarrierSet[];
  educations: EducationSet[];
  certificates: CertificateSet[];
  languages: LanguageSet[];
  clauseText: string;
  styleCV: {
    image: React.CSSProperties;
    page: React.CSSProperties;
    section: React.CSSProperties;
  };
}

// const styles = StyleSheet.create({
//   image: {
//     width: "300px",
//     height: "300px",
//   },
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//     fontFamily: "Roboto",
//     fontSize: 25,
//     width: "100%",
//     height: "100%",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//     textAlign: "center",
//     // width: 200,
//     // "@media max-width: 400": {
//     //   width: 300,
//     // },
//     // "@media orientation: landscape": {
//     //   width: 400,
//     //   height: 300,
//     // },
//   },
// });

function CVdisplay({
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
  carriers,
  educations,
  certificates,
  languages,
  clauseText,
  styleCV,
}: CVelements) {
  return (
    <>
      <Document language="pl" pageLayout="singlePage">
        <Page size="A4" style={styleCV.page}>
          <View style={styleCV.section}>
            {/* <div> */}
            <Image style={styleCV.image} src={photoUrl} />
            <Text>Imię: {firstname}</Text>
            <Text>Nazwisko: {lastname}</Text>
            <Text>Email: {email}</Text>
            <Text>Numer telefonu: {phonenumber}</Text>
            <Text>Data urodzenia: {dateOfBirth?.toLocaleDateString()}</Text>
            <Text>Miasto: {city}</Text>
            <Text>Opis: {description}</Text>
            <Text>Umiejętności:</Text>
            {skills.map((skill) => (
              <Text key={skill.id}>{skill.value.trim()}</Text>
            ))}
            <Text>Kariera:</Text>
            {carriers.map((carrier) => (
              <Text key={carrier.id}>
                {carrier.nameOfCompany}, {carrier.position},{" "}
                {carrier.dateOfStart} - {carrier.dateOfEnd},{" "}
                {carrier.description}
              </Text>
            ))}
            <Text>Wykształcenie:</Text>
            {educations.map((education) => (
              <Text key={education.id}>
                {education.nameOfSchool}, {education.fieldOfStudy},{" "}
                {education.dateOfStart} - {education.dateOfEnd},{" "}
                {education.description}, {education.degree}
              </Text>
            ))}
            <Text>Certyfikaty:</Text>
            {certificates.map((certificate) => (
              <Text key={certificate.id}>
                {certificate.nameOfCertificate}, {certificate.year},{" "}
                {certificate.description}
              </Text>
            ))}
            <Text>Języki obce:</Text>
            {languages.map((language) => (
              <Text key={language.id}>
                {language.language} - {language.level}
              </Text>
            ))}
            <Text>Zainteresowania:</Text>
            {hobbies.map((hobby) => (
              <Text key={hobby.id}>{hobby.value.trim()}</Text>
            ))}
            <Text>Klauzula: {clauseText}</Text>
            {/* </div> */}
          </View>
        </Page>
      </Document>
    </>
  );
}
export default CVdisplay;
