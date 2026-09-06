import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Calendar
} from "lucide-react";

export default function ContactInfo() {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-[#1C3E1F]" />
          Get In Touch
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#1C3E1F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#1C3E1F]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+49 XXX XXX XXXX</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9:00-18:00 CET</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#1C3E1F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#1C3E1F]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">info@visaexpert.de</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#1C3E1F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#1C3E1F]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Office</h3>
              <p className="text-gray-600">
                Hauptstraße 123<br />
                10115 Berlin, Germany
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#1C3E1F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-[#1C3E1F]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Schedule Call</h3>
              <p className="text-gray-600">Book a consultation</p>
              <Badge className="mt-1 bg-[#1C3E1F]/10 text-[#1C3E1F]">
                Available This Week
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday</span>
              <span className="font-medium">9:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday</span>
              <span className="font-medium">10:00 - 14:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span className="text-red-600">Closed</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1C3E1F]/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-[#1C3E1F]" />
            <span className="font-semibold text-[#1C3E1F]">Emergency Support</span>
          </div>
          <p className="text-gray-700 text-sm">
            For urgent visa matters, we offer 24/7 emergency support for existing clients.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}