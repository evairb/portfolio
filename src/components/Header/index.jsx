import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./style.css";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#inicio" className="header-logo" onClick={closeMenu}>
          <span className="logo-symbol">E</span>
          <span>Evair<span className="logo-dot">.</span></span>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            className="nav-contact"
            onClick={closeMenu}
          >
            Vamos conversar <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}