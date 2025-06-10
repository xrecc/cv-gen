import { CVDataOne } from "./types";

function FormViewOne({
  firstname,
  lastname,
  email,
  phonenumber,
  dateOfBirth,
  city,
  description,
  onPhotoUrlChange,
  onFirstnameChange,
  onLastnameChange,
  onEmailChange,
  onPhonenumberChange,
  onDateOfBirthChange,
  onCityChange,
  onDescriptionChange,
}: CVDataOne) {
  const today = new Date();

  const formatDate = (date: Date) => date.toISOString().slice(0, 10);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full z-50">
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">Dodaj zdjęcie</legend>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-md w-full btn-primary"
            placeholder="Dodaj"
            onChange={onPhotoUrlChange}
          ></input>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Imię</legend>
          <input
            className="input"
            placeholder="Wpisz imię"
            value={firstname}
            onChange={onFirstnameChange}
          />
          {firstname === "" ? <p className="label text-error">Wymagane</p> : ""}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Nazwisko</legend>
          <input
            className="input"
            placeholder="Wpisz nazwisko"
            value={lastname}
            onChange={onLastnameChange}
          />
          {lastname === "" ? <p className="label text-error">Wymagane</p> : ""}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">E-mail</legend>
          <input
            className="input"
            placeholder="Wpisz email"
            value={email}
            onChange={onEmailChange}
          />
          {email === "" ? <p className="label text-error">Wymagane</p> : ""}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Numer telefonu</legend>
          <input
            className="input"
            type="number"
            placeholder="Wpisz numer telefonu"
            value={phonenumber}
            onChange={onPhonenumberChange}
          />
          {phonenumber === 0 ? (
            <p className="label text-error">Wymagane</p>
          ) : (
            ""
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Data urodzenia</legend>
          <input
            className="input"
            type="date"
            placeholder="Podaj datę urodzenia"
            value={formatDate(dateOfBirth)}
            max={formatDate(today)}
            onChange={onDateOfBirthChange}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Miejscowość</legend>
          <input
            className="input"
            placeholder="Podaj miejscowość"
            value={city}
            onChange={onCityChange}
          />
          {city === "" ? <p className="label text-error">Wymagane</p> : ""}
        </fieldset>
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">Kilka słów o sobie</legend>
          <textarea
            className="textarea w-full h-24"
            placeholder="Podaj swój opis/cele"
            value={description}
            onChange={onDescriptionChange}
          />
          {description === "" ? (
            <p className="label text-error">Wymagane</p>
          ) : (
            ""
          )}
        </fieldset>
      </div>
    </>
  );
}
export default FormViewOne;
