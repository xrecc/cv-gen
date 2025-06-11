import { useState } from "react";
import { CVelements } from "./types";
import { Document, Page, Text, Image, View } from "@react-pdf/renderer";
import CVStyle1 from "./CVstylePreview";
import CVStyleDownload from "./CVstyleDownload";

function CVdownloader({
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
  clauseText,
  styleCV,
}: CVelements) {
  return (
    <>
      <CVStyleDownload
        photoUrl={photoUrl}
        firstname={firstname}
        lastname={lastname}
        email={email}
        phonenumber={phonenumber}
        dateOfBirth={dateOfBirth}
        city={city}
        description={description}
        skills={skills}
        hobbies={hobbies}
        works={works}
        educations={educations}
        certificates={certificates}
        languages={languages}
        clauseText={clauseText}
        styleCV={styleCV}
      />
    </>
  );
}
export default CVdownloader;
