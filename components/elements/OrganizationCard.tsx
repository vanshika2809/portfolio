import React from "react";
import Image from "next/image";

const OrganizationCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex items-center justify-center aspect-square md:w-44 sm:w-36 w-28 border border-neutral-100 hover:border-none rounded-2xl mx-3 mb-6 shadow-even-shadow transform transition-shadow hover:shadow-yellow-200">
      <div className="w-4/5 relative h-4/5">
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="object-contain"
          title={alt}
        />
      </div>
    </div>
  );
};

export default OrganizationCard;
