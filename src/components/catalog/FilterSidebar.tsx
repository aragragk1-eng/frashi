'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, RotateCcw, Check } from 'lucide-react';

export interface FilterState {
  category: string;
  materialCategory: string;
  maxPrice: number;
  inStockOnly: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isOpen: boolean;
  onClose: () => void;
  totalResults: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  isOpen,
  onClose,
  totalResults,
}) => {
  const { formatPrice } = useCart();

  const resetFilters = () => {
    setFilters({
      category: 'all',
      materialCategory: 'all',
      maxPrice: 2500,
      inStockOnly: false,
    });
  };

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining Room' },
    { id: 'office', label: 'Home Office' },
  ];

  const materials = [
    { id: 'all', label: 'All Materials' },
    { id: 'solid-wood', label: 'Solid Oak & Hardwood' },
    { id: 'boucle-velvet', label: 'Bouclé & Italian Velvet' },
    { id: 'stone-marble', label: 'Travertine & Marble' },
    { id: 'leather-metal', label: 'Spun Brass & Stone' },
  ];

  const content = (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-frashi-linen">
        <div>
          <h3 className="font-serif font-bold text-base text-frashi-dark">Refine Collection</h3>
          <p className="text-xs text-frashi-stone">{totalResults} pieces matching</p>
        </div>
        <button
          onClick={resetFilters}
          className="text-xs text-frashi-oak hover:underline flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Room Category Filter */}
      <div>
        <label className="block text-xs uppercase font-bold tracking-wider text-frashi-dark mb-3">
          Room / Category
        </label>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilters((prev) => ({ ...prev, category: cat.id }))}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                filters.category === cat.id
                  ? 'bg-frashi-dark text-white font-bold'
                  : 'text-frashi-charcoal hover:bg-frashi-sand'
              }`}
            >
              <span>{cat.label}</span>
              {filters.category === cat.id && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Material Category */}
      <div>
        <label className="block text-xs uppercase font-bold tracking-wider text-frashi-dark mb-3">
          Material & Finish
        </label>
        <div className="space-y-1.5">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setFilters((prev) => ({ ...prev, materialCategory: mat.id }))}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                filters.materialCategory === mat.id
                  ? 'bg-frashi-dark text-white font-bold'
                  : 'text-frashi-charcoal hover:bg-frashi-sand'
              }`}
            >
              <span>{mat.label}</span>
              {filters.materialCategory === mat.id && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Price Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs uppercase font-bold tracking-wider text-frashi-dark">
            Max Price
          </label>
          <span className="text-xs font-bold text-frashi-oak">
            {formatPrice(filters.maxPrice)}
          </span>
        </div>
        <input
          type="range"
          min="400"
          max="2500"
          step="50"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
          }
          className="w-full accent-frashi-oak cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-frashi-stone mt-1">
          <span>{formatPrice(400)}</span>
          <span>{formatPrice(2500)}</span>
        </div>
      </div>

      {/* Stock Toggle */}
      <div className="pt-2">
        <label className="flex items-center justify-between cursor-pointer p-3 rounded-xl bg-frashi-sand/40 border border-frashi-linen">
          <span className="text-xs font-semibold text-frashi-dark">In Stock & Ready to Ship</span>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, inStockOnly: e.target.checked }))
            }
            className="w-4 h-4 accent-frashi-oak rounded cursor-pointer"
          />
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 bg-white p-6 rounded-2xl border border-frashi-linen shadow-soft self-start sticky top-28">
        {content}
      </aside>

      {/* Mobile filter drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-frashi-dark/60 backdrop-blur-sm" onClick={onClose} />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto animate-slide-up flex flex-col justify-between">
            <div>
              <div className="flex justify-end mb-2">
                <button onClick={onClose} className="p-1 text-frashi-stone hover:text-frashi-dark">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {content}
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full py-3 bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-soft"
            >
              Apply Filters ({totalResults})
            </button>
          </div>
        </div>
      )}
    </>
  );
};
