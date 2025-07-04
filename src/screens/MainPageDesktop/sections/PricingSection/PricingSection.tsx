import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

// Feature item component for pricing cards
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center mb-3">
    <div className="w-[21px] h-5 bg-[#e99c304c] rounded-[10px] flex items-center justify-center mr-2 flex-shrink-0">
      <div className="w-[5px] h-[5px] bg-[#e99c30] rounded-[2.5px]" />
    </div>
    <div className="font-normal text-black text-sm sm:text-base lg:text-lg leading-relaxed [font-family:'Open_Sans',Helvetica]">
      {text}
    </div>
  </div>
);

// Extra feature item component for the extras section
const ExtraFeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center mb-3">
    <img
      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 object-cover flex-shrink-0"
      alt="Check"
      src="/check (3).png"
    />
    <div className="font-normal text-black text-sm sm:text-base lg:text-lg leading-relaxed [font-family:'Open_Sans',Helvetica]">
      {text}
    </div>
  </div>
);

export const PricingSection = (): JSX.Element => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Data for pricing cards
  const pricingCards = [
    {
      title: "Basic",
      subtitle: "Basic YouTube Look",
      price: "1.950 €",
      description:
        "Einfache, schnelle Videos, die mit kleinem Budget die Botschaft auf den Punkt bringen.",
      features: [
        "1x Video",
        "120 Sekunden incl.",
        "FHD & 4k Export",
        "3x Interviews",
        "1x Shooting Day",
        "2x Feedback Loops",
      ],
      featured: false,
      subtitleBgColor: "bg-[#e99c301c]",
      subtitleTextColor: "text-black",
      buttonBgColor: "bg-[#e99c306e]",
    },
    {
      title: "Pro",
      subtitle: "Professional TV Look",
      price: "4.050 €",
      description:
        "Hochwertige, Videos, die Vertrauen aufbauen und durch Storytelling verkaufen.",
      features: [
        "1x Video",
        "120 Sekunden incl.",
        "FHD & 4k Export",
        "3x Interviews",
        "1x Shooting Day",
        "2x Feedback Loops",
      ],
      featured: true,
      subtitleBgColor: "bg-[#e99c30]",
      subtitleTextColor: "text-white",
      buttonBgColor: "bg-[#e99c30]",
    },
    {
      title: "Cinema",
      subtitle: "Cinematic Netflix Look",
      price: "6.050 €",
      description:
        "Emotionales Storytelling mit starken Bildern die Ihre Kunden in den Mittelpunkt stellen.",
      features: [
        "1x Video",
        "120 Sekunden incl.",
        "FHD & 4k Export",
        "5x Interviews",
        "2x Shooting Days",
        "2x Feedback Loops",
      ],
      featured: false,
      subtitleBgColor: "bg-[#e99c301c]",
      subtitleTextColor: "text-black",
      buttonBgColor: "bg-[#e99c306e]",
    },
  ];

  // Data for extras section - reorganized for better mobile distribution
  const extraFeatures = [
    [
      "Zusätzliche Videolänge",
      "Zusätzlicher Drehtag",
      "Zusätzlicher Schnitt",
      "Zusätzliches Format (z. B. Insta)",
      "Zusätzliche Feedback-Schleife",
    ],
    [
      "Express-Lieferung",
      "Professionelle Schauspieler",
      "Professioneller Sprecher",
      "Übersetzung & Synchronisation",
      "Untertitel",
    ],
    [
      "Langfristige Datenspeicherung",
      "Studiodreh",
      "Professionelles Motiondesign",
      "Spezial Aufnahmen (z.B. Drohne)",
    ],
  ];

  const handleBookingClick = () => {
    setShowBookingModal(true);
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
  };

  return (
    <section id="pricing" className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      {/* Content container - matching other sections exactly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-black mb-4 sm:mb-6 [font-family:'Open_Sans',Helvetica]">
            Wähle dein Paket
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-black max-w-2xl mx-auto [font-family:'Open_Sans',Helvetica] leading-relaxed">
            Stell dir in wenigen Minuten unverbindlich dein individuelles Paket
            zusammen: Wähle deinen Look und ergänze Extras ganz nach Bedarf.
          </p>
        </div>

        {/* Limited slots badge - INCREASED MARGIN BOTTOM */}
        <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="py-2 px-3 sm:px-4 bg-[#ff3f0026] text-[#e00000] border border-[#ff0505] rounded-[10px]">
            <img
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 object-cover"
              alt="Fire"
              src="/fire (5).png"
            />
            <span className="text-sm sm:text-base lg:text-lg font-semibold [font-family:'Open_Sans',Helvetica]">
              Nur noch 2 Slots frei für Juli
            </span>
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {pricingCards.map((card, index) => (
            <Card
              key={index}
              className={`rounded-lg border-[3px] ${
                card.featured
                  ? "border-[#e99c30] shadow-[0px_2px_20px_4px_#e99c3033] lg:scale-105"
                  : "border-[#c3c3c3]"
              } transition-transform duration-200`}
            >
              <CardContent className="p-0">
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-black text-center mb-4 [font-family:'Open_Sans',Helvetica]">
                    {card.title}
                  </h3>

                  <div className="flex justify-center mb-6">
                    <div
                      className={`${card.subtitleBgColor} rounded-[15px] px-3 sm:px-4 py-1`}
                    >
                      <p
                        className={`${card.subtitleTextColor} text-sm sm:text-base lg:text-lg text-center [font-family:'Open_Sans',Helvetica]`}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <span className="text-xl sm:text-xl lg:text-[32px] font-normal text-black [font-family:'Open_Sans',Helvetica]">
                      ab
                    </span>
                    <span className="text-3xl sm:text-3xl lg:text-5xl font-bold text-black">
                      {" "}
                      {card.price}
                    </span>
                  </div>

                  <div className="text-center mb-6 sm:mb-8">
                    <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed [font-family:'Open_Sans',Helvetica]">
                      <span className="font-semibold">Am besten für: </span>
                      {card.description}
                    </p>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    {card.features.map((feature, idx) => (
                      <FeatureItem key={idx} text={feature} />
                    ))}
                  </div>

                  <Link to="/angebot">
                    <Button
                      className={`w-full h-12 sm:h-[55px] ${card.buttonBgColor} rounded-[5px] text-white text-sm sm:text-base lg:text-lg font-semibold [font-family:'Open_Sans',Helvetica] hover:bg-[#d38b20] transition-colors duration-200`}
                    >
                      Angebot berechnen
                    </Button>
                  </Link>

                  {card.featured && (
                    <p className="text-xs font-semibold text-black text-center mt-4 [font-family:'Open_Sans',Helvetica]">
                      *unverbindlich Preis berechnen
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extras Section */}
        <Card className="w-full mb-12 sm:mb-16 rounded-lg bg-neutral-100">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-8 sm:mb-12 [font-family:'Open_Sans',Helvetica]">
              Buchbare Extras
            </h3>

            {/* Desktop: 3 columns */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {extraFeatures.map((column, colIndex) => (
                <div key={colIndex}>
                  {column.map((feature, idx) => (
                    <ExtraFeatureItem key={idx} text={feature} />
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile: Single column with equal spacing */}
            <div className="md:hidden space-y-3">
              {extraFeatures.flat().map((feature, idx) => (
                <ExtraFeatureItem key={idx} text={feature} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="w-full rounded-lg bg-[#e99c301c]">
          <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 [font-family:'Open_Sans',Helvetica]">
                Mehrere Videos geplant?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-black [font-family:'Open_Sans',Helvetica] leading-relaxed">
                Du hast ein größeres Projekt geplant oder möchtest einfach mal
                sprechen? Dann buch dir hier ein Erstgespräch!
              </p>
            </div>
            <Button 
              onClick={handleBookingClick}
              className="bg-[#e99c30] text-white h-12 sm:h-[55px] px-6 sm:px-8 text-sm sm:text-base lg:text-lg font-semibold [font-family:'Open_Sans',Helvetica] hover:bg-[#d38b20] transition-colors duration-200 w-full md:w-auto"
            >
              Gespräch buchen
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 bg-white">
              <h3 className="text-2xl font-bold text-black [font-family:'Open_Sans',Helvetica]">
                Termin buchen
              </h3>
              <p className="text-gray-600 mt-2 [font-family:'Open_Sans',Helvetica]">
                Buche dir ein unverbindliches 30-minütiges Erstgespräch mit Jan
              </p>
            </div>
            
            {/* Cal.com iframe */}
            <div className="relative bg-white" style={{ height: '600px' }}>
              <iframe
                className="w-full h-full"
                src="https://cal.com/jan-remek-1qluir/30min"
                title="Termin buchen - Jan Remek"
                frameBorder="0"
                allow="camera; microphone; geolocation"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};