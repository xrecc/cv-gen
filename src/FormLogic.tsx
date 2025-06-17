import { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import {
  CVData,
  WorkSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
  LinkSet,
} from "./types";
import FormViewOne from "./FormViewOne";
import FormViewTwo from "./FormViewTwo";
import FormViewThree from "./FormViewThree";

function FormLogic({
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
  clauseCompanyName,
  clauseText,
  styleCV,
  onPhotoUrlChange,
  onFirstnameChange,
  onLastnameChange,
  onEmailChange,
  onPhonenumberChange,
  onDateOfBirthChange,
  onCityChange,
  onDescriptionChange,
  onSkillsListChange,
  onHobbiesListChange,
  onWorksListChange,
  onEducationsListChange,
  onCertificatesListChange,
  onLanguagesListChange,
  onLinksListChange,
  onClauseCompanyNameChange,
  onClauseTextChange,
  onStyleCVChange,
}: CVData) {
  const formsList = ["#form1", "#form2", "#form3"];
  const [formIndex, setFormIndex] = useState<number>(0);
  const formNumberPlus = () => {
    setFormIndex((prev) => (prev + 1) % formsList.length);
  };
  const formNumberMinus = () => {
    setFormIndex((prev) => (prev - 1 + formsList.length) % formsList.length);
  };
  const today = new Date();
  const formatDate = (date: Date) => date.toISOString().slice(0, 10);

  const handleChangePhotoUrl = (e) => {
    const photo = e.currentTarget.files?.[0] ?? null;
    if (photoUrl) {
      URL.revokeObjectURL(photoUrl);
    }
    const newUrl = URL.createObjectURL(photo);
    onPhotoUrlChange(newUrl);
  };
  const handleChangeFirstname = (e) => {
    const newFirstname = e.target.value;
    onFirstnameChange(
      newFirstname.charAt(0).toUpperCase() + newFirstname.slice(1)
    );
  };
  const handleChangeLastname = (e) => {
    const newLastname = e.target.value;
    onLastnameChange(
      newLastname.charAt(0).toUpperCase() + newLastname.slice(1)
    );
  };
  const handleChangeEmail = (e) => {
    onEmailChange(e.target.value);
  };
  const handleChangePhonenumber = (e) => {
    onPhonenumberChange(e.target.value);
  };
  const handleChangeDateOfBirth = (e) => {
    onDateOfBirthChange(new Date(e.target.value));
  };
  const handleChangeCity = (e) => {
    const newCity = e.target.value;
    onCityChange(newCity.charAt(0).toUpperCase() + newCity.slice(1));
  };
  const handleChangeDescription = (e) => {
    onDescriptionChange(e.target.value);
  };
  const handleChangeSkills =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSkill = skills.map((skill) =>
        skill.id === id ? { ...skill, value: e.target.value } : skill
      );
      onSkillsListChange(newSkill);
    };
  const handleChangeHobbies = (id: string) => (e) => {
    const newHobby = hobbies.map((hobby) =>
      hobby.id === id ? { ...hobby, value: e.target.value } : hobby
    );
    onHobbiesListChange(newHobby);
  };
  const handleChangeWorks = (id: string, field: keyof WorkSet) => (e) => {
    const newWork = works.map((work) =>
      work.id === id
        ? {
            ...work,
            [field]: e.target.value,
          }
        : work
    );
    onWorksListChange(newWork);
  };
  const handleChangeEducations =
    (id: string, field: keyof EducationSet) => (e) => {
      const newEducation = educations.map((education) =>
        education.id === id
          ? { ...education, [field]: e.target.value }
          : education
      );
      onEducationsListChange(newEducation);
    };
  const handleChangeCertificates =
    (id: string, field: keyof CertificateSet) => (e) => {
      const newCertificate = certificates.map((certificate) =>
        certificate.id === id
          ? { ...certificate, [field]: e.target.value }
          : certificate
      );
      onCertificatesListChange(newCertificate);
    };
  const handleChangeLanguages =
    (id: string, field: keyof LanguageSet) => (e) => {
      const newLanguage = languages.map((language) =>
        language.id === id ? { ...language, [field]: e.target.value } : language
      );
      onLanguagesListChange(newLanguage);
    };

  const handleChangeLinks = (id: string, field: keyof LinkSet) => (e) => {
    const newLink = links.map((link) =>
      link.id === id ? { ...link, [field]: e.target.value } : link
    );
    onLinksListChange(newLink);
  };
  const handleChangeClauseCompanyName = (e) => {
    onClauseCompanyNameChange(e.target.value);

    onClauseTextChange(
      ` ${t("formLogic.clauseTextCompany1")} ${clauseCompanyName} ${t(
        "formLogic.clauseTextCompany2"
      )}`
    );
  };
  const handleChangeClauseText = (e) => {
    if (clauseCompanyName === "" || clauseCompanyName === null) {
      onClauseTextChange(e.target.value);
    }
  };
  const handleChangeStyleCV = (e) => {
    const val = Number(e.currentTarget.value);
    console.log("kliknięto");
    if (val === 1) {
      console.log("zmieniono na style1");
      onStyleCVChange("style1");
    } else if (val === 2) {
      console.log("zmieniono na style2");
      onStyleCVChange("style2");
    } else if (val === 3) {
      console.log("zmieniono na style3");
      onStyleCVChange("style3");
    } else if (val === 4) {
      console.log("zmieniono na style4");
      onStyleCVChange("style4");
    }
  };
  const addSkill = () => {
    onSkillsListChange([...skills, { id: uuidv4(), value: "" }]);
  };
  const addHobby = () => {
    onHobbiesListChange([...hobbies, { id: uuidv4(), value: "" }]);
  };
  const addWork = () => {
    onWorksListChange([
      ...works,
      {
        id: uuidv4(),
        dateOfStart: "",
        dateOfEnd: "",
        position: "",
        nameOfCompany: "",
        description: "",
      },
    ]);
  };
  const addEducation = () => {
    onEducationsListChange([
      ...educations,
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
  };
  const addCertificate = () => {
    onCertificatesListChange([
      ...certificates,
      {
        id: uuidv4(),
        nameOfCertificate: "",
        description: "",
        year: "",
      },
    ]);
  };
  const addLanguage = () => {
    onLanguagesListChange([
      ...languages,
      {
        id: uuidv4(),
        language: "",
        level: "",
      },
    ]);
  };
  const addLink = () => {
    onLinksListChange([
      ...links,
      {
        id: uuidv4(),
        link: "",
        description: "",
      },
    ]);
  };
  const removeSkill = (id: string) => {
    onSkillsListChange(skills.filter((skill) => skill.id !== id));
  };
  const removeHobby = (id: string) => {
    onHobbiesListChange(hobbies.filter((hobby) => hobby.id !== id));
  };
  const removeWork = (id: string) => {
    onWorksListChange(works.filter((work) => work.id !== id));
  };
  const removeEducation = (id: string) => {
    onEducationsListChange(
      educations.filter((education) => education.id !== id)
    );
  };
  const removeCertificate = (id: string) => {
    onCertificatesListChange(
      certificates.filter((certificate) => certificate.id !== id)
    );
  };
  const removeLanguage = (id: string) => {
    onLanguagesListChange(languages.filter((language) => language.id !== id));
  };
  const removeLink = (id: string) => {
    onLinksListChange(links.filter((link) => link.id !== id));
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="grid grid cols-1 md:grid-cols-10 gap-2 p-10">
        <h1>{t("formLogic.h1_styleCV")}</h1>
        {styleCV === "style1" ? (
          <button
            className="btn btn-primary"
            value={1}
            onClick={handleChangeStyleCV}
            disabled
          >
            1
          </button>
        ) : (
          <button
            className="btn btn-primary"
            value={1}
            onClick={handleChangeStyleCV}
          >
            1
          </button>
        )}
        {styleCV === "style2" ? (
          <button
            className="btn btn-primary"
            value={2}
            onClick={handleChangeStyleCV}
            disabled
          >
            2
          </button>
        ) : (
          <button
            className="btn btn-primary"
            value={2}
            onClick={handleChangeStyleCV}
          >
            2
          </button>
        )}
        {styleCV === "style3" ? (
          <button
            className="btn btn-primary"
            value={3}
            onClick={handleChangeStyleCV}
            disabled
          >
            3
          </button>
        ) : (
          <button
            className="btn btn-primary"
            value={3}
            onClick={handleChangeStyleCV}
          >
            3
          </button>
        )}
        {styleCV === "style4" ? (
          <button
            className="btn btn-primary"
            value={4}
            onClick={handleChangeStyleCV}
            disabled
          >
            4
          </button>
        ) : (
          <button
            className="btn btn-primary"
            value={4}
            onClick={handleChangeStyleCV}
          >
            4
          </button>
        )}
      </div>

      <form className="max-w-2xl mx-auto">
        <div className="carousel">
          <div id="form1" key={1} className="carousel-item relative w-full">
            <FormViewOne
              photoUrl={photoUrl}
              firstname={firstname}
              lastname={lastname}
              email={email}
              phonenumber={phonenumber}
              dateOfBirth={dateOfBirth}
              city={city}
              description={description}
              onPhotoUrlChange={handleChangePhotoUrl}
              onFirstnameChange={handleChangeFirstname}
              onLastnameChange={handleChangeLastname}
              onEmailChange={handleChangeEmail}
              onPhonenumberChange={handleChangePhonenumber}
              onDateOfBirthChange={handleChangeDateOfBirth}
              onCityChange={handleChangeCity}
              onDescriptionChange={handleChangeDescription}
            />
          </div>
          <div id="form2" key={2} className="carousel-item relative w-full">
            <FormViewTwo
              skills={skills}
              works={works}
              educations={educations}
              certificates={certificates}
              onSkillsListChange={handleChangeSkills}
              onRemoveSkill={removeSkill}
              onAddSkill={addSkill}
              onWorksListChange={handleChangeWorks}
              onRemoveWork={removeWork}
              onAddWork={addWork}
              onEducationsListChange={handleChangeEducations}
              onRemoveEducation={removeEducation}
              onAddEducation={addEducation}
              onCertificatesListChange={handleChangeCertificates}
              onRemoveCertificate={removeCertificate}
              onAddCertificate={addCertificate}
            />
          </div>
          <div id="form3" key={3} className="carousel-item relative w-full">
            <FormViewThree
              languages={languages}
              links={links}
              hobbies={hobbies}
              clauseCompanyName={clauseCompanyName}
              clauseText={clauseText}
              onLanguagesListChange={handleChangeLanguages}
              onRemoveLanguage={removeLanguage}
              onAddLanguage={addLanguage}
              onLinksListChange={handleChangeLinks}
              onRemoveLink={removeLink}
              onAddLink={addLink}
              onHobbiesListChange={handleChangeHobbies}
              onRemoveHobby={removeHobby}
              onAddHobby={addHobby}
              onClauseCompanyNameChange={handleChangeClauseCompanyName}
              onClauseTextChange={handleChangeClauseText}
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 z-10 flex -translate-y-1/2 transform justify-between">
          <a
            href={formsList[formIndex]}
            className="btn btn-primary btn-circle"
            onClick={formNumberMinus}
          >
            ❮
          </a>
          <a
            href={formsList[formIndex]}
            className="btn btn-primary btn-circle"
            onClick={formNumberPlus}
          >
            ❯
          </a>
        </div>
      </form>
    </>
  );
}
export default FormLogic;
