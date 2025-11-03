import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css"

const faqs = [
  {
    question: "How does this work for a sponsor looking to support a lady?",
    answer:
      "As a sponsor, you can browse through verified profiles of ladies seeking genuine support. Once you find someone who aligns with your goals and preferences, you can initiate contact and start building a mutually beneficial connection. Every interaction is private and secure — giving both sides control and comfort.",
  },
  {
    question: "I'm a lady, looking for support. What are the requirements to join?",
    answer:
      "To complete your verification, please submit at least two government-issued photo IDs, along with your NBI and police clearances. You’ll also need to provide a selfie holding one of your valid IDs. These steps ensure that your identity is confirmed, helping us maintain a safe, trustworthy community for both ladies and sponsors.",
  },
  {
    question: "Are the ladies on this site fully verified?",
    answer:
      "Yes, every lady featured on CandySpace goes through a strict verification process. This includes ID submission, clearance checks, and profile reviews by our internal team. We take verification seriously to ensure authenticity and protect the interests of both sponsors and ladies.",
  },
  {
    question: "Is there anything that I can do to avoid becoming a victim of fraud while using your platform?",
    answer:
      "Absolutely. Always communicate through our official platform and avoid sharing personal or financial information outside it. Never send money directly to a user without verification from our support team. We use security measures and a moderation system to keep everyone safe, but staying cautious is key.",
  },
  {
    question: "Can I support more than one lady?",
    answer:
      "Yes, sponsors are free to support more than one lady as long as all relationships remain honest and transparent. Many sponsors choose to support multiple verified ladies, depending on their preferences and goals.",
  },
  {
    question: "Can a lady have more than one sponsor?",
    answer:
      "Yes, as long as all sponsors are aware and agree to the arrangement. CandySpace values open communication and mutual respect — our goal is to create meaningful and safe connections for everyone involved.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black py-16 md:py-20">
      <div className="container mx-auto px-6">
        <p className="text-white/60 text-xs uppercase tracking-wider text-center mb-4">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          How Does{" "}
          <span className="bg-gradient-to-r from-secondary via-purple-500  pacifico-regular to-primary bg-clip-text text-transparent">
            CandySpace
          </span>{" "}
          Work?
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span
                  className={`text-base md:text-lg font-medium ${
                    openIndex === index ? "text-primary" : "text-white"
                  } group-hover:text-primary transition-colors`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="w-5 h-5 text-white group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-start text-white/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white text-lg mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-secondary via-purple-500 to-primary hover:from-primary/90 hover:to-primary text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
