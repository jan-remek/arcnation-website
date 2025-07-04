import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { text: "Use Cases", href: "#use-cases" },
    { text: "Customers", href: "#customer-stories" },
    { text: "Pricing", href: "#pricing" },
  ];

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="w-full h-[68vh] sm:h-[90vh] lg:h-[85vh] bg-white overflow-hidden">
      {/* Full-width background container */}
      <div className="relative w-full h-full">
        {/* Background image - updated to use Afilio BTS thumbnail */}
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          alt="Header background"
          src="/Thumbnail_Afilio_BTS.png"
        />

        {/* Gradient overlay - full width - EXACTLY as original */}
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0)_100%)]" />

        {/* Content container - centered and limited width */}
        <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Bar */}
          <header className="relative w-full h-16 sm:h-20 flex items-center justify-between z-20">
            {/* Logo - aligned with content */}
            <div className="flex items-center">
              <img
                className="h-6 sm:h-8 w-auto object-contain"
                alt="Arcnation Logo"
                src="/Arnation_Logo_v2.png"
              />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex gap-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center justify-center font-['Open_Sans',Helvetica] text-white text-lg hover:text-[#e99c30] transition-colors duration-200 cursor-pointer"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center">
              <Link to="/angebot">
                <Button className="w-40 sm:w-[200px] h-10 sm:h-[50px] bg-[#e99c30] rounded-[5px] font-['Open_Sans',Helvetica] font-semibold text-white text-sm sm:text-lg hover:bg-[#d38b20] transition-colors duration-200">
                  Angebot berechnen
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </header>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-16 sm:top-20 left-4 right-4 bg-black/90 backdrop-blur-sm rounded-lg p-6 z-30">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-['Open_Sans',Helvetica] text-white text-lg hover:text-[#e99c30] transition-colors duration-200 py-2 cursor-pointer"
                  >
                    {item.text}
                  </a>
                ))}
                <Link to="/angebot">
                  <Button className="w-full h-12 bg-[#e99c30] rounded-[5px] font-['Open_Sans',Helvetica] font-semibold text-white text-lg hover:bg-[#d38b20] transition-colors duration-200 mt-4">
                    Angebot berechnen
                  </Button>
                </Link>
              </nav>
            </div>
          )}

          {/* Hero Content - Mobile: Vertically centered, Desktop: Vertically centered */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:top-1/2 sm:left-0 sm:transform sm:-translate-y-1/2 sm:translate-x-0 sm:px-0 lg:top-1/2 lg:left-0 lg:right-auto lg:max-w-[700px] lg:transform lg:-translate-y-1/2 lg:translate-x-0 z-10">
            <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] [font-family:'Open_Sans',Helvetica] tracking-[0] mb-4 sm:mb-6 lg:mb-8 text-center sm:text-left">
              Das beste Marketing?<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Deine Kunden!
            </h1>

            <p className="font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-relaxed [font-family:'Open_Sans',Helvetica] mb-6 sm:mb-8 text-center sm:text-left">
              Steigere das Vertrauen, booste Conversions<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>und reduziere Sales Zyklen mit hochwertigen<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Kunden-Testimonial-Videos
            </p>

            <div className="flex justify-center sm:justify-start">
              <Link to="/angebot">
                <Button className="w-full sm:w-48 lg:w-[200px] h-12 sm:h-[50px] bg-[#e99c30] rounded-[5px] text-white text-base sm:text-lg font-semibold [font-family:'Open_Sans',Helvetica] hover:bg-[#d38b20] transition-colors duration-200">
                  Angebot berechnen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};