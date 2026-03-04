import patternBg from "@/assets/pattern-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image / Pattern Side */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-forest">
              <img
                src={patternBg}
                alt="African-inspired pattern representing AAC's heritage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10 hidden lg:block" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
              Founded on a Vision of{" "}
              <span className="text-gradient-gold">Empowerment</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Asante Andi Consulting was founded by{" "}
                <strong className="text-foreground">Ingrid Andiswa Thomo</strong>{" "}
                with a clear mission: to make quality education and skills
                development accessible to every South African who seeks growth.
              </p>
              <p>
                Based in Rustenburg, North West, we serve students and professionals
                across all nine provinces — from SANTS ECD practitioners to
                postgraduate researchers at South Africa's leading universities.
              </p>
              <p>
                Our name, <em>"Asante"</em>, means{" "}
                <strong className="text-foreground">"thank you"</strong> in
                KiSwahili — a reflection of our deep gratitude for every student
                who trusts us with their educational journey.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-lg text-primary">I</span>
              </div>
              <div>
                <div className="font-display font-bold text-foreground">
                  Ingrid Andiswa Thomo
                </div>
                <div className="text-sm text-muted-foreground">
                  Founder & Lead Consultant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
