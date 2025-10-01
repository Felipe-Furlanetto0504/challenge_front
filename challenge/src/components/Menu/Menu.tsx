import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="flex space-x-6 text-white font-medium space-y-4 p-2">
      <Link to="/" className="hover:text-gray-200 transition">
        Home
      </Link>
      <Link to="/remedios" className="hover:text-gray-200 transition">
        Rémedios
      </Link>
      <Link to="/contato" className="hover:text-gray-200 transition">
        Contato
      </Link>
      <Link to="/faq" className="hover:text-gray-200 transition">
        Faq
      </Link>
      <Link to="/sobre" className="hover:text-gray-200 transition">
        Sobre
      </Link>
      <Link to="/cadastro" className="hover:text-gray-200 transition">
        Cadastro
      </Link>
      <Link to="/integrantes" className="hover:text-gray-200 transition">
        Integrantes
      </Link>
    </nav>
  );
}
