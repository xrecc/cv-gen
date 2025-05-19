import { useEffect, useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { DayPicker, OnSelectHandler } from "react-day-picker";
import "react-day-picker/style.css";

import {
  SkillSet,
  HobbySet,
  CarrierSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
} from "./types";

interface CVData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  dateOfBirth?: string;
  city: string;
  description: string;
  skills: SkillSet[];
  hobbies: HobbySet[];
  carriers: CarrierSet[];
  educations: EducationSet[];
  certificates: CertificateSet[];
  languages: LanguageSet[];

  onFirstnameChange: (newFirstname: string) => void;
  onLastnameChange: (newLastname: string) => void;
  onEmailChange: (newEmail: string) => void;
  onPhonenumberChange: (newPhonenumber: number) => void;
  onDateOfBirthChange: (newDateOfBirth: string) => void;
  onCityChange: (newCity: string) => void;
  onDescriptionChange: (newDescription: string) => void;
  onSkillsListChange: (newSkills: SkillSet[]) => void;
  onHobbiesListChange: (newHobbies: HobbySet[]) => void;
  onCarriersListChange: (newCarrier: CarrierSet[]) => void;
  onEducationsListChange: (newEducation: EducationSet[]) => void;
  onCertificatesListChange: (newCertificate: CertificateSet[]) => void;
  onLanguagesListChange: (newLanguage: LanguageSet[]) => void;
}

function ListCreator({
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
  onFirstnameChange,
  onLastnameChange,
  onEmailChange,
  onPhonenumberChange,
  onDateOfBirthChange,
  onCityChange,
  onDescriptionChange,
  onSkillsListChange,
  onHobbiesListChange,
  onCarriersListChange,
  onEducationsListChange,
  onCertificatesListChange,
  onLanguagesListChange,
}: CVData) {
  const [selected, setSelected] = useState<Date>();

  useEffect(() => {
    const handleSelect: OnSelectHandler<Date> = (
      selected,
      triggerDate,
      modifiers,
      e
    ) => {
      console.log("Selected:", selected);
      console.log("Triggered by:", triggerDate);
    };
  });

  const handleChangeFirstname = (e) => {
    onFirstnameChange(e.target.value);
  };
  const handleChangeLastname = (e) => {
    onLastnameChange(e.target.value);
  };
  const handleChangeEmail = (e) => {
    onEmailChange(e.target.value);
  };
  const handleChangePhonenumber = (e) => {
    onPhonenumberChange(e.target.value);
  };
  const handleChangeDateOfBirth = (e) => {
    onDateOfBirthChange(e.target.value);
  };
  const handleChangeCity = (e) => {
    onCityChange(e.target.value);
  };
  const handleChangeDescription = (e) => {
    onDescriptionChange(e.target.value);
  };

  const handleChangeSkills = (id: string) => (e) => {
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

  const handleChangeCarriers = (id: string, field: keyof CarrierSet) => (e) => {
    const newCarrier = carriers.map((carrier) =>
      carrier.id === id
        ? {
            ...carrier,
            [field]: e.target.value,
          }
        : carrier
    );
    onCarriersListChange(newCarrier);
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

  const addSkill = () => {
    onSkillsListChange([...skills, { id: uuidv4(), value: "" }]);
  };

  const addHobby = () => {
    onHobbiesListChange([...hobbies, { id: uuidv4(), value: "" }]);
  };

  const addCarrier = () => {
    onCarriersListChange([
      ...carriers,
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

  const removeSkill = (id: string) => {
    onSkillsListChange(skills.filter((skill) => skill.id !== id));
  };

  const removeHobby = (id: string) => {
    onHobbiesListChange(hobbies.filter((hobby) => hobby.id !== id));
  };

  const removeCarrier = (id: string) => {
    onCarriersListChange(carriers.filter((carrier) => carrier.id !== id));
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

  return (
    <>
      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* dwa pola po pół szerokości */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Imię</legend>
            <input
              className="input"
              placeholder="Type here"
              value={firstname}
              onChange={handleChangeFirstname}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Nazwisko</legend>
            <input
              className="input"
              placeholder="Type here"
              value={lastname}
              onChange={handleChangeLastname}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>

          {/* pełna szerokość (span 2 kolumny) */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">E-mail</legend>
            <input
              className="input"
              placeholder="Type here"
              value={email}
              onChange={handleChangeEmail}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>

          {/* znów dwa półszerokości */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Numer telefonu</legend>
            <input
              className="input"
              type="number"
              placeholder="Type here"
              value={phonenumber}
              onChange={handleChangePhonenumber}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Data urodzenia</legend>
            <input
              className="input"
              placeholder="Type here"
              value={dateOfBirth}
              onChange={handleChangeDateOfBirth}
            />
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={
                selected
                  ? `Selected: ${selected.toLocaleDateString()}`
                  : "Pick a day"
              }
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Miejscowość</legend>
            <input
              className="input"
              placeholder="Type here"
              value={city}
              onChange={handleChangeCity}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Kilka słów o sobie</legend>
            <textarea
              className="textarea w-full h-24"
              placeholder="Bio"
              value={description}
              onChange={handleChangeDescription}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>

          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Umiejętności</legend>
            {skills.map((skill) => (
              <>
                <div key={skill.id}>
                  <input
                    className="input w-full"
                    placeholder="Type here"
                    value={skill.value}
                    onChange={handleChangeSkills(skill.id)}
                  />
                  <button
                    className="btn btn-error"
                    onClick={() => removeSkill(skill.id)}
                  >
                    usuń
                  </button>
                </div>
              </>
            ))}
          </fieldset>

          <button type="button" className="btn btn-outline" onClick={addSkill}>
            Dodaj umiejętność
          </button>
          <fieldset className="fieldset md:col-span-2 mt-10">
            <legend className="fieldset-legend">Kariera</legend>
            {carriers.map((carrier) => (
              <>
                <div key={carrier.id}>
                  <div key={carrier.id} className="carousel">
                    <div
                      id={"item1" + carrier.id}
                      className="carousel-item w-full"
                    >
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Nazwa firmy</legend>
                        <input
                          className="input"
                          name="nameOfCompany"
                          placeholder="Type here"
                          value={carrier.nameOfCompany}
                          onChange={handleChangeCarriers(
                            carrier.id,
                            "nameOfCompany"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Stanowisko</legend>
                        <input
                          className="input"
                          name="position"
                          placeholder="Type here"
                          value={carrier.position}
                          onChange={handleChangeCarriers(
                            carrier.id,
                            "position"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                    </div>
                    <div
                      id={"item2" + carrier.id}
                      className="carousel-item w-full"
                    >
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">
                          Data rozpoczęcia
                        </legend>
                        <input
                          className="input"
                          name="dateOfStart"
                          placeholder="Type here"
                          value={carrier.dateOfStart}
                          onChange={handleChangeCarriers(
                            carrier.id,
                            "dateOfStart"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">
                          Data zakończenia
                        </legend>
                        <input
                          className="input"
                          name="dateOfEnd"
                          placeholder="Type here"
                          value={carrier.dateOfEnd}
                          onChange={handleChangeCarriers(
                            carrier.id,
                            "dateOfEnd"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                    </div>
                    <div
                      id={"item3" + carrier.id}
                      className="carousel-item w-full"
                    >
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Opis</legend>
                        <textarea
                          className="textarea h-24 w-full"
                          name="description"
                          placeholder="Bio"
                          value={carrier.description}
                          onChange={handleChangeCarriers(
                            carrier.id,
                            "description"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                    </div>
                  </div>
                  <button
                    className="btn btn-error"
                    onClick={() => removeCarrier(carrier.id)}
                  >
                    usuń
                  </button>
                  <div className="flex w-full justify-center gap-2 py-2">
                    <a href={"#item1" + carrier.id} className="btn btn-xs">
                      1
                    </a>
                    <a href={"#item2" + carrier.id} className="btn btn-xs">
                      2
                    </a>
                    <a href={"#item3" + carrier.id} className="btn btn-xs">
                      3
                    </a>
                  </div>
                </div>
              </>
            ))}

            <button
              type="button"
              onClick={addCarrier}
              className="btn btn-outline btn-sm"
            >
              Dodaj firmę
            </button>
          </fieldset>
          <fieldset className="fieldset md:col-span-2 mt-10">
            <legend className="fieldset-legend">Wykształcenie</legend>
            {educations.map((education) => (
              <>
                <div key={education.id}>
                  <div key={education.id} className="carousel">
                    <div
                      id={"item1" + education.id}
                      className="carousel-item w-full"
                    >
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">
                          Nazwa uczelni
                        </legend>
                        <input
                          className="input"
                          name="nameOfSchool"
                          placeholder="Type here"
                          value={education.nameOfSchool}
                          onChange={handleChangeEducations(
                            education.id,
                            "nameOfSchool"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Kierunek</legend>
                        <input
                          className="input"
                          name="fieldOfStudy"
                          placeholder="Type here"
                          value={education.fieldOfStudy}
                          onChange={handleChangeEducations(
                            education.id,
                            "fieldOfStudy"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                    </div>
                    <div
                      id={"item2" + education.id}
                      className="carousel-item w-full"
                    >
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">
                          Data rozpoczęcia
                        </legend>
                        <input
                          className="input"
                          name="dateOfStart"
                          placeholder="Type here"
                          value={education.dateOfStart}
                          onChange={handleChangeEducations(
                            education.id,
                            "dateOfStart"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                      <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">
                          Data zakończenia
                        </legend>
                        <input
                          className="input"
                          name="dateOfEnd"
                          placeholder="Type here"
                          value={education.dateOfEnd}
                          onChange={handleChangeEducations(
                            education.id,
                            "dateOfEnd"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                    </div>
                    <div
                      id={"item3" + education.id}
                      className="carousel-item w-full"
                    >
                      <fieldset className="fieldset md:col-span-2  w-full">
                        <legend className="fieldset-legend">Opis</legend>
                        <textarea
                          className="textarea h-24  w-full"
                          name="description"
                          placeholder="Bio"
                          value={education.description}
                          onChange={handleChangeEducations(
                            education.id,
                            "description"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                      <fieldset className="fieldset  w-full">
                        <legend className="fieldset-legend">
                          Stopień wykształcenia
                        </legend>
                        <input
                          className="input"
                          name="degree"
                          placeholder="Type here"
                          value={education.degree}
                          onChange={handleChangeEducations(
                            education.id,
                            "degree"
                          )}
                        />
                        <p className="label text-error">Wymagane</p>
                      </fieldset>
                    </div>
                  </div>
                  <button
                    className="btn btn-error"
                    onClick={() => removeEducation(education.id)}
                  >
                    usuń
                  </button>
                  <div className="flex w-full justify-center gap-2 py-2">
                    <a href={"#item1" + education.id} className="btn btn-xs">
                      1
                    </a>
                    <a href={"#item2" + education.id} className="btn btn-xs">
                      2
                    </a>
                    <a href={"#item3" + education.id} className="btn btn-xs">
                      3
                    </a>
                  </div>
                </div>
              </>
            ))}

            <button
              type="button"
              onClick={addEducation}
              className="btn btn-outline btn-sm"
            >
              Dodaj szkołę
            </button>
          </fieldset>
          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Certyfikaty</legend>
            {certificates.map((certificate) => (
              <>
                <div key={certificate.id}>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Nazwa certyfikatu
                    </legend>
                    <input
                      className="input w-full"
                      placeholder="Type here"
                      value={certificate.nameOfCertificate}
                      onChange={handleChangeCertificates(
                        certificate.id,
                        "nameOfCertificate"
                      )}
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Opis</legend>
                    <input
                      className="input w-full"
                      placeholder="Type here"
                      value={certificate.description}
                      onChange={handleChangeCertificates(
                        certificate.id,
                        "description"
                      )}
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Rok zdobycia</legend>
                    <input
                      className="input w-full"
                      placeholder="Type here"
                      value={certificate.year}
                      onChange={handleChangeCertificates(
                        certificate.id,
                        "year"
                      )}
                    />
                  </fieldset>
                  <button
                    className="btn btn-error"
                    onClick={() => removeCertificate(certificate.id)}
                  >
                    usuń
                  </button>
                </div>
              </>
            ))}
          </fieldset>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={addCertificate}
          >
            Dodaj certyfikaty
          </button>

          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Języki</legend>
            {languages.map((language) => (
              <>
                <div key={language.id}>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Język obcy</legend>
                    <input
                      className="input w-full"
                      placeholder="Type here"
                      value={language.language}
                      onChange={handleChangeLanguages(language.id, "language")}
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Poziom</legend>
                    <input
                      className="input w-full"
                      placeholder="Type here"
                      value={language.level}
                      onChange={handleChangeLanguages(language.id, "level")}
                    />
                  </fieldset>

                  <button
                    className="btn btn-error"
                    onClick={() => removeLanguage(language.id)}
                  >
                    usuń
                  </button>
                </div>
              </>
            ))}
          </fieldset>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={addLanguage}
          >
            Dodaj język
          </button>
          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Zainteresowania</legend>
            {hobbies.map((hobby) => (
              <>
                <div key={hobby.id}>
                  <input
                    className="input w-full"
                    placeholder="Type here"
                    value={hobby.value}
                    onChange={handleChangeHobbies(hobby.id)}
                  />
                  <button
                    className="btn btn-error"
                    onClick={() => removeHobby(hobby.id)}
                  >
                    usuń
                  </button>
                </div>
              </>
            ))}
          </fieldset>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={addHobby}
          >
            Dodaj zaintersowania
          </button>
        </div>
      </form>
    </>
  );
}
export default ListCreator;
