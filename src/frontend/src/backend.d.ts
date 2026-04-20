import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type SubmitResult = {
    __kind__: "ok";
    ok: EnquiryId;
} | {
    __kind__: "err";
    err: string;
};
export interface EnquiryInput {
    inquiryType: InquiryType;
    name: string;
    email: string;
    message: string;
    phone: string;
    programType: ProgramType;
    educationLevel: EducationLevel;
    countryPreference: string;
}
export interface Enquiry {
    id: EnquiryId;
    inquiryType: InquiryType;
    name: string;
    submittedAt: bigint;
    email: string;
    message: string;
    phone: string;
    programType: ProgramType;
    educationLevel: EducationLevel;
    countryPreference: string;
}
export type EnquiryId = bigint;
export enum EducationLevel {
    highSchool = "highSchool",
    other = "other",
    undergraduate = "undergraduate",
    postgraduate = "postgraduate",
    doctorate = "doctorate"
}
export enum InquiryType {
    patents = "patents",
    studyAbroad = "studyAbroad",
    other = "other",
    thesisWriting = "thesisWriting",
    onlineDistanceEducation = "onlineDistanceEducation",
    journalPublication = "journalPublication",
    fellowships = "fellowships",
    awards = "awards",
    careerCounselling = "careerCounselling",
    prBranding = "prBranding",
    admissionsGuidance = "admissionsGuidance",
    doctoralExecutiveProgram = "doctoralExecutiveProgram",
    universitySelection = "universitySelection",
    bookPublication = "bookPublication"
}
export enum ProgramType {
    law = "law",
    other = "other",
    arts = "arts",
    medicine = "medicine",
    engineering = "engineering",
    business = "business",
    science = "science"
}
export interface backendInterface {
    getEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(input: EnquiryInput): Promise<SubmitResult>;
}
