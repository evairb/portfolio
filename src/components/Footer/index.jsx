import { profile } from "../../data/portfolio";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <a href="#inicio" className="footer-logo">
          Evair<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} {profile.name}.
          Todos os direitos reservados.
        </p>

        <a href="#inicio" className="footer-top">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}