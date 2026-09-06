import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown,
  ChevronRight,
  FileText,
  GraduationCap,
  Languages,
  Building,
  Users,
  Heart,
  MapPin,
  Briefcase,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  Euro,
  Calculator
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const languageLevels = [
  {
    level: "A1",
    title: "Beginner Level A1",
    description: "Start your German journey with basic communication skills",
    keyBenefit: "Perfect for Beginners",
    duration: "8 weeks",
    guidelines: {
      format: "Blended Learning",
      schedule: "2 days online + 3 days offline with tasks",
      hours: "Total 80 hours (40 online + 40 offline)",
      classSize: "Maximum 12 students"
    },
    schedule: [
      { day: "Monday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Tuesday", time: "Self-paced", format: "Offline - Tasks & Exercises" },
      { day: "Wednesday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Thursday", time: "Self-paced", format: "Offline - Tasks & Exercises" },
      { day: "Friday", time: "Self-paced", format: "Offline - Practice & Review" }
    ],
    topics: ["Greetings & Introductions", "Numbers & Time", "Daily Activities", "Basic Shopping", "Simple Conversations"]
  },
  {
    level: "A2",
    title: "Elementary Level A2",
    description: "Build on your basics and handle everyday situations",
    keyBenefit: "Everyday Conversation",
    duration: "8 weeks",
    guidelines: {
      format: "Blended Learning",
      schedule: "2 days online + 3 days offline with tasks",
      hours: "Total 80 hours (40 online + 40 offline)",
      classSize: "Maximum 12 students"
    },
    schedule: [
      { day: "Monday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Tuesday", time: "Self-paced", format: "Offline - Tasks & Exercises" },
      { day: "Wednesday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Thursday", time: "Self-paced", format: "Offline - Tasks & Exercises" },
      { day: "Friday", time: "Self-paced", format: "Offline - Practice & Review" }
    ],
    topics: ["Work & Profession", "Housing & Living", "Health & Body", "Travel & Tourism", "Past Experiences"]
  },
  {
    level: "B1",
    title: "Intermediate Level B1",
    description: "Communicate independently in familiar situations",
    keyBenefit: "Job Application Ready",
    duration: "10 weeks",
    guidelines: {
      format: "Blended Learning",
      schedule: "2 days online + 3 days offline with tasks",
      hours: "Total 100 hours (50 online + 50 offline)",
      classSize: "Maximum 10 students"
    },
    schedule: [
      { day: "Monday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Tuesday", time: "Self-paced", format: "Offline - Tasks & Writing" },
      { day: "Wednesday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Thursday", time: "Self-paced", format: "Offline - Reading & Listening" },
      { day: "Friday", time: "Self-paced", format: "Offline - Practice & Review" }
    ],
    topics: ["Job Applications", "Media & Technology", "Education & Training", "Environment", "Culture & Society"]
  },
  {
    level: "B2",
    title: "Upper Intermediate Level B2",
    description: "Express yourself fluently and understand complex texts",
    keyBenefit: "Professional Fluency",
    duration: "10 weeks",
    guidelines: {
      format: "Blended Learning",
      schedule: "2 days online + 3 days offline with tasks",
      hours: "Total 100 hours (50 online + 50 offline)",
      classSize: "Maximum 10 students"
    },
    schedule: [
      { day: "Monday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Tuesday", time: "Self-paced", format: "Offline - Advanced Tasks" },
      { day: "Wednesday", time: "18:00 - 20:00", format: "Online - Live Session" },
      { day: "Thursday", time: "Self-paced", format: "Offline - Research & Writing" },
      { day: "Friday", time: "Self-paced", format: "Offline - Practice & Review" }
    ],
    topics: ["Professional Communication", "Academic Writing", "Current Affairs", "Literature & Arts", "Business German"]
  }
];

const serviceCategories = [
  {
    id: "visa",
    title: "Visa Services",
    icon: FileText,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    description: "Complete visa application and processing services for various German visa types",
    services: [
      {
        id: "ausbildung_visa",
        title: "Ausbildung Visa",
        description: "Visa for vocational training programs combining work and study in Germany",
        duration: "4-8 weeks",
        keyBenefit: "Complete Training Support",
        features: ["Training place matching", "Visa application support", "Document preparation", "Interview preparation"],
        popular: true
      },
      {
        id: "irv_visa",
        title: "IRV (Job Seeker Visa)",
        description: "Visa for qualified professionals to search for employment in Germany",
        duration: "6-10 weeks",
        keyBenefit: "6-Month Job Search Period",
        features: ["Job search strategy", "Networking support", "Application guidance", "6-month validity"],
        popular: false
      },
      {
        id: "opportunity_card",
        title: "Opportunity Card (Chancenkarte)",
        description: "Points-based visa for skilled workers seeking opportunities in Germany",
        duration: "6-12 weeks",
        keyBenefit: "Points-Based Fast Track",
        features: ["Points assessment", "Application support", "Job search assistance", "Fast-track processing"],
        popular: true
      },
      {
        id: "student_visa",
        title: "Student Visa",
        description: "For international students applying to German universities and colleges",
        duration: "6-12 weeks",
        keyBenefit: "Full Academic Support",
        features: ["University enrollment support", "Financial documentation", "Health insurance", "Blocked account setup"],
        popular: false
      },
      {
        id: "au_pair_visa",
        title: "Au Pair Visa",
        description: "Cultural exchange visa for young people to live with German families",
        duration: "2-4 weeks",
        keyBenefit: "Family Matching Included",
        features: ["Host family matching", "Cultural exchange program", "Language support", "Complete documentation"],
        popular: true
      }
    ]
  },
  {
    id: "language",
    title: "Language Learning (A1-C2)",
    icon: Languages,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    description: "German language courses from beginner to mastery level with blended learning approach",
    isLanguage: true
  },
  {
    id: "anerkennung",
    title: "Anerkennung (Recognition Services)",
    icon: Award,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    description: "Professional qualification recognition for foreign credentials in Germany",
    services: [
      {
        id: "academic_recognition",
        title: "Academic Qualification Recognition",
        description: "Recognition of foreign university degrees and academic qualifications",
        duration: "8-16 weeks",
        keyBenefit: "Full Degree Evaluation",
        features: ["Degree evaluation", "Document translation", "Authority coordination", "Appeal support if needed"]
      },
      {
        id: "professional_recognition",
        title: "Professional License Recognition",
        description: "Recognition for regulated professions (doctors, nurses, engineers, teachers)",
        duration: "12-24 weeks",
        keyBenefit: "Licensed Professional Path",
        features: ["Professional assessment", "Skills gap analysis", "Training guidance", "License application"]
      },
      {
        id: "vocational_recognition",
        title: "Vocational Training Recognition",
        description: "Recognition of foreign vocational qualifications and apprenticeships",
        duration: "6-12 weeks",
        keyBenefit: "Skills Gap Analysis",
        features: ["Skills assessment", "Equivalency determination", "Gap training", "Certificate processing"]
      }
    ]
  },
  {
    id: "ausbildung",
    title: "Ausbildung (Vocational Training)",
    icon: GraduationCap,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    description: "Complete support for dual vocational training programs in Germany",
    services: [
      {
        id: "ausbildung_placement",
        title: "Ausbildung Placement Services",
        description: "Find and secure positions in German dual education training programs",
        duration: "3-6 months",
        keyBenefit: "Direct Company Connections",
        features: ["Program matching", "Company connections", "Application support", "Contract negotiation"],
        popular: true
      },
      {
        id: "ausbildung_preparation",
        title: "Ausbildung Preparation Course",
        description: "Prepare for your Ausbildung with language and professional training",
        duration: "2-3 months",
        keyBenefit: "Language & Culture Ready",
        features: ["Language preparation", "Professional orientation", "Cultural training", "Document support"]
      },
      {
        id: "ausbildung_support",
        title: "Ongoing Ausbildung Support",
        description: "Support during your training period in Germany",
        duration: "Throughout training",
        keyBenefit: "Continuous Mentorship",
        features: ["Academic support", "Workplace guidance", "Legal assistance", "Integration help"]
      }
    ]
  },
  {
    id: "tax",
    title: "Tax Help",
    icon: Calculator,
    color: "from-[#1C3E1F] to-[#2d5a32]",
    description: "Professional tax assistance and consultation for individuals in Germany",
    services: [
      {
        id: "tax_registration",
        title: "Tax Registration & Setup",
        description: "Help with initial tax registration and understanding German tax system",
        duration: "1-2 weeks",
        keyBenefit: "Fast Tax ID Setup",
        features: ["Tax ID registration", "Tax class determination", "System explanation", "Document preparation"]
      },
      {
        id: "tax_return",
        title: "Annual Tax Return (Steuererklärung)",
        description: "Complete preparation and filing of your annual tax return",
        duration: "2-4 weeks",
        keyBenefit: "Maximum Refund Focus",
        features: ["Document collection", "Return preparation", "Online filing", "Refund optimization"]
      },
      {
        id: "tax_consultation",
        title: "Tax Consultation & Planning",
        description: "Professional tax advice and planning for optimal tax benefits",
        duration: "Ongoing",
        keyBenefit: "Personalized Tax Strategy",
        features: ["Tax optimization", "Deduction advice", "Financial planning", "Legal compliance"]
      },
      {
        id: "freelance_tax",
        title: "Freelancer Tax Services",
        description: "Specialized tax support for freelancers and self-employed individuals",
        duration: "Ongoing",
        keyBenefit: "Full Freelance Support",
        features: ["Quarterly filings", "VAT handling", "Business expenses", "Record keeping"]
      }
    ]
  }
];

function LanguageLevelModal({ level }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-[#1C3E1F] hover:bg-stone-50">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl font-bold text-[#1C3E1F] mb-1">{level.level}</h3>
                <h4 className="font-semibold text-gray-900">{level.title}</h4>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-[#1C3E1F] bg-stone-100 px-3 py-1 rounded-full">{level.keyBenefit}</div>
                <div className="text-xs text-gray-500 mt-1">{level.duration}</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">{level.description}</p>
            <Button variant="outline" size="sm" className="w-full border-[#1C3E1F] text-[#1C3E1F] hover:bg-stone-50">
              View Details & Schedule
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <span className="text-[#1C3E1F]">{level.level}</span>
            <span>{level.title}</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            {level.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Duration and Benefit */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-100 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Key Benefit</div>
              <div className="text-xl font-bold text-[#1C3E1F]">{level.keyBenefit}</div>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Duration</div>
              <div className="text-2xl font-bold text-[#1C3E1F]">{level.duration}</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Custom pricing based on your needs</p>
          </div>

          {/* Guidelines */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#1C3E1F]" />
              Course Guidelines
            </h3>
            <div className="bg-stone-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Format:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Schedule:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.schedule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Hours:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.hours}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Class Size:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.classSize}</span>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1C3E1F]" />
              Weekly Schedule
            </h3>
            <div className="space-y-2">
              {level.schedule.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">{item.day}</div>
                    <div className="text-sm text-gray-600">{item.format}</div>
                  </div>
                  <div className="text-sm font-medium text-[#1C3E1F]">{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Covered */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#1C3E1F]" />
              Topics Covered
            </h3>
            <div className="flex flex-wrap gap-2">
              {level.topics.map((topic, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Link to={createPageUrl("Pricing")} className="flex-1">
              <Button variant="outline" className="w-full">
                View Pricing
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")} className="flex-1">
              <Button className="w-full bg-[#1C3E1F] hover:bg-[#2d5a32]">
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Services() {
  const [openSections, setOpenSections] = useState(new Set(["visa"]));
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleSection = (sectionId) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "visa", label: "Visa" },
    { id: "language", label: "Language" },
    { id: "anerkennung", label: "Recognition" },
    { id: "ausbildung", label: "Ausbildung" },
    { id: "tax", label: "Tax Help" },
  ];

  const filteredCategories = activeFilter === "all"
    ? serviceCategories
    : serviceCategories.filter(c => c.id === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#1C3E1F] rounded-full blur-3xl opacity-10 -z-10"></div>
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Comprehensive services to support your German journey. From visa applications to language learning and professional development.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20 text-sm px-4 py-2 shadow-sm">
              ✓ End-to-end Support
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20 text-sm px-4 py-2 shadow-sm">
              ✓ Expert Guidance
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20 text-sm px-4 py-2 shadow-sm">
              ✓ Transparent Pricing
            </Badge>
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === tab.id
                  ? "bg-[#1C3E1F] text-white border-[#1C3E1F]"
                  : "bg-white text-gray-600 border-stone-200 hover:border-[#1C3E1F] hover:text-[#1C3E1F]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Categories */}
        <div className="space-y-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Collapsible
                  open={openSections.has(category.id)}
                  onOpenChange={() => toggleSection(category.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                            <category.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl md:text-3xl font-extrabold text-gray-900 text-left tracking-tight">
                              {category.title}
                            </CardTitle>
                            <p className="text-gray-600 text-left mt-1 font-light">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: openSections.has(category.id) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-6 h-6 text-gray-500" />
                        </motion.div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    {category.isLanguage ? (
                      // Language levels with modals
                      <motion.div 
                        className="grid md:grid-cols-3 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {languageLevels.map((level, idx) => (
                          <motion.div
                            key={level.level}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                          >
                            <LanguageLevelModal level={level} />
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      // Regular services
                      <motion.div 
                        className="grid md:grid-cols-2 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {category.services.map((service, idx) => {
                          const colors = { hover: "hover:border-[#1C3E1F] hover:bg-stone-50", price: "text-[#1C3E1F]", icon: "text-[#1C3E1F]", button: "bg-[#1C3E1F] hover:bg-[#2d5a32]" };
                          
                          return (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                            >
                              <Card className={`relative border-2 hover:shadow-xl transition-all duration-300 ${colors.hover}`}>
                              {service.popular && (
                                <Badge className="absolute top-4 right-4 bg-yellow-500 text-white z-10">
                                  Popular
                                </Badge>
                              )}
                              
                              <CardHeader className="pb-4">
                                <div className="flex justify-between items-start mb-2">
                                  <CardTitle className="text-lg font-bold text-gray-900">
                                    {service.title}
                                  </CardTitle>
                                  <div className="text-right">
                                    <div className={`text-sm font-semibold ${colors.price} bg-stone-100 px-3 py-1 rounded-full`}>
                                      {service.keyBenefit}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                  <Clock className="w-4 h-4" />
                                  <span>Duration: {service.duration}</span>
                                </div>
                                
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {service.description}
                                </p>
                              </CardHeader>
                              
                              <CardContent>
                                <div className="space-y-2 mb-4">
                                  <h4 className="font-semibold text-gray-900 text-sm">What's included:</h4>
                                  {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                      <CheckCircle className={`w-3 h-3 ${colors.icon} flex-shrink-0`} />
                                      <span className="text-sm text-gray-600">{feature}</span>
                                    </div>
                                  ))}
                                </div>

                                <div className="mb-4 pt-2 border-t border-gray-100">
                                  <p className="text-xs text-gray-500 text-center">Custom pricing available</p>
                                </div>

                                <div className="flex gap-2">
                                  <Link to={createPageUrl("Pricing")} className="flex-1">
                                    <Button variant="outline" className="w-full">
                                      View Pricing
                                    </Button>
                                  </Link>
                                  <Link to={createPageUrl("Contact")} className="flex-1">
                                    <Button className={`w-full ${colors.button}`}>
                                      Get Started
                                      <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </Link>
                                </div>
                                </CardContent>
                                </Card>
                                </motion.div>
                                );
                                })}
                      </motion.div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1C3E1F] rounded-full blur-3xl opacity-5 -z-10"></div>
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Why Choose Our Services?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: "98% Success Rate", desc: "Proven track record of successful applications" },
              { icon: Users, title: "Expert Team", desc: "Licensed immigration consultants and career experts" },
              { icon: Clock, title: "Fast Processing", desc: "Streamlined processes for quicker results" },
              { icon: Heart, title: "Personal Support", desc: "Dedicated support throughout your journey" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#1C3E1F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-8 h-8 text-[#1C3E1F]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 bg-[#1C3E1F] rounded-3xl p-12 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1200')] opacity-10 bg-cover bg-center"></div>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to Start Your German Journey?
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-10 font-light relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Get a free consultation to discuss your specific needs and goals
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-[#1C3E1F] hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg px-8">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Jobs")}>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1C3E1F] shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg px-8">
                View Job Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}