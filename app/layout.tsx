import Navbar from "@/components/navbar";
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"
import Footer from "@/components/footer";
import Preloader from "@/components/preloader/preloader";
import CustomCursor from "@/components/cursor/custom-cursor";
import { Pixelify_Sans } from 'next/font/google';

const pixelFont = Pixelify_Sans({ 
  subsets: ['latin'],
  variable: '--font-pixel',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={pixelFont.variable}>
      <head />
      <body className="overflow-x-hidden">
        <Preloader />
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}