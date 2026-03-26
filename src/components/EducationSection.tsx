import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section className="py-24 px-6 container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <p className="label-caps mb-2">Background</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Education</h2>
    </motion.div>
    <div className="space-y-6 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="flex gap-4 items-start"
      >
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <GraduationCap size={18} className="text-foreground" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Lovely Professional University</h3>
          <p className="text-sm text-muted-foreground">B.Tech – Computer Science & Engineering · CGPA: 7.1</p>
          <p className="text-xs text-muted-foreground mt-1">Since Aug 2023 - Present · Phagwara, Punjab</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        className="flex gap-4 items-start"
      >
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <GraduationCap size={18} className="text-foreground" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Kendriya Vidyalaya No.2 Jaipur</h3>
          <p className="text-sm text-muted-foreground">Intermediate · 86%</p>
          <p className="text-xs text-muted-foreground mt-1">April 2018 - March 2020 · Jaipur, Rajasthan</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.2 }}
        className="flex gap-4 items-start"
      >
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <GraduationCap size={18} className="text-foreground" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Kendriya Vidyalaya No.1 Jalandhar</h3>
          <p className="text-sm text-muted-foreground">Matriculation · 86%</p>
          <p className="text-xs text-muted-foreground mt-1">April 2017 - March 2018 · Jalandhar, Punjab</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
