import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Asante Andi Consulting" className="h-14 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              South Africa's trusted education and skills development
              consultancy. Further Together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-secondary transition-colors">Academic Support</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">ECD Online Training</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Craft & Tech Skills</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Fashion Design</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Language Programs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                Centurion, Gauteng, South Africa 0157
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                076 088 4005
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Asante Andi Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
