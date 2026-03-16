import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";

const ResumeSection = () => (
  <section id="resume" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      >
        <p className="label-caps mb-3">Resume</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          My <span className="text-accent">Resume</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.1 }}
        className="rounded-2xl border border-border bg-card p-8 md:p-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent shrink-0">
            <FileText size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-1">Amit Bhardwaj</h3>
            <p className="text-muted-foreground text-sm">
              B.Tech Computer Science &amp; Engineering · CGPA: 8.04 · Lovely Professional University
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: "Programming", value: "Java, Python, HTML5, CSS3" },
            { label: "Data Analytics", value: "Power BI, Pandas, NumPy, Scikit-learn" },
            { label: "DSA Problems", value: "300+ on LeetCode" },
            { label: "Certificates", value: "8+ from Coursera, NPTEL, Infosys" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-background p-4">
              <p className="text-xs font-medium text-accent mb-1">{item.label}</p>
              <p className="text-sm text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/Amit_Bhardwaj_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="/Amit_Bhardwaj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={16} /> View PDF
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
