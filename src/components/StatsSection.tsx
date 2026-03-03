import { Users, BookOpen, Award, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Students Supported" },
  { icon: BookOpen, value: "5", label: "Service Pillars" },
  { icon: Award, value: "10+", label: "University Partners" },
  { icon: MapPin, value: "SA", label: "Nationwide Reach" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
