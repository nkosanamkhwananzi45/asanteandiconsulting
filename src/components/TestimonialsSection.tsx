import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Thandi M.",
    initials: "TM",
    role: "SANTS Student",
    text: "Asante Andi helped me complete my assignments on time with top marks. I was struggling to balance work and studies — they made it possible!",
    rating: 5,
  },
  {
    name: "Sipho K.",
    initials: "SK",
    role: "UNISA Graduate",
    text: "The tutoring sessions were a game-changer. I finally understood research methodology and passed with distinction. Highly recommend!",
    rating: 5,
  },
  {
    name: "Nomsa D.",
    initials: "ND",
    role: "Computer Literacy Client",
    text: "I went from barely knowing how to use a computer to confidently creating spreadsheets and presentations. Patient and professional team.",
    rating: 5,
  },
  {
    name: "James R.",
    initials: "JR",
    role: "Business Owner",
    text: "Their CV writing service landed me three interviews in two weeks. The document was professional and truly represented my skills.",
    rating: 5,
  },
  {
    name: "Lerato P.",
    initials: "LP",
    role: "Teaching Student",
    text: "I was behind on multiple SANTS modules. Asante Andi helped me catch up and submit quality work. Worth every rand!",
    rating: 4,
  },
  {
    name: "Bongani S.",
    initials: "BS",
    role: "Career Changer",
    text: "The skills training programme gave me the confidence to switch careers. Now I'm working in admin and loving it. Thank you, Asante Andi!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Real results from real students and professionals we've helped along their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-card border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="p-6 pt-8">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < t.rating
                          ? "text-secondary fill-secondary"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 bg-primary text-primary-foreground">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
