import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/lib/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const LOGO_PATH = '/assects/WhatsApp Image 2026-08-05 at 5.03.05 PM.jpeg';

export const metadata: Metadata = {
  title: 'Apexcale — Scale Your Brand to the Top of Amazon',
  description:
    'Apexcale is a full-service Amazon growth partner. Data-driven PPC management, listing SEO, A+ Content design, and hands-on account management for brands ready to scale profitably across Amazon, Walmart, and global marketplaces.',
  keywords: [
    'Amazon PPC agency',
    'Amazon growth partner',
    'Amazon SEO',
    'Amazon FBA consulting',
    'Amazon brand store design',
    'A+ Content design',
    'Amazon account management',
    'Apexcale',
  ],
  icons: {
    icon: [
      { url: LOGO_PATH, type: 'image/jpeg' },
    ],
    shortcut: LOGO_PATH,
    apple: LOGO_PATH,
  },
  openGraph: {
    title: 'Apexcale — Scale Your Brand to the Top of Amazon',
    description:
      'Full-service Amazon growth partner combining PPC, SEO, and hands-on management.',
    images: [
      {
        url: LOGO_PATH,
        width: 800,
        height: 800,
        alt: 'Apexcale Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apexcale — Scale Your Brand to the Top of Amazon',
    description:
      'Full-service Amazon growth partner combining PPC, SEO, and hands-on management.',
    images: [LOGO_PATH],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" href={LOGO_PATH} type="image/jpeg" />
        <link rel="shortcut icon" href={LOGO_PATH} type="image/jpeg" />
        <link rel="apple-touch-icon" href={LOGO_PATH} />
      </head>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
