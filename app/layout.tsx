import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Robin CASSARD - Computer Science Engineer & Web3/AI Developer',
  description: 'Computer Science Engineering student specializing in AI, Web3 development, and full-stack solutions. Available for freelance projects evenings & weekends.',
  keywords: 'Web3 developer, AI developer, blockchain developer, DeFi, smart contracts, React, Next.js, freelance developer France',
  authors: [{ name: 'Robin CASSARD' }],
  creator: 'Robin CASSARD',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robincassard.dev',
    title: 'Robin CASSARD - Computer Science Engineer & Web3/AI Developer',
    description: 'Computer Science Engineering student specializing in AI, Web3 development, and full-stack solutions. Available for freelance projects.',
    siteName: 'Robin CASSARD Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robin CASSARD - Computer Science Engineer & Web3/AI Developer',
    description: 'Computer Science Engineering student specializing in AI, Web3 development, and full-stack solutions.',
    creator: '@robin_cassard',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}