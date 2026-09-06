import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Building, 
  MapPin,
  ArrowRight,
  Clock
} from "lucide-react";
import auPairImage from "../../assets/Au_Pair.jpg";
import fsjImage from "../../assets/FSJ.jpg";
import blueCardImage from "../../assets/Blue_Card.jpg";
import ausbildungImage from "../../assets/Ausbildung.jpg";
import professionalImage from "../../assets/Professional.jpg";
import visaConsultationImage from "../../assets/Visa_Consultation.jpg";

const services = [
  {
    id: "au_pair",
    title: "Au Pair Program",
    description: "Cultural exchange program with German families. Professional placement and comprehensive support services.",
    icon: Users,
    color: "bg-[#1C3E1F]",
    duration: "6-12 months",
    popular: true,
    features: ["Host family matching", "Contract assistance", "Language support", "Ongoing supervision"],
    image: auPairImage
  },
  {
    id: "fsj_bfd",
    title: "FSJ/BFD Placement",
    description: "Voluntary service year placement in Germany. Social and environmental sector opportunities.",
    icon: Heart,
    color: "bg-[#556B2F]",
    duration: "6-18 months",
    features: ["Organization placement", "Application support", "Visa assistance", "Program coordination"],
    image: fsjImage
  },
  {
    id: "ausbildung",
    title: "Ausbildung Consulting",
    description: "Vocational training placement. Dual education system with theoretical and practical components.",
    icon: GraduationCap,
    color: "bg-[#1C3E1F]",
    duration: "2-3.5 years",
    popular: true,
    features: ["Company placement", "Training contract", "Educational support", "Career development"],
    image: ausbildungImage
  },
  {
    id: "jobseeker",
    title: "Professional Placement",
    description: "Executive job placement services for qualified professionals seeking German employment.",
    icon: Briefcase,
    color: "bg-[#556B2F]",
    duration: "2-6 months",
    features: ["Career assessment", "Employer matching", "Application management", "Negotiation support"],
    image: professionalImage
  },
  {
    id: "blue_card",
    title: "EU Blue Card Services",
    description: "Highly qualified professionals program. Expedited residence permit processing.",
    icon: Building,
    color: "bg-[#1C3E1F]",
    duration: "4-8 weeks",
    features: ["Eligibility assessment", "Documentation review", "Application processing", "Relocation support"],
    image: blueCardImage
  },
  {
    id: "tourist",
    title: "Visa Consultation",
    description: "Tourist and business visa services. Complete application support and documentation.",
    icon: MapPin,
    color: "bg-[#556B2F]",
    duration: "2-4 weeks",
    features: ["Application guidance", "Document preparation", "Appointment scheduling", "Status tracking"],
    image: visaConsultationImage
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive immigration and career placement solutions for Germany. Expert guidance from initial consultation through successful placement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 h-full border-stone-200 bg-white">
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-[#1C3E1F] text-white z-10">
                    Featured
                  </Badge>
                )}
                
                {/* Service Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Processing: {service.duration}</span>
                  </div>
                </CardHeader>
              
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-1.5 mb-4 pb-4 border-b border-stone-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#556B2F] rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={createPageUrl("Contact")} className="block">
                    <Button className="w-full bg-[#1C3E1F] hover:bg-[#2d5a32] transition-all duration-300 text-sm">
                      Request Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link to={createPageUrl("Services")}>
            <Button size="lg" variant="outline" className="border-[#1C3E1F] text-[#1C3E1F] hover:bg-[#1C3E1F] hover:text-white transition-all duration-300">
              View Complete Service Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}