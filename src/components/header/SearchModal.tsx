'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matched = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.arabicName.includes(query) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setResults(matched);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-frashi-dark/60 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-elevated border border-frashi-linen overflow-hidden z-10 animate-slide-up">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-frashi-linen bg-frashi-cream/30">
          <Search className="w-5 h-5 text-frashi-stone mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن أريكة، خزانة ملابس، مائدة، مصابيح، مزهريات... / Search furniture..."
            className="w-full text-base bg-transparent border-none outline-none text-frashi-dark placeholder-frashi-stone font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-frashi-stone hover:text-frashi-dark mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold px-2 py-1 bg-frashi-sand rounded text-frashi-stone hover:text-frashi-dark transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        {!query && (
          <div className="p-6">
            <p className="text-xs font-semibold text-frashi-stone tracking-wider uppercase mb-3">
              كلمات البحث الشائعة • Popular Searches
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'أريكة للنوم',
                'أريكة صغيرة',
                'مائدة بالكراسي',
                'خزانة ملابس',
                'خزانة الأحذية',
                'مصابيح',
                'مزهريات',
                'Bouclé Sofa',
                'Oak Bed'
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-frashi-sand hover:bg-frashi-linen text-frashi-charcoal transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold text-frashi-stone tracking-wider uppercase mb-3">
              Featured Furnishings
            </p>
            <div className="grid grid-cols-2 gap-3">
              {PRODUCTS.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-frashi-sand/60 transition-colors group"
                >
                  <div className="relative w-12 h-12 rounded-md overflow-hidden bg-frashi-sand flex-shrink-0">
                    <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <h5 className="text-xs font-semibold text-frashi-dark truncate group-hover:text-frashi-oak transition-colors">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-frashi-stone">{formatPrice(item.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="max-h-96 overflow-y-auto p-4 divide-y divide-frashi-linen/60">
            {results.length > 0 ? (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-frashi-cream transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-frashi-sand flex-shrink-0 border border-frashi-linen">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-frashi-oak">
                        {product.categoryLabel}
                      </span>
                      <h4 className="text-sm font-serif font-medium text-frashi-dark group-hover:text-frashi-oak transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-frashi-stone line-clamp-1">{product.material}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-frashi-dark">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-frashi-oak justify-end mt-1 font-medium">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-sm text-frashi-charcoal font-medium">No furniture found for &quot;{query}&quot;</p>
                <p className="text-xs text-frashi-stone mt-1">
                  Try searching by material like &quot;Oak&quot;, &quot;Bouclé&quot; or browse our catalog.
                </p>
                <Link
                  href="/catalog"
                  onClick={onClose}
                  className="inline-block mt-4 text-xs font-semibold text-frashi-oak hover:underline uppercase tracking-wider"
                >
                  Browse Full Catalog
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="px-6 py-3 bg-frashi-sand/40 border-t border-frashi-linen flex items-center justify-between text-[11px] text-frashi-stone">
          <span>Search through all handcrafted FRASHI pieces</span>
          <span className="flex items-center gap-1">
            Press <CornerDownLeft className="w-3 h-3 inline" /> to select
          </span>
        </div>
      </div>
    </div>
  );
};
