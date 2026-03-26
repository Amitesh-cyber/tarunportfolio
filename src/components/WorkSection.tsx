import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import airQualityImg from "@/assets/project-air-quality.jpg";
import predictiveImg from "@/assets/project-predictive.jpg";
import churnImg from "@/assets/project-churn.jpg";

const projects = [
  {
    title: "AI-Powered Quiz & Learning Recommendation System",
    period: "April 2025",
    bullets: [
      "Developed a full-stack web application using Python (Django) to deliver AI-driven quizzes, performance tracking, and personalized learning recommendations.",
      "Integrated custom machine learning models and feature engineering pipelines to analyze user responses and identify weak areas.",
      "Improved learning efficiency by enabling personalized recommendations, reducing weak-topic retention gaps by ~35% during testing."
    ],
    techStack: "Python · Django · Machine Learning",
    image: predictiveImg,
    github: "https://github.com/spidey1702",
  },
  {
    title: "Flipkart Sales Analysis Dashboard",
    period: "Oct 2024",
    bullets: [
      "Developed an interactive Power BI dashboard to analyze Flipkart sales data, including revenue trends, product performance, and customer insights.",
      "Performed data cleaning and transformation using Power Query, ensuring accurate and structured datasets for analysis.",
      "Improved decision-making efficiency by providing clear insights, reducing manual analysis effort by ~40%."
    ],
    techStack: "Power BI · Power Query · DAX",
    image: airQualityImg,
    github: "https://github.com/spidey1702",
  }
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
