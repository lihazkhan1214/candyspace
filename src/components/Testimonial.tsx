import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialImage from "@/assets/testimonial.jpg";

const testimonials = [
  {
    name: "Harvey Ross",
    image: testimonialImage,
    text: "I've worked hard for everything. I have, ever since leaving home at the young age of 17. By 24, I had started my own company, and over the years, I built that into a successful portfolio of businesses. Three years ago, I had everything money could buy—except the one thing that truly matters: someone special to share it all with. That changed when a friend recommended CandySpace.",
  },
  {
    name: "Emily Turner",
    image: testimonialImage,
    text: "CandySpace changed my life. I was a student struggling with expenses, and through the platform, I met a mentor who not only helped me financially but inspired me to follow my dreams. Today, I’ve started my own creative studio and couldn’t be more grateful.",
  },
  {
    name: "Liam Carter",
    image: testimonialImage,
    text: "As someone who believed true connections were rare, CandySpace completely surprised me. The platform introduced me to amazing people who shared my vision. One connection turned into a partnership that brought both love and success.",
  },
  {
    name: "Sophia Miller",
    image: testimonialImage,
    text: "I joined CandySpace looking for guidance during my university years, and found much more — motivation, kindness, and someone who genuinely believed in me. It’s a community that builds both confidence and dreams.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-b from-white via-purple-400 to-purple-600 py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Image */}
          <div className="flex justify-center relative z-10 -mb-16">
            <motion.div
              key={testimonials[index].name}
              className="w-32 h-32 rounded-full border-8 border-purple-900 shadow-xl overflow-hidden bg-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-12 pt-20 shadow-2xl relative text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-start gap-3">
                <Quote className="w-10 h-10 text-black flex-shrink-0 mt-1" />
                <p className="text-gray-800 mt-10 leading-relaxed text-sm md:text-base">
                  {testimonials[index].text}
                </p>
              </div>

              <p className="text-gray-900 font-bold text-lg mt-6 text-center">
                {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/30 hover:bg-white/50 rounded-full backdrop-blur-sm transition"
            >
              <ChevronLeft className="text-purple-900 w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white/30 hover:bg-white/50 rounded-full backdrop-blur-sm transition"
            >
              <ChevronRight className="text-purple-900 w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-purple-900" : "bg-white/50"
                } transition`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
