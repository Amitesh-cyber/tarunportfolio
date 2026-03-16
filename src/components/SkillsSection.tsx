import { motion } from "framer-motion";

const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "HTML5", "CSS3"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "Cursor", "VS Code", "IntelliJ IDEA"] },
  { label: "Data Analytics", items: ["Jupyter", "Power BI", "NumPy", "Pandas", "Seaborn", "Scikit-learn"] },
  { label: "Soft Skills", items: ["Leadership", "Resilience", "Quick Learner", "Problem Solving"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <p className="label-caps mb-2">Expertise</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Skills & Tools</h2>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.08 }}
        >
          <h3 className="label-caps mb-4">{group.label}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
