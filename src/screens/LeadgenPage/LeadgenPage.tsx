import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const LeadgenPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  // Company logos data - removed Top10Berlin
  const companyLogos = [
    {
      id: 1,
      name: "Afilio",
      logo: "/Afilio_One_Color.png",
    },
    {
      id: 3,
      name: "MOM",
      logo: "/MOM_One_Color.png",
    },
    {
      id: 4,
      name: "Stacey",
      logo: "/STACEY_One Color.png",
    },
    {
      id: 5,
      name: "Groupera",
      logo: "/Groupera_One_Color.png",
    },
  ];

  useEffect(() => {
    // Load Jotform script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/251831347902052';
    script.async = true;
    
    const container = document.getElementById('jotform-container');
    if (container) {
      container.appendChild(script);
      
      // Listen for form load and resize events
      const checkFormHeight = () => {
        const form = container.querySelector('form');
        if (form && containerRef.current) {
          const formHeight = form.scrollHeight;
          if (formHeight > 0) {
            containerRef.current.style.height = `${formHeight + 40}px`; // Add some padding
            setIsFormLoaded(true); // Hide loading text when form is loaded
          }
        }
      };

      // Check height periodically until form loads
      const heightChecker = setInterval(() => {
        checkFormHeight();
        const form = container.querySelector('form');
        if (form) {
          clearInterval(heightChecker);
          // Set up resize observer for dynamic height changes
          const resizeObserver = new ResizeObserver(() => {
            checkFormHeight();
          });
          resizeObserver.observe(form);
        }
      }, 500);

      // Cleanup
      return () => {
        clearInterval(heightChecker);
        if (container && script.parentNode) {
          container.removeChild(script);
        }
      };
    }

    // Cleanup function
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with logo, title and back button */}
      <header className="w-full py-6 sm:py-8 bg-white border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <img
              className="h-6 sm:h-8 w-auto object-contain"
              alt="Arcnation Logo"
              src="/Arnation_Logo_v2.png"
            />
            
            {/* Title in navbar */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black [font-family:'Open_Sans',Helvetica]">
              Angebot berechnen
            </h1>
            
            <Link to="/">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content - auto-sizing to form content */}
      <main className="flex-1 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Jotform Integration - Auto height based on content */}
          <div 
            ref={containerRef}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300" 
            style={{ minHeight: '600px' }}
          >
            <div id="jotform-container" className="w-full h-full">
              {/* Loading text - only show when form is not loaded */}
              {!isFormLoaded && (
                <div className="flex items-center justify-center h-32">
                  <div className="text-gray-500">Formular wird geladen...</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trust Section with Client Logos and Testimonial */}
        <section className="w-full py-8 sm:py-12 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left-aligned heading */}
            <div className="text-left mb-6 sm:mb-8">
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600 [font-family:'Open_Sans',Helvetica]">
                Innovative Unternehmen vertrauen ArcNation
              </h2>
            </div>

            {/* Desktop: Two-column layout */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Left side: Company logos in single row - INCREASED SIZE */}
              <div className="flex items-center justify-start gap-6 xl:gap-8">
                {companyLogos.map((company) => (
                  <div
                    key={company.id}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      className="object-contain h-24 xl:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                ))}
              </div>

              {/* Right side: Philip's testimonial */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                  <p className="font-['Open_Sans',Helvetica] font-normal italic text-black text-base leading-relaxed">
                    „Mit den Videos haben wir einen ganz neuen Ad-Kanal erschlossen – mit 18 % Conversion Rate und 26 % weniger Kosten. Besser gehts nicht!"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src="/Philip Naunin.jpeg"
                    alt="Philip profile"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 min-w-0 flex flex-col justify-center">
                    <p className="font-['Open_Sans',Helvetica] font-bold text-black text-base leading-tight">
                      Philip
                    </p>
                    <p className="font-['Open_Sans',Helvetica] font-normal text-black text-sm leading-tight mt-1">
                      Gründer, Groupera
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet: Horizontal layout - left aligned */}
            <div className="hidden sm:flex lg:hidden items-center justify-start gap-6 md:gap-8 overflow-x-auto pb-2 mb-8">
              {companyLogos.map((company) => (
                <div
                  key={company.id}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="object-contain h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>

            {/* Tablet: Philip's testimonial below logos */}
            <div className="hidden sm:block lg:hidden">
              <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl">
                <div className="mb-4">
                  <p className="font-['Open_Sans',Helvetica] font-normal italic text-black text-base leading-relaxed">
                    „Mit den Videos haben wir einen ganz neuen Ad-Kanal erschlossen – mit 18 % Conversion Rate und 26 % weniger Kosten. Besser gehts nicht!"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src="/Philip Naunin.jpeg"
                    alt="Philip profile"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 min-w-0 flex flex-col justify-center">
                    <p className="font-['Open_Sans',Helvetica] font-bold text-black text-base leading-tight">
                      Philip
                    </p>
                    <p className="font-['Open_Sans',Helvetica] font-normal text-black text-sm leading-tight mt-1">
                      Gründer, Groupera
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Grid layout for logos */}
            <div className="sm:hidden grid grid-cols-2 gap-3 mb-6">
              {companyLogos.map((company) => (
                <div
                  key={company.id}
                  className="flex items-center justify-center p-3 bg-white rounded-lg min-h-[90px]"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="object-contain h-14 w-full max-w-full opacity-70"
                  />
                </div>
              ))}
            </div>

            {/* Mobile: Philip's testimonial below logos */}
            <div className="sm:hidden">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="mb-4">
                  <p className="font-['Open_Sans',Helvetica] font-normal italic text-black text-sm leading-relaxed">
                    „Mit den Videos haben wir einen ganz neuen Ad-Kanal erschlossen – mit 18 % Conversion Rate und 26 % weniger Kosten. Besser gehts nicht!"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src="/Philip Naunin.jpeg"
                    alt="Philip profile"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 min-w-0 flex flex-col justify-center">
                    <p className="font-['Open_Sans',Helvetica] font-bold text-black text-sm leading-tight">
                      Philip
                    </p>
                    <p className="font-['Open_Sans',Helvetica] font-normal text-black text-xs leading-tight mt-1">
                      Gründer, Groupera
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple footer */}
      <footer className="w-full py-8 bg-neutral-100 border-t border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <img
              className="h-6 sm:h-8 w-auto object-contain"
              alt="Arcnation Logo"
              src="/Arnation_Logo_v2.png"
            />
            
            {/* Links */}
            <div className="flex gap-4 sm:gap-6">
              <Link
                to="/impressum"
                className="font-['Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm leading-relaxed hover:text-[#e99c30] transition-colors duration-200"
              >
                Impressum
              </Link>
              <Link
                to="/impressum"
                className="font-['Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm leading-relaxed hover:text-[#e99c30] transition-colors duration-200"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};