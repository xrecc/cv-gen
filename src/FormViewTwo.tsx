import { CVDataTwo } from "./types";

function FormViewTwo({
  skills,
  carriers,
  educations,
  certificates,
  onSkillsListChange,
  onRemoveSkill,
  onAddSkill,
  onCarriersListChange,
  onRemoveCarrier,
  onAddCarrier,
  onEducationsListChange,
  onRemoveEducation,
  onAddEducation,
  onCertificatesListChange,
  onRemoveCertificate,
  onAddCertificate,
}: CVDataTwo) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">Umiejętności</legend>
          {skills.map((skill) => (
            <>
              <div key={skill.id}>
                <input
                  className="input w-full"
                  placeholder="Podaj umiejętność"
                  value={skill.value}
                  onChange={onSkillsListChange(skill.id)}
                />
                <button
                  className="btn btn-error"
                  onClick={() => onRemoveSkill(skill.id)}
                >
                  usuń
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddSkill}
          >
            Dodaj umiejętność
          </button>
        </fieldset>

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
                        onChange={onCarriersListChange(
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
                        onChange={onCarriersListChange(carrier.id, "position")}
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
                        onChange={onCarriersListChange(
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
                        onChange={onCarriersListChange(carrier.id, "dateOfEnd")}
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
                        onChange={onCarriersListChange(
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
                  onClick={() => onRemoveCarrier(carrier.id)}
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
            onClick={onAddCarrier}
            className="btn btn-primary"
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
                      <legend className="fieldset-legend">Nazwa uczelni</legend>
                      <input
                        className="input"
                        name="nameOfSchool"
                        placeholder="Podaj nazwę szkoły/uczelni"
                        value={education.nameOfSchool}
                        onChange={onEducationsListChange(
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
                        onChange={onEducationsListChange(
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
                        onChange={onEducationsListChange(
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
                        onChange={onEducationsListChange(
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
                        onChange={onEducationsListChange(
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
                        onChange={onEducationsListChange(
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
                  onClick={() => onRemoveEducation(education.id)}
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
            onClick={onAddEducation}
            className="btn btn-primary"
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
                  <legend className="fieldset-legend">Nazwa certyfikatu</legend>
                  <input
                    className="input w-full"
                    placeholder="Podaj nazwę certyfikatu"
                    value={certificate.nameOfCertificate}
                    onChange={onCertificatesListChange(
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
                    onChange={onCertificatesListChange(
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
                    onChange={onCertificatesListChange(certificate.id, "year")}
                  />
                </fieldset>
                <button
                  className="btn btn-error"
                  onClick={() => onRemoveCertificate(certificate.id)}
                >
                  usuń
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddCertificate}
          >
            Dodaj certyfikaty
          </button>
        </fieldset>
      </div>
    </>
  );
}
export default FormViewTwo;
