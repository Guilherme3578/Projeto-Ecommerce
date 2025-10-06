import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h2><Link to="/">TechCursos</Link></h2>

      <nav>
        <a href="#">Cursos</a>
        <a href="#">Sobre</a>
        <a href="#">Assine</a>
        <Link to="/login" className="login-btn">Entrar</Link>
        <Link to="/cadastro" className="signup-link">Criar conta</Link>
      </nav>
    </header>
  );
}
