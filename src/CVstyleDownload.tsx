import { CVelements } from "./types";
import { Document, Page, Text, Image, View } from "@react-pdf/renderer";
function CVStyleDownload({
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
      <Document language="pl" pageLayout="singlePage">
        <Page size="A4" style={styleCV.page}>
          <View style={styleCV.section}>
            <Text style={styleCV.cvTitle}>CV</Text>
            <View style={styleCV.personalDataSection}>
              <Image src={photoUrl} style={styleCV.image} />
              <View>
                <Text style={styleCV.personalInfo}>
                  <Image src="/icons1/name.png" style={styleCV.imageIcon} />
                  Imię i nazwisko:
                  <Text style={styleCV.personalData}>
                    {firstname} {lastname}
                  </Text>
                </Text>
                <Text style={styleCV.personalInfo}>
                  <Image src="/icons1/email.png" style={styleCV.imageIcon} />
                  Email: <Text style={styleCV.personalData}>{email}</Text>
                </Text>
                <Text style={styleCV.personalInfo}>
                  <Image src="/icons1/phone.png" style={styleCV.imageIcon} />
                  Numer telefonu:
                  <Text style={styleCV.personalData}>{phonenumber}</Text>
                </Text>
                <Text style={styleCV.personalInfo}>
                  <Image src="/icons1/date.png" style={styleCV.imageIcon} />
                  Data urodzenia:
                  <Text style={styleCV.personalData}>
                    {dateOfBirth?.toLocaleDateString()}
                  </Text>
                </Text>
                <Text style={styleCV.personalInfo}>
                  <Image src="/icons1/city.png" style={styleCV.imageIcon} />
                  Miejsce zamieszkania:{" "}
                  <Text style={styleCV.personalData}>{city}</Text>
                </Text>
                <Text style={styleCV.personalInfo}>
                  <Image src="/icons1/bio.png" style={styleCV.imageIcon} />O
                  mnie: <Text style={styleCV.personalData}>{description}</Text>
                </Text>
              </View>
            </View>
            <View style={styleCV.otherDataSection}>
              {skills.length > 0 ? (
                <Text style={styleCV.info}>
                  <Image src="/icons1/skill.png" style={styleCV.imageIcon} />
                  Umiejętności:
                </Text>
              ) : (
                ""
              )}
              <View style={styleCV.skillSection}>
                {skills.map((skill) => (
                  <Text key={skill.id} style={styleCV.skillText}>
                    {" "}
                    {skill.value.trim()}
                  </Text>
                ))}
              </View>
              {works.length > 0 ? (
                <Text style={styleCV.info}>
                  <Image src="/icons1/carrer.png" style={styleCV.imageIcon} />
                  Kariera:
                </Text>
              ) : (
                ""
              )}

              {works.map((work) => (
                <Text key={work.id} style={styleCV.skillText}>
                  {work.dateOfStart} - {work.dateOfEnd}, {work.nameOfCompany},
                  {work.position}, {work.description}
                </Text>
              ))}
              {educations.length > 0 ? (
                <Text style={styleCV.info}>
                  <Image src="/icons1/carrer.png" style={styleCV.imageIcon} />
                  Wykształcenie:
                </Text>
              ) : (
                ""
              )}

              {educations.map((education) => (
                <Text key={education.id} style={styleCV.skillText}>
                  {education.dateOfStart} - {education.dateOfEnd},
                  {education.nameOfSchool}, {education.fieldOfStudy},
                  {education.degree}, {education.description}
                </Text>
              ))}
              {certificates.length > 0 ? (
                <Text style={styleCV.info}>
                  <Image
                    src="/icons1/certificate.png"
                    style={styleCV.imageIcon}
                  />
                  Certyfikaty:
                </Text>
              ) : (
                ""
              )}

              {certificates.map((certificate) => (
                <Text key={certificate.id} style={styleCV.skillText}>
                  {certificate.year}, {certificate.nameOfCertificate},
                  {certificate.description}
                </Text>
              ))}
              {languages.length > 0 ? (
                <Text style={styleCV.info}>
                  <Image src="/icons1/language.png" style={styleCV.imageIcon} />
                  Języki obce:
                </Text>
              ) : (
                ""
              )}

              {languages.map((language) => (
                <Text key={language.id} style={styleCV.skillText}>
                  {language.language} - {language.level}
                </Text>
              ))}
              {hobbies.length > 0 ? (
                <Text style={styleCV.info}>
                  <Image src="/icons1/hobby.png" style={styleCV.imageIcon} />
                  Zainteresowania:
                </Text>
              ) : (
                ""
              )}
              <View style={styleCV.hobbySection}>
                {hobbies.map((hobby) => (
                  <Text key={hobby.id} style={styleCV.hobbyText} fixed>
                    {hobby.value.trim()}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          <Text style={styleCV.clause}>{clauseText}</Text>
        </Page>
      </Document>
    </>
  );
}
export default CVStyleDownload;
