import React from "react";

interface SampleCardProps {
  title?: string;
  description?: string;
}

const SampleCard: React.FC<SampleCardProps> = ({
  title = "Welcome to Your Sample Card!",
  description = "This is a reusable component styled with Tailwind CSS. You can customize it by passing props.",
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 border border-gray-200">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Sample Component</div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{title}</h2>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default SampleCard; 