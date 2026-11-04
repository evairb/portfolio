import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { profile } from "../../data/portfolio";
import "./style.css";

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-glow" />

          <div className="contact-content">
            <p className="section-label">Vamos conversar?</p>

            <h2>
              Tem um projeto em mente?
              <br />
              <span className="gradient-text">
                Vamos construir juntos!
              </span>
            </h2>

            <p>
              Estou aberto a oportunidades, parcerias
              e novos desafios profissionais.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="primary-button"
            >
              <Mail size={18} />
              Enviar mensagem
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}