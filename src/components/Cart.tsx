'use client';

import { useState } from 'react';
import { DroppedItem } from '@/types';
import { ShoppingCart, Save, RotateCcw, Plus } from 'lucide-react';

interface CartProps {
  droppedItems: DroppedItem[];
  onSaveOutfit: (outfitName: string) => void;
  onReset: () => void;
  onAddToCart: () => void;
}

export default function Cart({ 
  droppedItems, 
  onSaveOutfit, 
  onReset, 
  onAddToCart 
}: CartProps) {
  const [outfitName, setOutfitName] = useState('');
  const [isNaming, setIsNaming] = useState(false);

  const totalPrice = droppedItems.reduce((sum, item) => sum + item.price, 0);
  const itemCount = droppedItems.length;

  const handleSaveOutfit = () => {
    if (outfitName.trim() && itemCount > 0) {
      onSaveOutfit(outfitName.trim());
      setOutfitName('');
      setIsNaming(false);
    }
  };

  const handleAddToCart = () => {
    if (itemCount > 0) {
      onAddToCart();
    }
  };

  return (
    <div className="bg-white border-l border-gray-300 h-full flex flex-col">
      {/* Cart Header */}
      <div className="p-4 border-b bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <ShoppingCart size={20} />
          Outfit Summary
        </h2>
        <p className="text-sm opacity-90">Review and save your outfit</p>
      </div>

      {/* Items Summary */}
      <div className="p-4 border-b">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Items:</span>
            <span className="font-medium">{itemCount}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span className="text-gray-800">Total:</span>
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-y-auto p-4">
        {itemCount === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <ShoppingCart size={48} className="mx-auto mb-2 opacity-50" />
            <p>No items in your outfit</p>
            <p className="text-sm">Drag items to the canvas</p>
          </div>
        ) : (
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 mb-3">Items in outfit:</h3>
            {droppedItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.category}</p>
                </div>
                <p className="text-sm font-bold text-green-600">${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4 border-t space-y-3">
        {/* Save Outfit */}
        <div className="space-y-2">
          {!isNaming ? (
            <button
              onClick={() => setIsNaming(true)}
              disabled={itemCount === 0}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 
                        bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                        disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Save size={16} />
              Save Outfit
            </button>
          ) : (
            <div className="space-y-2">
              <input
                type="text"
                value={outfitName}
                onChange={(e) => setOutfitName(e.target.value)}
                placeholder="Enter outfit name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveOutfit}
                  disabled={!outfitName.trim()}
                  className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                            disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsNaming(false)}
                  className="px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={itemCount === 0}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 
                    bg-green-500 text-white rounded-lg hover:bg-green-600 
                    disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
        >
          <Plus size={16} />
          Add to Cart - ${totalPrice.toFixed(2)}
        </button>

        {/* Reset */}
        <button
          onClick={onReset}
          disabled={itemCount === 0}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 
                    bg-red-500 text-white rounded-lg hover:bg-red-600 
                    disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <RotateCcw size={16} />
          Reset Canvas
        </button>
      </div>
    </div>
  );
}
