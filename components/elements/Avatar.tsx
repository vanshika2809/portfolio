import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="rounded-full aspect-square overflow-hidden lg:w-52 md:w-44 relative">
      <Image src={"/me.jpeg"} alt="Vanshika Mehrotra" fill={true} />
    </div>
  );
};

export default Avatar;
