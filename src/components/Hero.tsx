import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => (
  <section className="min-h-[85svh] flex items-center px-6 pt-24 pb-16 container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="flex justify-center md:order-2"
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-border shadow-2xl shadow-accent/10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10" />
          <img
            src="amit.jpeg"
            alt="Amit Bhardwaj"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.1 }}
        className="md:order-1"
      >
        <p className="label-caps mb-4">About Me</p>
        <h1
          className="font-display font-bold text-foreground mb-6"
          style={{ fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)" }}
        >
          Hi, I'm Amit{" "}
          <span className="text-accent">Bhardwaj</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
          A computer science engineer passionate about <span className="text-foreground font-medium">data analytics</span>,{" "}
          <span className="text-foreground font-medium">machine learning</span>, and{" "}
          <span className="text-foreground font-medium">problem solving</span>.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          I love turning raw data into actionable insights and building intelligent solutions.
          Currently exploring the intersection of AI, DSA, and real-world applications.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            View Projects <ArrowDown size={14} />
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
