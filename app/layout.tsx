import Navbar from "@/components/navbar";
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"
import Footer from "@/components/footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="overflow-x-hidden">
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Footer/>
      </body>
    </html>
  )
}