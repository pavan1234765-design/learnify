import {
  EducationLevel,
  type EnquiryInput,
  InquiryType,
  ProgramType,
  createActor,
} from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useState } from "react";

export interface EnquiryFormState {
  name: string;
  email: string;
  phone: string;
  educationLevel: string;
  programType: string;
  countryPreference: string;
  inquiryType: string;
  message: string;
}

const defaultState: EnquiryFormState = {
  name: "",
  email: "",
  phone: "",
  educationLevel: "undergraduate",
  programType: "science",
  countryPreference: "India",
  inquiryType: "admissionsGuidance",
  message: "",
};

function toEnquiryInput(form: EnquiryFormState): EnquiryInput {
  const educationMap: Record<string, EducationLevel> = {
    undergraduate: EducationLevel.undergraduate,
    postgraduate: EducationLevel.postgraduate,
    doctorate: EducationLevel.doctorate,
    highSchool: EducationLevel.highSchool,
    other: EducationLevel.other,
  };

  const programMap: Record<string, ProgramType> = {
    science: ProgramType.science,
    engineering: ProgramType.engineering,
    business: ProgramType.business,
    arts: ProgramType.arts,
    medicine: ProgramType.medicine,
    law: ProgramType.law,
    other: ProgramType.other,
  };

  const inquiryMap: Record<string, InquiryType> = {
    admissionsGuidance: InquiryType.admissionsGuidance,
    careerCounselling: InquiryType.careerCounselling,
    studyAbroad: InquiryType.studyAbroad,
    onlineDistanceEducation: InquiryType.onlineDistanceEducation,
    doctoralExecutiveProgram: InquiryType.doctoralExecutiveProgram,
    universitySelection: InquiryType.universitySelection,
    thesisWriting: InquiryType.thesisWriting,
    journalPublication: InquiryType.journalPublication,
    patents: InquiryType.patents,
    bookPublication: InquiryType.bookPublication,
    awards: InquiryType.awards,
    prBranding: InquiryType.prBranding,
    fellowships: InquiryType.fellowships,
    other: InquiryType.other,
  };

  return {
    name: form.name,
    email: form.email,
    phone: form.phone,
    educationLevel:
      educationMap[form.educationLevel] ?? EducationLevel.undergraduate,
    programType: programMap[form.programType] ?? ProgramType.other,
    countryPreference: form.countryPreference,
    inquiryType: inquiryMap[form.inquiryType] ?? InquiryType.admissionsGuidance,
    message: form.message,
  };
}

export function useEnquiry() {
  const { actor, isFetching } = useActor(createActor);
  const [form, setForm] = useState<EnquiryFormState>(defaultState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField<K extends keyof EnquiryFormState>(
    field: K,
    value: EnquiryFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSubmitError(null);
  }

  function reset() {
    setForm(defaultState);
    setSubmitSuccess(false);
    setSubmitError(null);
  }

  async function submit() {
    if (!form.name || !form.email || !form.phone) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    if (!actor || isFetching) {
      setSubmitError("Connecting to backend, please try again.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const input: EnquiryInput = toEnquiryInput(form);
      const result = await actor.submitEnquiry(input);
      if (result.__kind__ === "err") {
        setSubmitError(result.err || "Submission failed. Please try again.");
      } else {
        setSubmitSuccess(true);
        setForm(defaultState);
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    updateField,
    reset,
    submit,
    isSubmitting,
    submitSuccess,
    submitError,
  };
}
