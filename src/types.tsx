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
  works: WorkSet[];
  educations: EducationSet[];
  certificates: CertificateSet[];
  languages: LanguageSet[];
  hobbies: HobbySet[];
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
  onWorksListChange: (newWork: WorkSet[]) => void;
  onEducationsListChange: (newEducation: EducationSet[]) => void;
  onCertificatesListChange: (newCertificate: CertificateSet[]) => void;
  onLanguagesListChange: (newLanguage: LanguageSet[]) => void;
  onHobbiesListChange: (newHobbies: HobbySet[]) => void;
  onClauseCompanyNameChange: (newClauseCompanyName: string) => void;
  onClauseTextChange: (newClauseText: string) => void;
  onStyleCVChange: (newStyleCV: string) => void;
}
export interface CVDataOne {
  photoUrl?: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  dateOfBirth: Date;
  city: string;
  description: string;

  onPhotoUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFirstnameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLastnameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhonenumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateOfBirthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface CVDataTwo {
  skills: SkillSet[];
  works: WorkSet[];
  educations: EducationSet[];
  certificates: CertificateSet[];

  onSkillsListChange: (
    id: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveSkill: (id: string) => void;
  onAddSkill: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onWorksListChange: (
    id: string,
    field: keyof WorkSet
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveWork: (id: string) => void;
  onAddWork: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEducationsListChange: (
    id: string,
    field: keyof EducationSet
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveEducation: (id: string) => void;
  onAddEducation: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCertificatesListChange: (
    id: string,
    field: keyof CertificateSet
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveCertificate: (id: string) => void;
  onAddCertificate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface CVDataThree {
  languages: LanguageSet[];
  hobbies: HobbySet[];
  clauseCompanyName?: string;
  clauseText: string;

  onLanguagesListChange: (
    id: string,
    field: keyof LanguageSet
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveLanguage: (id: string) => void;
  onAddLanguage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onHobbiesListChange: (
    id: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveHobby: (id: string) => void;
  onAddHobby: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClauseCompanyNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClauseTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface SkillSet {
  id: string;
  value: string;
}

export interface HobbySet {
  id: string;
  value: string;
}

export interface WorkSet {
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
export interface CVelements {
  photoUrl: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  dateOfBirth?: Date;
  city: string;
  description: string;
  skills: SkillSet[];
  hobbies: HobbySet[];
  works: WorkSet[];
  educations: EducationSet[];
  certificates: CertificateSet[];
  languages: LanguageSet[];
  clauseText: string;
  styleCV: {
    cvTitle: React.CSSProperties;
    image: React.CSSProperties;
    imageIcon: React.CSSProperties;
    page: React.CSSProperties;
    section: React.CSSProperties;
    data: React.CSSProperties;
    personalData: React.CSSProperties;
    personalInfo: React.CSSProperties;
    info: React.CSSProperties;
    personalDataSection: React.CSSProperties;
    otherDataSection: React.CSSProperties;
    clause: React.CSSProperties;
    skillSection: React.CSSProperties;
    skillText: React.CSSProperties;
    hobbySection: React.CSSProperties;
    hobbyText: React.CSSProperties;
  };
}
