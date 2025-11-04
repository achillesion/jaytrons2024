"use client";
import React from "react";

const TopNavbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md ">
      <div
        className="
          flex items-center justify-center 
          gap-10 sm:gap-20 md:gap-40 lg:gap-60 
          py-2 flex-wrap text-sm sm:text-base
        "
      >
        {/* Gmail */}
        <a
          href="mailto:achillesion@gmail.com"
          className="inline-flex items-center gap-2 font-medium text-foreground hover:text-red-500 transition-colors duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            className="w-5 h-5"
          />
          achillesion@gmail.com
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923215236350"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-[#378066] dark:text-white hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5"
          />
          +92 321 5236350
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
