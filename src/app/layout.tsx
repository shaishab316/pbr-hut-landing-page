import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PBR Hut & Events — Jamaican Food & Event Essentials Delivered',
  description: 'Order authentic Jamaican meals and event supplies for instant delivery or scheduled bookings with live driver tracking.',
  openGraph: {
    title: 'PBR Hut & Events — Real Jamaican Food & Event Supplies',
    description: 'Authentic meals, pizzas, jerk ribz, rotisserie chicken, party armbands & event decor delivered to your door with live tracking.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FDF8F0] text-stone-800 antialiased font-sans selection:bg-[#F5A623]/30 selection:text-[#0A5C36]">
        {children}
      </body>
    </html>
  );
}
