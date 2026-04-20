import Types "../types/enquiry";
import EnquiryLib "../lib/enquiry";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (enquiries : List.List<Types.Enquiry>) {
  var nextEnquiryId : Nat = 0;

  public func submitEnquiry(input : Types.EnquiryInput) : async Types.SubmitResult {
    let now = Time.now();
    let (enquiry, newId) = EnquiryLib.submit(enquiries, nextEnquiryId, input, now);
    nextEnquiryId := newId;
    #ok(enquiry.id);
  };

  public query func getEnquiries() : async [Types.Enquiry] {
    EnquiryLib.getAll(enquiries);
  };
};
