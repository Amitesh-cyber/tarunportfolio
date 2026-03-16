import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "Packet Switching Networks and Algorithms", org: "Coursera", date: "Nov 2025" },
  { name: "Computational Theory: Language Principle & Finite Automata", org: "Infosys", date: "Aug 2025" },
  { name: "Master Generative AI & Tools", org: "Infosys", date: "Aug 2025" },
  { name: "Privacy & Security in Online Social Media", org: "NPTEL", date: "Aug 2025" },
  { name: "The Bits & Bytes of Computer Networking", org: "Coursera", date: "Sep 2024" },
  { name: "Introduction to Hardware & Operating Systems", org: "Coursera", date: "Sep 2024" },
  { name: "Computer Communications", org: "Coursera", date: "Feb 2024" },
  { name: "Responsive Web Design", org: "FreeCodeCamp", date: "Dec 2023" },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-24 px-6 container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <p className="label-caps mb-2">Credentials</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Certificates</h2>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {certs.map((cert, i) => (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.05 }}
          className="flex items-start gap-3 rounded-xl border border-border p-4"
        >
          <Award size={16} className="text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">{cert.name}</p>
            <p className="text-xs text-muted-foreground">
              {cert.org} · {cert.date}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CertificatesSection;
