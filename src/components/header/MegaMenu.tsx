'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROOM_CATEGORIES } from '@/data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  return (
    <div
      className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-frashi-linen shadow-elevated z-50 animate-fade-in"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between pb-4 border-b border-frashi-linen/70 mb-6">
          <div>
            <h3 className="font-serif text-xl text-frashi-dark tracking-tight">Curated Living Spaces</h3>
            <p className="text-xs text-frashi-stone mt-0.5">Explore hand-selected architectural furnishings by room</p>
          </div>
          <Link
            href="/catalog"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-frashi-oak hover:text-frashi-oakDark tracking-wider uppercase transition-colors"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {ROOM_CATEGORIES.map((room) => (
            <Link
              key={room.id}
              href={`/catalog?category=${room.id}`}
              onClick={onClose}
              className="group relative rounded-xl overflow-hidden bg-frashi-sand border border-frashi-linen/80 hover:shadow-luxury transition-all duration-300"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frashi-dark/80 via-frashi-dark/20 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/90 text-frashi-dark backdrop-blur-sm">
                  {room.badge}
                </span>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif font-semibold text-base text-frashi-dark group-hover:text-frashi-oak transition-colors">
                    {room.title}
                  </h4>
                  <span className="text-[11px] font-arabic text-frashi-stone">{room.arabicTitle}</span>
                </div>
                <p className="text-xs text-frashi-stone line-clamp-1 mt-1">{room.subtitle}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-frashi-charcoal font-medium">
                  <span className="text-frashi-stone/80 text-[11px]">{room.itemCount} Designs</span>
                  <span className="flex items-center gap-1 text-frashi-oak group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mega menu bottom banner */}
        <div className="mt-6 pt-4 border-t border-frashi-linen/60 flex items-center justify-between text-xs text-frashi-stone">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-frashi-amber" />
            <span>Need bespoke interior design consultation? Our stylists provide tailored 3D floor plan layout services.</span>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-frashi-dark underline font-medium hover:text-frashi-oak"
          >
            Book Free Styling Session
          </Link>
        </div>
      </div>
    </div>
  );
};
