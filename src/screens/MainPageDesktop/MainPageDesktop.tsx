import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { TrustSection } from "./sections/TrustSection";
import { UniqueSellingPropositionsSection } from "./sections/UniqueSellingPropositionsSection";
import { UseCasesSection } from "./sections/UseCasesSection";
import { WhatWeDoSection } from "./sections/WhatWeDoSection";

export const MainPageDesktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <HeaderSection />
      <TrustSection />
      <WhatWeDoSection />
      <BenefitsSection />
      <UseCasesSection />
      <UniqueSellingPropositionsSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
};