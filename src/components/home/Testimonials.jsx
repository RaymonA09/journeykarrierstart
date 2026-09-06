import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    country: "Spain",
    service: "Au Pair Program",
    rating: 5,
    text: "JKS made my Au Pair journey amazing! They matched me with the perfect host family in Munich and supported me throughout the entire process. I learned German and made lifelong friends!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Ahmed Hassan",
    country: "Egypt",
    service: "Ausbildung",
    rating: 5,
    text: "The team helped me secure an Ausbildung in IT in Berlin. From language preparation to finding the perfect company - their support was incredible. Now I have a great career path!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Priya Sharma",
    country: "India",
    service: "FSJ/BFD",
    rating: 5,
    text: "My FSJ experience was life-changing thanks to JKS! They found me a placement in environmental conservation in Bavaria. Great personal growth and German language skills!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional testimonials from clients who successfully completed their immigration process through our services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8B9556] text-[#8B9556]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-200" />
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.country}</div>
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs border-[#1C3E1F] text-[#1C3E1F]">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-[#1C3E1F]/5 text-[#1C3E1F] px-6 py-3 rounded-lg border border-[#1C3E1F]/10">
            <Star className="w-4 h-4 fill-[#8B9556] text-[#8B9556]" />
            <span className="font-medium">4.9/5 Client Satisfaction Rating • 1,000+ Successful Cases</span>
          </div>
        </div>
      </div>
    </section>
  );
}