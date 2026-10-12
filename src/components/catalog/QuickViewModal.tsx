'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, ProductColor } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import {
  X,
  Star,
  Check,
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { formatPrice, addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product ? product.colors[0] : null
  );
  const [activeImage, setActiveImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) return null;

  const currentColor = selectedColor || product.colors[0];
  const isFav = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, currentColor, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-frashi-dark/70 backdrop-blur-md animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-elevated border border-frashi-linen overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2 animate-slide-up max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm text-frashi-dark hover:bg-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="p-6 bg-frashi-sand/40 flex flex-col justify-between">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-frashi-sand border border-frashi-linen">
            <Image
              src={product.images[activeImage] || product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.isBestseller && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-frashi-dark text-white">
                Bestseller
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                  activeImage === idx
                    ? 'border-frashi-dark shadow-soft scale-105'
                    : 'border-frashi-linen/70 opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={img} alt="Angle thumbnail" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product details */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Top metadata */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-widest text-frashi-oak">
                {product.categoryLabel}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-frashi-stone font-medium">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{product.rating}</span>
                <span>({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-frashi-dark">
                {product.name}
              </h2>
              <span className="block text-sm font-arabic text-frashi-stone mt-0.5">
                {product.arabicName}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-frashi-dark">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-frashi-stone line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                In Stock & Ready to Ship
              </span>
            </div>

            <p className="text-xs text-frashi-charcoal leading-relaxed line-clamp-3">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div>
              <label className="block text-xs font-semibold text-frashi-dark uppercase tracking-wider mb-2">
                Selected Finish: <span className="text-frashi-oak normal-case">{currentColor.name}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                      currentColor.name === color.name
                        ? 'border-frashi-dark bg-frashi-sand text-frashi-dark ring-1 ring-frashi-dark'
                        : 'border-frashi-linen text-frashi-charcoal hover:bg-frashi-cream'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-frashi-stone/40"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions highlight */}
            <div className="p-3 bg-frashi-sand/40 rounded-xl border border-frashi-linen/70 text-xs text-frashi-charcoal space-y-1">
              <p className="font-semibold text-frashi-dark">Key Dimensions:</p>
              <p className="text-frashi-stone">
                W: {product.dimensions.width} • D: {product.dimensions.depth} • H: {product.dimensions.height}
              </p>
            </div>
          </div>

          {/* Action buttons & perks */}
          <div className="space-y-4 pt-4 border-t border-frashi-linen">
            <div className="flex items-center gap-3">
              {/* Quantity */}
              <div className="flex items-center border border-frashi-linen rounded-xl bg-frashi-sand/20 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-frashi-stone hover:text-frashi-dark"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 text-sm font-bold text-frashi-dark min-w-[30px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-frashi-stone hover:text-frashi-dark"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-6 rounded-xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-frashi-charcoal transition-all shadow-luxury flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag • {formatPrice(product.price * quantity)}</span>
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-xl border border-frashi-linen transition-colors ${
                  isFav
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white text-frashi-stone hover:text-rose-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFav ? 'fill-rose-600' : ''}`} />
              </button>
            </div>

            {/* Link to full PDP */}
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{product.deliveryEstimate} Delivery</span>
              </span>
              <Link
                href={`/product/${product.id}`}
                onClick={onClose}
                className="text-frashi-oak hover:underline font-semibold flex items-center gap-1"
              >
                <span>Full Specs & Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
