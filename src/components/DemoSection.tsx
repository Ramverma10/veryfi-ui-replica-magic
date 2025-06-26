
import React, { useState, useEffect } from 'react';
import DocumentTypeSelector from './demo/DocumentTypeSelector';
import DocumentUploader from './demo/DocumentUploader';
import DocumentPreview from './demo/DocumentPreview';
import DataViewer from './demo/DataViewer';
import ActionButtons from './demo/ActionButtons';

const DemoSection = () => {
  const [selectedTab, setSelectedTab] = useState('Receipt');
  const [activeView, setActiveView] = useState('Visualized Data');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const documentTypes = [
    'Receipt', 'Invoice', 'W-2', 'W-8BEN-E', 'W-9', 'Check', 'Bank Statement', 'Other Docs'
  ];

  const mockData = {
    merchant: 'Walgreens',
    phone: '650-342-2723',
    category: 'drugstores, convenience stores, cosmetics & beauty supply',
    receiptDate: 'March 28, 2023, 1:10 pm',
    payment: {
      cardNumber: '1850',
      name: 'Visa ***1850',
      type: 'visa'
    },
    lineItems: [
      { sku: '6112643157', item: 'RED BULL ENRGY DRNK CNS 8.4OZ 6PK', type: 'food', quantity: 1, price: 9.99, total: 8.79 },
      { sku: '0000007211', item: 'CA REDMP VAL', type: 'fee', quantity: 1, price: 0.00, total: 0.30 },
      { sku: '0490006101', item: 'COCA COLA MINICAN 7.5Z 6PK', type: 'food', quantity: 1, price: 0.00, total: 4.99 },
      { sku: '0000007211', item: 'CA REDMP VAL', type: 'food', quantity: 1, price: 0.00, total: 0.30 },
      { sku: '0440000749', item: 'NAB OREO CKIES C/PK 5.25OZ WHSE', type: 'food', quantity: 1, price: 0.00, total: 2.69 },
      { sku: '0284032505', item: 'DORITOS NACHO', type: 'food', quantity: 1, price: 2.00, total: 2.00 },
      { sku: '0284032382', item: 'FLAYS REGULAR 2.63OZ', type: 'food', quantity: 1, price: 2.00, total: 2.00 }
    ]
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload();
  };

  const handleFileUpload = () => {
    setIsProcessing(true);
    setIsProcessed(false);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
    }, 3000);
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(mockData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'extracted-data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleTryAnother = () => {
    setIsProcessed(false);
    setIsProcessing(false);
    setSelectedTab('Receipt');
  };

  return (
    <section id="demo" className="py-32 relative overflow-hidden animated-gradient">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-32 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Demo Test-Drive</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Try our AI document processing technology right now
          </p>
        </div>

        <div 
          className="glass-morphism rounded-3xl p-8 lg:p-12 border border-white/20 interactive-card"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          <DocumentTypeSelector
            documentTypes={documentTypes}
            selectedTab={selectedTab}
            onTabSelect={setSelectedTab}
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Panel - Document Upload */}
            <div className="space-y-8">
              <DocumentUploader
                isDragOver={isDragOver}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onFileUpload={handleFileUpload}
              />

              <DocumentPreview
                isProcessing={isProcessing}
                isProcessed={isProcessed}
              />
            </div>

            {/* Right Panel - Extracted Data */}
            <div className="space-y-8">
              <DataViewer
                activeView={activeView}
                onViewChange={setActiveView}
                mockData={mockData}
              />

              <ActionButtons
                onDownload={handleDownload}
                onTryAnother={handleTryAnother}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
