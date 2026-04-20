import Types "types/enquiry";
import EnquiryMixin "mixins/enquiry-api";
import List "mo:core/List";

actor {
  let enquiries = List.empty<Types.Enquiry>();

  include EnquiryMixin(enquiries);
};
