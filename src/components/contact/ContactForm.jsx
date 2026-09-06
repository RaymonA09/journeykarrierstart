import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, User, Mail, Phone, Globe, FileText, AlertCircle } from "lucide-react";
import TermsModal from "./TermsModal";

const serviceOptions = [
  { value: "au_pair", label: "Au Pair Program" },
  { value: "blue_card", label: "EU Blue Card" },
  { value: "student_visa", label: "Student Visa" },
  { value: "work_visa", label: "Work / Ausbildung Visa" },
  { value: "family_reunion", label: "Family Reunion" },
  { value: "business_visa", label: "Business / Tourist Visa" },
  { value: "other", label: "Other / General Inquiry" }
];

const urgencyOptions = [
  { value: "low", label: "Flexible (3+ months)" },
  { value: "medium", label: "Standard (1–3 months)" },
  { value: "high", label: "Urgent (within 1 month)" }
];

export default function ContactForm({ onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    nationality: "",
    service_type: "",
    current_location: "",
    message: "",
    urgency: "medium"
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.service_type) newErrors.service_type = "Please select a service";
    if (!gdprConsent) newErrors.gdpr = "Please accept the data processing terms to proceed";
    if (!termsAgreed) newErrors.terms = "Please read and agree to the Terms & Conditions";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onSubmit(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  return (
    <Card className="bg-white shadow-sm border border-stone-200">
      <CardHeader className="border-b border-stone-100 pb-6">
        <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900">
          <div className="w-8 h-8 bg-[#1C3E1F] rounded-lg flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          Consultation Request
        </CardTitle>
        <p className="text-sm text-gray-500 mt-1">
          Complete the form below. A consultant will respond within 24 business hours.
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Personal Details */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Personal Details</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="full_name" className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="full_name"
                  value={formData.full_name}
                  onChange={(e) => handleChange("full_name", e.target.value)}
                  placeholder="e.g. John Smith"
                  className={errors.full_name ? "border-red-400 focus-visible:ring-red-300" : ""}
                />
                {errors.full_name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.full_name}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className={errors.email ? "border-red-400 focus-visible:ring-red-300" : ""}
                />
                {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="nationality" className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" /> Nationality
              </Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) => handleChange("nationality", e.target.value)}
                placeholder="e.g. Nigerian, Indian, Brazilian"
              />
            </div>
          </div>

          {/* Service Details */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Service Details</p>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="service_type" className="text-sm font-medium text-gray-700">
                  Service Required <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.service_type} onValueChange={(value) => handleChange("service_type", value)}>
                  <SelectTrigger className={errors.service_type ? "border-red-400" : ""}>
                    <SelectValue placeholder="Select the service you require" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service_type && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.service_type}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="current_location" className="text-sm font-medium text-gray-700">
                    Current Location
                  </Label>
                  <Input
                    id="current_location"
                    value={formData.current_location}
                    onChange={(e) => handleChange("current_location", e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                    Timeline
                  </Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message / Background
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Briefly describe your situation, qualifications, and any questions you have..."
                  className="h-28 resize-none"
                />
              </div>
            </div>
          </div>

          {/* GDPR Consent */}
          <div className={`rounded-lg border p-4 bg-stone-50 ${errors.gdpr ? "border-red-300" : "border-stone-200"}`}>
            <div className="flex items-start gap-3">
              <Checkbox
                id="gdpr"
                checked={gdprConsent}
                onCheckedChange={(checked) => {
                  setGdprConsent(checked);
                  if (checked) setErrors(prev => ({ ...prev, gdpr: null }));
                }}
                className="mt-0.5"
              />
              <Label htmlFor="gdpr" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                I consent to JourneyKarrierStart collecting and processing my personal data for the purpose of providing immigration and career consultation services. I understand my data will be handled in accordance with GDPR regulations and will not be shared with third parties without my explicit consent. I may withdraw this consent at any time by contacting <span className="text-[#1C3E1F] font-medium">info@journeykarrierstart.de</span>.
              </Label>
            </div>
            {errors.gdpr && <p className="text-xs text-red-500 flex items-center gap-1 mt-2 ml-7"><AlertCircle className="w-3 h-3" />{errors.gdpr}</p>}
          </div>

          {/* Terms Agreement */}
          <div className={`rounded-lg border p-4 bg-stone-50 ${errors.terms ? "border-red-300" : "border-stone-200"}`}>
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={termsAgreed}
                onCheckedChange={(checked) => {
                  setTermsAgreed(checked);
                  if (checked) setErrors(prev => ({ ...prev, terms: null }));
                }}
                className="mt-0.5"
              />
              <Label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                I have read and agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-[#1C3E1F] font-medium underline underline-offset-2 hover:text-[#2d5a32]"
                >
                  Terms & Conditions
                </button>
                {" "}of JourneyKarrierStart. <span className="text-red-500">*</span>
              </Label>
            </div>
            {errors.terms && <p className="text-xs text-red-500 flex items-center gap-1 mt-2 ml-7"><AlertCircle className="w-3 h-3" />{errors.terms}</p>}
          </div>

          <TermsModal
            open={showTerms}
            onClose={() => setShowTerms(false)}
            onAgree={() => {
              setTermsAgreed(true);
              setErrors(prev => ({ ...prev, terms: null }));
            }}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1C3E1F] hover:bg-[#2d5a32] text-white"
            size="lg"
          >
            {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
            <Send className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-gray-400 text-center">
            All information submitted is encrypted and treated with strict confidentiality.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}