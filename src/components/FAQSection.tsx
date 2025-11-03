import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Are your cheats undetected?",
      answer: "Yes, all our products are thoroughly tested and remain undetected. We maintain a 99.9% uptime guarantee and update our software regularly to ensure maximum security.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards (Visa, Mastercard), PayPal, Google Pay, and cryptocurrencies (Bitcoin, Ethereum, Litecoin).",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer refunds within 24 hours of purchase if you experience technical issues that cannot be resolved by our support team. Please review our full refund policy for details.",
    },
    {
      question: "How quickly will I receive my product?",
      answer: "Product access is instant! Once your payment is confirmed, you'll immediately receive download instructions and your license key via email.",
    },
    {
      question: "Is customer support available?",
      answer: "Yes! Our support team is available 24/7 via Discord. We're always here to help with any questions or technical issues you might encounter.",
    },
    {
      question: "Can I use the cheat on multiple PCs?",
      answer: "Each license is tied to a single PC. If you need to use our products on multiple devices, you'll need to purchase additional licenses or contact support for special arrangements.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold mb-4 tracking-wider">SUPPORT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our products and services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/50"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
