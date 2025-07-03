import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the AI generate personalized applications?",
      answer:
        "Our AI analyzes the job description, matches it with your profile and skills, then generates tailored cover letters and emails that highlight your relevant experience and tech stack knowledge.",
    },
    {
      question: "What happens when I run out of credits?",
      answer:
        "Simply purchase more credits when you need them. There are no monthly fees or subscriptions - you only pay for what you use.",
    },
    {
      question: "Can I edit the generated content?",
      answer:
        "Absolutely! All generated content is fully editable. You can make tweaks, regenerate with different tones, or use our templates as starting points.",
    },
    {
      question: "When will DevAssist be available?",
      answer:
        "We're launching soon! Join our waitlist to get early access and 5 free credits when we go live.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use enterprise-grade security. Your resumes, profiles, and generated content are encrypted and stored securely. We never share your data with third parties.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about DevAssist
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 dark:border-gray-700"
            >
              <AccordionTrigger className="text-left hover:no-underline dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
