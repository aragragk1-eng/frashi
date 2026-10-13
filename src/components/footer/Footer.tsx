'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-frashi-dark text-frashi-sand border-t border-frashi-charcoal/60 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Perks Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-frashi-charcoal/80">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-frashi-charcoal/60 border border-frashi-stone/20 text-frashi-amber">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-semibold text-white text-sm">White-Glove Delivery</h5>
              <p className="text-xs text-frashi-warmGray mt-0.5">
                Complimentary room-of-choice placement & setup on orders $1,000+.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-frashi-charcoal/60 border border-frashi-stone/20 text-frashi-amber">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-semibold text-white text-sm">10-Year Frame Warranty</h5>
              <p className="text-xs text-frashi-warmGray mt-0.5">
                Handcrafted from solid French oak & kiln-dried hardwood.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-frashi-charcoal/60 border border-frashi-stone/20 text-frashi-amber">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-semibold text-white text-sm">30-Day In-Home Trial</h5>
              <p className="text-xs text-frashi-warmGray mt-0.5">
                Experience comfort in your sanctuary. Effortless returns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-frashi-charcoal/60 border border-frashi-stone/20 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-semibold text-white text-sm">Cash on Delivery (COD)</h5>
              <p className="text-xs text-frashi-warmGray mt-0.5">
                Inspect items at home before paying. Available across GCC.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 py-12 border-b border-frashi-charcoal/80">
          {/* Brand Story & Newsletter */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="font-serif text-2xl tracking-[0.25em] text-white uppercase font-light">
                FRASHI
              </span>
              <span className="block text-xs font-arabic tracking-widest text-frashi-amber font-semibold mt-0.5">
                فراشي • فن الراحة والأناقة
              </span>
            </div>
            <p className="text-xs text-frashi-warmGray leading-relaxed max-w-sm">
              FRASHI redefines modern Middle Eastern and international living with minimalist sculptural luxury.
              Every silhouette is crafted with honest solid hardwoods, tactile European fabrics, and raw Italian stones.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <h5 className="text-xs uppercase tracking-wider font-semibold text-white mb-2">
                Join the Private Collector Circle
              </h5>
              <p className="text-[11px] text-frashi-stone mb-3">
                Receive private access to new limited drops and an instant 10% welcome voucher.
              </p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-frashi-stone absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-frashi-charcoal/70 border border-frashi-stone/30 rounded-xl text-white placeholder-frashi-stone focus:outline-none focus:border-frashi-amber"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-frashi-amber text-frashi-dark font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-1"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Welcome! Use code <strong className="text-white">WELCOME15</strong> for 15% off at checkout.</span>
                </div>
              )}
            </div>
          </div>

          {/* Rooms Navigation */}
          <div>
            <h5 className="font-serif text-white font-medium text-sm tracking-wide mb-4">
              Curated Spaces
            </h5>
            <ul className="space-y-2.5 text-xs text-frashi-warmGray">
              <li>
                <Link href="/catalog?category=living-room" className="hover:text-white transition-colors">
                  Living Room (غرف المعيشة)
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=bedroom" className="hover:text-white transition-colors">
                  Bedroom Sanctuary (غرف النوم)
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=dining" className="hover:text-white transition-colors">
                  Culinary & Dining (طاولات الطعام)
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=office" className="hover:text-white transition-colors">
                  Executive Home Office (المكاتب)
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-frashi-amber hover:underline font-semibold">
                  Browse All Furniture →
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div>
            <h5 className="font-serif text-white font-medium text-sm tracking-wide mb-4">
              Client Concierge
            </h5>
            <ul className="space-y-2.5 text-xs text-frashi-warmGray">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Showroom Appointments
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/212611650381?text=Hello%20FRASHI%2C%20I%20would%20like%20to%20request%20fabric%20swatches"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Order Fabric Swatches (Free)
                </a>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-white transition-colors">
                  White-Glove Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-white transition-colors">
                  Returns & 30-Day In-Home Trial
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Interior Styling Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom Flagships */}
          <div>
            <h5 className="font-serif text-white font-medium text-sm tracking-wide mb-4">
              Flagship Salons
            </h5>
            <div className="space-y-3 text-xs text-frashi-warmGray">
              <div>
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-frashi-amber" />
                  <span>Casablanca Flagship • المغرب</span>
                </p>
                <p className="text-[11px] text-frashi-stone mt-0.5">
                  Boulevard d&apos;Anfa, Casablanca, Maroc
                </p>
              </div>

              <div>
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-frashi-amber" />
                  <span>Rabat Salon & Studio • الرباط</span>
                </p>
                <p className="text-[11px] text-frashi-stone mt-0.5">
                  Avenue Mohammed VI, Souissi, Rabat, Maroc
                </p>
              </div>

              <div className="pt-2 border-t border-frashi-charcoal/60 text-[11px] space-y-1.5">
                <p className="flex items-center gap-1 text-frashi-stone">
                  <Clock className="w-3 h-3" />
                  <span>Daily: 10:00 AM – 10:00 PM</span>
                </p>
                <a
                  href="tel:+212610111314"
                  className="flex items-center gap-1.5 text-frashi-warmGray hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-frashi-amber flex-shrink-0" />
                  <span className="font-medium">مكالمات المغرب: +212 610 11 13 14</span>
                </a>
                <a
                  href="https://wa.me/212611650381?text=Hello%20FRASHI!%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <MessageCircle className="w-3 h-3 flex-shrink-0" />
                  <span>WhatsApp المغرب: +212 611 65 03 81</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-frashi-stone">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} FRASHI Home Furnishings LLC. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-arabic">صُنِعَ بشغف للأناقة والراحة</span>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider">
            <span className="px-2 py-1 rounded bg-frashi-charcoal text-frashi-sand border border-frashi-stone/20">
              Cash on Delivery (COD)
            </span>
            <span className="px-2 py-1 rounded bg-frashi-charcoal text-frashi-sand border border-frashi-stone/20">
              Visa / Mastercard
            </span>
            <span className="px-2 py-1 rounded bg-frashi-charcoal text-frashi-sand border border-frashi-stone/20">
              Apple Pay
            </span>
            <span className="px-2 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              Tabby / Tamara
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
