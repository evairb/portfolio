import "./style.css";
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Layers,
} from "lucide-react";

import { profile } from "../../data/portfolio";

const highlights = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
    "Desenvolvimento de aplicações e sistemas web utilizando Python, Django e React, criando soluções modernas, funcionais e eficientes.",
  },
  {
    icon: Lightbulb,
    title: "Resolução de problemas",
    description:  "Automatização de processos manuais e demorados por meio de soluções RPA, reduzindo custos operacionais e aumentando a produtividade.",
  },
  {
    icon: Layers,
    title: "Aprendizado contínuo",
    description: "Busca constante por novos conhecimentos, tecnologias e boas práticas para desenvolver soluções cada vez melhores.",
  },
];

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Conheça minha trajetória</p>
          <h2 className="section-title">
            Sobre <span className="gradient-text">mim</span>
          </h2>
          <p className="section-description">
            Um pouco sobre minha jornada, meus objetivos
            e minha paixão pela tecnologia.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Olá! Prazer em conhecer você.</h3>

            <p>{profile.about}</p>

            <a href="#contato" className="about-link">
              Vamos conversar →
            </a>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-highlight card"
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="highlight-icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}