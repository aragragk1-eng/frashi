'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import NextLink from 'next/link';
import { PRODUCTS, Product, ProductColor } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/catalog/ProductCard';
import {
  Star,
  Truck,
  ShieldCheck,
  Wrench,
  Clock,
  Heart,
  ShoppingBag,
  Share2,
  Check,
  ChevronRight,
  Ruler,
  Layers,
  Sparkles,
  MapPin,
  MessageCircle,
  Plus,
  Minus,
  CheckCircle2
} from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const { formatPrice, addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [postalCity, setPostalCity] = useState('Dubai, UAE');
  const [deliveryDate, setDeliveryDate] = useState('Wednesday, Oct 15');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'care' | 'shipping'>('specs');

  const isFav = isInWishlist(product.id);

  // Delivery Calculator
  const handleCityChange = (city: string) => {
    setPostalCity(city);
    if (city.includes('Dubai') || city.includes('Abu Dhabi')) {
      setDeliveryDate('In 2 - 3 Days (Complimentary White-Glove)');
    } else if (city.includes('Riyadh') || city.includes('Jeddah')) {
      setDeliveryDate('In 3 - 5 Days (Complimentary White-Glove)');
    } else {
      setDeliveryDate('In 4 - 6 Days (Direct GCC Express)');
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-24 lg:pb-16">
      {/* Breadcrumb Bar */}
      <div className="bg-frashi-sand/40 border-b border-frashi-linen py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-frashi-stone uppercase tracking-wider font-semibold">
            <NextLink href="/" className="hover:text-frashi-dark">Home</NextLink>
            <ChevronRight className="w-3.5 h-3.5 text-frashi-stone/60" />
            <NextLink href="/catalog" className="hover:text-frashi-dark">Collection</NextLink>
            <ChevronRight className="w-3.5 h-3.5 text-frashi-stone/60" />
            <NextLink href={`/catalog?category=${product.category}`} className="hover:text-frashi-dark">
              {product.categoryLabel}
            </NextLink>
            <ChevronRight className="w-3.5 h-3.5 text-frashi-stone/60" />
            <span className="text-frashi-dark truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Multi-Angle Photo Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sticky top-28">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-frashi-sand border border-frashi-linen shadow-soft">
              <Image
                src={product.images[activeImage] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isBestseller && (
                  <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-frashi-dark text-white">
                    Bestseller
                  </span>
                )}
                <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 text-frashi-dark backdrop-blur-md">
                  Angle {activeImage + 1} of {product.images.length}
                </span>
              </div>

              {/* Wishlist and Share */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-frashi-charcoal hover:bg-white shadow-soft transition-colors"
                  aria-label="Share link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2.5 rounded-full backdrop-blur-sm transition-colors shadow-soft ${
                    isFav
                      ? 'bg-rose-50 text-rose-600'
                      : 'bg-white/90 text-frashi-charcoal hover:bg-white hover:text-rose-600'
                  }`}
                  aria-label="Toggle Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-600' : ''}`} />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImage === idx
                      ? 'border-frashi-dark shadow-luxury scale-105'
                      : 'border-frashi-linen opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`View angle ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Architectural Dimensions Blueprint Diagram */}
            <div className="mt-8 p-6 rounded-2xl bg-frashi-sand/30 border border-frashi-linen">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-frashi-oak" />
                  <h3 className="font-serif font-bold text-sm text-frashi-dark">
                    Architectural Blueprint & Spatial Dimensions
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-frashi-stone uppercase tracking-wider">
                  Scale: Centimeters & Inches
                </span>
              </div>

              {/* Dimension specs grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-frashi-linen text-center">
                  <span className="text-[10px] uppercase font-bold text-frashi-stone block">Width</span>
                  <span className="font-bold text-frashi-dark mt-0.5 block">{product.dimensions.width}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-frashi-linen text-center">
                  <span className="text-[10px] uppercase font-bold text-frashi-stone block">Depth</span>
                  <span className="font-bold text-frashi-dark mt-0.5 block">{product.dimensions.depth}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-frashi-linen text-center">
                  <span className="text-[10px] uppercase font-bold text-frashi-stone block">Height</span>
                  <span className="font-bold text-frashi-dark mt-0.5 block">{product.dimensions.height}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-frashi-linen text-center">
                  <span className="text-[10px] uppercase font-bold text-frashi-stone block">Weight</span>
                  <span className="font-bold text-frashi-dark mt-0.5 block">{product.dimensions.weight}</span>
                </div>
              </div>

              {product.dimensions.seatHeight && (
                <p className="text-[11px] text-frashi-stone mt-3 italic text-center">
                  Seat Clearance: {product.dimensions.seatHeight} • Engineered to pass standard 78 cm residential doorframes.
                </p>
              )}
            </div>
          </div>

          {/* RIGHT: Product Buy Box & Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="uppercase text-[11px] tracking-widest font-bold text-frashi-oak">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-frashi-stone font-medium">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-frashi-dark">{product.rating}</span>
                  <span>({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              {/* Title & Arabic */}
              <h1 className="font-serif text-3xl sm:text-4xl font-medium text-frashi-dark leading-tight">
                {product.name}
              </h1>
              <p className="font-arabic text-base text-frashi-stone font-medium mt-1">
                {product.arabicName}
              </p>
              <p className="text-xs text-frashi-oak italic font-serif mt-1">
                &ldquo;{product.tagline}&rdquo;
              </p>
            </div>

            {/* Price block */}
            <div className="p-4 rounded-2xl bg-frashi-sand/30 border border-frashi-linen flex items-baseline justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-frashi-dark">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-frashi-stone line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-frashi-stone block mt-0.5">
                  Includes import duties, VAT & standard white-glove setup
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                In Stock ({product.stockCount} left)
              </span>
            </div>

            {/* Narrative description */}
            <p className="text-xs sm:text-sm text-frashi-charcoal leading-relaxed">
              {product.description}
            </p>

            {/* Fabric / Finish Selector */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-frashi-dark">
                  Select Finish / Fabric: <span className="text-frashi-oak normal-case font-semibold">{selectedColor.name}</span>
                </label>
                <a
                  href={`https://wa.me/971508889922?text=Hello%20FRASHI!%20Can%20I%20order%20physical%20fabric%20swatches%20for%20the%20${encodeURIComponent(product.name)}?`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-frashi-oak hover:underline font-semibold"
                >
                  Order Free Swatch Sample →
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2.5 transition-all text-left ${
                        isSelected
                          ? 'border-frashi-dark bg-frashi-sand/70 ring-2 ring-frashi-dark text-frashi-dark font-bold'
                          : 'border-frashi-linen bg-white text-frashi-charcoal hover:bg-frashi-sand/40'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-frashi-stone/40 flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="truncate">{color.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Craft Features */}
            <div className="space-y-2 pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-frashi-dark block">
                Craftsmanship Highlights:
              </span>
              <div className="space-y-1.5">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-frashi-charcoal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-frashi-oak flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Delivery Calculator */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-950">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-emerald-700" />
                  <span>Estimated Delivery Calculator</span>
                </span>
                <span className="text-emerald-700 text-[11px]">Free White-Glove</span>
              </div>

              <div className="flex gap-2">
                <select
                  value={postalCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full text-xs font-medium bg-white border border-emerald-300/80 rounded-xl px-3 py-2 text-frashi-dark focus:outline-none cursor-pointer"
                >
                  <option value="Dubai, UAE">Dubai (Downtown, Marina, Palm, Hills)</option>
                  <option value="Abu Dhabi, UAE">Abu Dhabi (Saadiyat, Yas, Al Reem)</option>
                  <option value="Riyadh, KSA">Riyadh (Olaya, Al Nakheel, Hittin)</option>
                  <option value="Jeddah, KSA">Jeddah (Corniche, Al Andalus)</option>
                  <option value="Doha, Qatar">Doha (The Pearl, Lusail)</option>
                  <option value="Kuwait City">Kuwait City</option>
                </select>
              </div>

              <div className="text-[11px] text-emerald-900 flex items-center justify-between pt-1">
                <span>Estimated Arrival: <strong>{deliveryDate}</strong></span>
                <span>• In-room unboxing included</span>
              </div>
            </div>

            {/* Quantity & Buy Box Actions */}
            <div className="space-y-3 pt-4 border-t border-frashi-linen">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-frashi-linen rounded-xl bg-frashi-sand/30 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-frashi-stone hover:text-frashi-dark transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold text-frashi-dark min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-frashi-stone hover:text-frashi-dark transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Add to Cart */}
                <button
                  onClick={() => addToCart(product, selectedColor, quantity)}
                  className="flex-1 py-4 px-6 rounded-xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-frashi-charcoal transition-all shadow-luxury flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag className="w-4 h-4 text-frashi-amber group-hover:scale-110 transition-transform" />
                  <span>Add to Bag • {formatPrice(product.price * quantity)}</span>
                </button>
              </div>

              {/* Direct WhatsApp Quick Order */}
              <a
                href={`https://wa.me/971508889922?text=Hello%20FRASHI!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(selectedColor.name)})%20for%20${encodeURIComponent(formatPrice(product.price * quantity))}.%20Can%20we%20proceed%20with%20Cash%20on%20Delivery?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl border border-emerald-600/40 bg-emerald-50 text-emerald-900 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Instant Order via WhatsApp Concierge</span>
              </a>
            </div>

            {/* Service & Trust Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-frashi-stone border-t border-frashi-linen">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <span>{product.warranty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <span>Free In-Home Assembly</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-frashi-oak flex-shrink-0" />
                <span>30-Day In-Home Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Cash on Delivery (COD)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Specs, Care Guide, White-Glove Shipping */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-frashi-linen">
          <div className="flex gap-4 border-b border-frashi-linen pb-3">
            {[
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'care', label: 'Material Care & Maintenance' },
              { id: 'shipping', label: 'White-Glove Delivery Process' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-2 text-xs uppercase font-bold tracking-wider transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-frashi-dark text-frashi-dark'
                    : 'text-frashi-stone hover:text-frashi-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-6 text-xs text-frashi-charcoal leading-relaxed max-w-3xl">
            {activeTab === 'specs' && (
              <div className="space-y-3">
                <p><strong>Primary Material:</strong> {product.material}</p>
                <p><strong>Frame Construction:</strong> Corner-blocked European hardwood joined with mortise and tenon craftsmanship.</p>
                <p><strong>Assembly Standard:</strong> {product.assembly}.</p>
                <p><strong>Environmental:</strong> FSC® Certified sustainably sourced timber, non-toxic water-based waxes.</p>
              </div>
            )}
            {activeTab === 'care' && (
              <div className="space-y-3">
                <p><strong>Bouclé & Velvet:</strong> Vacuum regularly with soft brush attachment. For spills, blot gently with clean, damp lint-free cloth. Do not rub vigorously.</p>
                <p><strong>Solid Hardwood:</strong> Wipe with dry microfiber cloth. Rejuvenate natural oils annually with organic beeswax. Protect from direct radiators.</p>
                <p><strong>Travertine & Marble:</strong> Clean with pH-neutral stone cleaner. Avoid acidic liquids like vinegar, lemon juice, or harsh abrasives.</p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="space-y-3">
                <p><strong>Scheduled Appointment:</strong> Our concierge calls 24 hours prior to confirm a 2-hour arrival window.</p>
                <p><strong>Room of Choice:</strong> Two white-glove technicians carry the piece directly to your designated salon or bedroom floor.</p>
                <p><strong>Inspection & Clean Up:</strong> Technicians complete setup, level legs, and recycle 100% of cardboard packaging.</p>
              </div>
            )}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-frashi-linen">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-frashi-dark">
                Client Reviews ({product.reviews.length})
              </h3>
              <p className="text-xs text-frashi-stone mt-1">Verified purchases from homeowners across the GCC</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="text-sm font-bold text-frashi-dark">{product.rating} / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map((rev) => (
              <div key={rev.id} className="p-6 rounded-2xl bg-frashi-sand/30 border border-frashi-linen space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-frashi-dark flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </h4>
                    <span className="text-[11px] text-frashi-stone">{rev.city} • {rev.date}</span>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-frashi-charcoal leading-relaxed">&ldquo;{rev.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Paired With / Related Furniture */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-12 border-t border-frashi-linen">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-frashi-oak">Complete the Room</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-frashi-dark font-normal mt-1">
                Frequently Paired With This Design
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Add To Cart Bar (Mobile) */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-frashi-linen p-3 lg:hidden z-30 shadow-elevated">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="truncate">
            <span className="font-serif text-xs font-bold text-frashi-dark truncate block">{product.name}</span>
            <span className="text-xs font-bold text-frashi-oak">{formatPrice(product.price)}</span>
          </div>
          <button
            onClick={() => addToCart(product, selectedColor, quantity)}
            className="py-3 px-5 rounded-xl bg-frashi-dark text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-soft flex-shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
}
