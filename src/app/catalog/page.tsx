'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';
import { FilterSidebar, FilterState } from '@/components/catalog/FilterSidebar';
import { QuickViewModal } from '@/components/catalog/QuickViewModal';
import {
  SlidersHorizontal,
  ChevronDown,
  LayoutGrid,
  List,
  Sparkles,
  X
} from 'lucide-react';

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    materialCategory: 'all',
    maxPrice: 2500,
    inStockOnly: false,
  });

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Sync category param if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilters((prev) => ({ ...prev, category: cat }));
    }
  }, [searchParams]);

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.materialCategory !== 'all' && product.materialCategory !== filters.materialCategory) return false;
    if (product.price > filters.maxPrice) return false;
    if (filters.inStockOnly && !product.inStock) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    // Featured: bestsellers first
    return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
  });

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.materialCategory !== 'all' ||
    filters.maxPrice < 2500 ||
    filters.inStockOnly;

  return (
    <div className="bg-frashi-cream/30 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-frashi-stone uppercase tracking-wider font-semibold">
            <span>Home</span>
            <span>/</span>
            <span className="text-frashi-dark">Furniture Collection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-frashi-dark font-normal">
            The Complete FRASHI Furniture Catalog
          </h1>
          <p className="font-arabic text-sm text-frashi-stone font-medium">
            مجموعة الأثاث والديكور الداخلي المتكاملة للمنازل العصرية الراقية
          </p>
        </div>

        {/* Toolbar: Filter trigger, Count, Sort, View mode */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-frashi-linen shadow-soft mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-frashi-sand text-xs font-bold text-frashi-dark uppercase tracking-wider"
            >
              <SlidersHorizontal className="w-4 h-4 text-frashi-oak" />
              <span>Filters</span>
            </button>
            <span className="text-xs font-semibold text-frashi-charcoal">
              Showing <strong className="text-frashi-dark">{sortedProducts.length}</strong> Furniture Pieces
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-frashi-stone hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-frashi-sand/60 border border-frashi-linen rounded-xl px-3 py-2 text-xs font-semibold text-frashi-dark focus:outline-none focus:border-frashi-oak cursor-pointer"
              >
                <option value="featured">Featured & Bestsellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>

            {/* Grid vs List View toggle */}
            <div className="hidden sm:flex items-center border border-frashi-linen rounded-xl bg-frashi-sand/40 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white shadow-soft text-frashi-dark'
                    : 'text-frashi-stone hover:text-frashi-dark'
                }`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white shadow-soft text-frashi-dark'
                    : 'text-frashi-stone hover:text-frashi-dark'
                }`}
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters Pill Bar */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap mb-6 text-xs">
            <span className="font-semibold text-frashi-stone">Active Filters:</span>
            {filters.category !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-frashi-sand text-frashi-dark font-medium border border-frashi-linen">
                Room: {filters.category}
                <button
                  onClick={() => setFilters((p) => ({ ...p, category: 'all' }))}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.materialCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-frashi-sand text-frashi-dark font-medium border border-frashi-linen">
                Material: {filters.materialCategory}
                <button
                  onClick={() => setFilters((p) => ({ ...p, materialCategory: 'all' }))}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.inStockOnly && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-medium">
                In Stock Only
                <button
                  onClick={() => setFilters((p) => ({ ...p, inStockOnly: false }))}
                  className="hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={() =>
                setFilters({
                  category: 'all',
                  materialCategory: 'all',
                  maxPrice: 2500,
                  inStockOnly: false,
                })
              }
              className="text-xs text-frashi-oak hover:underline font-semibold ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Main Layout: Sidebar + Grid */}
        <div className="flex gap-8 items-start">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
            totalResults={sortedProducts.length}
          />

          {/* Product Feed */}
          <div className="flex-1 w-full">
            {sortedProducts.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-6'
                }
              >
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl border border-frashi-linen text-center space-y-4">
                <Sparkles className="w-10 h-10 text-frashi-oak mx-auto" />
                <h3 className="font-serif text-xl font-bold text-frashi-dark">
                  No furniture pieces match your selected filters
                </h3>
                <p className="text-xs text-frashi-stone max-w-sm mx-auto">
                  Try adjusting your price ceiling or removing material category filters to see more pieces.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      category: 'all',
                      materialCategory: 'all',
                      maxPrice: 2500,
                      inStockOnly: false,
                    })
                  }
                  className="px-6 py-2.5 rounded-full bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-frashi-charcoal transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-serif">Loading FRASHI Catalog...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
