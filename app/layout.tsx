import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shop Kim Cương Tập Kích Mobile",
  description: "Cửa hàng bán các vật phẩm kim cương trong game tập kích mobile",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Footer/>
      </body>
    </html>
  )
}


import './globals.css'
import Footer from "./footer"
