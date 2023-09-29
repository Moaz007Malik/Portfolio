import React from "react";
import MyLogo from "../../../public/Mylogo-Landscap.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between p-12">
        <span><Image src={MyLogo} width={150}/></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
