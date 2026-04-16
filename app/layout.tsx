import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
  Playfair_Display,
  Outfit,
  Space_Grotesk,
  Cinzel,
  Inter,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic", "normal"],
})
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kintsugi by Vrinda",
  description: "The Art of Embracing Imperfection",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        cormorant.variable,
        playfair.variable,
        outfit.variable,
        spaceGrotesk.variable,
        cinzel.variable,
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
