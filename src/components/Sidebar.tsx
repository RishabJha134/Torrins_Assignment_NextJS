'use client';

import { useState } from 'react';
import { categories, getItemsByCategory } from '@/data/clothingItems';
import DraggableClothingItem from './DraggableClothingItem';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['tops']) // Start with tops expanded
  );

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="bg-white border-r border-gray-300 h-full overflow-y-auto">
      {/* Sidebar Header */}
      <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-lg font-bold">Clothing Items</h2>
        <p className="text-sm opacity-90">Drag items to canvas</p>
      </div>

      {/* Categories */}
      <div className="p-4 space-y-4">
        {categories.map((category) => {
          const items = getItemsByCategory(category.id);
          const isExpanded = expandedCategories.has(category.id);

          return (
            <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200
                          flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium text-gray-800">{category.name}</span>
                  <span className="text-sm text-gray-500">({items.length})</span>
                </div>
                {isExpanded ? (
                  <ChevronDown size={16} className="text-gray-500" />
                ) : (
                  <ChevronRight size={16} className="text-gray-500" />
                )}
              </button>

              {/* Category Items */}
              {isExpanded && (
                <div className="p-3 bg-white">
                  <div className="grid grid-cols-2 gap-3">
                    {items.map((item) => (
                      <DraggableClothingItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t bg-gray-50 text-center">
        <p className="text-xs text-gray-600">
          💡 Tip: Drag items to the canvas to create your outfit
        </p>
      </div>
    </div>
  );
}
