import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-left justify-start ml-6 sm:items-center sm:justify-center py-10 sm:py-16">
      <div className="w-max">
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-indigo-500 to-orange-500 bg-clip-text text-transparent text-5xl leading-snug font-black">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
