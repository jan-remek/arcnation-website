import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const UseCasesSection = (): JSX.Element => {
  const [activeUseCase, setActiveUseCase] = useState<number | null>(1); // Changed from 2 to 1 (Brand Building)

  // Updated testimonial data with new references and profile images
  const testimonials = [
    {
      id: 1,
      quote:
        '„Mit den Videos haben wir einen ganz neuen Ad-Kanal erschlossen – mit 18 % Conversion Rate und 26 % weniger Kosten. Besser gehts nicht!"',
      name: "Philip",
      title: "Gründer, Groupera",
      image: "/Philip Naunin.jpeg",
    },
    {
      id: 2,
      quote:
        '„Die Zusammenarbeit mit ArcNation war extrem effizient – alles kam aus einer Hand, der Ablauf war reibungslos und das Ergebnis stand in Rekordzeit."',
      name: "Anna",
      title: "Community Management, STACEY",
      image: "/Anna_Stacey.png",
    },
    {
      id: 3,
      quote:
        '„Das Video schafft es, unsere Mitgliedschaft emotional und authentisch anhand klarer Use Cases unserer Nutzer auf den Punkt zu bringen – genau so haben wir uns das vorgestellt."',
      name: "Till",
      title: "Gründer, Afilio",
      image: "/Till Oltmanns.jpeg",
    },
  ];

  // Use case categories with updated descriptions and corresponding images
  const useCategories = [
    { 
      id: 1, 
      name: "Brand Building",
      description: "Stärke deine Markenidentität durch authentische Kundenstimmen, die Vertrauen schaffen und deine Unternehmenswerte vermitteln.",
      image: "/Thumbnail_Afilio_Action.png"
    },
    {
      id: 2,
      name: "Sales Enablement",
      description: "Testimonials für Use Cases, Customer Success Stories oder Case Studies – ideal zur Unterstützung im Vertrieb.",
      image: "/Thumbnail_Afilio_Weiblich_CloesUp.png"
    },
    { 
      id: 3, 
      name: "Kundenakquise",
      description: "Gewinne neue Kunden mit authentischen Testimonial-Video-Ads, die konvertieren – plattformnativ produziert für YouTube, LinkedIn, Meta und TikTok.",
      image: "/Thumbnail_Groupera_Panik.png"
    },
    { 
      id: 4, 
      name: "Produktkommunikation",
      description: "Nutze informative Testimonials zur Kommunikation von Produktlaunches – oder eingebettet als Teil deines Produkts: z. B. im Onboarding-Flow, in einer Newsletter-Strecke oder auf einem Upgrade-Success-Screen.",
      image: "/Kleffner_Afilio_In_Product Video.png"
    },
    { 
      id: 5, 
      name: "Talent Akquise",
      description: "Nutze authentische Stimmen aus deinem Team, um dich als attraktiven Arbeitgeber zu positionieren und neue Talente zu gewinnen.",
      image: "/Thumbnail_MoM.png"
    },
  ];

  const handleUseCaseClick = (id: number) => {
    setActiveUseCase(activeUseCase === id ? null : id);
  };

  // Get the current image based on active use case
  const getCurrentImage = () => {
    if (activeUseCase) {
      const activeCategory = useCategories.find(cat => cat.id === activeUseCase);
      return activeCategory?.image || "/Thumbnail_Afilio_Action.png";
    }
    return "/Thumbnail_Afilio_Action.png"; // Default image
  };

  return (
    <section id="use-cases" className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      {/* Content container - matching other sections exactly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-black text-center mb-8 sm:mb-12 lg:mb-16 font-['Open_Sans',Helvetica]">
          Use Cases
        </h2>

        {/* Mobile: Image first, then content */}
        <div className="lg:hidden mb-8 sm:mb-12">
          <img
            className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg mb-8 transition-all duration-500"
            alt="Use case thumbnail"
            src={getCurrentImage()}
          />
          
          {/* Use Cases List - Mobile */}
          <div className="space-y-3 sm:space-y-4">
            {useCategories.map((category) => (
              <div key={category.id}>
                {activeUseCase === category.id ? (
                  <Card className="bg-[#e99c301c] border-2 border-[#e99c30] shadow-[0px_2px_10px_2px_#0000000d] rounded-lg animate-in slide-in-from-top-2 duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="font-['Open_Sans',Helvetica] font-bold text-black text-lg sm:text-xl lg:text-2xl leading-tight mb-2 sm:mb-3">
                        {category.name}
                      </h3>
                      <p className="font-['Open_Sans',Helvetica] font-normal text-black text-sm sm:text-base leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <h3 
                    className="font-['Open_Sans',Helvetica] font-bold text-black text-lg sm:text-xl lg:text-2xl leading-tight pl-4 py-3 cursor-pointer transition-colors duration-200 hover:bg-[#f9f9f9] rounded-lg"
                    onClick={() => handleUseCaseClick(category.id)}
                  >
                    {category.name}
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:flex gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Use Cases List - Desktop */}
          <div className="w-1/2 space-y-3 sm:space-y-4">
            {useCategories.map((category) => (
              <div key={category.id}>
                {activeUseCase === category.id ? (
                  <Card className="bg-[#e99c301c] border-2 border-[#e99c30] shadow-[0px_2px_10px_2px_#0000000d] rounded-lg animate-in slide-in-from-top-2 duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="font-['Open_Sans',Helvetica] font-bold text-black text-lg sm:text-xl lg:text-2xl leading-tight mb-2 sm:mb-3">
                        {category.name}
                      </h3>
                      <p className="font-['Open_Sans',Helvetica] font-normal text-black text-sm sm:text-base leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <h3 
                    className="font-['Open_Sans',Helvetica] font-bold text-black text-lg sm:text-xl lg:text-2xl leading-tight pl-4 py-3 cursor-pointer transition-colors duration-200 hover:bg-[#f9f9f9] rounded-lg"
                    onClick={() => handleUseCaseClick(category.id)}
                  >
                    {category.name}
                  </h3>
                )}
              </div>
            ))}
          </div>

          {/* Image - Desktop */}
          <div className="w-1/2">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500"
              alt="Use case thumbnail"
              src={getCurrentImage()}
            />
          </div>
        </div>

        {/* Testimonials Grid - Fixed alignment */}
        <div id="customer-stories" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="rounded-lg border-2 border-solid border-neutral-100 hover:shadow-lg transition-shadow duration-200 h-full"
            >
              <CardContent className="p-4 sm:p-5 h-full flex flex-col">
                {/* Quote section - takes up available space */}
                <div className="flex-1 mb-6">
                  <p className="font-['Open_Sans',Helvetica] font-normal italic text-black text-sm sm:text-base leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Profile section - fixed at bottom with consistent alignment */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 sm:ml-4 min-w-0 flex flex-col justify-center">
                    <p className="font-['Open_Sans',Helvetica] font-bold text-black text-sm sm:text-lg lg:text-xl leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="font-['Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm lg:text-base leading-tight mt-1">
                      {testimonial.title}
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