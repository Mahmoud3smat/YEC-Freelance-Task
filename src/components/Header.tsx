import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "الرئيسية", to: "/" },
    { label: "نبذة عنا", to: "/about" },
    { label: "اتصل بنا", to: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] py-3 px-4 md:px-8">
      <div className="container bg-card/95 backdrop-blur-md rounded-2xl flex items-center justify-between py-2 px-6 shadow-lg border border-border/50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-14 h-12 rounded-full flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-cairo font-semibold text-base transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex bg-[#8157BD] text-white font-cairo font-bold px-6 py-2 rounded-lg hover:bg-white border-2 hover:border-[#8157BD] hover:text-[#8157BD] transition-colors"
        >
          سجل الآن
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md mx-auto container mt-2 rounded-2xl border border-border/50 px-6 py-4 space-y-4 shadow-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block font-cairo font-semibold text-base py-2 text-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[#8157BD] text-white font-cairo font-bold px-6 py-2.5 rounded-lg hover:bg-white border-2 hover:border-[#8157BD] hover:text-[#8157BD]"
          >
            سجل الآن
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
