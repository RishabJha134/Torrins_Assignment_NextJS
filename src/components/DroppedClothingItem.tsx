'use client';

import { useDrag } from 'react-dnd';
import Image from 'next/image';
import { DroppedItem } from '@/types';
import { X } from 'lucide-react';
import { useRef } from 'react';

interface DroppedClothingItemProps {
  item: DroppedItem;
  onRemove: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
}

export default function DroppedClothingItem({ 
  item, 
  onRemove, 
  onMove 
}: DroppedClothingItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'dropped-item',
    item: { id: item.id, x: item.x, y: item.y },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (draggedItem, monitor) => {
      if (!monitor.didDrop()) {
        const delta = monitor.getDifferenceFromInitialOffset();
        if (delta) {
          const newX = Math.max(0, item.x + delta.x);
          const newY = Math.max(0, item.y + delta.y);
          onMove(item.id, newX, newY);
        }
      }
    },
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      className={`
        absolute group cursor-move
        ${isDragging ? 'opacity-50 scale-110' : 'opacity-100'}
      `}
      style={{
        left: item.x,
        top: item.y,
        zIndex: item.zIndex,
      }}
    >
      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   hover:bg-red-600 z-10"
        aria-label="Remove item"
      >
        <X size={12} />
      </button>

      {/* Clothing Item */}
      <div className="relative w-20 h-20 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-1">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover rounded"
          sizes="80px"
        />
      </div>
      
      {/* Item Info (appears on hover) */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
        {item.name} - ${item.price}
      </div>
    </div>
  );
}
