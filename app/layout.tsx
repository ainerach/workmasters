import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'WorkMasters Launchpad',
  description: 'Premium productivity platform for high-impact entrepreneurial tracks'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-[#041124] text-white`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
