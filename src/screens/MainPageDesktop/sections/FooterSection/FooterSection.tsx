import React from "react";
import { Link } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  const footerLinks = [
    { id: 1, text: "Impressum", href: "/impressum", isRoute: true },
    { id: 2, text: "Kontakt", href: "/impressum", isRoute: true }, // Changed to route to impressum
  ];

  return (
    <footer className="w-full py-8 sm:py-12 lg:h-[200px] bg-neutral-100 flex items-center justify-center">
      {/* Content container - centered and limited width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {/* Logo - reduced size by 30% */}
          <div className="flex items-center order-1 sm:order-1">
            <img
              className="h-6 sm:h-8 w-auto object-contain"
              alt="Arcnation Logo"
              src="/Arnation_Logo_v2.png"
            />
          </div>

          {/* Links */}
          <div className="flex gap-4 sm:gap-6 order-2 sm:order-2">
            {footerLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.id}
                  to={link.href}
                  className="font-['Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm leading-relaxed hover:text-[#e99c30] transition-colors duration-200"
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  className="font-['Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm leading-relaxed hover:text-[#e99c30] transition-colors duration-200"
                >
                  {link.text}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};