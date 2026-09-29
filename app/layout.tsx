import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TaleemAI — Education, Scholarships & Career Guidance',
  description: 'A bilingual education and career guidance platform built Balochistan-first for students across Pakistan.',
  keywords: ['Balochistan scholarships','Pakistan scholarships','career guidance','HEC scholarships','BEEF','study abroad','TaleemAI']
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
