'use client';

import { useDrag } from 'react-dnd';
import Image from 'next/image';
import { ClothingItem } from '@/types';
import { useRef } from 'react';

interface DraggableClothingItemProps {
  item: ClothingItem;
}

export default function DraggableClothingItem({ item }: DraggableClothingItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'clothing-item',
    item: item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      className={`
        cursor-move p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200
        border-2 border-gray-200 hover:border-blue-300
        ${isDragging ? 'opacity-50 rotate-3 scale-105' : 'opacity-100'}
      `}
    >
      <div className="relative w-16 h-16 mb-2">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover rounded"
          sizes="64px"
        />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium text-gray-800 truncate">
          {item.name}
        </p>
        <p className="text-xs text-blue-600 font-semibold">
          ${item.price}
        </p>
      </div>
    </div>
  );
}
