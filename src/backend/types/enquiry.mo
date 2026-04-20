module {
  public type EnquiryId = Nat;

  public type EducationLevel = {
    #highSchool;
    #undergraduate;
    #postgraduate;
    #doctorate;
    #other;
  };

  public type ProgramType = {
    #engineering;
    #medicine;
    #business;
    #arts;
    #science;
    #law;
    #other;
  };

  public type InquiryType = {
    #admissionsGuidance;
    #careerCounselling;
    #onlineDistanceEducation;
    #studyAbroad;
    #doctoralExecutiveProgram;
    #universitySelection;
    #thesisWriting;
    #journalPublication;
    #patents;
    #bookPublication;
    #awards;
    #prBranding;
    #fellowships;
    #other;
  };

  public type EnquiryInput = {
    name : Text;
    email : Text;
    phone : Text;
    educationLevel : EducationLevel;
    programType : ProgramType;
    countryPreference : Text;
    inquiryType : InquiryType;
    message : Text;
  };

  public type Enquiry = {
    id : EnquiryId;
    name : Text;
    email : Text;
    phone : Text;
    educationLevel : EducationLevel;
    programType : ProgramType;
    countryPreference : Text;
    inquiryType : InquiryType;
    message : Text;
    submittedAt : Int;
  };

  public type SubmitResult = {
    #ok : EnquiryId;
    #err : Text;
  };
};
