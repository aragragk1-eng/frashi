'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Truck,
  MessageCircle,
  Download,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'FRA-782910';

  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A07855', '#C88A58', '#FAF8F5', '#1A1816'],
      });
    } catch (e) {
      console.error(e);
    }

    try {
      const saved = localStorage.getItem('frashi_last_order');
      if (saved) {
        setOrderData(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const whatsappMsg = `Hello FRASHI Concierge! I just placed order #${orderId}. I would like to confirm my white-glove delivery scheduling.`;
  const whatsappUrl = `https://wa.me/971508889922?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-frashi-cream/30 min-h-screen py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-frashi-linen shadow-luxury text-center space-y-8 animate-fade-in">
          {/* Success Check Icon */}
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-soft">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frashi-sand text-xs uppercase tracking-wider font-bold text-frashi-oak">
              <Sparkles className="w-3.5 h-3.5 text-frashi-amber" />
              <span>Order Confirmed • Shukran</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-frashi-dark font-normal">
              Your FRASHI Sanctuary Pieces Are Being Prepared
            </h1>
            <p className="font-arabic text-sm text-frashi-stone font-medium">
              تم استلام طلبكم بنجاح وسيتواصل معكم فريق التوصيل لتأكيد الموعد
            </p>
          </div>

          {/* Order Details Card */}
          <div className="p-6 rounded-2xl bg-frashi-sand/40 border border-frashi-linen text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-frashi-linen gap-2 text-xs">
              <div>
                <span className="text-frashi-stone block">Order Reference:</span>
                <span className="font-mono font-bold text-base text-frashi-dark">{orderId}</span>
              </div>
              <div>
                <span className="text-frashi-stone block">Estimated Arrival:</span>
                <span className="font-bold text-frashi-dark flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-frashi-oak" />
                  <span>3 - 5 Business Days</span>
                </span>
              </div>
              <div>
                <span className="text-frashi-stone block">Service Type:</span>
                <span className="font-bold text-emerald-800">White-Glove & Assembly</span>
              </div>
            </div>

            <div className="text-xs text-frashi-charcoal space-y-2">
              <p>
                <strong>What happens next?</strong> Our concierge logistics team will reach out via phone and WhatsApp 24 hours prior to delivery to lock in your preferred 2-hour arrival window.
              </p>
              <p className="text-frashi-stone">
                Our technicians will bring each piece to your chosen room, complete professional assembly, level all feet, and remove 100% of packaging materials.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#128C7E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#075E54] transition-all flex items-center justify-center gap-2 shadow-soft"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with Stylist on WhatsApp</span>
            </a>

            <Link
              href="/catalog"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-frashi-charcoal transition-all flex items-center justify-center gap-2 shadow-soft"
            >
              <span>Explore More Furnishings</span>
              <ArrowRight className="w-4 h-4 text-frashi-sand" />
            </Link>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-frashi-linen flex items-center justify-center gap-6 text-xs text-frashi-stone">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>10-Year Warranty Protected</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-frashi-oak" />
              <span>Inspected Upon Delivery</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-serif">Loading order confirmation...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
