'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { MegaMenu } from './MegaMenu';
import { SearchModal } from './SearchModal';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { totalItemsCount, openCart } = useCart();
  const { wishlistCount, openWishlist } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-frashi-linen/80 py-3.5'
            : 'bg-frashi-cream/80 backdrop-blur-sm border-b border-frashi-linen/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile hamburger & Desktop Nav Links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-frashi-dark hover:text-frashi-oak focus:outline-none"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <nav className="hidden lg:flex items-center gap-7">
                <button
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors py-2 ${
                    megaMenuOpen ? 'text-frashi-oak' : 'text-frashi-dark hover:text-frashi-oak'
                  }`}
                >
                  <span>Rooms & Spaces</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <Link
                  href="/catalog?category=living-room"
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                    pathname === '/catalog'
                      ? 'text-frashi-oak'
                      : 'text-frashi-dark hover:text-frashi-oak'
                  }`}
                >
                  Living
                </Link>

                <Link
                  href="/catalog?category=bedroom"
                  className="text-xs font-semibold tracking-wider uppercase text-frashi-dark hover:text-frashi-oak transition-colors"
                >
                  Bedroom
                </Link>

                <Link
                  href="/catalog?category=dining"
                  className="text-xs font-semibold tracking-wider uppercase text-frashi-dark hover:text-frashi-oak transition-colors"
                >
                  Dining
                </Link>

                <Link
                  href="/catalog?category=office"
                  className="text-xs font-semibold tracking-wider uppercase text-frashi-dark hover:text-frashi-oak transition-colors"
                >
                  Office
                </Link>

                <Link
                  href="/catalog"
                  className="text-xs font-semibold tracking-wider uppercase text-frashi-terracotta hover:text-frashi-oak transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-frashi-amber" />
                  <span>All Catalog</span>
                </Link>
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex-1 lg:flex-initial text-center lg:text-left">
              <Link href="/" className="inline-block group text-center">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] text-frashi-dark font-normal uppercase block transition-colors group-hover:text-frashi-oak">
                  FRASHI
                </span>
                <span className="text-[10px] tracking-[0.3em] font-arabic text-frashi-stone uppercase block -mt-1 font-semibold">
                  فراشي • LUXURY LIVING
                </span>
              </Link>
            </div>

            {/* Right: Actions (Search, Wishlist, Cart Drawer) */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-frashi-dark hover:text-frashi-oak transition-colors relative rounded-full hover:bg-frashi-sand/70"
                aria-label="Search Furniture"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={openWishlist}
                className="p-2 text-frashi-dark hover:text-frashi-oak transition-colors relative rounded-full hover:bg-frashi-sand/70"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-frashi-terracotta text-white text-[10px] font-bold flex items-center justify-center animate-pulse-subtle">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={openCart}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-frashi-dark text-white hover:bg-frashi-charcoal transition-all shadow-soft group"
                aria-label="Open Shopping Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-frashi-sand group-hover:scale-110 transition-transform" />
                  {totalItemsCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-frashi-amber text-frashi-dark text-[9px] font-extrabold flex items-center justify-center">
                      {totalItemsCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs font-medium tracking-wider uppercase text-frashi-sand">
                  Cart
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {megaMenuOpen && <MegaMenu onClose={() => setMegaMenuOpen(false)} />}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-frashi-dark/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-up">
            <div>
              {/* Drawer Header */}
              <div className="p-6 border-b border-frashi-linen flex items-center justify-between bg-frashi-cream/50">
                <div>
                  <span className="font-serif text-xl tracking-[0.2em] text-frashi-dark font-medium">
                    FRASHI
                  </span>
                  <span className="block text-[10px] text-frashi-stone font-arabic font-semibold">فراشي</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-frashi-dark hover:text-frashi-oak"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-6 space-y-4">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-frashi-stone">
                  Furniture Collections
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'All Catalog', path: '/catalog', badge: 'Browse All' },
                    { label: 'Living Room', path: '/catalog?category=living-room', badge: 'Sofas & Tables' },
                    { label: 'Bedroom Sanctuary', path: '/catalog?category=bedroom', badge: 'Beds & Benches' },
                    { label: 'Dining Room', path: '/catalog?category=dining', badge: 'Tables & Chairs' },
                    { label: 'Home Office', path: '/catalog?category=office', badge: 'Desks & Shelves' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl bg-frashi-sand/50 hover:bg-frashi-sand transition-colors"
                    >
                      <span className="font-serif font-medium text-base text-frashi-dark">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-frashi-oak font-semibold">
                        {item.badge}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-frashi-linen space-y-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-frashi-sand/50 text-sm font-medium text-frashi-charcoal"
                  >
                    <PhoneCall className="w-4 h-4 text-frashi-oak" />
                    <span>Showrooms & Styling Concierge</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="p-6 bg-frashi-sand/60 border-t border-frashi-linen text-xs text-frashi-stone">
              <p className="font-semibold text-frashi-dark">FRASHI White-Glove Guarantee</p>
              <p className="text-[11px] mt-1">Free delivery over $1,000 • Cash on Delivery • 10-Yr Warranty</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
