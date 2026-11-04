import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Code2,
} from "lucide-react";

import { profile } from "../../data/portfolio";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-status">
            <span className="status-dot" />
            Disponível para oportunidades
          </div>

          <p className="hero-greeting">Olá, eu sou</p>

          <h1>
            {profile.name.split(" ")[0]}
            <br />
            <span className="gradient-text">
              Bernardino Domingues.
            </span>
          </h1>

          <h2>{profile.role}</h2>

          <p className="hero-description">
            {profile.description}
          </p>

          <div className="hero-location">
            <MapPin size={17} />
            {profile.location}
          </div>

          <div className="hero-buttons">
            <a href="#projetos" className="primary-button">
              Ver projetos <ArrowUpRight size={18} />
            </a>

            <a href="#contato" className="secondary-button">
              Entre em contato
            </a>
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-code-card animate-float">
            <div className="code-header">
              <div className="code-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.jsx</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="code-indent">
                name: <span className="code-blue">"Evair"</span>,
              </p>
              <p className="code-indent">
                role: <span className="code-blue">"Full Stack"</span>,
              </p>
              <p className="code-indent">
                passion: <span className="code-blue">"Technology"</span>,
              </p>
              <p className="code-indent">
                learning: <span className="code-blue">true</span>
              </p>
              <p>{"}"}</p>
            </div>

            <div className="code-footer">
              <Code2 size={16} />
              <span>Building something great</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#sobre" className="hero-scroll">
        <ArrowDown size={18} />
        <span>Role para explorar</span>
      </a>
    </section>
  );
}