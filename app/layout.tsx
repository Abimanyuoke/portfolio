import Navbar from "@/components/navbar";
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"
import Footer from "@/components/footer";
import Preloader from "@/components/preloader/preloader";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="overflow-x-hidden">
        <Preloader />
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