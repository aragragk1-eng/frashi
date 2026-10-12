import type { Metadata } from 'next';
import '@/styles/globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { AnnouncementBar } from '@/components/header/AnnouncementBar';
import { Navbar } from '@/components/header/Navbar';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { WishlistDrawer } from '@/components/wishlist/WishlistDrawer';
import { FloatingWhatsAppWidget } from '@/components/support/FloatingWhatsAppWidget';
import { Footer } from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'FRASHI | فراشي - Modern Luxury Home Furniture & Interior Decor',
  description:
    'Experience sculptural minimalist home furniture handcrafted from solid French oak, Italian bouclé, and natural Roman travertine. Complimentary white-glove delivery, Cash on Delivery (COD), and 10-year warranty across UAE, Saudi Arabia, and GCC.',
  keywords: [
    'FRASHI',
    'فراشي',
    'luxury furniture Dubai',
    'modern furniture Riyadh',
    'solid oak dining table',
    'curved boucle sofa',
    'travertine coffee table',
    'cash on delivery furniture',
    'white glove furniture delivery',
  ],
  openGraph: {
    title: 'FRASHI | Modern Luxury Home Furniture & Interior Decor',
    description: 'Living Refined. Comfort Defined. Handcrafted solid oak, Italian bouclé & travertine centerpieces.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'FRASHI Home',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-frashi-cream text-frashi-dark font-sans antialiased selection:bg-frashi-oak selection:text-white">
        <CartProvider>
          <WishlistProvider>
            {/* Top Announcement Bar */}
            <AnnouncementBar />

            {/* Main Sticky Navbar */}
            <Navbar />

            {/* Page Content */}
            {children}

            {/* Slide-over Drawers */}
            <CartDrawer />
            <WishlistDrawer />

            {/* Floating Interactive WhatsApp Concierge & FAQ Widget */}
            <FloatingWhatsAppWidget />

            {/* Master Luxury Footer */}
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
