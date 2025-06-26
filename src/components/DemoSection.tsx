
import React, { useState, useEffect } from 'react';
import { Upload, FileText, Eye, Code, Download, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
          {/* Document Type Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {documentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedTab(type)}
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Panel - Document Upload */}
            <div className="space-y-8">
              {/* Upload Area */}
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 interactive-card ${
                  isDragOver
                    ? 'border-white bg-white/20'
                    : 'border-white/30 hover:border-white/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="w-16 h-16 text-white/80 mx-auto mb-6" />
                <p className="text-white mb-3 text-lg">Drag or upload your document here</p>
                <p className="text-sm text-white/70 mb-6">JPEG, PNG or PDF</p>
                <Button 
                  onClick={handleFileUpload}
                  className="bg-white text-gray-900 hover:bg-gray-100 interactive-card"
                >
                  Choose File
                </Button>
              </div>

              {/* Sample Receipt Image */}
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
            </div>

            {/* Right Panel - Extracted Data */}
            <div className="space-y-8">
              {/* View Toggle */}
              <div className="flex gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                {['Visualized Data', 'JSON Data'].map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`flex-1 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 interactive-card ${
                      activeView === view
                        ? 'bg-white text-gray-900'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {view === 'Visualized Data' ? <Eye className="w-4 h-4 inline mr-2" /> : <Code className="w-4 h-4 inline mr-2" />}
                    {view}
                  </button>
                ))}
              </div>

              {/* Data Display */}
              {activeView === 'Visualized Data' ? (
                <Card className="bg-white border-0 max-h-96 overflow-auto interactive-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-gray-900 flex items-center justify-between">
                      {mockData.merchant}
                      <div className="text-sm text-gray-600 font-normal">
                        {mockData.phone} • {mockData.category}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Receipt Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">RECEIPT DATE</p>
                        <p className="text-gray-900">{mockData.receiptDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">PAYMENT</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">CARD NUMBER</span>
                            <span className="text-gray-600">NAME</span>
                            <span className="text-gray-600">TYPE</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{mockData.payment.cardNumber}</span>
                            <span>{mockData.payment.name}</span>
                            <span>{mockData.payment.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Line Items */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <h3 className="font-medium text-gray-900">Line Items</h3>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-8">#</TableHead>
                            <TableHead>SKU</TableHead>
                            <TableHead>ITEM</TableHead>
                            <TableHead>TYPE</TableHead>
                            <TableHead>QTY</TableHead>
                            <TableHead>PRICE</TableHead>
                            <TableHead>TOTAL</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mockData.lineItems.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell className="font-mono text-xs">{item.sku}</TableCell>
                              <TableCell className="max-w-32 truncate" title={item.item}>
                                {item.item}
                              </TableCell>
                              <TableCell>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                  {item.type}
                                </span>
                              </TableCell>
                              <TableCell>{item.quantity}</TableCell>
                              <TableCell>${item.price.toFixed(2)}</TableCell>
                              <TableCell className="font-medium">${item.total.toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gray-900 border-0 max-h-96 overflow-auto">
                  <CardContent className="p-6">
                    <pre className="text-green-400 text-sm overflow-auto">
                      {JSON.stringify(mockData, null, 2)}
                    </pre>
                  </CardContent>
                </Card>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  onClick={handleDownload}
                  className="flex-1 bg-white text-gray-900 hover:bg-gray-100 interactive-card"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download JSON
                </Button>
                <Button 
                  onClick={handleTryAnother}
                  variant="outline" 
                  className="flex-1 border-white/30 text-white hover:bg-white/10"
                >
                  Try Another Document
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
