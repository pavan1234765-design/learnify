import Types "../types/enquiry";
import List "mo:core/List";

module {
  public func submit(
    enquiries : List.List<Types.Enquiry>,
    nextId : Nat,
    input : Types.EnquiryInput,
    now : Int,
  ) : (Types.Enquiry, Nat) {
    let enquiry : Types.Enquiry = {
      id = nextId;
      name = input.name;
      email = input.email;
      phone = input.phone;
      educationLevel = input.educationLevel;
      programType = input.programType;
      countryPreference = input.countryPreference;
      inquiryType = input.inquiryType;
      message = input.message;
      submittedAt = now;
    };
    enquiries.add(enquiry);
    (enquiry, nextId + 1);
  };

  public func getAll(
    enquiries : List.List<Types.Enquiry>
  ) : [Types.Enquiry] {
    enquiries.toArray();
  };
};
