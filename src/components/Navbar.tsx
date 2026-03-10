import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Book Now", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Asante Andi Consulting"
              className="h-12 w-auto rounded-lg shadow-sm"
              loading="eager"
            />
            <span className={`hidden sm:block font-display font-bold text-lg transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Asante Andi
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:0760884005">
              <Button variant="default" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in bg-background/95 backdrop-blur-md rounded-b-xl -mx-4 px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:0760884005">
                <Button variant="default" size="sm" className="gap-2 w-full">
                  <Phone className="w-4 h-4" />
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
