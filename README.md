# Outfit Builder - Interactive Clothing Mixer

A modern, interactive web application built with Next.js that allows users to create outfit combinations using drag-and-drop functionality. Users can mix and match clothing items, visualize complete outfits, and add them to their shopping cart.

## 🌟 Features

### ✨ Core Functionality
- **Drag-and-Drop Interface**: Intuitive drag-and-drop clothing items from sidebar to canvas
- **Visual Outfit Assembly**: Layer and position clothing items on a virtual canvas
- **Real-time Outfit Visualization**: See how different combinations look together instantly
- **Interactive Canvas**: Move items around, layer them, and remove unwanted pieces

### 🛒 Shopping Features
- **Outfit Saving**: Save your favorite outfit combinations with custom names
- **Add to Cart**: Purchase complete outfits with calculated total pricing
- **Price Calculator**: Real-time total price calculation for your outfit
- **Item Management**: Easy removal and repositioning of clothing items

### 🎨 User Experience
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Smooth Animations**: Engaging hover effects and transitions
- **Category Organization**: Clothing items organized by type (Tops, Bottoms, Shoes, Accessories)
- **Visual Feedback**: Clear indicators for drag states and interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project directory**
   ```bash
   cd outfit-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

### Creating an Outfit
1. **Browse Clothing Items**: Expand categories in the left sidebar to view available items
2. **Drag Items**: Click and drag any clothing item to the canvas area
3. **Position Items**: Drop items where you want them and move them around as needed
4. **Layer Items**: Items automatically layer on top of each other with proper z-indexing
5. **Remove Items**: Hover over items on canvas and click the X button to remove

### Managing Your Outfit
1. **View Summary**: Check the right sidebar for outfit summary and total price
2. **Save Outfit**: Click "Save Outfit", enter a name, and save for later
3. **Add to Cart**: Click "Add to Cart" to purchase the complete outfit
4. **Reset Canvas**: Clear all items and start over with the "Reset Canvas" button

### Shopping Cart
- View all items in your current outfit
- See individual and total prices
- Add complete outfits to your shopping cart
- Track saved outfits and cart items in the footer

## 🏗️ Project Structure

```
outfit-builder/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main app layout
│   │   ├── page.tsx            # Home page with outfit builder
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── DragDropProvider.tsx    # React DnD context provider
│   │   ├── DraggableClothingItem.tsx   # Individual draggable items
│   │   ├── DroppedClothingItem.tsx     # Items on canvas
│   │   ├── Canvas.tsx              # Main canvas area
│   │   ├── Sidebar.tsx             # Clothing items sidebar
│   │   └── Cart.tsx                # Shopping cart component
│   ├── data/
│   │   └── clothingItems.ts        # Clothing data and categories
│   └── types/
│       └── index.ts               # TypeScript type definitions
├── public/
│   └── assets/                   # Clothing item images
│       ├── tops/
│       ├── bottoms/
│       ├── shoes/
│       └── accessories/
└── README.md
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **React DnD**: Drag and drop functionality
- **Lucide React**: Modern icon library
- **React Hooks**: State management and effects

## 🎨 Available Clothing Items

### 👕 Tops (5 items)
- Classic T-Shirt - $25.99
- Casual Shirt - $39.99
- Polo Shirt - $32.99
- Long Sleeve Tee - $28.99
- Hoodie - $49.99

### 👖 Bottoms (5 items)
- Jeans - $59.99
- Casual Pants - $45.99
- Shorts - $29.99
- Dress Pants - $69.99
- Sweatpants - $34.99

### 👟 Shoes (5 items)
- Sneakers - $89.99
- Running Shoes - $79.99
- Casual Shoes - $65.99
- Dress Shoes - $99.99
- Boots - $119.99

### 🎩 Accessories (5 items)
- Leather Belt - $24.99
- Canvas Belt - $19.99
- Baseball Cap - $15.99
- Fedora Hat - $34.99
- Sunglasses - $29.99

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

## 🚀 Production Build

To create a production build:

```bash
npm run build
npm start
```

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📦 Dependencies

### Core Dependencies
- `next`: Next.js framework
- `react`: React library
- `react-dom`: React DOM library
- `typescript`: TypeScript language

### UI & Styling
- `tailwindcss`: CSS framework
- `lucide-react`: Icon library

### Drag & Drop
- `react-dnd`: Drag and drop library
- `react-dnd-html5-backend`: HTML5 backend for react-dnd

## 🎯 Assignment Requirements Completed

✅ **Drag-and-Drop Interface**: Fully functional with React DnD  
✅ **Visual Outfit Assembly**: Canvas with positioning and layering  
✅ **Selection and Cart Integration**: Save outfits and add to cart  
✅ **Next.js Framework**: Built with Next.js 14 and App Router  
✅ **Modern UI**: Responsive design with Tailwind CSS  
✅ **TypeScript**: Fully typed application  
✅ **Asset Management**: All provided clothing assets integrated  

## 📞 Support

For any issues or questions about this outfit builder application, please refer to the code comments and component documentation within the source files.
