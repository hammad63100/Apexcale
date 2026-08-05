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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
