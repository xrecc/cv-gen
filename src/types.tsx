export interface CVData {
  photoUrl?: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  dateOfBirth: Date;
  city: string;
  description: string;
  skills: SkillSet[];
  hobbies: HobbySet[];
  carriers: CarrierSet[];
  educations: EducationSet[];
  certificates: CertificateSet[];
  languages: LanguageSet[];
  clauseCompanyName?: string;
  clauseText: string;
  styleCV: string;

  onPhotoUrlChange: (newPhotoUrl: string) => void;
  onFirstnameChange: (newFirstname: string) => void;
  onLastnameChange: (newLastname: string) => void;
  onEmailChange: (newEmail: string) => void;
  onPhonenumberChange: (newPhonenumber: number) => void;
  onDateOfBirthChange: (newDateOfBirth: Date) => void;
  onCityChange: (newCity: string) => void;
  onDescriptionChange: (newDescription: string) => void;
  onSkillsListChange: (newSkills: SkillSet[]) => void;
  onHobbiesListChange: (newHobbies: HobbySet[]) => void;
  onCarriersListChange: (newCarrier: CarrierSet[]) => void;
  onEducationsListChange: (newEducation: EducationSet[]) => void;
  onCertificatesListChange: (newCertificate: CertificateSet[]) => void;
  onLanguagesListChange: (newLanguage: LanguageSet[]) => void;
  onClauseCompanyNameChange: (newClauseCompanyName: string) => void;
  onClauseTextChange: (newClauseText: string) => void;
  onStyleCVChange: (newStyleCV: string) => void;
}
export interface SkillSet {
  id: string;
  value: string;
}

export interface HobbySet {
  id: string;
  value: string;
}

export interface CarrierSet {
  id: string;
  dateOfStart: string;
  dateOfEnd: string;
  position: string;
  nameOfCompany: string;
  description: string;
}

export interface EducationSet {
  id: string;
  dateOfStart: string;
  dateOfEnd: string;
  nameOfSchool: string;
  fieldOfStudy: string;
  degree: string;
  description: string;
}

export interface CertificateSet {
  id: string;
  nameOfCertificate: string;
  description: string;
  year: string;
}

export interface LanguageSet {
  id: string;
  language: string;
  level: string;
}
