import { useState } from "react";
import { CalendarDays, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const bookingSchema = z.object({
  full_name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

const services = [
  "Academic Support - SANTS Assignment (R550)",
  "Academic Support - SANTS Full Package (R800)",
  "Academic Support - SANTS Premium (R1500)",
  "Academic Support - University Assignment",
  "Academic Support - Masters/PhD Thesis",
  "ECD Online Training - Level 4",
  "ECD Online Training - Level 5",
  "Craft & Tech Skills - Candle Making",
  "Craft & Tech Skills - Digital Marketing",
  "Fashion Design - Shoe Making",
  "Fashion Design - Bag & Belt Making",
  "Language Program - KiSwahili",
  "Language Program - Mandarin",
  "Language Program - Sign Language",
  "Language Program - IsiZulu",
];

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("bookings").insert({
        full_name: result.data.full_name,
        email: result.data.email,
        phone: result.data.phone,
        service: result.data.service,
        message: result.data.message || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Booking Submitted! 🎉",
        description: "We'll get back to you within 24 hours.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Booking Received!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest. Our team will contact you within 24
              hours to confirm your booking and discuss next steps.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ full_name: "", email: "", phone: "", service: "", message: "" });
              }}
              variant="outline"
            >
              Submit Another Booking
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              Book Now
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              Reserve Your <span className="text-gradient-gold">Spot</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill in the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-warm space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  placeholder="e.g. Thabo Mokoena"
                  value={formData.full_name}
                  onChange={(e) => handleChange("full_name", e.target.value)}
                  className={errors.full_name ? "border-destructive" : ""}
                />
                {errors.full_name && (
                  <p className="text-sm text-destructive">{errors.full_name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. thabo@email.co.za"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp *</Label>
                <Input
                  id="phone"
                  placeholder="e.g. 076 088 4005"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                >
                  <SelectTrigger
                    className={errors.service ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-sm text-destructive">{errors.service}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about what you need help with..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2 text-base shadow-warm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <CalendarDays className="w-5 h-5" />
                  Submit Booking
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
