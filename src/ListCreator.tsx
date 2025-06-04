import { useEffect, useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { DayPicker, OnSelectHandler } from "react-day-picker";
import "react-day-picker/style.css";

import {
  CVData,
  SkillSet,
  HobbySet,
  CarrierSet,
  EducationSet,
  CertificateSet,
  LanguageSet,
} from "./types";

function ListCreator({
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
  onCarriersListChange,
  onEducationsListChange,
  onCertificatesListChange,
  onLanguagesListChange,
  onClauseCompanyNameChange,
  onClauseTextChange,
  onStyleCVChange,
}: CVData) {
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
    onDateOfBirthChange(new Date(e.target.value));
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

  const handleChangeClauseCompanyName = (e) => {
    onClauseCompanyNameChange(e.target.value);

    onClauseTextChange(
      `Wyrażam zgodę na przetwarzanie moich danych osobowych przez ${clauseCompanyName} w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.`
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
      <div className="grid grid cols-1 md:grid-cols-10 gap-2 p-10">
        <h1>Styl CV:</h1>
        {styleCV === "style1" ? (
          <button
            className="btn"
            value={1}
            onClick={handleChangeStyleCV}
            disabled
          >
            1
          </button>
        ) : (
          <button className="btn" value={1} onClick={handleChangeStyleCV}>
            1
          </button>
        )}
        {styleCV === "style2" ? (
          <button
            className="btn"
            value={2}
            onClick={handleChangeStyleCV}
            disabled
          >
            2
          </button>
        ) : (
          <button className="btn" value={2} onClick={handleChangeStyleCV}>
            2
          </button>
        )}
        {styleCV === "style3" ? (
          <button
            className="btn"
            value={3}
            onClick={handleChangeStyleCV}
            disabled
          >
            3
          </button>
        ) : (
          <button className="btn" value={3} onClick={handleChangeStyleCV}>
            3
          </button>
        )}
        {styleCV === "style4" ? (
          <button
            className="btn"
            value={4}
            onClick={handleChangeStyleCV}
            disabled
          >
            4
          </button>
        ) : (
          <button className="btn" value={4} onClick={handleChangeStyleCV}>
            4
          </button>
        )}
      </div>
      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Dodaj zdjęcie</legend>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-md w-full"
              placeholder="Dodaj"
              onChange={handleChangePhotoUrl}
            ></input>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Imię</legend>
            <input
              className="input"
              placeholder="Wpisz imię"
              value={firstname}
              onChange={handleChangeFirstname}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Nazwisko</legend>
            <input
              className="input"
              placeholder="Wpisz nazwisko"
              value={lastname}
              onChange={handleChangeLastname}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">E-mail</legend>
            <input
              className="input"
              placeholder="Wpisz email"
              value={email}
              onChange={handleChangeEmail}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Numer telefonu</legend>
            <input
              className="input"
              type="number"
              placeholder="Wpisz numer telefonu"
              value={phonenumber}
              onChange={handleChangePhonenumber}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Data urodzenia</legend>
            <input
              className="input"
              type="date"
              placeholder="Podaj datę urodzenia"
              value={formatDate(dateOfBirth)}
              max={formatDate(today)}
              onChange={handleChangeDateOfBirth}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Miejscowość</legend>
            <input
              className="input"
              placeholder="Podaj miejscowość"
              value={city}
              onChange={handleChangeCity}
            />
            <p className="label text-error">Wymagane</p>
          </fieldset>
          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Kilka słów o sobie</legend>
            <textarea
              className="textarea w-full h-24"
              placeholder="Podaj swój opis/cele"
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
                    placeholder="Podaj umiejętność"
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
                          placeholder="Podaj nazwę firmy"
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
                          placeholder="Podaj stanowisko"
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
                          type="month"
                          name="dateOfStart"
                          placeholder="Podaj datę rozpoczęcia"
                          value={carrier.dateOfStart}
                          max={carrier.dateOfEnd}
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
                          type="month"
                          placeholder="Podaj datę zakończenia"
                          value={carrier.dateOfEnd}
                          min={carrier.dateOfStart}
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
                          placeholder="Podaj opis zatrudnienia"
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
                          placeholder="Podaj nazwę szkoły/uczelni"
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
                          placeholder="Podaj kierunek"
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
                          type="month"
                          name="dateOfStart"
                          placeholder="Podaj datę rozpoczęcia"
                          value={education.dateOfStart}
                          max={education.dateOfEnd}
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
                          type="month"
                          name="dateOfEnd"
                          placeholder="Podaj datę zakończenia"
                          value={education.dateOfEnd}
                          min={education.dateOfStart}
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
                          placeholder="Podaj opis nauki"
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
                          placeholder="Podaj stopień wykształcenia"
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
                      placeholder="Podaj nazwę certyfikatu"
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
                      placeholder="Podaj opis certyfikatu"
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
                      placeholder="Podaj rok zdobycia certyfikatu"
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
                      placeholder="Podaj język obcy"
                      value={language.language}
                      onChange={handleChangeLanguages(language.id, "language")}
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Poziom</legend>
                    <input
                      className="input w-full"
                      placeholder="Podaj poziom znajomości"
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
                    placeholder="Podaj zainteresowanie"
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
          <fieldset className="fieldset md:col-span-2">
            <legend className="fieldset-legend">Klauzula</legend>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Nazwa firmy (jeśli specjalne dla firmy)
              </legend>
              <input
                className="input"
                placeholder="Podaj nazwę firmy"
                value={clauseCompanyName}
                onChange={handleChangeClauseCompanyName}
              />
              <p className="label text-error">Wymagane</p>
            </fieldset>
            {clauseCompanyName === "" || clauseCompanyName === null ? (
              <>
                <textarea
                  className="textarea h-24  w-full"
                  name="description"
                  placeholder="Klauzula"
                  value={clauseText}
                  onChange={handleChangeClauseText}
                />
                <p className="label text-error">Wymagane</p>
              </>
            ) : (
              <>
                <textarea
                  className="textarea h-24  w-full"
                  name="description"
                  placeholder="Klauzula"
                  value={clauseText}
                  onChange={handleChangeClauseText}
                  disabled
                />
                <p className="label text-error">Wymagane {clauseCompanyName}</p>
              </>
            )}
          </fieldset>
        </div>
      </form>
    </>
  );
}
export default ListCreator;
