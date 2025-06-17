import { CVDataOne } from "./types";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full z-50">
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">
            {t("formExtras.addPhoto")}
          </legend>
          <input
            id="add_photo"
            type="file"
            accept="image/*"
            className="hidden"
            placeholder="Dodaj"
            onChange={onPhotoUrlChange}
          />
          <label
            htmlFor="add_photo"
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition"
          >
            <img src="/src/icons/camera.png" className="w-15 h-15" />
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            {t("formExtras.firstname")}
          </legend>
          <input
            className="input"
            placeholder={t("formExtras.enterFirstname")}
            value={firstname}
            onChange={onFirstnameChange}
          />
          {firstname === "" ? (
            <p className="label text-error">{t("formExtras.required")}</p>
          ) : (
            ""
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            {t("formExtras.lastname")}
          </legend>
          <input
            className="input"
            placeholder={t("formExtras.enterLastname")}
            value={lastname}
            onChange={onLastnameChange}
          />
          {lastname === "" ? (
            <p className="label text-error">{t("formExtras.required")}</p>
          ) : (
            ""
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">{t("preview.email")}</legend>
          <input
            className="input"
            placeholder={t("formExtras.enterEmail")}
            value={email}
            onChange={onEmailChange}
          />
          {email === "" ? (
            <p className="label text-error">{t("formExtras.required")}</p>
          ) : (
            ""
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            {t("preview.phonenumber")}
          </legend>
          <input
            className="input"
            type="number"
            placeholder={t("formExtras.enterPhonenumber")}
            value={phonenumber}
            onChange={onPhonenumberChange}
          />
          {phonenumber === 0 ? (
            <p className="label text-error">{t("formExtras.required")}</p>
          ) : (
            ""
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            {t("preview.dateOfBirth")}
          </legend>
          <input
            className="input"
            type="date"
            placeholder={t("formExtras.enterDateOfBirth")}
            value={formatDate(dateOfBirth)}
            max={formatDate(today)}
            onChange={onDateOfBirthChange}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">{t("preview.city")}</legend>
          <input
            className="input"
            placeholder={t("formExtras.enterCity")}
            value={city}
            onChange={onCityChange}
          />
          {city === "" ? (
            <p className="label text-error">{t("formExtras.required")}</p>
          ) : (
            ""
          )}
        </fieldset>
        <fieldset className="fieldset md:col-span-2">
          <legend className="fieldset-legend">{t("preview.bio")}</legend>
          <textarea
            className="textarea w-full h-24"
            placeholder={t("formExtras.enterBio")}
            value={description}
            onChange={onDescriptionChange}
          />
          {description === "" ? (
            <p className="label text-error">{t("formExtras.required")}</p>
          ) : (
            ""
          )}
        </fieldset>
      </div>
    </>
  );
}
export default FormViewOne;
