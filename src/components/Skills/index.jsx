import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

import { skills } from "../../data/portfolio";
import "./style.css";

export default function Skills() {
  return (
    <section className="section skills" id="habilidades">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Conhecimentos</p>

          <h2 className="section-title">
            Minhas <span className="gradient-text">habilidades</span>
          </h2>

          <p className="section-description">
            Tecnologias e ferramentas que utilizo
            para desenvolver minhas soluções.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card card"
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="skill-icon">
                <Code2 size={25} />
              </div>

              <h3>{skill.category}</h3>
              <p>{skill.description}</p>

              <div className="skill-tags">
                {skill.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}