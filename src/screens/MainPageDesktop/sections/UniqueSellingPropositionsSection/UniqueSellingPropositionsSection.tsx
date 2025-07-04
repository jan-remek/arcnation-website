import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const UniqueSellingPropositionsSection = (): JSX.Element => {
  // Data for the proposition cards
  const propositions = [
    {
      id: 1,
      title: "Premium Storytelling",
    },
    {
      id: 2,
      title: "Alles aus einer Hand",
    },
    {
      id: 3,
      title: "Klare, transparente Preise",
    },
    {
      id: 4,
      title: "Schnelle Produktion",
    },
    {
      id: 5,
      title: "Plattformgerecht: Website, YouTube, Meta & Co",
    },
    {
      id: 6,
      title: (
        <>
          Happy Kunden Garantie{" "}
          <span className="block sm:inline text-sm sm:text-base italic mt-1 sm:mt-0">
            (Unzufrieden? 25% Preiserlass!)
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#f9f9f9]">
      {/* Content container - matching other sections exactly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-black text-center mb-8 sm:mb-12 lg:mb-16 font-['Open_Sans',Helvetica]">
          Unser Versprechen
        </h2>

        {/* Unified grid layout with responsive card heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {propositions.map((prop) => (
            <Card
              key={prop.id}
              className="bg-[#e99c301c] border-[#e99c30] border shadow-none hover:shadow-[0px_2px_20px_2px_#e99c304c] transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="flex items-center p-3 sm:p-4 lg:p-6 min-h-[80px] sm:min-h-[120px] lg:min-h-[150px]">
                  <img
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[45px] lg:h-[45px] object-cover mr-2 sm:mr-3 lg:mr-5 flex-shrink-0"
                    alt="Miyagi japan flag"
                    src="/miyagi-japan-flag-abstract-symbol.png"
                  />
                  <div className="font-['Open_Sans',Helvetica] font-normal text-black text-sm sm:text-base lg:text-xl leading-relaxed">
                    {prop.title}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};