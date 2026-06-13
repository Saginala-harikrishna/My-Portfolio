import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Leadership", path: "/leadership" },
    { name: "YouTube", path: "/youtube" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}

          <Link
            to="/"
            className="font-semibold text-lg"
          >
            Hari Krishna
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-gray-600 transition"
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Mobile Button */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="md:hidden border-t py-4 flex flex-col gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-600 transition"
              >
                {link.name}
              </Link>
            ))}

          </div>

        )}

      </div>
    </nav>
  );
}