import type { Metadata } from 'next';
import { Playfair_Display, Inter, Pinyon_Script } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const pinyon = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pinyon',
});

export const metadata: Metadata = {
  title: 'AOS Studio | Art & Calligraphy',
  description: 'Ink flows where the spirit leads. Based in India, AK transforms traditional script into modern movement.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${pinyon.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased selection:bg-brand-red selection:text-cream" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
