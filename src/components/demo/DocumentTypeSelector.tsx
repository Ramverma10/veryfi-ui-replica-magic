
import React from 'react';

interface DocumentTypeSelectorProps {
  documentTypes: string[];
  selectedTab: string;
  onTabSelect: (type: string) => void;
}

const DocumentTypeSelector: React.FC<DocumentTypeSelectorProps> = ({
  documentTypes,
  selectedTab,
  onTabSelect
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-12 justify-center">
      {documentTypes.map((type) => (
        <button
          key={type}
          onClick={() => onTabSelect(type)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 interactive-card ${
            selectedTab === type
              ? 'bg-white text-gray-900 shadow-lg'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default DocumentTypeSelector;
