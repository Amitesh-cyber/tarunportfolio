import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  period: string;
  bullets: string[];
  techStack: string;
  image: string;
  github?: string;
}

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const ProjectCard = ({ title, period, bullets, techStack, image, github }: ProjectCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={spring}
    className="group rounded-2xl bg-card border border-border p-4 transition-shadow duration-200 hover:shadow-lg hover:shadow-accent/5"
  >
    <div
      className="rounded-xl overflow-hidden mb-4 aspect-video bg-secondary flex items-center justify-center border border-border"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="px-1 pb-2">
      <p className="label-caps mb-1">{period}</p>
      <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
      <ul className="space-y-1 mb-3">
        {bullets.slice(0, 2).map((b, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed">
            • {b}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-medium">{techStack}</p>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
