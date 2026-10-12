'use client';

import React from 'react';
import { Truck, ShieldCheck, Wrench, Clock, CreditCard, Sparkles } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Truck,
      title: 'Free White-Glove Delivery',
      desc: 'Complimentary in-room placement and packaging removal on all orders $1,000+.',
    },
    {
      icon: ShieldCheck,
      title: '10-Year Frame Guarantee',
      desc: 'Solid kiln-dried hardwood frames backed by our decade-long structural pledge.',
    },
    {
      icon: Wrench,
      title: 'Expert In-Home Assembly',
      desc: 'Specialized furniture technicians assemble your pieces seamlessly.',
    },
    {
      icon: Clock,
      title: '30-Day In-Home Trial',
      desc: 'Live with your furniture for a full month. Return or exchange without friction.',
    },
    {
      icon: CreditCard,
      title: 'Cash on Delivery (COD)',
      desc: 'Inspect your furniture at your residence before completing payment.',
    },
    {
      icon: Sparkles,
      title: 'Complimentary Styling',
      desc: 'Connect with an interior stylist via WhatsApp for room 3D advice.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-frashi-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-frashi-oak">
            The FRASHI Commitment
          </span>
          <h2 className="font-serif text-3xl text-frashi-dark font-normal mt-1">
            Frictionless Luxury from Workshop to Sanctuary
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-frashi-cream/50 border border-frashi-linen hover:border-frashi-oak/40 hover:bg-white hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-frashi-linen flex items-center justify-center text-frashi-oak mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base text-frashi-dark">
                  {badge.title}
                </h3>
                <p className="text-xs text-frashi-stone mt-2 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
