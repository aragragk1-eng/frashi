'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';
import { QuickViewModal } from '@/components/catalog/QuickViewModal';
import { ArrowRight, Sparkles } from 'lucide-react';

export const BestsellerShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'living-room' | 'bedroom' | 'dining' | 'office'>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const tabs = [
    { id: 'all', label: 'All Curated Pieces' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining' },
    { id: 'office', label: 'Home Office' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-frashi-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-frashi-sand border border-frashi-linen text-xs font-bold uppercase tracking-widest text-frashi-oak">
            <Sparkles className="w-3.5 h-3.5 text-frashi-amber" />
            <span>Signature Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-frashi-dark font-normal">
            Bestsellers & Timeless Statements
          </h2>
          <p className="font-arabic text-sm text-frashi-stone font-medium">
            قطع الأثاث الأكثر طلباً والمختارة بعناية لأصحاب الذوق الرفيع
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-frashi-dark text-white shadow-soft scale-105'
                  : 'bg-white text-frashi-charcoal hover:bg-frashi-sand border border-frashi-linen'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-frashi-dark text-white hover:bg-frashi-charcoal text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-luxury"
          >
            <span>View All {PRODUCTS.length} Furniture Pieces</span>
            <ArrowRight className="w-4 h-4 text-frashi-sand" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
