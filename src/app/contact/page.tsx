'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/products';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Bespoke Sizing Consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-frashi-cream/30 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-frashi-sand border border-frashi-linen text-xs font-bold uppercase tracking-widest text-frashi-oak">
            <Sparkles className="w-3.5 h-3.5 text-frashi-amber" />
            <span>Concierge & Design Salons</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-frashi-dark font-normal">
            We Are Here to Curate Your Home
          </h1>
          <p className="font-arabic text-sm text-frashi-stone font-medium">
            تواصل مع مستشاري التصميم الداخلي في فراشي لطلب عينات الأقمشة أو زيارة صالات العرض
          </p>
        </div>

        {/* Flagship Showrooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Casablanca Flagship Showroom */}
          <div className="p-8 rounded-3xl bg-white border border-frashi-linen shadow-soft space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-frashi-sand text-xs font-bold uppercase tracking-wider text-frashi-dark">
                🇲🇦 صالون الدار البيضاء الرائد
              </span>
              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                مفتوح اليوم
              </span>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-frashi-dark">
                Casablanca Anfa Flagship Salon
              </h2>
              <p className="text-xs text-frashi-stone mt-1">
                اكتشف تشكيلات الأثاث الفاخر، صالونات البوكلي العصرية، ورخام الترافرتين الطبيعي.
              </p>
            </div>

            <div className="space-y-3 text-xs text-frashi-charcoal border-t border-frashi-linen pt-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-frashi-oak flex-shrink-0 mt-0.5" />
                <span>Boulevard d&apos;Anfa, Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <span>يومياً: 10:00 صباحاً – 10:00 مساءً</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <a href="tel:+212610111314" className="hover:text-emerald-700 font-semibold">
                  +212 610 11 13 14
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/212611650381?text=Hello%20FRASHI!%20I%20would%20like%20to%20book%20a%20private%20styling%20appointment%20at%20the%20Casablanca%20Showroom."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-frashi-charcoal transition-colors shadow-soft"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>حجز موعد بفرع الدار البيضاء عبر الواتساب</span>
              </a>
            </div>
          </div>

          {/* Rabat Studio & Kingdom Concierge */}
          <div className="p-8 rounded-3xl bg-white border border-frashi-linen shadow-soft space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-frashi-sand text-xs font-bold uppercase tracking-wider text-frashi-dark">
                🇲🇦 الرباط وكافة مدن المغرب
              </span>
              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                استشارات وتوصيل
              </span>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-frashi-dark">
                Rabat Salon & Studio
              </h2>
              <p className="text-xs text-frashi-stone mt-1">
                استشارات التصميم الداخلي، معاينة عينات الأقمشة مجاناً، وخدمة التوصيل الشامل لكافة المدن.
              </p>
            </div>

            <div className="space-y-3 text-xs text-frashi-charcoal border-t border-frashi-linen pt-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-frashi-oak flex-shrink-0 mt-0.5" />
                <span>Avenue Mohammed VI, Souissi, Rabat, Maroc</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <span>الإثنين - السبت: 10:00 صباحاً – 09:30 مساءً</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <a href="tel:+212610111314" className="hover:text-emerald-700 font-semibold">
                  +212 610 11 13 14
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/212611650381?text=Hello%20FRASHI!%20I%20would%20like%20to%20request%20a%20styling%20consultation%20and%20fabric%20swatches."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-frashi-charcoal transition-colors shadow-soft"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>طلب استشارة أو عينات عبر الواتساب</span>
              </a>
            </div>
          </div>
        </div>

        {/* Concierge Inquiry Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-frashi-linen shadow-soft max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-frashi-dark">
              Send a Direct Styling Inquiry
            </h2>
            <p className="text-xs text-frashi-stone">
              Share your room dimensions, floor plans, or request complimentary fabric swatches.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-frashi-dark mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Mansour"
                    className="w-full p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-frashi-dark mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-frashi-dark mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+212 6 11 65 03 81"
                    className="w-full p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-frashi-dark mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak cursor-pointer"
                  >
                    <option value="Bespoke Sizing Consultation">Bespoke Sizing & Room Layout</option>
                    <option value="Order Fabric Swatches">Complimentary Fabric & Bouclé Swatches</option>
                    <option value="Showroom Private Appointment">Showroom Private Appointment</option>
                    <option value="Cash on Delivery Order">Cash on Delivery Inquiry</option>
                    <option value="General Question">General Concierge Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-frashi-dark mb-1">Message & Room Details *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your room, preferred color palette, or specific furniture questions..."
                  className="w-full p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-frashi-charcoal transition-all shadow-luxury"
              >
                Submit Concierge Inquiry
              </button>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-emerald-950">Thank You for Connecting</h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Your request has been assigned to a Senior Interior Stylist. We will reach out via WhatsApp/email within 2 hours.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Accordion Section */}
        <div id="faq" className="max-w-3xl mx-auto space-y-6 pt-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-frashi-oak">Knowledge Base</span>
            <h2 className="font-serif text-3xl font-bold text-frashi-dark">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-frashi-linen overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-5 text-left text-sm font-semibold text-frashi-dark flex items-center justify-between gap-4 hover:bg-frashi-sand/30"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-frashi-stone transition-transform duration-200 flex-shrink-0 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="p-5 pt-0 text-xs text-frashi-charcoal leading-relaxed border-t border-frashi-linen/40 bg-frashi-sand/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
