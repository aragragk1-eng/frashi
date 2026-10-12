'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageCircle,
  Tag
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    formatPrice,
    subtotal,
    discount,
    shipping,
    total,
    freeShippingThreshold,
    freeShippingRemaining,
    promoCode,
    applyPromoCode,
    removePromoCode,
    generateWhatsAppOrderUrl,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ success?: boolean; message?: string } | null>(null);

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(
    100,
    Math.round(((freeShippingThreshold - freeShippingRemaining) / freeShippingThreshold) * 100)
  );

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromoCode(promoInput);
    setPromoFeedback(res);
    if (res.success) setPromoInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-frashi-dark/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-frashi-linen flex items-center justify-between bg-frashi-cream/60">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-frashi-oak" />
              <h2 className="font-serif text-lg font-semibold text-frashi-dark">
                Your Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-frashi-stone hover:text-frashi-dark rounded-full hover:bg-frashi-sand/80 transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Tier Bar */}
          <div className="px-5 py-3 bg-frashi-sand/60 border-b border-frashi-linen text-xs">
            {freeShippingRemaining > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-frashi-charcoal font-medium">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-frashi-amber" />
                    <span>Add {formatPrice(freeShippingRemaining)} for Free White-Glove Delivery</span>
                  </span>
                  <span className="font-bold text-frashi-oak">{freeShippingProgress}%</span>
                </div>
                <div className="w-full bg-frashi-linen h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-frashi-oak h-full rounded-full transition-all duration-500"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>You unlocked Free In-Home Delivery & Assembly!</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-frashi-linen/70">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-frashi-sand flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-frashi-stone" />
                </div>
                <h3 className="font-serif text-lg font-medium text-frashi-dark">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-frashi-stone max-w-xs mx-auto">
                  Explore our curated living, dining, and bedroom furniture crafted for modern living.
                </p>
                <Link
                  href="/catalog"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-frashi-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-frashi-charcoal transition-all shadow-soft"
                >
                  <span>Explore Furniture Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-frashi-sand border border-frashi-linen flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${item.productId}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-semibold text-frashi-dark hover:text-frashi-oak transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-frashi-stone hover:text-red-600 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="w-3 h-3 rounded-full border border-frashi-stone/40 inline-block"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        <span className="text-xs text-frashi-stone">
                          {item.selectedColor.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-frashi-linen rounded-md bg-frashi-sand/30">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-frashi-stone hover:text-frashi-dark transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-frashi-dark min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-frashi-stone hover:text-frashi-dark transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-semibold text-frashi-dark">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 border-t border-frashi-linen bg-frashi-cream/30 space-y-4">
              {/* Promo code accordion */}
              {!promoCode ? (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-frashi-stone absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. FRASHI10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-frashi-linen rounded-lg bg-white focus:outline-none focus:border-frashi-oak"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-frashi-sand text-xs font-semibold text-frashi-charcoal rounded-lg hover:bg-frashi-linen transition-colors"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <span className="font-semibold">Code &apos;{promoCode}&apos; Applied!</span>
                  <button
                    onClick={removePromoCode}
                    className="text-red-600 hover:underline font-medium text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              )}

              {promoFeedback && (
                <p
                  className={`text-[11px] ${
                    promoFeedback.success ? 'text-emerald-700' : 'text-red-600'
                  }`}
                >
                  {promoFeedback.message}
                </p>
              )}

              {/* Cost breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-frashi-stone">
                  <span>Subtotal</span>
                  <span className="font-semibold text-frashi-dark">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount ({promoCode})</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-frashi-stone">
                  <span>White-Glove Delivery & Assembly</span>
                  <span className="font-semibold text-frashi-dark">
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="pt-2 border-t border-frashi-linen flex justify-between text-base font-serif font-bold text-frashi-dark">
                  <span>Estimated Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full py-3.5 px-4 rounded-xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-frashi-charcoal transition-all shadow-luxury"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={generateWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-emerald-600/40 bg-emerald-50 text-emerald-900 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Order Directly via WhatsApp Concierge</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 text-[11px] text-frashi-stone pt-1">
                <span>✓ Cash on Delivery (COD)</span>
                <span>•</span>
                <span>✓ 30-Day In-Home Trial</span>
                <span>•</span>
                <span>✓ Secure Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
