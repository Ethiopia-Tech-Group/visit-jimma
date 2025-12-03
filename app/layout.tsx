// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const georgia = Poppins({
  weight: ['400', '700'],
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Visit Jimma – Among the pioneering tourism applications in East Africa.',
    template: '%s | Visit Jimma',
  },
  description:
    "Explore Jimma's royal legacy, cultural heritage, and historic landmarks including the palace of King Abba Jifar II and the rich traditions of the Gibe region.",
  keywords: [
    'Jimma',
    'Ethiopia',
    'Gibe Kingdom',
    'Abba Jifar',
    'Southwest Ethiopia',
    'cultural heritage',
    'tourism',
    'Oromo culture',
    'historical sites'
  ],
  authors: [{ name: 'Ethiopia Tech Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Visit Jimma – The Royal City of Abba Jifar',
    description:
      "Discover the history, culture, and stories of one of Ethiopia's most influential historical cities.",
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${georgia.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
