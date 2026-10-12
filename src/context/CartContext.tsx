'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductColor } from '@/data/products';

export interface CartItem {
  id: string; // unique item key e.g. productId-colorName
  productId: string;
  name: string;
  arabicName: string;
  price: number; // base USD price
  image: string;
  selectedColor: ProductColor;
  quantity: number;
  categoryLabel: string;
}

export type CurrencyCode = 'USD' | 'AED' | 'SAR' | 'EUR';

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rate: number;
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, label: 'USD ($)' },
  AED: { code: 'AED', symbol: 'AED', rate: 3.67, label: 'AED (د.إ)' },
  SAR: { code: 'SAR', symbol: 'SAR', rate: 3.75, label: 'SAR (ر.س)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
};

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, color?: ProductColor, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (amountInUSD: number) => string;
  convertPrice: (amountInUSD: number) => number;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  promoCode: string;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  totalItemsCount: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  generateWhatsAppOrderUrl: (customerDetails?: { name: string; city: string; phone: string; paymentMethod: string }) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD_USD = 1000;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  // Load from local storage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('frashi_cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedCurrency = localStorage.getItem('frashi_currency') as CurrencyCode;
      if (savedCurrency && CURRENCIES[savedCurrency]) {
        setCurrency(savedCurrency);
      }
    } catch (e) {
      console.error('Failed to load cart from storage', e);
    }
    setMounted(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('frashi_cart', JSON.stringify(items));
      } catch (e) {
        console.error('Failed to save cart to storage', e);
      }
    }
  }, [items, mounted]);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('frashi_currency', currency);
      } catch (e) {
        console.error('Failed to save currency', e);
      }
    }
  }, [currency, mounted]);

  const addToCart = (product: Product, color?: ProductColor, quantity = 1) => {
    const selectedColor = color || product.colors[0];
    const itemId = `${product.id}-${selectedColor.name.toLowerCase().replace(/\s+/g, '-')}`;

    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === itemId);
      if (existing) {
        return prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: itemId,
            productId: product.id,
            name: product.name,
            arabicName: product.arabicName,
            price: product.price,
            image: product.images[0],
            selectedColor,
            quantity,
            categoryLabel: product.categoryLabel,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode('');
    setDiscountPercent(0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const convertPrice = (amountInUSD: number): number => {
    const rate = CURRENCIES[currency].rate;
    return Math.round(amountInUSD * rate);
  };

  const formatPrice = (amountInUSD: number): string => {
    const curr = CURRENCIES[currency];
    const converted = Math.round(amountInUSD * curr.rate);
    const formatted = new Intl.NumberFormat('en-US').format(converted);
    if (curr.code === 'AED' || curr.code === 'SAR') {
      return `${formatted} ${curr.symbol}`;
    }
    return `${curr.symbol}${formatted}`;
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * (discountPercent / 100));
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD_USD || subtotal === 0 ? 0 : 75;
  const total = subtotal - discount + shipping;

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingThreshold = FREE_SHIPPING_THRESHOLD_USD;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD_USD - subtotal);

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'FRASHI10' || clean === 'LUXURY10') {
      setPromoCode(clean);
      setDiscountPercent(10);
      return { success: true, message: '10% Exclusive Luxury Discount applied!' };
    }
    if (clean === 'WELCOME15') {
      setPromoCode(clean);
      setDiscountPercent(15);
      return { success: true, message: '15% Welcome To FRASHI Discount applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try FRASHI10 or WELCOME15' };
  };

  const removePromoCode = () => {
    setPromoCode('');
    setDiscountPercent(0);
  };

  const generateWhatsAppOrderUrl = (customerDetails?: {
    name: string;
    city: string;
    phone: string;
    paymentMethod: string;
  }) => {
    const phoneNumber = '212611650381'; // FRASHI Morocco WhatsApp Concierge
    const date = new Date().toLocaleDateString('en-GB');

    let msg = `*FRASHI (فراشي) Luxury Order Request*\n`;
    msg += `📅 Date: ${date}\n\n`;

    if (customerDetails) {
      msg += `👤 *Customer Details*:\n`;
      msg += `• Name: ${customerDetails.name}\n`;
      msg += `• City: ${customerDetails.city}\n`;
      msg += `• Phone: ${customerDetails.phone}\n`;
      msg += `• Payment: ${customerDetails.paymentMethod}\n\n`;
    }

    msg += `🛋️ *Selected Furniture Items*:\n`;
    items.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}* (${item.arabicName})\n`;
      msg += `   - Finish: ${item.selectedColor.name}\n`;
      msg += `   - Qty: ${item.quantity} x ${formatPrice(item.price)}\n`;
    });

    msg += `\n💵 *Financial Summary*:\n`;
    msg += `• Subtotal: ${formatPrice(subtotal)}\n`;
    if (discount > 0) msg += `• Discount (${promoCode}): -${formatPrice(discount)}\n`;
    msg += `• Delivery & Assembly: ${shipping === 0 ? 'FREE (White-Glove)' : formatPrice(shipping)}\n`;
    msg += `• *Total Amount: ${formatPrice(total)}*\n\n`;
    msg += `Please confirm availability and delivery scheduling. Thank you!`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        subtotal,
        discount,
        shipping,
        total,
        promoCode,
        applyPromoCode,
        removePromoCode,
        totalItemsCount,
        freeShippingThreshold,
        freeShippingRemaining,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
