import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your School, College or Business Online',
  description: 'Get a professional, mobile-friendly website for your school, college, academy, clinic or local business with TaleemAI.',
};

export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>}
