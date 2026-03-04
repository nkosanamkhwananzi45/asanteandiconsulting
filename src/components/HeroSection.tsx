import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="South African students learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div
            className="inline-block mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium tracking-wide">
              Rustenburg, South Africa 🇿🇦
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Further
            <br />
            <span className="text-gradient-gold">Together</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            South Africa's trusted education and skills development consultancy.
            Academic support, professional training, and creative skills — all
            under one roof.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#services">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2 text-base px-8 shadow-warm"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://wa.me/27760884005" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
