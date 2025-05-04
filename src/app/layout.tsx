import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mauricio Chaile | Fullstack Developer',
  description:
    "I'm Mauricio, a software engineer, and this is my personal portfolio showcasing web development projects and my journey in tech.",
  keywords: [
    'Mauricio Chaile',
    'Fullstack Developer',
    'Web Developer',
    'Portfolio',
    'Software Engineer',
    'Web Development',
    'React',
    'Next.js',
    'JavaScript',
  ],
  openGraph: {
    title: 'Mauricio Chaile | Fullstack Developer',
    description: 'Check out my portfolio showcasing my projects and skills as a software engineer.',
    siteName: 'Mauricio Chaile',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
