import { CVDataTwo } from "./types";
import { useTranslation } from "react-i18next";

function FormViewTwo({
  skills,
  works,
  educations,
  certificates,
  onSkillsListChange,
  onRemoveSkill,
  onAddSkill,
  onWorksListChange,
  onRemoveWork,
  onAddWork,
  onEducationsListChange,
  onRemoveEducation,
  onAddEducation,
  onCertificatesListChange,
  onRemoveCertificate,
  onAddCertificate,
}: CVDataTwo) {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full z-50">
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">{t("preview.skill")}</legend>
          {skills.map((skill) => (
            <>
              <div key={skill.id}>
                <input
                  className="input w-full"
                  placeholder={t("formExtras.enterSkill")}
                  value={skill.value}
                  onChange={onSkillsListChange(skill.id)}
                />
                <button
                  className="btn btn-error mt-5"
                  onClick={() => onRemoveSkill(skill.id)}
                >
                  {t("formExtras.delete")}
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary mt-5"
            onClick={onAddSkill}
          >
            {t("formExtras.addSkill")}
          </button>
        </fieldset>

        <fieldset className="fieldset md:col-span-2 mt-10">
          <legend className="fieldset-legend">{t("preview.work")}</legend>
          {works.map((work) => (
            <>
              <div key={work.id}>
                <div key={work.id} className="carousel">
                  <div id={"item1" + work.id} className="carousel-item w-full">
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.nameOfCompany")}
                      </legend>
                      <input
                        className="input"
                        name="nameOfCompany"
                        placeholder={t("formExtras.enterCompanyName")}
                        value={work.nameOfCompany}
                        onChange={onWorksListChange(work.id, "nameOfCompany")}
                      />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.position")}
                      </legend>
                      <input
                        className="input"
                        name="position"
                        placeholder={t("formExtras.enterPosition")}
                        value={work.position}
                        onChange={onWorksListChange(work.id, "position")}
                      />
                    </fieldset>
                  </div>
                  <div id={"item2" + work.id} className="carousel-item w-full">
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.dateOfStart")}
                      </legend>
                      <input
                        className="input"
                        type="month"
                        name="dateOfStart"
                        value={work.dateOfStart}
                        max={work.dateOfEnd}
                        onChange={onWorksListChange(work.id, "dateOfStart")}
                      />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.dateOfEnd")}
                      </legend>
                      <input
                        className="input"
                        name="dateOfEnd"
                        type="month"
                        value={work.dateOfEnd}
                        min={work.dateOfStart}
                        onChange={onWorksListChange(work.id, "dateOfEnd")}
                      />
                    </fieldset>
                  </div>
                  <div id={"item3" + work.id} className="carousel-item w-full">
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.description")}
                      </legend>
                      <textarea
                        className="textarea h-24 w-full"
                        name="description"
                        placeholder={t("formExtras.enterJobDesc")}
                        value={work.description}
                        onChange={onWorksListChange(work.id, "description")}
                      />
                    </fieldset>
                  </div>
                </div>
                <button
                  className="btn btn-error mt-5"
                  onClick={() => onRemoveWork(work.id)}
                >
                  {t("formExtras.delete")}
                </button>
                <div className="flex w-full justify-center gap-2 py-2">
                  <a href={"#item1" + work.id} className="btn btn-xs">
                    1
                  </a>
                  <a href={"#item2" + work.id} className="btn btn-xs">
                    2
                  </a>
                  <a href={"#item3" + work.id} className="btn btn-xs">
                    3
                  </a>
                </div>
              </div>
            </>
          ))}

          <button
            type="button"
            onClick={onAddWork}
            className="btn btn-primary mt-5"
          >
            {t("formExtras.addCompany")}
          </button>
        </fieldset>
        <fieldset className="fieldset md:col-span-2 mt-10">
          <legend className="fieldset-legend">{t("preview.education")}</legend>
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
                        {t("formExtras.nameOfSchool")}
                      </legend>
                      <input
                        className="input"
                        name="nameOfSchool"
                        placeholder={t("formExtras.enterSchoolName")}
                        value={education.nameOfSchool}
                        onChange={onEducationsListChange(
                          education.id,
                          "nameOfSchool"
                        )}
                      />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.fieldOfStudy")}
                      </legend>
                      <input
                        className="input"
                        name="fieldOfStudy"
                        placeholder={t("formExtras.enterField")}
                        value={education.fieldOfStudy}
                        onChange={onEducationsListChange(
                          education.id,
                          "fieldOfStudy"
                        )}
                      />
                    </fieldset>
                  </div>
                  <div
                    id={"item2" + education.id}
                    className="carousel-item w-full"
                  >
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.dateOfStart")}
                      </legend>
                      <input
                        className="input"
                        type="month"
                        name="dateOfStart"
                        value={education.dateOfStart}
                        max={education.dateOfEnd}
                        onChange={onEducationsListChange(
                          education.id,
                          "dateOfStart"
                        )}
                      />
                    </fieldset>
                    <fieldset className="fieldset w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.dateOfEnd")}
                      </legend>
                      <input
                        className="input"
                        type="month"
                        name="dateOfEnd"
                        value={education.dateOfEnd}
                        min={education.dateOfStart}
                        onChange={onEducationsListChange(
                          education.id,
                          "dateOfEnd"
                        )}
                      />
                    </fieldset>
                  </div>
                  <div
                    id={"item3" + education.id}
                    className="carousel-item w-full"
                  >
                    <fieldset className="fieldset md:col-span-2  w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.description")}
                      </legend>
                      <textarea
                        className="textarea h-24  w-full"
                        name="description"
                        placeholder={t("formExtras.enterEdDesc")}
                        value={education.description}
                        onChange={onEducationsListChange(
                          education.id,
                          "description"
                        )}
                      />
                    </fieldset>
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        {t("formExtras.degree")}
                      </legend>
                      <input
                        className="input"
                        name="degree"
                        placeholder={t("formExtras.enterDegree")}
                        value={education.degree}
                        onChange={onEducationsListChange(
                          education.id,
                          "degree"
                        )}
                      />
                    </fieldset>
                  </div>
                </div>
                <button
                  className="btn btn-error mt-5"
                  onClick={() => onRemoveEducation(education.id)}
                >
                  {t("formExtras.delete")}
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
            className="btn btn-primary mt-5"
          >
            {t("formExtras.addSchool")}
          </button>
        </fieldset>
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">
            {t("preview.certificate")}
          </legend>
          {certificates.map((certificate) => (
            <>
              <div key={certificate.id}>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    {t("formExtras.nameOfCertificate")}
                  </legend>
                  <input
                    className="input w-full"
                    placeholder={t("formExtras.enterCertName")}
                    value={certificate.nameOfCertificate}
                    onChange={onCertificatesListChange(
                      certificate.id,
                      "nameOfCertificate"
                    )}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    {t("formExtras.description")}
                  </legend>
                  <input
                    className="input w-full"
                    placeholder={t("formExtras.enterCertDesc")}
                    value={certificate.description}
                    onChange={onCertificatesListChange(
                      certificate.id,
                      "description"
                    )}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    {t("formExtras.certificateYear")}
                  </legend>
                  <input
                    className="input w-full"
                    placeholder={t("formExtras.enterCertYear")}
                    value={certificate.year}
                    onChange={onCertificatesListChange(certificate.id, "year")}
                  />
                </fieldset>
                <button
                  className="btn btn-error mt-5"
                  onClick={() => onRemoveCertificate(certificate.id)}
                >
                  {t("formExtras.delete")}
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary mt-5"
            onClick={onAddCertificate}
          >
            {t("formExtras.addCertificate")}
          </button>
        </fieldset>
      </div>
    </>
  );
}
export default FormViewTwo;
