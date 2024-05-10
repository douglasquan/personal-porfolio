import React, { ReactNode } from "react";

interface CustomTooltipProps {
  children: ReactNode;
  text: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ children, text }) => {
  return (
    <div className="group relative flex items-center">
      {children}
      <span className="tooltip-text absolute whitespace-nowrap bg-black text-light text-xs py-1 px-2 rounded shadow-lg bottom-full mb-2 opacity-0 group-hover:opacity-100">
        {text}
      </span>
    </div>
  );
};

export default CustomTooltip;
