
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
  onDownload: () => void;
  onTryAnother: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onDownload,
  onTryAnother
}) => {
  return (
    <div className="flex gap-4">
      <Button 
        onClick={onDownload}
        className="flex-1 bg-white text-gray-900 hover:bg-gray-100 interactive-card"
      >
        <Download className="w-4 h-4 mr-2" />
        Download JSON
      </Button>
      <Button 
        onClick={onTryAnother}
        variant="outline" 
        className="flex-1 border-white/30 text-white hover:bg-white/10"
      >
        Try Another Document
      </Button>
    </div>
  );
};

export default ActionButtons;
