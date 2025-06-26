
import React from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DocumentUploaderProps {
  isDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileUpload: () => void;
}

const DocumentUploader: React.FC<DocumentUploaderProps> = ({
  isDragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileUpload
}) => {
  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 interactive-card ${
        isDragOver
          ? 'border-white bg-white/20'
          : 'border-white/30 hover:border-white/50'
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <Upload className="w-16 h-16 text-white/80 mx-auto mb-6" />
      <p className="text-white mb-3 text-lg">Drag or upload your document here</p>
      <p className="text-sm text-white/70 mb-6">JPEG, PNG or PDF</p>
      <Button 
        onClick={onFileUpload}
        className="bg-white text-gray-900 hover:bg-gray-100 interactive-card"
      >
        Choose File
      </Button>
    </div>
  );
};

export default DocumentUploader;
