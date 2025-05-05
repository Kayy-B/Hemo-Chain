import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HemoChain',
  description: 'Blockchain-based blood donation software',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

