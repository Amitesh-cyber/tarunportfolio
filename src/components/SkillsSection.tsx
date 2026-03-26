import { motion } from "framer-motion";

const skillGroups = [
  { label: "Languages", items: ["HTML", "C++", "C", "Python"] },
  { label: "Tools & Platforms", items: ["Power BI", "Tableau", "Excel"] },
  { label: "Soft Skills", items: ["Problem-Solving", "Team Player", "Leadership", "Adaptability"] },
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
