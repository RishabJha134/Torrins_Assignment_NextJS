'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ClothingItem, DroppedItem } from '@/types';
import DragDropProvider from '@/components/DragDropProvider';

// Simple clothing items matching your design
const clothingItems: ClothingItem[] = [
  {
    id: 'tshirt',
    name: 'T-Shirt',
    category: 'tops',
    imageUrl: '/assets/tops/top1.webp',
    price: 25.99,
  },
  {
    id: 'pants',
    name: 'Pants',
    category: 'bottoms', 
    imageUrl: '/assets/bottoms/bottom1.webp',
    price: 45.99,
  },
  {
    id: 'jacket',
    name: 'Jacket',
    category: 'tops',
    imageUrl: '/assets/tops/top5.png',
    price: 49.99,
  },
  {
    id: 'dress',
    name: 'Dress',
    category: 'tops',
    imageUrl: '/assets/tops/top2.jpg',
    price: 39.99,
  },
  {
    id: 'cap',
    name: 'Cap',
    category: 'accessories',
    imageUrl: '/assets/cap.png',
    price: 15.99,
  },
];

export default function HomePage() {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const [zIndex, setZIndex] = useState(1);

  const handleDrop = (item: ClothingItem, x: number, y: number) => {
    const newItem: DroppedItem = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      x,
      y,
      zIndex: zIndex,
    };
    
    setDroppedItems(prev => [...prev, newItem]);
    setZIndex(prev => prev + 1);
  };

  const handleReset = () => {
    setDroppedItems([]);
    setZIndex(1);
  };

  const handleSaveOutfit = () => {
    if (droppedItems.length === 0) {
      alert('Please add some items to save an outfit!');
      return;
    }
    alert('Outfit saved successfully!');
  };

  const handleAddToCart = () => {
    if (droppedItems.length === 0) {
      alert('Please add some items to add to cart!');
      return;
    }
    const total = droppedItems.reduce((sum, item) => sum + item.price, 0);
    alert(`Added to cart! Total: $${total.toFixed(2)}`);
  };

  return (
    <DragDropProvider>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-gray-800">Outfit Builder</h1>
        </div>

        {/* Main Content */}
        <div className="flex max-w-6xl mx-auto px-4">
          {/* Left Sidebar - Clothing Items */}
          <div className="w-48 border border-gray-300 bg-gray-50 p-4">
            <div className="space-y-4">
              {clothingItems.map((item) => (
                <ClothingIcon key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 ml-4">
            <Canvas droppedItems={droppedItems} onDrop={handleDrop} />
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center space-x-4 mt-6 pb-8">
          <button
            onClick={handleReset}
            className="px-8 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleSaveOutfit}
            className="px-8 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-colors"
          >
            Save Outfit
          </button>
          <button
            onClick={handleAddToCart}
            className="px-8 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <span>Add to Cart</span>
            <span>🛒</span>
          </button>
        </div>
      </div>
    </DragDropProvider>
  );
}

// Simple Clothing Icon Component
function ClothingIcon({ item }: { item: ClothingItem }) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="w-20 h-20 bg-white border border-gray-300 rounded cursor-move flex items-center justify-center hover:shadow-md transition-shadow"
    >
      <Image 
        src={item.imageUrl} 
        alt={item.name}
        width={64}
        height={64}
        className="object-cover"
      />
    </div>
  );
}

// Simple Canvas Component
function Canvas({ droppedItems, onDrop }: { droppedItems: DroppedItem[]; onDrop: (item: ClothingItem, x: number, y: number) => void }) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const itemData = e.dataTransfer.getData('text/plain');
    const item = JSON.parse(itemData) as ClothingItem;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 40;
    const y = e.clientY - rect.top - 40;
    
    onDrop(item, Math.max(0, x), Math.max(0, y));
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border border-gray-300 bg-gray-50 relative"
      style={{ height: '500px' }}
    >
      {/* Canvas Label */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-lg font-medium">
        CANVAS AREA
      </div>

      {/* Dropped Items */}
      {droppedItems.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
            zIndex: item.zIndex,
          }}
        >
          <Image 
            src={item.imageUrl} 
            alt={item.name}
            width={80}
            height={80}
            className="object-cover rounded shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}
