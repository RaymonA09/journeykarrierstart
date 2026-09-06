import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight
} from "lucide-react";

import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import ProcessSteps from "../components/home/ProcessSteps";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ServicesOverview />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ProcessSteps />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <WhyChooseUs />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Testimonials />
      </motion.div>
      
      {/* CTA Section */}
      <motion.section 
        className="bg-[#234d26] py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Schedule Your Consultation
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Professional immigration consultation with experienced advisors. Discuss your eligibility, requirements, and begin your application process.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-[#1C3E1F] hover:bg-stone-100 w-full sm:w-auto transition-all duration-300 px-8">
                Request Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Services")}>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1C3E1F] w-full sm:w-auto transition-all duration-300 px-8">
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}