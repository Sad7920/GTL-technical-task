"use client";

import { useState, ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";

interface ExpandableComponentProps {
  children: ReactNode;
}

export default function ExpandableComponent({
  children,
}: ExpandableComponentProps) {
  const [expanded, setExpanded] = useState(false);
  const expandedCompStyles = {
    maxHeight: expanded ? "1000px" : "0",
    transition: "max-height 0.7s ease-in-out",
    overflow: "hidden",
  };

  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white rounded-lg">
        <h1 className="font-semibold">Patient Name</h1>
        <div
          className="p-2 transition duration-200 ease-in delay-100 rounded-md cursor-pointer hover:bg-slate-100"
          onClick={() => setExpanded(!expanded)}
        >
          <FaChevronDown
            className={`w-5 h-5 transition duration-200 ease-in-out  ${
              expanded && "rotate-180"
            }`}
          />
        </div>
      </div>
      <div className="px-4" style={expandedCompStyles}>
        {children}
      </div>
    </>
  );
}
