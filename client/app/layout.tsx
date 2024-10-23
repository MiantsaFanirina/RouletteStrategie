import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";


config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Home Page Description',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
      <html lang="en">
        <body className={inter.className + ' bg-background'}>
          <main>
            {children}
          </main>
        </body>
      </html>
  )
}
