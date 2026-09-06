import { useState } from "react";
import { Inquiry } from "@/entities/Inquiry";
import { SendEmail } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle,
  Globe,
  Shield,
  Award
} from "lucide-react";

import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import FAQ from "../components/contact/FAQ";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // Save inquiry to database
      await Inquiry.create(formData);
      
      // Send notification email to company
      await SendEmail({
        to: "info@visaexpert.de", // Replace with actual email
        subject: `New Inquiry: ${formData.service_type} - ${formData.full_name}`,
        body: `
New inquiry received from ${formData.full_name}:

Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Nationality: ${formData.nationality || 'Not provided'}
Service: ${formData.service_type}
Current Location: ${formData.current_location || 'Not provided'}
Urgency: ${formData.urgency}

Message:
${formData.message || 'No additional message provided'}

Please follow up with this potential client.
        `
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              We've received your inquiry and will contact you within 24 hours to discuss your immigration needs.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="border border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              Submit Another Inquiry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to start your German immigration journey? Contact our experts for personalized guidance and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ Free Initial Consultation
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ 24h Response Time
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ Expert Immigration Lawyers
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <ContactInfo />
            <FAQ />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Thousands Trust VISAExpert
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1C3E1F]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[#1C3E1F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trusted & Secure</h3>
              <p className="text-gray-600 text-sm">Your data is protected with bank-level security</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1C3E1F]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-[#1C3E1F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Success</h3>
              <p className="text-gray-600 text-sm">95% success rate with 500+ approved applications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1C3E1F]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#1C3E1F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">Serving clients from 50+ countries worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}