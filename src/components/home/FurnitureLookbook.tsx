'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FURNITURE_LOOKBOOK, LookbookItem } from '@/data/products';
import { Sparkles, ArrowRight, Eye, X, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export const FurnitureLookbook: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState<string>('all');
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const spaces = [
    { id: 'all', label: 'All Spaces', arabic: 'الكل' },
    { id: 'Living Room', label: 'Living Rooms', arabic: 'غرف المعيشة' },
    { id: 'Bedroom', label: 'Bedrooms', arabic: 'غرف النوم' },
    { id: 'Dining', label: 'Dining Salons', arabic: 'طاولات الطعام' },
    { id: 'Home Office', label: 'Workspaces', arabic: 'المكاتب' },
  ];

  const filteredItems = FURNITURE_LOOKBOOK.filter((item) => {
    if (selectedSpace === 'all') return true;
    return item.space === selectedSpace;
  });

  const activeModalItem = previewIndex !== null ? filteredItems[previewIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (previewIndex !== null) {
      setPreviewIndex(previewIndex === 0 ? filteredItems.length - 1 : previewIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (previewIndex !== null) {
      setPreviewIndex(previewIndex === filteredItems.length - 1 ? 0 : previewIndex + 1);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-frashi-linen/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-frashi-sand border border-frashi-linen text-xs font-bold uppercase tracking-widest text-frashi-oak">
              <Sparkles className="w-3.5 h-3.5 text-frashi-amber" />
              <span>Architectural Inspiration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-frashi-dark font-normal">
              The FRASHI Living Lookbook
            </h2>
            <p className="font-arabic text-base sm:text-lg text-frashi-stone font-medium">
              معرض الإلهام والتصاميم: استكشف صور وفضاءات الأثاث في أرقى المنازل المعاصرة
            </p>
          </div>

          {/* Space Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {spaces.map((sp) => (
              <button
                key={sp.id}
                onClick={() => setSelectedSpace(sp.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedSpace === sp.id
                    ? 'bg-frashi-dark text-white shadow-soft scale-105'
                    : 'bg-frashi-sand/60 text-frashi-charcoal hover:bg-frashi-sand border border-frashi-linen'
                }`}
              >
                <span>{sp.label}</span>
                <span className="font-arabic text-[11px] opacity-80 mr-1.5">({sp.arabic})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid of Styled Living Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-frashi-cream/50 border border-frashi-linen shadow-soft hover:shadow-luxury transition-all duration-500 flex flex-col"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-frashi-sand cursor-pointer" onClick={() => setPreviewIndex(idx)}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frashi-dark/80 via-frashi-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-frashi-dark backdrop-blur-md shadow-xs">
                  {item.space}
                </span>

                {/* Hover Quick Zoom Icon */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewIndex(idx);
                  }}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 text-frashi-dark hover:bg-white shadow-soft transition-all transform scale-90 group-hover:scale-100 opacity-90"
                  aria-label="Zoom photo"
                  title="تكبير الصورة"
                >
                  <Eye className="w-4 h-4 text-frashi-dark" />
                </button>

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-arabic text-frashi-amber font-semibold block">
                    {item.arabicTitle}
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-tight mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-frashi-linen/60">
                <p className="text-xs text-frashi-stone leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-frashi-linen flex items-center justify-between">
                  <button
                    onClick={() => setPreviewIndex(idx)}
                    className="text-xs font-bold text-frashi-charcoal hover:text-frashi-oak flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-frashi-oak" />
                    <span>عرض التفاصيل</span>
                  </button>

                  <Link
                    href={`/product/${item.featuredProductId}`}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-frashi-dark text-white text-[11px] font-bold uppercase tracking-wider hover:bg-frashi-oak transition-colors"
                  >
                    <span>Shop Look</span>
                    <ArrowRight className="w-3 h-3 text-frashi-sand" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-frashi-sand/70 via-frashi-cream to-amber-50/40 border border-frashi-linen flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-frashi-dark">
              Looking for Bespoke Layouts or Custom Dimensions?
            </h4>
            <p className="text-xs sm:text-sm text-frashi-stone font-arabic">
              مستشارو الديكور في فراشي جاهزون لمساعدتكم في تنسيق مساحاتكم واختيار الألوان المناسبة
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/catalog"
              className="px-6 py-3 rounded-full bg-white border border-frashi-linen text-frashi-dark hover:bg-frashi-sand font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              Browse All Catalog
            </Link>
            <a
              href="https://wa.me/212611650381?text=Hello%20FRASHI!%20I%20would%20like%20a%20free%20interior%20styling%20consultation."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-frashi-dark text-white hover:bg-frashi-charcoal font-bold text-xs uppercase tracking-wider transition-all shadow-soft flex items-center gap-2"
            >
              <span>WhatsApp Stylist</span>
              <ArrowRight className="w-3.5 h-3.5 text-frashi-sand" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Photo Preview Modal */}
      {previewIndex !== null && activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Box */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                priority
                className="object-cover"
              />

              {/* Close Button */}
              <button
                onClick={() => setPreviewIndex(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev/Next arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Info Strip */}
            <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-frashi-oak">
                  {activeModalItem.space} • {activeModalItem.arabicTitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-frashi-dark mt-0.5">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-frashi-stone mt-1 max-w-xl">
                  {activeModalItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/product/${activeModalItem.featuredProductId}`}
                  onClick={() => setPreviewIndex(null)}
                  className="px-6 py-3 rounded-full bg-frashi-dark text-white hover:bg-frashi-oak font-bold text-xs uppercase tracking-widest transition-all shadow-luxury flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-frashi-sand" />
                  <span>Shop Featured Furniture</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
