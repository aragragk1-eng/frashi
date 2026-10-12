'use client';

import React from 'react';
import Link from 'next/link';
import { CurrencySwitcher } from './CurrencySwitcher';
import { Sparkles, MessageCircle, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-frashi-dark text-frashi-sand text-xs border-b border-frashi-charcoal/40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Left: Highlight message */}
        <div className="hidden sm:flex items-center gap-2 text-frashi-warmGray">
          <Truck className="w-3.5 h-3.5 text-frashi-amber" />
          <span>Complimentary White-Glove In-Home Delivery across UAE & KSA on orders over $1,000</span>
        </div>

        {/* Center: Mobile banner */}
        <div className="sm:hidden flex items-center justify-center w-full gap-2 text-[11px]">
          <Sparkles className="w-3 h-3 text-frashi-amber" />
          <span>Cash on Delivery & White-Glove Assembly Available</span>
        </div>

        {/* Right: Quick actions & currency */}
        <div className="hidden sm:flex items-center gap-4 text-xs">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-frashi-warmGray hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Showrooms & Styling Concierge</span>
          </Link>
          <span className="text-frashi-stone/50">|</span>
          <CurrencySwitcher />
        </div>
      </div>
    </div>
  );
};
