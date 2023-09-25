import React from "react";
import SectionTitle from "../elements/SectionTitle";
import OrganizationCard from "../elements/OrganizationCard";

const Organizations = () => {
  return (
    <div className="w-full overflow-hidden px-3 pb-16">
      <SectionTitle title="Organizations" />
      {/* <main className="flex flex-wrap xl:justify-around lg:justify-start"> */}
      {/* <div className="flex flex-1 justify-around"> */}
      <div className="grid grid-cols-4 gap4">
        <div className="flex justify-center">
          <OrganizationCard src="/organizations/anitab.jpeg" alt="Anitab.org" />
        </div>
        <div className="flex justify-center">
          <OrganizationCard
            src="/organizations/ccc.jpeg"
            alt="Cloud Computing Cell"
          />
        </div>
        <div className="flex justify-center">
          <OrganizationCard
            src="/organizations/girlswhocode.jpeg"
            alt="Girls who code"
          />
        </div>
        <div className="flex justify-center">
          <OrganizationCard src="/organizations/rtc.jpeg" alt="RTC" />
        </div>
        <div className="flex justify-center">
          <OrganizationCard src="/organizations/ufwicse.jpeg" alt="UF WiCSE" />
        </div>
        <div className="flex justify-center">
          <OrganizationCard
            src="/organizations/womenwhocode.jpeg"
            alt="Women Who Code"
          />
        </div>
        <div className="flex justify-center">
          <OrganizationCard
            src="/organizations/slumswaraj.jpeg"
            alt="Women Who Code"
          />
        </div>
      </div>
    </div>
  );
};

export default Organizations;
