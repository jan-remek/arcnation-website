import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = (): JSX.Element => {
  const benefitCards = [
    {
      id: 1,
      icon: "/miyagi-japan-flag-abstract-symbol.png",
      title: "Steigern das Vertrauen",
      description:
        "Zeige Interessenten authentische Einblicke von echten Kunden",
    },
    {
      id: 2,
      icon: "/shape (1).png",
      title: "Boosten eure Conversion",
      description:
        "Nutze die Überzeugungskraft echter Kundenstimmen – genau da, wo Entscheidungen fallen.",
    },
    {
      id: 3,
      icon: "/planets.png",
      title: "Stärken eure Brands",
      description:
        "Verdeutliche mithilfe eurer Kunden wofür ihr als Unternehmen steht",
    },
    {
      id: 4,
      icon: "/abstract.png",
      title: "Reduzieren eure Sales Zyklen",
      description:
        "Zeigt mit realen Beispielen, wie ähnliche Kunden euer Produkt erfolgreich nutzen",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-black text-center mb-8 sm:mb-12 lg:mb-16 [font-family:'Open_Sans',Helvetica]">
          Unsere Testimonials …
        </h2>

        <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {benefitCards.map((card) => (
            <Card
              key={card.id}
              className="w-full rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] object-cover"
                      alt="Icon"
                      src={card.icon}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-black text-lg sm:text-xl lg:text-2xl [font-family:'Open_Sans',Helvetica] mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="font-normal text-black text-sm sm:text-base lg:text-lg leading-relaxed [font-family:'Open_Sans',Helvetica]">
                      {card.description}
                    </p>
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