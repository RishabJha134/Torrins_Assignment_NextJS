// Types for our outfit builder application

export interface ClothingItem {
  id: string;
  name: string;
  category: 'tops' | 'bottoms' | 'shoes' | 'accessories';
  imageUrl: string;
  price: number;
}

export interface DroppedItem extends ClothingItem {
  x: number;
  y: number;
  zIndex: number;
}

export interface CartItem {
  items: ClothingItem[];
  totalPrice: number;
  outfitName: string;
}

export interface Position {
  x: number;
  y: number;
}
