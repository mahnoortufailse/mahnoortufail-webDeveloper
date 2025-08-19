import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Mahnoor Tufail - Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Mahnoor Tufail - BS Software Engineering Student & Full-Stack Developer specializing in MERN stack development. Expert in React, Node.js, MongoDB, and modern web technologies.",
  keywords: [
    "Mahnoor Tufail",
    "Full-Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "Web Developer",
    "COMSATS University",
    "Pakistan Developer",
  ],
  authors: [{ name: "Mahnoor Tufail", url: "https://github.com/mahnoortufailse" }],
  creator: "Mahnoor Tufail",
  publisher: "Mahnoor Tufail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mahnoortufail.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahnoor Tufail - Full-Stack Developer & Software Engineer",
    description:
      "Portfolio of Mahnoor Tufail - BS Software Engineering Student & Full-Stack Developer specializing in MERN stack development.",
    url: "https://mahnoortufail.dev",
    siteName: "Mahnoor Tufail Portfolio",
    images: [
      {
        url: "/young-female-software-engineer-headshot.png",
        width: 1200,
        height: 630,
        alt: "Mahnoor Tufail - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahnoor Tufail - Full-Stack Developer & Software Engineer",
    description:
      "Portfolio of Mahnoor Tufail - BS Software Engineering Student & Full-Stack Developer specializing in MERN stack development.",
    images: ["/young-female-software-engineer-headshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#8b5cf6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e1b4b" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
