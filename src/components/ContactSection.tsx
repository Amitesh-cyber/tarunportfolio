import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
      className="max-w-2xl"
    >
      <p className="label-caps mb-2">Say Hello</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Connect</h2>
      <p className="text-muted-foreground mb-10">
        I'm always open to discussing new projects, internships, or opportunities in software development and machine learning.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:tk9636410@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <Mail size={14} /> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/tarunkumar0/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
        >
          <Linkedin size={14} /> LinkedIn
        </a>
        <a
          href="https://github.com/spidey1702"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
        >
          <Github size={14} /> GitHub
        </a>
        <a
          href="tel:+917742064059"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
        >
          <Phone size={14} /> +91 7742064059
        </a>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
