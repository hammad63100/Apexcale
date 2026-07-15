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
  title: 'Ascent Commerce — Full-Service Amazon Growth Agency',
  description:
    'PPC management, listing SEO, A+ Content, brand store design, and FBA consulting for Amazon brands ready to scale profitably. Real ACOS reductions. Real revenue growth.',
  keywords: [
    'Amazon PPC agency',
    'Amazon SEO',
    'Amazon FBA consulting',
    'Amazon brand store design',
    'A+ Content design',
    'Amazon account management',
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
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
