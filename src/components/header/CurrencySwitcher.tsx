'use client';

import React from 'react';
import { useCart, CURRENCIES, CurrencyCode } from '@/context/CartContext';
import { ChevronDown, Globe } from 'lucide-react';

export const CurrencySwitcher: React.FC = () => {
  const { currency, setCurrency } = useCart();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs tracking-wider text-frashi-charcoal hover:text-frashi-oak transition-colors py-1 px-2 rounded border border-frashi-warmGray/50 bg-white/60"
        aria-label="Select Currency"
      >
        <Globe className="w-3 h-3 text-frashi-stone" />
        <span className="font-medium">{currency}</span>
        <ChevronDown className="w-3 h-3 text-frashi-stone" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-1 w-36 rounded-md shadow-luxury bg-white border border-frashi-linen z-50 py-1 text-xs">
            {Object.values(CURRENCIES).map((curr) => (
              <button
                key={curr.code}
                onClick={() => {
                  setCurrency(curr.code as CurrencyCode);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 flex items-center justify-between transition-colors ${
                  currency === curr.code
                    ? 'bg-frashi-sand font-semibold text-frashi-dark'
                    : 'text-frashi-charcoal hover:bg-frashi-cream'
                }`}
              >
                <span>{curr.code}</span>
                <span className="text-frashi-stone">{curr.symbol}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
