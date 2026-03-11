import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "SANTS Assignment",
    price: "R550",
    period: "per assignment",
    description: "Single assignment help for SANTS students",
    features: [
      "1 assignment completed",
      "Proper referencing",
      "Plagiarism-free work",
      "48-hour turnaround",
    ],
    popular: false,
    color: "border-border",
  },
  {
    name: "SANTS Full Package",
    price: "R800",
    period: "per module",
    description: "Complete module support with all assignments",
    features: [
      "All module assignments",
      "Detailed explanations",
      "Plagiarism-free work",
      "Priority turnaround",
      "WhatsApp support",
    ],
    popular: true,
    color: "border-secondary",
  },
  {
    name: "SANTS Premium",
    price: "R1,500",
    period: "full support",
    description: "End-to-end academic support for the year",
    features: [
      "All modules covered",
      "Exam preparation notes",
      "Plagiarism-free work",
      "24-hour turnaround",
      "Dedicated consultant",
      "Unlimited revisions",
    ],
    popular: false,
    color: "border-border",
  },
];

const otherServices = [
  { service: "University Assignment", price: "From R300", note: "UNISA, UJ, Wits, UCT & more" },
  { service: "Masters / PhD Thesis", price: "Get Quote", note: "Proposal to full thesis" },
  { service: "ECD Level 4 Training", price: "From R2,500", note: "SETA accredited online" },
  { service: "ECD Level 5 Training", price: "From R3,500", note: "SETA accredited online" },
  { service: "Candle Making Course", price: "From R800", note: "Hands-on practical" },
  { service: "Digital Marketing", price: "From R1,200", note: "Social media & ads" },
  { service: "Language Programs", price: "From R500", note: "KiSwahili, Mandarin, Sign Language, IsiZulu" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            SANTS <span className="text-gradient-gold">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Affordable academic support packages designed for SANTS students.
          </p>
        </div>

        {/* SANTS Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl border-2 ${pkg.color} p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-warm ${
                pkg.popular ? "shadow-warm" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {pkg.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {pkg.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">
                  {pkg.price}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  {pkg.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#booking">
                <Button
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Book Now
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Other Services Table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Other <span className="text-gradient-gold">Services</span>
          </h3>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-primary text-primary-foreground text-sm font-semibold">
              <span>Service</span>
              <span className="text-center">Price</span>
              <span className="text-right">Details</span>
            </div>
            {otherServices.map((item, i) => (
              <div
                key={item.service}
                className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm items-center ${
                  i % 2 === 0 ? "bg-card" : "bg-muted/30"
                }`}
              >
                <span className="font-medium text-foreground">{item.service}</span>
                <span className="text-center font-semibold text-secondary">{item.price}</span>
                <span className="text-right text-muted-foreground text-xs">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
