'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROOM_CATEGORIES } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export const RoomCategories: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-frashi-linen/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-frashi-oak">
              Curated Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-frashi-dark font-normal">
              Designed For Life & Everyday Tranquility
            </h2>
            <p className="font-arabic text-sm text-frashi-stone font-medium">
              استكشف مجموعات الأثاث المتناسقة بحسب غرف ومساحات منزلك
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-frashi-dark hover:text-frashi-oak transition-colors group"
          >
            <span>Explore All 110+ Furnishings</span>
            <ArrowRight className="w-4 h-4 text-frashi-oak group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOM_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden bg-frashi-sand border border-frashi-linen hover:shadow-luxury transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frashi-dark/85 via-frashi-dark/25 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-frashi-dark backdrop-blur-md">
                  {cat.badge}
                </span>

                {/* Card Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-arabic text-frashi-sand/90 block font-medium">
                    {cat.arabicTitle}
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-tight mt-0.5 group-hover:text-frashi-amber transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-frashi-linen/80 line-clamp-2 mt-1">
                    {cat.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                    <span className="text-frashi-sand/80">{cat.itemCount} Designs</span>
                    <span className="flex items-center gap-1 text-frashi-amber group-hover:translate-x-1 transition-transform">
                      <span>Shop Space</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
