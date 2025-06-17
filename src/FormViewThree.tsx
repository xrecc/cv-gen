import { CVDataThree } from "./types";
import { useTranslation } from "react-i18next";

function FormViewThree({
  languages,
  links,
  hobbies,
  clauseCompanyName,
  clauseText,
  onLanguagesListChange,
  onRemoveLanguage,
  onAddLanguage,
  onLinksListChange,
  onRemoveLink,
  onAddLink,
  onHobbiesListChange,
  onRemoveHobby,
  onAddHobby,
  onClauseCompanyNameChange,
  onClauseTextChange,
}: CVDataThree) {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full z-50">
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">{t("preview.language")}</legend>
          {languages.map((language) => (
            <>
              <div key={language.id}>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    {t("formExtras.language")}
                  </legend>
                  <input
                    className="input w-full"
                    placeholder={t("formExtras.enterLang")}
                    value={language.language}
                    onChange={onLanguagesListChange(language.id, "language")}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    {t("formExtras.level")}
                  </legend>
                  <input
                    className="input w-full"
                    placeholder={t("formExtras.enterLevel")}
                    value={language.level}
                    onChange={onLanguagesListChange(language.id, "level")}
                  />
                </fieldset>

                <button
                  className="btn btn-error z-100 mt-5"
                  onClick={() => onRemoveLanguage(language.id)}
                >
                  {t("formExtras.delete")}
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary mt-5"
            onClick={onAddLanguage}
          >
            {t("formExtras.addLanguage")}
          </button>
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">{t("preview.link")}</legend>
          {links.map((link) => (
            <>
              <div key={link.id}>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    {t("formExtras.link")}
                  </legend>
                  <input
                    className="input w-full"
                    placeholder={t("formExtras.enterLink")}
                    value={link.link}
                    onChange={onLinksListChange(link.id, "link")}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    {t("formExtras.description")}
                  </legend>
                  <input
                    className="input w-full"
                    placeholder={t("formExtras.enterLinkDesc")}
                    value={link.description}
                    onChange={onLinksListChange(link.id, "description")}
                  />
                </fieldset>

                <button
                  className="btn btn-error z-100 mt-5"
                  onClick={() => onRemoveLink(link.id)}
                >
                  {t("formExtras.delete")}
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary mt-5"
            onClick={onAddLink}
          >
            {t("formExtras.addLink")}
          </button>
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">{t("preview.hobby")}</legend>
          {hobbies.map((hobby) => (
            <>
              <div key={hobby.id}>
                <input
                  className="input w-full"
                  placeholder={t("formExtras.enterHobby")}
                  value={hobby.value}
                  onChange={onHobbiesListChange(hobby.id)}
                />
                <button
                  className="btn btn-error mt-5"
                  onClick={() => onRemoveHobby(hobby.id)}
                >
                  {t("formExtras.delete")}
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary mt-5"
            onClick={onAddHobby}
          >
            {t("formExtras.addHobby")}
          </button>
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">{t("formExtras.clause")}</legend>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              {t("formExtras.companyClause")}
            </legend>
            <input
              className="input w-full"
              placeholder={t("formExtras.enterCompanyName")}
              value={clauseCompanyName}
              onChange={onClauseCompanyNameChange}
            />
          </fieldset>
          {clauseCompanyName === "" || clauseCompanyName === null ? (
            <>
              <textarea
                className="textarea h-24  w-full"
                name="description"
                placeholder={t("formExtras.clause")}
                value={clauseText}
                onChange={onClauseTextChange}
              />
            </>
          ) : (
            <>
              <textarea
                className="textarea h-24 w-full"
                name="description"
                placeholder={t("formExtras.clause")}
                value={clauseText}
                onChange={onClauseTextChange}
                disabled
              />
            </>
          )}
        </fieldset>
      </div>
    </>
  );
}
export default FormViewThree;
