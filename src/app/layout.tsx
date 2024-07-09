import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '포켓몬 도감',
  description: '스파르타 React 트랙 Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <header className="w-full g-[60px] bg-[#ffc0e2] text-center pt-[1rem]">
          <h2 className="text-[3rem] font-bold">포켓몬 도감</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
