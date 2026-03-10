import { Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              Ready to Go <span className="text-gradient-gold">Further?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Reach out today and let's discuss how we can support your
              educational and professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://wa.me/27760884005"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-card rounded-xl border border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">076 088 4005</p>
            </a>

            <a
              href="tel:0760884005"
              className="group flex flex-col items-center p-8 bg-card rounded-xl border border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">Call Us</h3>
              <p className="text-sm text-muted-foreground">076 088 4005</p>
            </a>

            <a
              href="https://www.facebook.com/AsanteAndiConsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-card rounded-xl border border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Facebook className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">Facebook</h3>
              <p className="text-sm text-muted-foreground">Asante Andi Consulting</p>
            </a>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Start Your Journey Today
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Whether you need assignment help, want to learn a new skill, or are
              pursuing a qualification — we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/27760884005" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2 text-base px-8 shadow-warm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
