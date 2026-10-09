import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ShieldCheck, 
  Search, 
  History, 
  BarChart3, 
  Info, 
  Menu, 
  X, 
  Sparkles,
  Zap
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: ShieldCheck },
    { name: "Analyze", path: "/analyze", icon: Sparkles },
    { name: "History", path: "/history", icon: History },
    { name: "Research", path: "/research", icon: BarChart3 },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
          <div className="brand-icon-wrapper">
            <ShieldCheck size={22} strokeWidth={2.4} />
          </div>
          <span>FakeNews <span className="ai-tag">AI</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={`nav-links ${mobileOpen ? "nav-mobile-open" : ""}`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`nav-link-item ${isActive ? "active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Status Indicator & Quick Action */}
        <div className="nav-actions">
          <div className="status-indicator" title="Multimodal AI Neural Engine Online">
            <span className="pulse-dot"></span>
            <span>AI System Ready</span>
          </div>

          <Link to="/analyze" className="btn btn-primary btn-sm" style={{ display: "none" }}>
            <Zap size={14} /> Analyze
          </Link>

          {/* Mobile hamburger */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
