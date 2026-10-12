'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Banknote,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronLeft
} from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    clearCart,
    subtotal,
    discount,
    shipping,
    total,
    formatPrice,
    promoCode,
    generateWhatsAppOrderUrl
  } = useCart();

  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United Arab Emirates',
    city: 'Dubai',
    area: '',
    street: '',
    building: '',
    deliveryNotes: '',
    paymentMethod: 'cod', // 'cod' | 'card' | 'installments'
    whatsappConfirmation: true,
  });

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '•••',
    cardHolder: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Quick auto-fill helper for test demonstrations
  const handleAutoFill = (preset: 'dubai' | 'riyadh') => {
    if (preset === 'dubai') {
      setFormData({
        firstName: 'Layla',
        lastName: 'Al-Mansoor',
        email: 'layla.mansoor@example.com',
        phone: '+971 50 123 4567',
        country: 'United Arab Emirates',
        city: 'Dubai',
        area: 'Dubai Hills Estate',
        street: 'Maple Avenue 4',
        building: 'Villa 108',
        deliveryNotes: 'Please ring the service gate. Elevator access available.',
        paymentMethod: 'cod',
        whatsappConfirmation: true,
      });
      setCardDetails((p) => ({ ...p, cardHolder: 'Layla Al-Mansoor' }));
    } else {
      setFormData({
        firstName: 'Tariq',
        lastName: 'Al-Ghamdi',
        email: 'tariq.ghamdi@example.com',
        phone: '+966 50 987 6543',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        area: 'Al-Nakheel District',
        street: 'King Fahd Road',
        building: 'Villa 42',
        deliveryNotes: 'Ground floor residence. Large double doors.',
        paymentMethod: 'cod',
        whatsappConfirmation: true,
      });
      setCardDetails((p) => ({ ...p, cardHolder: 'Tariq Al-Ghamdi' }));
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedOrderId = `FRA-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      // If customer opted into WhatsApp, we can optionally open or store
      const orderPayload = {
        orderId: generatedOrderId,
        customer: formData,
        items,
        total,
        date: new Date().toISOString(),
      };

      try {
        localStorage.setItem('frashi_last_order', JSON.stringify(orderPayload));
      } catch (err) {
        console.error(err);
      }

      clearCart();
      router.push(`/order-success?orderId=${generatedOrderId}`);
    }, 1200);
  };

  if (items.length === 0 && !isSubmitting) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-frashi-cream/30">
        <h2 className="font-serif text-2xl text-frashi-dark font-medium">Your shopping bag is empty</h2>
        <p className="text-xs text-frashi-stone mt-2 mb-6">
          Add some of our handcrafted furniture before checking out.
        </p>
        <Link
          href="/catalog"
          className="px-6 py-3 rounded-full bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider"
        >
          Browse Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-frashi-cream/30 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-1.5 text-xs text-frashi-stone hover:text-frashi-dark uppercase tracking-wider font-semibold mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Shopping</span>
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl text-frashi-dark font-normal">
              Frictionless Luxury Checkout
            </h1>
            <p className="font-arabic text-xs text-frashi-stone font-medium">
              إتمام الطلب السريع والدفع عند الاستلام مع خدمة التوصيل الفاخرة
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-800 font-semibold px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit SSL Encrypted & Secure</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Checkout Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-frashi-linen shadow-soft space-y-8">
            {/* Auto-fill Helper Banner */}
            <div className="p-4 rounded-2xl bg-frashi-sand/50 border border-frashi-linen/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-frashi-dark font-semibold">
                <Sparkles className="w-4 h-4 text-frashi-amber flex-shrink-0" />
                <span>Instant Auto-Fill Demo Profile:</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleAutoFill('dubai')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-frashi-linen hover:border-frashi-oak text-frashi-dark font-medium shadow-sm"
                >
                  Dubai Hills
                </button>
                <button
                  type="button"
                  onClick={() => handleAutoFill('riyadh')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-frashi-linen hover:border-frashi-oak text-frashi-dark font-medium shadow-sm"
                >
                  Riyadh Al-Nakheel
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-8">
              {/* Step 1: Customer Contact & Address */}
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-frashi-linen mb-4">
                  <span className="w-6 h-6 rounded-full bg-frashi-dark text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-serif font-bold text-base text-frashi-dark">
                    Contact & Delivery Residence
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Layla"
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Al-Mansoor"
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="layla@example.com"
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      Phone Number (WhatsApp Ready) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak cursor-pointer"
                    >
                      <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                      <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Oman">Oman</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      City / Emirate *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Dubai, Riyadh, Abu Dhabi"
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      Neighborhood / Community & Villa / Apartment *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      placeholder="e.g. Dubai Hills Estate, Maple Villa 108"
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-frashi-dark mb-1">
                      Delivery & Assembly Instructions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.deliveryNotes}
                      onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                      placeholder="e.g. 2nd floor salon, service elevator available, please ring 15 minutes before arrival."
                      className="w-full text-xs p-3 rounded-xl border border-frashi-linen bg-frashi-cream/30 focus:outline-none focus:border-frashi-oak resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Payment Method */}
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-frashi-linen mb-4">
                  <span className="w-6 h-6 rounded-full bg-frashi-dark text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-serif font-bold text-base text-frashi-dark">
                    Payment & Order Settlement
                  </h3>
                </div>

                <div className="space-y-3">
                  {/* Option 1: Cash on Delivery (COD) */}
                  <label
                    className={`block p-4 rounded-2xl border cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-frashi-dark bg-frashi-sand/50 ring-1 ring-frashi-dark'
                        : 'border-frashi-linen hover:bg-frashi-cream/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                          className="w-4 h-4 accent-frashi-dark"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <Banknote className="w-4 h-4 text-emerald-700" />
                            <span className="font-bold text-xs text-frashi-dark">
                              Cash on Delivery (COD) / Card on Delivery
                            </span>
                          </div>
                          <span className="text-[11px] text-frashi-stone block mt-0.5">
                            Inspect your furniture in your room before paying our delivery crew.
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                        Popular Choice
                      </span>
                    </div>
                  </label>

                  {/* Option 2: Online Card Payment */}
                  <label
                    className={`block p-4 rounded-2xl border cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-frashi-dark bg-frashi-sand/50 ring-1 ring-frashi-dark'
                        : 'border-frashi-linen hover:bg-frashi-cream/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                          className="w-4 h-4 accent-frashi-dark"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-frashi-oak" />
                            <span className="font-bold text-xs text-frashi-dark">
                              Credit or Debit Card (Stripe Gateway)
                            </span>
                          </div>
                          <span className="text-[11px] text-frashi-stone block mt-0.5">
                            Visa, Mastercard, American Express, Apple Pay
                          </span>
                        </div>
                      </div>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="mt-4 pt-4 border-t border-frashi-linen/70 space-y-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-frashi-stone mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            value={cardDetails.cardNumber}
                            onChange={(e) =>
                              setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                            }
                            className="w-full text-xs p-2.5 rounded-lg border border-frashi-linen bg-white"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-frashi-stone mb-1">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              value={cardDetails.cardExpiry}
                              onChange={(e) =>
                                setCardDetails({ ...cardDetails, cardExpiry: e.target.value })
                              }
                              className="w-full text-xs p-2.5 rounded-lg border border-frashi-linen bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-frashi-stone mb-1">
                              CVC Security Code
                            </label>
                            <input
                              type="text"
                              value={cardDetails.cardCvc}
                              onChange={(e) =>
                                setCardDetails({ ...cardDetails, cardCvc: e.target.value })
                              }
                              className="w-full text-xs p-2.5 rounded-lg border border-frashi-linen bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* WhatsApp Sync Checkbox */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.whatsappConfirmation}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsappConfirmation: e.target.checked })
                    }
                    className="w-4 h-4 accent-emerald-600 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-emerald-950 block">
                      Send Instant Order Receipt & White-Glove Tracking to WhatsApp
                    </span>
                    <span className="text-[11px] text-emerald-800">
                      You will receive delivery arrival window updates directly on WhatsApp.
                    </span>
                  </div>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-frashi-charcoal transition-all shadow-luxury flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Securing Your Furniture Order...</span>
                ) : (
                  <>
                    <span>Place Order • {formatPrice(total)}</span>
                    <ArrowRight className="w-4 h-4 text-frashi-amber group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Order Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-frashi-linen shadow-soft space-y-6 sticky top-28">
            <h3 className="font-serif font-bold text-lg text-frashi-dark pb-3 border-b border-frashi-linen">
              Order Summary ({items.reduce((s, i) => s + i.quantity, 0)} Items)
            </h3>

            {/* Item list */}
            <div className="divide-y divide-frashi-linen/70 max-h-80 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="py-3 flex gap-3">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-frashi-sand border border-frashi-linen flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 text-xs">
                    <h4 className="font-serif font-bold text-frashi-dark line-clamp-1">{item.name}</h4>
                    <span className="text-[11px] text-frashi-stone block mt-0.5">
                      Finish: {item.selectedColor.name} • Qty: {item.quantity}
                    </span>
                    <span className="font-bold text-frashi-dark block mt-1">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 pt-4 border-t border-frashi-linen text-xs">
              <div className="flex justify-between text-frashi-stone">
                <span>Subtotal</span>
                <span className="font-semibold text-frashi-dark">{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount ({promoCode})</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-frashi-stone">
                <span>White-Glove Delivery & Assembly</span>
                <span className="font-semibold text-frashi-dark">
                  {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-frashi-stone">
                <span>Standard In-Home Setup</span>
                <span className="font-semibold text-emerald-700">COMPLIMENTARY</span>
              </div>
              <div className="pt-3 border-t border-frashi-linen flex justify-between text-lg font-serif font-bold text-frashi-dark">
                <span>Grand Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {/* Trust commitments */}
            <div className="p-4 rounded-2xl bg-frashi-sand/40 border border-frashi-linen space-y-2 text-xs text-frashi-charcoal">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <span>10-Year Solid Hardwood Frame Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <span>30-Day In-Home Trial With Pickup Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Zero Risk Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
