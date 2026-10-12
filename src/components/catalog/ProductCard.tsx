'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { formatPrice, addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isFav = isInWishlist(product.id);
  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-frashi-linen hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => {
        setIsHovered(true);
        if (product.images.length > 1) setCurrentImageIndex(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      {/* Media container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-frashi-sand">
        <Link href={`/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[currentImageIndex] || product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-frashi-dark text-white shadow-soft">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-frashi-amber text-frashi-dark shadow-soft">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isFav
              ? 'bg-white text-frashi-terracotta shadow-soft'
              : 'bg-white/80 text-frashi-charcoal hover:bg-white hover:text-frashi-terracotta'
          }`}
          aria-label={isFav ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-frashi-terracotta' : ''}`} />
        </button>

        {/* Quick View Button overlay */}
        {onQuickView && (
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-2">
            <button
              onClick={() => onQuickView(product)}
              className="flex-1 py-2 px-3 rounded-xl bg-white/95 backdrop-blur-sm text-xs font-semibold text-frashi-dark hover:bg-white shadow-soft flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-frashi-stone" />
              <span>Quick View</span>
            </button>
            <button
              onClick={() => addToCart(product, activeColor)}
              className="py-2 px-3 rounded-xl bg-frashi-dark text-white hover:bg-frashi-charcoal text-xs font-semibold shadow-soft flex items-center justify-center transition-colors"
              title="Add to Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="uppercase text-[10px] tracking-wider font-bold text-frashi-oak">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-frashi-stone font-medium">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>{product.rating}</span>
              <span>({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/product/${product.id}`} className="block group-hover:text-frashi-oak transition-colors">
            <h3 className="font-serif text-base font-semibold text-frashi-dark line-clamp-1">
              {product.name}
            </h3>
            <span className="block text-[11px] font-arabic text-frashi-stone line-clamp-1 mt-0.5">
              {product.arabicName}
            </span>
          </Link>

          {/* Material highlight */}
          <p className="text-xs text-frashi-stone line-clamp-1 mt-1 font-normal">
            {product.material}
          </p>
        </div>

        {/* Swatches & Price */}
        <div className="pt-4 mt-3 border-t border-frashi-linen/70 flex items-center justify-between">
          {/* Color swatches */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={() => setSelectedColorIndex(idx)}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColorIndex === idx
                    ? 'ring-2 ring-frashi-dark scale-110 border-white'
                    : 'border-frashi-linen hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[10px] text-frashi-stone ml-1">+{product.colors.length - 3}</span>
            )}
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="flex items-baseline gap-2 justify-end">
              {product.originalPrice && (
                <span className="text-xs text-frashi-stone line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-base font-bold text-frashi-dark">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
