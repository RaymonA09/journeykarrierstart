import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Mail, FileText, Users, Briefcase, Newspaper, Building, Menu, X } from "lucide-react";
import JKSLogo from "./assets/JKS_LOGO.png";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home"), icon: MapPin },
    { name: "Services", url: createPageUrl("Services"), icon: Briefcase },
    { name: "Jobs", url: createPageUrl("Jobs"), icon: Building },
    { name: "News", url: createPageUrl("News"), icon: Newspaper },
    { name: "Contact", url: createPageUrl("Contact"), icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src={JKSLogo} 
                alt="JKS_Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            <nav className="hidden md:flex space-x-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-[#1C3E1F] text-white"
                      : "text-gray-700 hover:text-[#1C3E1F] hover:bg-stone-100"
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-[#1C3E1F] text-white"
                      : "text-gray-700 hover:text-[#1C3E1F] hover:bg-stone-100"
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1C3E1F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="JKS Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner for German career opportunities. We help you start your journey with expert guidance for Au Pair, Ausbildung, FSJ/BFD, and professional career paths in Germany.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#8B9556]" />
                  <span className="text-gray-400">+49 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#8B9556]" />
                  <span className="text-gray-400">info@journeykarrierstart.de</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Au Pair Program</li>
                <li>FSJ/BFD</li>
                <li>Ausbildung</li>
                <li>Jobseeker Services</li>
                <li>Blue Card Visa</li>
                <li>Tourist Assistance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Success Stories</li>
                <li>Job Opportunities</li>
                <li>News & Updates</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JKS - JourneyKarrierStart. All rights reserved. Professional career services in Germany.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}