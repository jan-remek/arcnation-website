import React from "react";

export const TrustSection = (): JSX.Element => {
  // Company logos data
  const companyLogos = [
    {
      id: 1,
      name: "Afilio",
      logo: "/Afilio_One_Color.png",
    },
    {
      id: 2,
      name: "Top10Berlin",
      logo: "/Top10Berlin_One_Color.png",
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

  return (
    <section className="w-full py-8 sm:py-4 lg:py-7 bg-[#f9f9f9]">
      {/* Content container - centered and limited width, matching other sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-6 sm:mb-2 lg:mb-3">
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600 [font-family:'Open_Sans',Helvetica]">
            Innovative Unternehmen vertrauen Arcnation
          </h2>
        </div>

        {/* Desktop: Horizontal layout - left aligned */}
        <div className="hidden sm:flex items-center justify-start gap-6 md:gap-8 lg:gap-12 overflow-x-auto pb-2">
          {companyLogos.map((company) => (
            <div
              key={company.id}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="object-contain h-12 md:h-16 lg:h-[150px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Grid layout with much larger logos (+80% from previous size) */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mb-6">
          {companyLogos.slice(0, 4).map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-1 bg-white rounded-lg min-h-[100px]"
            >
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="object-contain h-[88px] w-full max-w-full opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};