import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/portfolio";
import "./style.css";

export default function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Meu trabalho</p>

          <h2 className="section-title">
            Projetos em <span className="gradient-text">destaque</span>
          </h2>

          <p className="section-description">
            Alguns projetos que representam minha experiência
            e meus conhecimentos em desenvolvimento.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="project-preview">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Projeto ${project.title}`}
                  />
                ) : (
                  <div className="project-placeholder">
                    <Code2 size={48} />
                    {project.private && (
                      <span>PROJETO PRIVADO</span>
                    )}
                  </div>
                )}
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={17} />
                      Código
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={17} />
                      Visualizar
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}