'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Shield, Truck, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-frashi-cream">
      {/* Background Editorial Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="FRASHI Luxury Living Room Furniture"
          fill
          priority
          className="object-cover object-center scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-frashi-dark/85 via-frashi-dark/60 to-transparent sm:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-frashi-dark/70 via-transparent to-transparent sm:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-2xl text-white space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs tracking-wider uppercase font-medium text-frashi-sand animate-slide-up">
            <Sparkles className="w-3.5 h-3.5 text-frashi-amber" />
            <span>The 2026 Architectural Living Collection</span>
          </div>

          {/* Catchy Main Heading */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight">
              Living Refined. <br />
              <span className="italic font-light text-frashi-sand">Comfort Defined.</span>
            </h1>
            <p className="font-arabic text-lg sm:text-xl text-frashi-warmGray/90 font-normal">
              أثاث منزلي فاخر يجمع بين دفء الأخشاب الطبيعية وأناقة الأقمشة الإيطالية
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-frashi-linen/90 font-light leading-relaxed max-w-xl">
            Imbue your home with sculpted bouclé sofas, monolithic French oak dining tables, and Roman travertine statement pieces designed for timeless Middle Eastern and international living.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/catalog"
              className="px-8 py-4 rounded-full bg-white text-frashi-dark hover:bg-frashi-sand font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-elevated flex items-center justify-center gap-2 group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-frashi-oak group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/catalog?category=living-room"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 border border-white/20 flex items-center justify-center"
            >
              <span>Living Room Highlights</span>
            </Link>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-xs text-frashi-linen">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-frashi-amber flex-shrink-0" />
              <span className="text-[11px] font-medium leading-tight">Free White-Glove In-Home Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-frashi-amber flex-shrink-0" />
              <span className="text-[11px] font-medium leading-tight">10-Year Solid Hardwood Frame</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-[11px] font-medium leading-tight">Cash on Delivery Across GCC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
