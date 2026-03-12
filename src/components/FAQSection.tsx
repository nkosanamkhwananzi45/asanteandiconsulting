import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are SANTS assignments and who needs them?",
    a: "SANTS (South African National Tutor Services) assignments are required coursework for teachers pursuing qualifications through distance learning. We help current and aspiring educators complete these assignments to a high standard.",
  },
  {
    q: "How much do SANTS assignment packages cost?",
    a: "We offer three packages: Basic (R550) covers one assignment with research and formatting. Standard (R800) includes two assignments with referencing and plagiarism checks. Premium (R1,500) covers three assignments with priority turnaround, unlimited revisions, and a plagiarism report.",
  },
  {
    q: "What is the turnaround time for assignments?",
    a: "Standard turnaround is 5–7 business days. Our Premium package includes priority delivery within 3–4 business days. Rush orders can be arranged — contact us on WhatsApp to discuss deadlines.",
  },
  {
    q: "Do you guarantee plagiarism-free work?",
    a: "Yes. All assignments go through plagiarism-checking software. Our Standard and Premium packages include a full plagiarism report so you can submit with confidence.",
  },
  {
    q: "What other services do you offer besides assignments?",
    a: "We provide computer literacy training, CV and cover letter writing, ECD practitioner training, craft and technology skills, fashion and design courses, and language classes including English, isiZulu, and more.",
  },
  {
    q: "How do I get started or book a service?",
    a: "Simply scroll to our Booking section and fill in the form, or message us directly on WhatsApp at 076 088 4005. We'll confirm your booking and get started right away.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              Common <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Everything you need to know about our services, pricing, and process.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-warm transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
