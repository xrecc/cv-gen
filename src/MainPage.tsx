import "./index.css";
import { useState } from "react";
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

function MainPage() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<number>(0);
  const [dateOfBirth, setDateOfBirtth] = useState<string>("");
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

  return (
    <>
      <div className="divider divider-primary"></div>
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid grow place-items-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend mr-120">Kreator CV</legend>

            <ListCreator
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
            />
          </fieldset>
        </div>
        <div className="divider divider-primary divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid grow place-items-center">
          <CVdisplay
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
          />
        </div>
      </div>
    </>
  );
}
export default MainPage;
