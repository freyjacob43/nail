import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const homeLinks = ["Collection", "About", "Process", "Contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-6 md:px-12"
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(40px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/images/logo.png"
          alt="ONGLERIE BY MEL Logo"
          className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full border-2 border-black shadow-md"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {homeLinks.map((link) => (
          <a
            key={link}
            href={`/#${link.toLowerCase()}`}
            className="font-body text-[13px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            {link}
            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-blush transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </a>
        ))}
        <Link
          to="/shop"
          className="font-body text-[13px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors relative group"
        >
          Shop All
          <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-blush transition-all duration-300 group-hover:w-full group-hover:left-0" />
        </Link>
      </div>

      {/* Book Now */}
      <a
        href="https://wa.me/213553409266"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex bg-foreground text-background rounded-full px-6 py-2.5 font-body text-[13px] font-medium hover:scale-[1.03] transition-transform"
      >
        Book Now
      </a>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-foreground"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[80px] left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 md:hidden"
        >
          {homeLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground"
            >
              {link}
            </a>
          ))}
          <Link
            to="/shop"
            onClick={() => setMobileOpen(false)}
            className="font-body text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground"
          >
            Shop All
          </Link>
          <a
            href="https://wa.me/213553409266"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background rounded-full px-6 py-2.5 font-body text-[13px] font-medium text-center"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

