import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import airQualityImg from "@/assets/project-air-quality.jpg";
import predictiveImg from "@/assets/project-predictive.jpg";
import churnImg from "@/assets/project-churn.jpg";

const projects = [
  {
    title: "Air Quality Data Analysis",
    period: "Sep 2025 – Nov 2025",
    bullets: [
      "Explored Indian air quality datasets to identify pollution trends, seasonal variations, and patterns across cities.",
      "Created interactive dashboards in Power BI using DAX measures, slicers, and filters for dynamic exploration.",
    ],
    techStack: "Power BI · Power Query · DAX",
    image: airQualityImg,
    github: "https://github.com/Amitbhardwaj001",
  },
  {
    title: "Predictive Analytics",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Developed ML models using retail datasets to predict outcomes and identify meaningful patterns.",
      "Applied regression and classification algorithms; evaluated with accuracy, precision, recall, and RMSE.",
    ],
    techStack: "Python · Pandas · Scikit-learn · Matplotlib",
    image: predictiveImg,
    github: "https://github.com/Amitbhardwaj001",
  },
  {
    title: "Customer Churn Prediction",
    period: "Dec 2024 – Jan 2025",
    bullets: [
      "Analyzed customer churn dataset to identify patterns and factors affecting retention.",
      "Tracked experiments, logged parameters and metrics, and managed model versions using MLflow.",
    ],
    techStack: "Python · Scikit-learn · MLflow · Pandas",
    image: churnImg,
    github: "https://github.com/Amitbhardwaj001",
  },
];

const WorkSection = () => (
  <section id="projects" className="py-24 px-6 container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <p className="label-caps mb-2">Portfolio</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Projects</h2>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.1 }}
        >
          <ProjectCard {...p} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default WorkSection;
