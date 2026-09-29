import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TaleemAI — Education, Scholarships & Career Guidance',
  description: 'A bilingual, verified-source education and career guidance platform built Balochistan-first for students across Pakistan.',
  keywords: ['Balochistan scholarships','Pakistan scholarships','career guidance','HEC scholarships','BEEF','study abroad','TaleemAI','education after matric']
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><Analytics/></body></html>;
}
