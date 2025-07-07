import { ClothingItem } from '@/types';

// All clothing items data with proper categorization and pricing
export const clothingItems: ClothingItem[] = [
  // Tops
  {
    id: 'top1',
    name: 'Classic T-Shirt',
    category: 'tops',
    imageUrl: '/assets/tops/top1.webp',
    price: 25.99,
  },
  {
    id: 'top2',
    name: 'Casual Shirt',
    category: 'tops',
    imageUrl: '/assets/tops/top2.jpg',
    price: 39.99,
  },
  {
    id: 'top3',
    name: 'Polo Shirt',
    category: 'tops',
    imageUrl: '/assets/tops/top3.jpg',
    price: 32.99,
  },
  {
    id: 'top4',
    name: 'Long Sleeve Tee',
    category: 'tops',
    imageUrl: '/assets/tops/top4.png',
    price: 28.99,
  },
  {
    id: 'top5',
    name: 'Hoodie',
    category: 'tops',
    imageUrl: '/assets/tops/top5.png',
    price: 49.99,
  },

  // Bottoms
  {
    id: 'bottom1',
    name: 'Jeans',
    category: 'bottoms',
    imageUrl: '/assets/bottoms/bottom1.webp',
    price: 59.99,
  },
  {
    id: 'bottom2',
    name: 'Casual Pants',
    category: 'bottoms',
    imageUrl: '/assets/bottoms/bottom2.webp',
    price: 45.99,
  },
  {
    id: 'bottom3',
    name: 'Shorts',
    category: 'bottoms',
    imageUrl: '/assets/bottoms/bottom3.jpg',
    price: 29.99,
  },
  {
    id: 'bottom4',
    name: 'Dress Pants',
    category: 'bottoms',
    imageUrl: '/assets/bottoms/bottom4.png',
    price: 69.99,
  },
  {
    id: 'bottom5',
    name: 'Sweatpants',
    category: 'bottoms',
    imageUrl: '/assets/bottoms/bottom5.png',
    price: 34.99,
  },

  // Shoes
  {
    id: 'shoes1',
    name: 'Sneakers',
    category: 'shoes',
    imageUrl: '/assets/shoes/shoes1.webp',
    price: 89.99,
  },
  {
    id: 'shoes2',
    name: 'Running Shoes',
    category: 'shoes',
    imageUrl: '/assets/shoes/shoes2.webp',
    price: 79.99,
  },
  {
    id: 'shoes3',
    name: 'Casual Shoes',
    category: 'shoes',
    imageUrl: '/assets/shoes/shoes3.jpg',
    price: 65.99,
  },
  {
    id: 'shoes4',
    name: 'Dress Shoes',
    category: 'shoes',
    imageUrl: '/assets/shoes/shoes4.jpg',
    price: 99.99,
  },
  {
    id: 'shoes5',
    name: 'Boots',
    category: 'shoes',
    imageUrl: '/assets/shoes/shoes5.png',
    price: 119.99,
  },

  // Accessories
  {
    id: 'belt1',
    name: 'Leather Belt',
    category: 'accessories',
    imageUrl: '/assets/belt.jpg',
    price: 24.99,
  },
  {
    id: 'belt2',
    name: 'Canvas Belt',
    category: 'accessories',
    imageUrl: '/assets/belt2.webp',
    price: 19.99,
  },
  {
    id: 'cap',
    name: 'Baseball Cap',
    category: 'accessories',
    imageUrl: '/assets/cap.png',
    price: 15.99,
  },
  {
    id: 'hat',
    name: 'Fedora Hat',
    category: 'accessories',
    imageUrl: '/assets/hat.png',
    price: 34.99,
  },
  {
    id: 'sunglasses',
    name: 'Sunglasses',
    category: 'accessories',
    imageUrl: '/assets/sunglasses.jpg',
    price: 29.99,
  },
];

// Helper function to get items by category
export const getItemsByCategory = (category: ClothingItem['category']) => {
  return clothingItems.filter(item => item.category === category);
};

// Categories for the sidebar
export const categories = [
  { id: 'tops', name: 'Tops', icon: '👕' },
  { id: 'bottoms', name: 'Bottoms', icon: '👖' },
  { id: 'shoes', name: 'Shoes', icon: '👟' },
  { id: 'accessories', name: 'Accessories', icon: '🎩' },
] as const;
