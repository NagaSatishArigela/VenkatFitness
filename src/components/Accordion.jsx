import React, { useState } from "react";
import { accordionData } from "../utils/Data";

const SingleAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Split content into sections by double line breaks
  const contentSections = accordionData.content.trim().split(/\n\s*\n/);

  return (
    <div className="max-w-7xl mx-auto my-8 font-Poppins p-2">
      {/* Accordion Header */}
      <div className="bg-Teal rounded-lg shadow-lg">
        <button
          onClick={toggleAccordion}
          className="flex justify-start items-center w-full px-4 py-4 font-bold text-left text-white hover:bg-gray-700 transition-colors"
        >
          <span className="text-2xl px-2">{isOpen ? "-" : "+"}</span>
          <span className="text-xl">{accordionData.title}</span>
        </button>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-6 text-gray-300 bg-gray-900 border border-gray-800 rounded-b-lg shadow-lg space-y-4">
          {contentSections.map((section, index) => {
            // Check if the section is a subheading (starts with "## ")
            if (section.trim().startsWith("## ")) {
              return (
                <h3
                  key={index}
                  className="font-semibold text-lg text-gray-100 mt-4"
                >
                  {section.replace("## ", "").trim()}{" "}
                  {/* Remove the ## prefix */}
                </h3>
              );
            } else {
              // Render as paragraph
              return (
                <p key={index} className="leading-relaxed mb-2 text-gray-200">
                  {section.trim()}
                </p>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SingleAccordion;
