
import React from 'react';
import { Eye, Code, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface DataViewerProps {
  activeView: string;
  onViewChange: (view: string) => void;
  mockData: any;
}

const DataViewer: React.FC<DataViewerProps> = ({
  activeView,
  onViewChange,
  mockData
}) => {
  return (
    <div className="space-y-8">
      {/* View Toggle */}
      <div className="flex gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
        {['Visualized Data', 'JSON Data'].map((view) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
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
                  {mockData.lineItems.map((item: any, index: number) => (
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
    </div>
  );
};

export default DataViewer;
