
import React, { useState } from 'react';
import { Upload, FileText, Eye, Code, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DemoSection = () => {
  const [selectedTab, setSelectedTab] = useState('Receipt');
  const [activeView, setActiveView] = useState('Visualized Data');
  const [isDragOver, setIsDragOver] = useState(false);

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
    // Handle file drop logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Demo Test-Drive</h2>
          <p className="text-xl text-gray-300">
            Try our AI document processing technology right now
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Document Type Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {documentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedTab(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTab === type
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Panel - Document Upload */}
            <div className="space-y-6">
              {/* Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                  isDragOver
                    ? 'border-green-400 bg-green-400/10'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">Drag or upload your document here</p>
                <p className="text-sm text-gray-500">JPEG, PNG or PDF</p>
              </div>

              {/* Sample Receipt Image */}
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-4">
                  <div className="bg-white rounded-lg p-4 aspect-[3/4] flex items-center justify-center">
                    <div className="text-center text-gray-800">
                      <FileText className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                      <p className="text-sm font-medium">Walgreens Receipt</p>
                      <p className="text-xs text-gray-500 mt-1">Sample Document</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Extracted Data */}
            <div className="space-y-6">
              {/* View Toggle */}
              <div className="flex gap-2 bg-gray-700 p-1 rounded-lg">
                {['Visualized Data', 'JSON Data'].map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeView === view
                        ? 'bg-gray-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {view === 'Visualized Data' ? <Eye className="w-4 h-4 inline mr-2" /> : <Code className="w-4 h-4 inline mr-2" />}
                    {view}
                  </button>
                ))}
              </div>

              {/* Data Display */}
              <Card className="bg-white border-0 max-h-96 overflow-auto">
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
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">RECEIPT DATE</p>
                      <p className="text-gray-900">{mockData.receiptDate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">PAYMENT</p>
                      <div className="space-y-1">
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

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download JSON
                </Button>
                <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700">
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
