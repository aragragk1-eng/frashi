'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, isWishlistOpen, closeWishlist, removeFromWishlist } = useWishlist();
  const { addToCart, formatPrice } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        className="fixed inset-0 bg-frashi-dark/60 backdrop-blur-sm transition-opacity"
        onClick={closeWishlist}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-frashi-linen flex items-center justify-between bg-frashi-cream/60">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-frashi-terracotta fill-frashi-terracotta" />
              <h2 className="font-serif text-lg font-semibold text-frashi-dark">
                Saved Favorites ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={closeWishlist}
              className="p-1.5 text-frashi-stone hover:text-frashi-dark rounded-full hover:bg-frashi-sand/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-frashi-linen/70">
            {wishlist.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-frashi-sand flex items-center justify-center">
                  <Heart className="w-8 h-8 text-frashi-stone" />
                </div>
                <h3 className="font-serif text-lg font-medium text-frashi-dark">
                  No favorites saved yet
                </h3>
                <p className="text-xs text-frashi-stone max-w-xs mx-auto">
                  Click the heart icon on any furniture piece to save it to your wishlist for later.
                </p>
                <Link
                  href="/catalog"
                  onClick={closeWishlist}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-frashi-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-frashi-charcoal transition-all shadow-soft"
                >
                  <span>Explore Furniture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              wishlist.map((product) => (
                <div key={product.id} className="py-4 flex gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-frashi-sand border border-frashi-linen flex-shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${product.id}`}
                          onClick={closeWishlist}
                          className="font-serif text-sm font-semibold text-frashi-dark hover:text-frashi-oak transition-colors line-clamp-1"
                        >
                          {product.name}
                        </Link>
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="text-frashi-stone hover:text-red-600 p-1"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-frashi-stone line-clamp-1 mt-0.5">
                        {product.material}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-semibold text-frashi-dark">
                        {formatPrice(product.price)}
                      </span>

                      <button
                        onClick={() => {
                          addToCart(product);
                          removeFromWishlist(product.id);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-frashi-dark text-white text-xs font-semibold hover:bg-frashi-charcoal transition-all"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-5 border-t border-frashi-linen bg-frashi-cream/30">
              <Link
                href="/catalog"
                onClick={closeWishlist}
                className="w-full py-3 px-4 rounded-xl border border-frashi-linen bg-white text-frashi-dark text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-frashi-sand transition-colors text-center"
              >
                <span>Continue Browsing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
