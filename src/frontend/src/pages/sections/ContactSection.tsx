import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEnquiry } from "@/hooks/useEnquiry";
import { CheckCircle2, ChevronDown, Loader2, Lock, Users } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const {
    form,
    updateField,
    submit,
    isSubmitting,
    submitSuccess,
    submitError,
    reset,
  } = useEnquiry();

  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-background"
      data-ocid="contact-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-5">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Start Your Free{" "}
              <span className="text-gradient-primary">
                Academic Consultation
              </span>{" "}
              Today
            </h2>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
              Our experts will analyze your profile and recommend the best
              academic path tailored to your goals.
            </p>

            {/* Human element */}
            <div className="flex items-center gap-3 mb-6 bg-muted/40 border border-border rounded-xl px-4 py-3">
              <div className="w-9 h-9 rounded-full gradient-accent flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-body text-foreground">
                An expert advisor will{" "}
                <span className="font-semibold">
                  personally connect with you
                </span>
                .
              </p>
            </div>

            {/* Social proof */}
            <p className="text-sm font-body text-muted-foreground mb-6">
              <span className="font-semibold text-primary">
                Trusted by 1000+ students
              </span>{" "}
              and professionals across India.
            </p>

            <div className="space-y-4">
              {[
                {
                  label: "Free 1:1 Expert Consultation (No Hidden Charges)",
                  desc: "No fees for your first expert session — ever.",
                },
                {
                  label: "1000+ Students Guided Successfully",
                  desc: "Proven track record across India.",
                },
                {
                  label: "Get a Callback Within 24 Hours",
                  desc: "Quick response from our expert mentors.",
                },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-body font-semibold text-foreground">
                      {label}
                    </div>
                    <div className="text-xs text-muted-foreground font-body">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elevated">
              {/* Urgency badge */}
              <div className="flex items-center justify-center gap-2 bg-destructive/8 text-destructive border border-destructive/20 rounded-full px-4 py-1.5 text-xs font-body font-semibold mb-6 w-fit mx-auto">
                ⚡ Limited consultation slots available today
              </div>

              {submitSuccess ? (
                <div className="text-center py-10" data-ocid="contact-success">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
                    Your consultation request has been received. An expert
                    advisor will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={reset}
                    variant="outline"
                    className="font-body font-semibold"
                    data-ocid="contact-reset"
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                  className="space-y-5"
                  data-ocid="contact-form"
                >
                  {/* Primary 3 fields */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Dr. Priya Sharma"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="font-body"
                      required
                      data-ocid="contact-input-name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="font-body text-sm font-medium"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="font-body"
                      required
                      data-ocid="contact-input-phone"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="font-body"
                      required
                      data-ocid="contact-input-email"
                    />
                  </div>

                  {/* Optional fields toggle */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowMore(!showMore)}
                      className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                      data-ocid="contact.show-more-toggle"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${showMore ? "rotate-180" : ""}`}
                      />
                      Tell us more (optional)
                    </button>
                  </div>

                  {showMore && (
                    <div
                      className="space-y-5 animate-fade-in"
                      data-ocid="contact.optional-fields"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="country"
                            className="font-body text-sm font-medium"
                          >
                            Country Preference
                          </Label>
                          <Input
                            id="country"
                            type="text"
                            placeholder="India, UK, Australia..."
                            value={form.countryPreference}
                            onChange={(e) =>
                              updateField("countryPreference", e.target.value)
                            }
                            className="font-body"
                            data-ocid="contact-input-country"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="font-body text-sm font-medium">
                            Education Level
                          </Label>
                          <Select
                            value={form.educationLevel}
                            onValueChange={(v) =>
                              updateField("educationLevel", v)
                            }
                          >
                            <SelectTrigger
                              className="font-body"
                              data-ocid="contact-select-education"
                            >
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Undergraduate">
                                Undergraduate
                              </SelectItem>
                              <SelectItem value="Postgraduate">
                                Postgraduate
                              </SelectItem>
                              <SelectItem value="Doctorate">
                                Doctorate
                              </SelectItem>
                              <SelectItem value="Executive">
                                Executive
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="font-body text-sm font-medium">
                          Inquiry Type
                        </Label>
                        <Select
                          value={form.inquiryType}
                          onValueChange={(v) => updateField("inquiryType", v)}
                        >
                          <SelectTrigger
                            className="font-body"
                            data-ocid="contact-select-inquiry"
                          >
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AdmissionsGuidance">
                              Admissions Guidance
                            </SelectItem>
                            <SelectItem value="CareerCounselling">
                              Career Counselling
                            </SelectItem>
                            <SelectItem value="StudyAbroad">
                              Study Abroad
                            </SelectItem>
                            <SelectItem value="ResearchSupport">
                              Research Support
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="message"
                          className="font-body text-sm font-medium"
                        >
                          Your Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your academic goals, current qualifications, and what you're looking to achieve..."
                          value={form.message}
                          onChange={(e) =>
                            updateField("message", e.target.value)
                          }
                          className="font-body resize-none"
                          rows={3}
                          data-ocid="contact-textarea-message"
                        />
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <p
                      className="text-sm text-destructive font-body"
                      data-ocid="contact-error"
                    >
                      {submitError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base py-3 shadow-elevated hover:shadow-elevated transition-smooth"
                    data-ocid="contact-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Get My Free Consultation"
                    )}
                  </Button>

                  {/* Security note */}
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-body">
                    <Lock className="w-3.5 h-3.5 shrink-0" />
                    Your data is 100% secure. No spam. Only expert guidance.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
