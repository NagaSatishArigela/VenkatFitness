import React, { useEffect, useState } from "react";
import { grahcms, QUERY_ACCORDION } from "../utils/Queries";

const SingleAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open
  const [accData, setAccData] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked accordion
  };

  useEffect(() => {
    const fetchAccordion = async () => {
      try {
        const data = await grahcms.request(QUERY_ACCORDION);
        setAccData(data?.accordions || []); // Ensure accData is an array
      } catch (error) {
        console.error("Error fetching accordion data:", error);
      }
    };

    fetchAccordion();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-8 font-Poppins p-2">
      {accData.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Accordion Header */}
          <div className="bg-Teal rounded-lg shadow-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-start items-center w-full px-4 py-4 font-bold text-left text-white hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl px-2">
                {openIndex === index ? "-" : "+"}
              </span>
              <span className="text-xl">{item.title}</span>
            </button>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div
              className="p-6 text-gray-300 bg-gray-900 border border-gray-800 rounded-b-lg shadow-lg space-y-4"
              dangerouslySetInnerHTML={{ __html: item.content.html }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SingleAccordion;
