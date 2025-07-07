'use client';

import { useDrop } from 'react-dnd';
import { useRef } from 'react';
import { ClothingItem, DroppedItem } from '@/types';
import DroppedClothingItem from './DroppedClothingItem';

interface CanvasProps {
  droppedItems: DroppedItem[];
  onDrop: (item: ClothingItem, x: number, y: number) => void;
  onRemoveItem: (id: string) => void;
  onMoveItem: (id: string, x: number, y: number) => void;
}

export default function Canvas({ 
  droppedItems, 
  onDrop, 
  onRemoveItem, 
  onMoveItem 
}: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'clothing-item',
    drop: (item: ClothingItem, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = canvasRef.current?.getBoundingClientRect();
      
      if (offset && canvasRect) {
        const x = offset.x - canvasRect.left - 40; // Center the item
        const y = offset.y - canvasRect.top - 40;
        onDrop(item, Math.max(0, x), Math.max(0, y));
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  drop(canvasRef);

  return (
    <div className="flex flex-col h-full">
      {/* Canvas Header */}
      <div className="bg-gray-50 p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Outfit Canvas</h2>
        <p className="text-sm text-gray-600">
          Drag clothing items here to create your outfit
        </p>
      </div>

      {/* Canvas Area */}
      <div
        ref={canvasRef}
        className={`
          flex-1 relative bg-gradient-to-br from-gray-100 to-gray-200 
          border-2 border-dashed transition-all duration-200
          ${isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}
          min-h-[500px] overflow-hidden
        `}
      >
        {/* Drop Zone Message */}
        {droppedItems.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">👕</div>
              <p className="text-lg font-medium">Drop clothing items here</p>
              <p className="text-sm">Start building your perfect outfit!</p>
            </div>
          </div>
        )}

        {/* Dropped Items */}
        {droppedItems.map((item) => (
          <DroppedClothingItem
            key={item.id}
            item={item}
            onRemove={onRemoveItem}
            onMove={onMoveItem}
          />
        ))}

        {/* Canvas Grid (optional visual aid) */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Canvas Footer with Item Count */}
      <div className="bg-gray-50 p-2 border-t text-center">
        <p className="text-sm text-gray-600">
          {droppedItems.length} item{droppedItems.length !== 1 ? 's' : ''} on canvas
        </p>
      </div>
    </div>
  );
}
