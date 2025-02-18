import React from "react";
import Image from "next/image";
import seagullLogo from "@/assets/seagull-logo.svg";

const SeagullLogo = () => {
  return (
    <div className="w-1/4 h-1/4 max-w-5xl max-h-5xl">
      <Image src={seagullLogo} alt="Seagull Logo" layout="responsive" />
    </div>
  );
};

export default SeagullLogo;
