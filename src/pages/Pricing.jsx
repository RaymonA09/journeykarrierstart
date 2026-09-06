import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  CheckCircle,
  ArrowRight,
  FileText,
  Languages,
  Award,
  GraduationCap,
  Calculator,
  Euro,
  Clock
} from "lucide-react";

const pricingData = [
  {
  category: "Visa Services",
  icon: FileText,
  color: "from-[#1C3E1F] to-[#2d5a32]",
    services: [
      {
        name: "Ausbildung Visa",
        price: "€499",
        duration: "4-8 weeks",
        features: ["Training place matching", "Visa application support", "Document preparation", "Interview preparation"],
        popular: true
      },
      {
        name: "IRV (Job Seeker Visa)",
        price: "€449",
        duration: "6-10 weeks",
        features: ["Job search strategy", "Networking support", "Application guidance", "6-month validity"]
      },
      {
        name: "Opportunity Card (Chancenkarte)",
        price: "€549",
        duration: "6-12 weeks",
        features: ["Points assessment", "Application support", "Job search assistance", "Fast-track processing"],
        popular: true
      },
      {
        name: "Student Visa",
        price: "€399",
        duration: "6-12 weeks",
        features: ["University enrollment support", "Financial documentation", "Health insurance", "Blocked account setup"]
      },
      {
        name: "Au Pair Visa",
        price: "€299",
        duration: "2-4 weeks",
        features: ["Host family matching", "Cultural exchange program", "Language support", "Complete documentation"],
        popular: true
      }
    ]
  },
  {
    category: "Language Learning (A1-C2)",
    icon: Languages,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    services: [
      {
        name: "Level A1 - Beginner",
        price: "€149/month",
        duration: "8 weeks",
        features: ["80 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level A2 - Elementary",
        price: "€159/month",
        duration: "8 weeks",
        features: ["80 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level B1 - Intermediate",
        price: "€169/month",
        duration: "10 weeks",
        features: ["100 hours total", "Blended learning", "Small class size", "Certificate included"],
        popular: true
      },
      {
        name: "Level B2 - Upper Intermediate",
        price: "€179/month",
        duration: "10 weeks",
        features: ["100 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level C1 - Advanced",
        price: "€189/month",
        duration: "12 weeks",
        features: ["120 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level C2 - Mastery",
        price: "€199/month",
        duration: "12 weeks",
        features: ["120 hours total", "Blended learning", "Small class size", "Certificate included"]
      }
    ]
  },
  {
    category: "Anerkennung (Recognition Services)",
    icon: Award,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    services: [
      {
        name: "Academic Qualification Recognition",
        price: "€549",
        duration: "8-16 weeks",
        features: ["Degree evaluation", "Document translation", "Authority coordination", "Appeal support if needed"]
      },
      {
        name: "Professional License Recognition",
        price: "€799",
        duration: "12-24 weeks",
        features: ["Professional assessment", "Skills gap analysis", "Training guidance", "License application"],
        popular: true
      },
      {
        name: "Vocational Training Recognition",
        price: "€449",
        duration: "6-12 weeks",
        features: ["Skills assessment", "Equivalency determination", "Gap training", "Certificate processing"]
      }
    ]
  },
  {
    category: "Ausbildung (Vocational Training)",
    icon: GraduationCap,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    services: [
      {
        name: "Ausbildung Placement Services",
        price: "€799",
        duration: "3-6 months",
        features: ["Program matching", "Company connections", "Application support", "Contract negotiation"],
        popular: true
      },
      {
        name: "Ausbildung Preparation Course",
        price: "€599",
        duration: "2-3 months",
        features: ["Language preparation", "Professional orientation", "Cultural training", "Document support"]
      },
      {
        name: "Ongoing Ausbildung Support",
        price: "€99/month",
        duration: "Throughout training",
        features: ["Academic support", "Workplace guidance", "Legal assistance", "Integration help"]
      }
    ]
  },
  {
    category: "Tax Help",
    icon: Calculator,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    services: [
      {
        name: "Tax Registration & Setup",
        price: "€199",
        duration: "1-2 weeks",
        features: ["Tax ID registration", "Tax class determination", "System explanation", "Document preparation"]
      },
      {
        name: "Annual Tax Return (Steuererklärung)",
        price: "€299",
        duration: "2-4 weeks",
        features: ["Document collection", "Return preparation", "Online filing", "Refund optimization"],
        popular: true
      },
      {
        name: "Tax Consultation & Planning",
        price: "€149/session",
        duration: "Ongoing",
        features: ["Tax optimization", "Deduction advice", "Financial planning", "Legal compliance"]
      },
      {
        name: "Freelancer Tax Services",
        price: "€399/year",
        duration: "Ongoing",
        features: ["Quarterly filings", "VAT handling", "Business expenses", "Record keeping"]
      }
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Transparent pricing for all our services. No hidden fees, just honest rates for quality service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20 text-sm px-4 py-2 shadow-sm">
              ✓ No Hidden Fees
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20 text-sm px-4 py-2 shadow-sm">
              ✓ Flexible Payment Plans
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20 text-sm px-4 py-2 shadow-sm">
              ✓ Money-Back Guarantee
            </Badge>
          </div>
        </motion.div>

        {/* Pricing Categories */}
        <div className="space-y-16">
          {pricingData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {category.category}
                </h2>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, sIndex) => {
                  const colors = { hover: "hover:border-[#1C3E1F] hover:bg-stone-50", price: "text-[#1C3E1F]", button: "bg-[#1C3E1F] hover:bg-[#2d5a32]" };
                  
                  return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIndex * 0.1, duration: 0.4 }}
                  >
                    <Card className={`relative border-2 hover:shadow-xl transition-all duration-300 ${service.popular ? 'border-yellow-300 bg-yellow-50' : colors.hover}`}>
                      {service.popular && (
                        <Badge className="absolute top-4 right-4 bg-yellow-500 text-white z-10 shadow-lg">
                          Popular
                        </Badge>
                      )}
                      
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-3">
                          {service.name}
                        </CardTitle>
                        
                        <div className="mb-4">
                          <div className="flex items-baseline gap-2 mb-1">
                            <Euro className={`w-5 h-5 ${colors.price}`} />
                            <span className={`text-3xl font-extrabold ${colors.price}`}>{service.price.replace('€', '')}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-gray-900 text-sm mb-3">What's included:</h4>
                          {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-2">
                              <CheckCircle className={`w-4 h-4 ${colors.price} flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link to={createPageUrl("Contact")} className="block">
                          <Button className={`w-full ${colors.button} shadow-md hover:shadow-lg transition-all duration-300`}>
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center bg-[#1C3E1F] rounded-3xl p-12 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1200')] opacity-10 bg-cover bg-center"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
            Need a Custom Package?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-10 font-light relative z-10">
            We can create a tailored solution for your specific needs and budget
          </p>
          <Link to={createPageUrl("Contact")} className="relative z-10 inline-block">
            <Button size="lg" className="bg-white text-[#1C3E1F] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg px-8">
              Contact Us for Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing FAQs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Are there payment plans available?</h4>
              <p className="text-gray-600 text-sm">Yes! We offer flexible payment plans for most services. Contact us to discuss options.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What's included in the price?</h4>
              <p className="text-gray-600 text-sm">All listed features are included. No hidden fees or surprise charges.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">We offer a money-back guarantee if we cannot deliver the promised service.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I combine services?</h4>
              <p className="text-gray-600 text-sm">Absolutely! We offer package discounts when you combine multiple services.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}