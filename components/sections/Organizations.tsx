import React from "react";
import SectionTitle from "../elements/SectionTitle";
import OrganizationCard from "../elements/OrganizationCard";

const Organizations = () => {
  return (
    <div className="w-full overflow-hidden px-3 pb-20">
      <SectionTitle title="Organizations" />
      <main className="flex flex-wrap">
        <div className="flex flex-1 justify-around">
          <OrganizationCard src="/organizations/anitab.jpeg" alt="Anitab.org" />
          <OrganizationCard
            src="/organizations/ccc.jpeg"
            alt="Cloud Computing Cell"
          />
          <OrganizationCard
            src="/organizations/girlswhocode.jpeg"
            alt="Girls who code"
          />
        </div>
        <div className="flex flex-1 justify-around">
          <OrganizationCard src="/organizations/rtc.jpeg" alt="RTC" />
          <OrganizationCard
            src="/organizations/ufwicse.jpeg"
            alt="UF WiCSE"
          />
          <OrganizationCard
            src="/organizations/womenwhocode.jpeg"
            alt="Women Who Code"
          />
        </div>
      </main>
    </div>
  );
};

export default Organizations;
