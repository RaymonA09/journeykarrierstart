import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import lee from "@/assets/Lee.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background image */}
      <img
        src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&h=900&fit=crop&crop=center"
          alt="Germany skyline"
          className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm mb-8">
            🇩🇪 Germany Immigration & Career Services
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Your Career<br />
            <span className="text-[#8B9556]">in Germany</span><br />
            Starts Here
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
            Professional visa consulting, Ausbildung placement, and immigration support. We guide you from first consultation to a successful career in Germany.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-[#1C3E1F] border-2 border-transparent text-white hover:bg-[#2d5a32] px-10 py-6 text-base font-semibold rounded-full shadow-md">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Services")}>
              <Button size="lg" className="bg-transparent border-2 border-[#ffffff] text-[#ffffff] hover:bg-[#1C3E1F] hover:text-white px-10 py-6 text-base font-semibold rounded-full transition-all duration-300">
                Our Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {["1,000+ Placements", "98% Success Rate", "40+ Countries", "Free Consultation"].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle className="w-4 h-4 text-[#8B9556] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating testimonial card */}
      <div className="absolute bottom-12 right-10 hidden lg:block bg-white rounded-2xl shadow-2xl p-5 w-72">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={lee}
            alt="Client"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">Kryssjan D.</p>
            <p className="text-xs text-[#556B2F] font-medium">🇩🇪 Now working in Parchim</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 italic leading-relaxed">"JKS helped me secure my Ausbildung placement in just 3 months. Truly life-changing support."</p>
        <div className="flex gap-0.5 mt-3">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
        </div>
      </div>

      {/* Floating stat */}
      <div className="absolute top-12 right-10 hidden lg:block bg-[#1C3E1F] text-white rounded-2xl shadow-2xl px-6 py-5 text-center">
        <div className="text-4xl font-bold">98%</div>
        <div className="text-xs text-white/70 mt-1">Visa Approval Rate</div>
      </div>
    </section>
  );
}