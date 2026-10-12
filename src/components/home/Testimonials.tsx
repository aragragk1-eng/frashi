'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      author: 'Layla Al-Mansoor',
      city: 'Palm Jumeirah, Dubai',
      product: 'Al-Noor Curved Bouclé Sofa',
      comment: 'The focal point of our living salon. Everyone who visits inquires where it came from. The bouclé is deep and thick, and the white-glove team carried it straight to the 14th floor without a scratch.',
      rating: 5,
      date: 'Verified Buyer • 2 weeks ago',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      author: 'Eng. Tariq Al-Ghamdi',
      city: 'Al Nakheel, Riyadh',
      product: 'Kanso Solid Oak Dining Table',
      comment: 'Finally a furniture brand that uses 100% solid oak instead of synthetic veneer. The wood has substantial weight and natural grain. Cash on delivery was seamless and the delivery crew were true professionals.',
      rating: 5,
      date: 'Verified Buyer • 3 weeks ago',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      author: 'Mona Al-Subaie',
      city: 'Al Shatie, Jeddah',
      product: 'Zephyr Oak Platform Bed',
      comment: 'The Belgian washed linen headboard cushion and floating timber frame turned our bedroom into a 5-star hotel sanctuary. Assembly was finished in under 25 minutes. Truly remarkable quality.',
      rating: 5,
      date: 'Verified Buyer • 1 month ago',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-frashi-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-frashi-oak">
            Verified Homeowners
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-frashi-dark font-normal">
            Loved in Homes Across the Gulf
          </h2>
          <p className="font-arabic text-sm text-frashi-stone font-medium">
            آراء وتجارب عملائنا المميزين في دبي والرياض وجدة والدوحة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-frashi-linen shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-frashi-sand absolute top-6 right-6 -z-0" />

              <div className="relative z-10 space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-xs font-semibold text-frashi-oak">
                  Purchased: {rev.product}
                </p>

                <p className="text-sm text-frashi-charcoal leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-frashi-linen/70 flex items-center gap-3 relative z-10">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-frashi-sand border border-frashi-linen flex-shrink-0">
                  <Image src={rev.image} alt={rev.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-frashi-dark flex items-center gap-1">
                    <span>{rev.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-[11px] text-frashi-stone">{rev.city}</p>
                  <p className="text-[10px] text-emerald-700 font-medium">{rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
