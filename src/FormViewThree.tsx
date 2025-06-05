import { CVDataThree } from "./types";

function FormViewThree({
  languages,
  hobbies,
  clauseCompanyName,
  clauseText,
  onLanguagesListChange,
  onRemoveLanguage,
  onAddLanguage,
  onHobbiesListChange,
  onRemoveHobby,
  onAddHobby,
  onClauseCompanyNameChange,
  onClauseTextChange,
}: CVDataThree) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
                    onChange={onLanguagesListChange(language.id, "language")}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Poziom</legend>
                  <input
                    className="input w-full"
                    placeholder="Podaj poziom znajomości"
                    value={language.level}
                    onChange={onLanguagesListChange(language.id, "level")}
                  />
                </fieldset>

                <button
                  className="btn btn-error"
                  onClick={() => onRemoveLanguage(language.id)}
                >
                  usuń
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddLanguage}
          >
            Dodaj język
          </button>
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">Zainteresowania</legend>
          {hobbies.map((hobby) => (
            <>
              <div key={hobby.id}>
                <input
                  className="input w-full"
                  placeholder="Podaj zainteresowanie"
                  value={hobby.value}
                  onChange={onHobbiesListChange(hobby.id)}
                />
                <button
                  className="btn btn-error"
                  onClick={() => onRemoveHobby(hobby.id)}
                >
                  usuń
                </button>
              </div>
            </>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddHobby}
          >
            Dodaj zaintersowania
          </button>
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">Klauzula</legend>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Nazwa firmy (jeśli specjalne dla firmy)
            </legend>
            <input
              className="input w-full"
              placeholder="Podaj nazwę firmy"
              value={clauseCompanyName}
              onChange={onClauseCompanyNameChange}
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
                onChange={onClauseTextChange}
              />
              <p className="label text-error">Wymagane</p>
            </>
          ) : (
            <>
              <textarea
                className="textarea h-24 w-full"
                name="description"
                placeholder="Klauzula"
                value={clauseText}
                onChange={onClauseTextChange}
                disabled
              />
              <p className="label text-error">Wymagane {clauseCompanyName}</p>
            </>
          )}
        </fieldset>
      </div>
    </>
  );
}
export default FormViewThree;
