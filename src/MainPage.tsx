import "./index.css";
import { useState, useRef } from "react";
import FormLogic from "./FormLogic";
import {
  SkillSet,
  HobbySet,
  WorkSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
} from "./types";
import CVstylePreview from "./CVstylePreview";
import { useReactToPrint } from "react-to-print";

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

  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({ contentRef, documentTitle: "Cv" });

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
          <div ref={contentRef}>
            <CVstylePreview
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
          </div>

          <div className="absolute inset-x-0 bottom-0 p-2 z-10 text-center">
            {firstname !== "" &&
            lastname !== "" &&
            email !== "" &&
            phonenumber !== 0 &&
            city !== "" &&
            description !== "" ? (
              <>
                <button className="btn btn-primary" onClick={reactToPrintFn}>
                  Pobierz PDF
                </button>
              </>
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
