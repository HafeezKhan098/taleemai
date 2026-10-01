import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://taleemai-mu.vercel.app'),
  alternates: { canonical: '/' },
  verification: { google: '37t2qmhUUY-AycTqo-kQI4RdeyKODfQ5Tt01rbM2odA' },
  title: { default: 'TaleemAI — Pakistan Education, Scholarships, Results & Career Guidance', template: '%s | TaleemAI' },
  description: 'TaleemAI is a free bilingual English and Urdu education platform for Pakistani students, built Balochistan-first: scholarships, BBISE results, college admissions, careers, MDCAT and entrance tests, skills and study abroad guidance.',
  keywords: [
    'Balochistan scholarships', 'Pakistan scholarships', 'BEEF scholarship Balochistan', 'HEC Balochistan scholarship',
    'BBISE Quetta result', 'BBISE result 2026', 'Matric result Balochistan', 'HSSC result BBISE',
    'college admissions Balochistan', 'CHTE Balochistan admissions', 'career guidance Pakistan',
    'MDCAT result Balochistan', 'MDCAT merit list Balochistan', 'MDCAT result Pakistan', 'USAT', 'LAT', 'HAT',
    'study abroad scholarships Pakistan', 'NAVTTC courses Pakistan', 'TaleemAI', 'Balochistan education platform',
    'Federal Board result', 'FBISE result', 'Pakistan board results'
  ],
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
  openGraph: { title: 'TaleemAI — Pakistan Education, Scholarships, Results & Career Guidance', description: 'Scholarships, BBISE results, college admissions, careers, MDCAT, tests, skills and study abroad guidance for Pakistani students.', type: 'website', siteName: 'TaleemAI', images: ['/taleemai-logo.svg'] },
  twitter: { card: 'summary_large_image', title: 'TaleemAI', description: 'Bilingual education and opportunity guidance for Pakistani students.', images: ['/taleemai-logo.svg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><Header/><main>{children}</main><Footer/><Analytics/></body></html>}
