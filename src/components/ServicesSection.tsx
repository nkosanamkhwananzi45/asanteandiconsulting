import {
  GraduationCap,
  Baby,
  Scissors,
  Shirt,
  Languages,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Academic Support",
    description:
      "Assignment assistance, thesis support, and data analysis for SANTS, UNISA, UJ, Wits, UCT, and more.",
    highlights: ["SANTS Packages from R550", "All SA Universities", "Masters & PhD Support"],
    color: "primary" as const,
  },
  {
    icon: Baby,
    title: "ECD Online Training",
    description:
      "Level 4 & 5 ECD practitioner qualifications through accredited online programs.",
    highlights: ["SETA Accredited", "Online & Flexible", "Practical Skills"],
    color: "secondary" as const,
  },
  {
    icon: Scissors,
    title: "Craft & Tech Skills",
    description:
      "Learn income-generating craft and technical skills. From candle making to digital marketing.",
    highlights: ["Hands-on Training", "Business Skills", "Income Generation"],
    color: "accent" as const,
  },
  {
    icon: Shirt,
    title: "Fashion Design",
    description:
      "Shoe, bag, and belt making courses for aspiring fashion entrepreneurs.",
    highlights: ["Practical Workshops", "Start Your Brand", "Expert Trainers"],
    color: "primary" as const,
  },
  {
    icon: Languages,
    title: "Language Programs",
    description:
      "Learn KiSwahili, Mandarin, Sign Language, and IsiZulu with professional instruction.",
    highlights: ["4 Languages", "All Levels", "Cultural Immersion"],
    color: "secondary" as const,
  },
];

const colorMap = {
  primary: {
    bg: "bg-primary/10",
    icon: "text-primary",
    badge: "bg-primary/10 text-primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    icon: "text-secondary",
    badge: "bg-secondary/10 text-secondary",
  },
  accent: {
    bg: "bg-accent/10",
    icon: "text-accent",
    badge: "bg-accent/10 text-accent",
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Five Pillars of <span className="text-gradient-gold">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive education and skills development services tailored for
            South African professionals and learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className="group bg-card rounded-xl p-8 border border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${colors.badge}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
