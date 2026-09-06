const steps = [
  {
    id: 1,
    title: "Free Consultation",
    description: "Speak with an expert who evaluates your profile, goals, and eligibility for the right program.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Language Preparation",
    description: "We assess your German level and enroll you in targeted language courses tailored to your visa requirements.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Document Processing",
    description: "Our team prepares, translates, and verifies all required documents — eliminating errors and delays.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Placement & Matching",
    description: "We connect you with the right host family, employer, or training company based on your profile.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Visa Application",
    description: "We submit and monitor your visa application, coordinating directly with embassies and authorities.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Arrival & Settling In",
    description: "From airport pickup logistics to accommodation guidance, we ensure a smooth transition into German life.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=300&fit=crop&crop=center"
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#556B2F] uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your 6-Step Journey to Germany
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A clear, proven process — from first consultation to your successful arrival in Germany.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-200">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-9 h-9 bg-[#1C3E1F] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{step.id}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}