import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TrainMind',
  description:
    'TrainMind is a multi-tenant, AI-powered B2B SaaS platform that converts unstructured company documents — SOPs, handbooks, policy PDFs, Notion pages — into structured, interactive employee training programmes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
