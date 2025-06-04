import "./index.css";
import { useEffect, useState } from "react";
import ListCreator from "./ListCreator";
import CVdisplay from "./CVdisplay";
import { v4 as uuidv4 } from "uuid";
import {
  SkillSet,
  HobbySet,
  CarrierSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
} from "./types";
import { PDFDownloadLink, PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { AnimatePresence, motion } from "framer-motion";

const styles = {
  style1: StyleSheet.create({
    image: {
      width: "150px",
      height: "150px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      fontFamily: "Roboto",
      fontSize: 25,
      width: "100%",
      height: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "center",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
  }),
  style2: StyleSheet.create({
    image: {
      width: "150px",
      height: "150px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      fontFamily: "Roboto",
      fontSize: 25,
      width: "100%",
      height: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "left",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
  }),
  style3: StyleSheet.create({
    image: {
      width: "150px",
      height: "150px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      fontFamily: "Roboto",
      fontSize: 25,
      width: "100%",
      height: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "right",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
  }),
  style4: StyleSheet.create({
    image: {
      width: "300px",
      height: "300px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "red",
      fontFamily: "Roboto",
      fontSize: 25,
      width: "100%",
      height: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "center",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
  }),
};

function MainPage() {
  const [styleCV, setStyleCV] = useState<
    "style1" | "style2" | "style3" | "style4"
  >("style1");
  const [key, setKey] = useState<number>(0);
  const today = new Date();
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<number>(0);
  const [dateOfBirth, setDateOfBirtth] = useState<Date>(today);
  const [city, setCity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [skillsList, setSkillList] = useState<SkillSet[]>([
    { id: uuidv4(), value: "" },
  ]);
  const [hobbiesList, setHobbiesList] = useState<HobbySet[]>([
    { id: uuidv4(), value: "" },
  ]);
  const [carriersList, setCarriersList] = useState<CarrierSet[]>([
    {
      id: uuidv4(),
      dateOfStart: "",
      dateOfEnd: "",
      position: "",
      nameOfCompany: "",
      description: "",
    },
  ]);
  const [educationsList, setEducationsList] = useState<EducationSet[]>([
    {
      id: uuidv4(),
      dateOfStart: "",
      dateOfEnd: "",
      nameOfSchool: "",
      fieldOfStudy: "",
      degree: "",
      description: "",
    },
  ]);
  const [certificatesList, setCertificatesList] = useState<CertificateSet[]>([
    {
      id: uuidv4(),
      nameOfCertificate: "",
      description: "",
      year: "",
    },
  ]);
  const [languagesList, setLangugagesList] = useState<LanguageSet[]>([
    {
      id: uuidv4(),
      language: "",
      level: "",
    },
  ]);
  const [clauseCompanyName, setClauseCompanyName] = useState<string>("");
  const [clauseText, setClauseText] = useState<string>(
    "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko."
  );

  const currentStyle = styles[styleCV];

  const keyPDF = JSON.stringify({
    photoUrl,
    firstname,
    lastname,
    email,
    phonenumber,
    dateOfBirth,
    city,
    description,
    skillsList,
    hobbiesList,
    carriersList,
    educationsList,
    certificatesList,
    languagesList,
    clauseText,
    styleCV,
  });

  return (
    <>
      <div className="divider divider-primary"></div>
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid w-2/3 overflow-hidden place-items-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend mr-120">Kreator CV</legend>

            <ListCreator
              styleCV={styleCV}
              photoUrl={photoUrl}
              firstname={firstname}
              lastname={lastname}
              email={email}
              phonenumber={phonenumber}
              dateOfBirth={dateOfBirth}
              city={city}
              description={description}
              skills={skillsList}
              hobbies={hobbiesList}
              carriers={carriersList}
              educations={educationsList}
              certificates={certificatesList}
              languages={languagesList}
              clauseCompanyName={clauseCompanyName}
              clauseText={clauseText}
              onPhotoUrlChange={setPhotoUrl}
              onFirstnameChange={setFirstname}
              onLastnameChange={setLastname}
              onEmailChange={setEmail}
              onPhonenumberChange={setPhonenumber}
              onDateOfBirthChange={setDateOfBirtth}
              onCityChange={setCity}
              onDescriptionChange={setDescription}
              onSkillsListChange={setSkillList}
              onHobbiesListChange={setHobbiesList}
              onCarriersListChange={setCarriersList}
              onEducationsListChange={setEducationsList}
              onCertificatesListChange={setCertificatesList}
              onLanguagesListChange={setLangugagesList}
              onClauseCompanyNameChange={setClauseCompanyName}
              onClauseTextChange={setClauseText}
              onStyleCVChange={setStyleCV}
            />
          </fieldset>
        </div>
        <div className="divider divider-primary divider-horizontal"></div>
        <div className="overflow-hidden card bg-base-300 rounded-box grid w-1/3 place-items-center break-words flex h-screen flex sticky top-0">
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={keyPDF}
                initial={{ x: -600, opacity: 0 }}
                animate={{ x: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 250 }}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: 20,
                  background: "transparent",
                }}
              >
                <PDFViewer
                  height={"1122px"}
                  width={"794px"}
                  showToolbar={false}
                >
                  <CVdisplay
                    photoUrl={photoUrl}
                    firstname={firstname}
                    lastname={lastname}
                    email={email}
                    phonenumber={phonenumber}
                    dateOfBirth={dateOfBirth}
                    city={city}
                    description={description}
                    skills={skillsList}
                    hobbies={hobbiesList}
                    carriers={carriersList}
                    educations={educationsList}
                    certificates={certificatesList}
                    languages={languagesList}
                    clauseText={clauseText}
                    styleCV={currentStyle}
                  />
                </PDFViewer>
              </motion.div>
            </AnimatePresence>
          </div>
          <PDFDownloadLink
            key={keyPDF}
            document={
              <CVdisplay
                photoUrl={photoUrl}
                firstname={firstname}
                lastname={lastname}
                email={email}
                phonenumber={phonenumber}
                dateOfBirth={dateOfBirth}
                city={city}
                description={description}
                skills={skillsList}
                hobbies={hobbiesList}
                carriers={carriersList}
                educations={educationsList}
                certificates={certificatesList}
                languages={languagesList}
                clauseText={clauseText}
                styleCV={currentStyle}
              />
            }
            fileName="CV.pdf"
          >
            <button className="btn btn-primary">Pobierz PDF</button>
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
}
export default MainPage;
