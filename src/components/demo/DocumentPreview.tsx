
import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface DocumentPreviewProps {
  isProcessing: boolean;
  isProcessed: boolean;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({
  isProcessing,
  isProcessed
}) => {
  return (
    <Card className="glass-morphism border-white/20 interactive-card">
      <CardContent className="p-6">
        <div className="bg-white rounded-2xl p-8 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-gray-800">
            <FileText className="w-20 h-20 mx-auto mb-6 text-gray-600" />
            <p className="text-lg font-medium mb-2">Walgreens Receipt</p>
            <p className="text-sm text-gray-500">Sample Document</p>
            
            {isProcessing && (
              <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                <div className="text-blue-600 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="font-medium">Processing...</p>
                </div>
              </div>
            )}
            
            {isProcessed && (
              <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                <div className="text-green-600 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-medium">Processed!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentPreview;
