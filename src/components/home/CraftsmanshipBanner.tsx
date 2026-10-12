'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const CraftsmanshipBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-frashi-sand/70 border-y border-frashi-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Collage */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated border border-frashi-linen">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                alt="FRASHI Artisanal Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-frashi-dark/40 to-transparent" />
            </div>

            {/* Overlapping Detail Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-5 sm:p-6 rounded-2xl shadow-luxury border border-frashi-linen max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-frashi-sand flex items-center justify-center font-serif text-lg font-bold text-frashi-oak">
                  10
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-frashi-dark">
                    Heirloom Warranty
                  </h4>
                  <p className="text-[11px] text-frashi-stone mt-0.5">
                    10-year structural warranty on every solid hardwood frame
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-frashi-oak">
                Artisanal Integrity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-frashi-dark font-normal leading-tight">
                Honest Materials. Sculptural Silhouettes. Built to Endure Generations.
              </h2>
              <p className="font-arabic text-base text-frashi-stone">
                نختار أجود أنواع أخشاب البلوط والرخام الإيطالي لنصنع قطعاً تورث عبر الأجيال
              </p>
            </div>

            <p className="text-sm text-frashi-charcoal leading-relaxed">
              At FRASHI, every furniture piece begins with raw natural elements: sustainably harvested French oak, quarried Roman travertine blocks, and dense tactile bouclé woven by historic mills. We reject particleboard and fast-furniture disposability in favor of traditional mortise-and-tenon joints and water-based protective finishes.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'FSC® Certified Solid Hardwood', desc: 'No cheap veneers. Built from solid European beech and oak.' },
                { title: 'Stain-Resistant Performance Bouclé & Velvet', desc: 'Family-friendly luxury treated for effortless maintenance.' },
                { title: 'Zero VOC Plant-Based Finishes', desc: 'Organic hardwax oils ensuring healthy indoor air quality.' },
                { title: 'Full In-Home Assembly Included', desc: 'Our white-glove team places, unboxes, and cleans up.' },
              ].map((pill, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-frashi-oak mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-frashi-dark">{pill.title}</h5>
                    <p className="text-[11px] text-frashi-stone">{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/catalog"
                className="px-6 py-3 rounded-full bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-frashi-charcoal transition-all shadow-soft inline-flex items-center gap-2"
              >
                <span>Shop Handcrafted Furniture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-semibold text-frashi-oak hover:underline uppercase tracking-wider"
              >
                Order Free Swatch Kit →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
