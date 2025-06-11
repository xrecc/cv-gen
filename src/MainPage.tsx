import "./index.css";
import { useState } from "react";
import FormLogic from "./FormLogic";
import CVdisplay from "./CVdisplay";
import { v4 as uuidv4 } from "uuid";
import {
  SkillSet,
  HobbySet,
  WorkSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
} from "./types";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "./cvstyles";
import CVdownloader from "./CVdownloader";
import CVStylePreview from "./CVstylePreview";

function MainPage() {
  const [styleCV, setStyleCV] = useState<
    "style1" | "style2" | "style3" | "style4"
  >("style1");
  const today = new Date();
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<number>(0);
  const [dateOfBirth, setDateOfBirtth] = useState<Date>(today);
  const [city, setCity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [skillsList, setSkillList] = useState<SkillSet[]>([]);
  const [hobbiesList, setHobbiesList] = useState<HobbySet[]>([]);
  const [worksList, setWorksList] = useState<WorkSet[]>([]);
  const [educationsList, setEducationsList] = useState<EducationSet[]>([]);
  const [certificatesList, setCertificatesList] = useState<CertificateSet[]>(
    []
  );
  const [languagesList, setLangugagesList] = useState<LanguageSet[]>([]);
  const [clauseCompanyName, setClauseCompanyName] = useState<string>("");
  const [clauseText, setClauseText] = useState<string>(
    "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko."
  );

  const currentStyle = styles[styleCV];
  console.log("styl: " + styleCV);

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
    worksList,
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

            <FormLogic
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
              works={worksList}
              educations={educationsList}
              certificates={certificatesList}
              languages={languagesList}
              hobbies={hobbiesList}
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
              onWorksListChange={setWorksList}
              onEducationsListChange={setEducationsList}
              onCertificatesListChange={setCertificatesList}
              onLanguagesListChange={setLangugagesList}
              onHobbiesListChange={setHobbiesList}
              onClauseCompanyNameChange={setClauseCompanyName}
              onClauseTextChange={setClauseText}
              onStyleCVChange={setStyleCV}
            />
          </fieldset>
        </div>
        <div className="divider divider-primary divider-horizontal"></div>
        <div className="overflow-hidden card bg-base-300 rounded-box grid w-1/3 place-items-center break-words flex h-screen flex sticky relative top-0">
          <CVStylePreview
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
            works={worksList}
            educations={educationsList}
            certificates={certificatesList}
            languages={languagesList}
            clauseText={clauseText}
            styleCV={styleCV}
          />

          <div className="absolute inset-x-0 bottom-0 p-2 z-10 text-center">
            {firstname !== "" &&
            lastname !== "" &&
            email !== "" &&
            phonenumber !== 0 &&
            city !== "" &&
            description !== "" ? (
              <PDFDownloadLink
                key={keyPDF}
                document={
                  <CVdownloader
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
                    works={worksList}
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
            ) : (
              <>
                <button className="btn btn-primary" disabled>
                  Pobierz PDF
                </button>
                <p className="label text-error">Puste wymagane dane</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;
