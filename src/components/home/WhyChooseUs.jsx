import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Expert Knowledge",
    description: "Years of hands-on experience with German visa programs, immigration law, and career placement.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=320&fit=crop&crop=center"
  },
  {
    title: "High Success Rate",
    description: "98% of our clients receive visa approval and successful placement on their first application.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=320&fit=crop&crop=center"
  },
  {
    title: "Personal Support",
    description: "A dedicated case manager stays with you from the first consultation through your arrival in Germany.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=320&fit=crop&crop=center"
  },
  {
    title: "Global Reach",
    description: "We serve clients from over 40 countries. Our multilingual team understands your background.",
    image: "https://images.unsplash.com/photo-1526958097901-5e6d742d3371?w=500&h=320&fit=crop&crop=center"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-sm font-semibold text-[#556B2F] uppercase tracking-widest mb-3">Why Choose JKS</p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              The trusted partner for<br />your German journey
            </h2>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed">
              We combine deep expertise, efficient processes, and genuine personal care to deliver outstanding results for every client — regardless of their background or destination.
            </p>
          </div>
        </div>

        {/* Image cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="relative h-64">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-1">{reason.title}</h3>
                  <p className="text-white/80 text-xs leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom full-width visual section */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1400&h=500&fit=crop&crop=center"
            alt="Germany career journey"
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3E1F]/85 to-[#1C3E1F]/40"></div>
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Success is Our Mission
              </h3>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                From your first consultation to your first day at work in Germany — we're with you every step. Our track record speaks for itself.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                {[["1,000+", "Clients Placed"], ["98%", "Visa Success Rate"], ["40+", "Countries Served"], ["5★", "Client Rating"]].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-white">{num}</div>
                    <div className="text-white/70 text-sm">{label}</div>
                  </div>
                ))}
              </div>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-white text-[#1C3E1F] hover:bg-stone-100 font-semibold px-6">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}