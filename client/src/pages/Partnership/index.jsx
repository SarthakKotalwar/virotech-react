import React from "react";
import PartnershipHero from "../../components/partnership/PartnershipHero/PartnershipHero";
import PartnershipModels from "../../components/partnership/PartnershipModels/PartnershipModels";
import PartnershipProcess from "../../components/partnership/PartnershipProcess/PartnershipProcess";
import PartnershipCTA from "../../components/partnership/PartnershipCTA/PartnershipCTA";
import "./Partnership.scss";

const Partnership = () => {
  return (
    <main className="partnership-page">
      <PartnershipHero />
      <PartnershipModels />
      <PartnershipProcess />
      <PartnershipCTA />
    </main>
  );
};

export default Partnership;