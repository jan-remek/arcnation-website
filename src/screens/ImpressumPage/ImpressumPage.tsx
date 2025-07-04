import React from "react";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const ImpressumPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with logo and back button */}
      <header className="w-full py-6 sm:py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <img
              className="h-6 sm:h-8 w-auto object-contain"
              alt="Arcnation Logo"
              src="/Arnation_Logo_v2.png"
            />
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

      {/* Main content */}
      <main className="w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-12 [font-family:'Open_Sans',Helvetica]">
              Impressum
            </h1>

            <div className="space-y-8 sm:space-y-10">
              {/* Company Information */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 [font-family:'Open_Sans',Helvetica]">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <p className="text-lg sm:text-xl font-semibold text-black mb-4 [font-family:'Open_Sans',Helvetica]">
                    ArcNation
                  </p>
                  <div className="space-y-2 text-base sm:text-lg text-black [font-family:'Open_Sans',Helvetica]">
                    <p>Vertreten durch: Jan Remek</p>
                    <p>Schwedenstraße 2</p>
                    <p>13357 Berlin</p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 [font-family:'Open_Sans',Helvetica]">
                  Kontakt
                </h2>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <p className="text-base sm:text-lg text-black [font-family:'Open_Sans',Helvetica]">
                    E-Mail: <a href="mailto:kontakt@arcnation.de" className="text-[#e99c30] hover:text-[#d38b20] transition-colors duration-200">kontakt@arcnation.de</a>
                  </p>
                </div>
              </section>

              {/* Responsibility */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 [font-family:'Open_Sans',Helvetica]">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <p className="text-base sm:text-lg text-black [font-family:'Open_Sans',Helvetica]">
                    Jan Remek, Anschrift wie oben
                  </p>
                </div>
              </section>

              {/* EU Dispute Resolution */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 [font-family:'Open_Sans',Helvetica]">
                  EU-Streitschlichtung
                </h2>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <p className="text-base sm:text-lg text-black [font-family:'Open_Sans',Helvetica] leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  </p>
                  <p className="mt-2">
                    <a 
                      href="https://ec.europa.eu/consumers/odr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#e99c30] hover:text-[#d38b20] transition-colors duration-200 text-base sm:text-lg [font-family:'Open_Sans',Helvetica] underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                </div>
              </section>
            </div>

            {/* Back to home button */}
            <div className="mt-12 sm:mt-16 text-center">
              <Link to="/">
                <Button className="bg-[#e99c30] text-white px-8 py-3 text-lg font-semibold [font-family:'Open_Sans',Helvetica] hover:bg-[#d38b20] transition-colors duration-200">
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="w-full py-8 bg-neutral-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <img
              className="h-6 sm:h-8 w-auto object-contain"
              alt="Arcnation Logo"
              src="/Arnation_Logo_v2.png"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};