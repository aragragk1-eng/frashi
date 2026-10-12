'use client';

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { RoomCategories } from '@/components/home/RoomCategories';
import { BestsellerShowcase } from '@/components/home/BestsellerShowcase';
import { CraftsmanshipBanner } from '@/components/home/CraftsmanshipBanner';
import { TrustBadges } from '@/components/home/TrustBadges';
import { Testimonials } from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. High Impact Hero Section */}
      <HeroSection />

      {/* 2. Curated Room Categories */}
      <RoomCategories />

      {/* 3. Featured & Bestseller Furniture Showcase with Filter Tabs */}
      <BestsellerShowcase />

      {/* 4. Artisanal Craftsmanship & Natural Materials Heritage */}
      <CraftsmanshipBanner />

      {/* 5. Trust Badges (White-Glove, 10-Yr Warranty, COD, 30-Day Trial) */}
      <TrustBadges />

      {/* 6. Customer Testimonials & Verified Reviews */}
      <Testimonials />
    </main>
  );
}
