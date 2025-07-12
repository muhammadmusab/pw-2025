import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/darkmode-toggle";
import { inter } from "@/lib/fonts";
import "./globals.css";
import Header from '@/components/globals/header'
import Footer from "@/components/globals/footer";
export { metadata } from "@/lib/metadata";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header/>
        {children}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
          <div className="absolute end-0 top-0 pe-4 pt-4">
            <ModeToggle />
          </div>
        </ThemeProvider> */}
         <Footer/>
      </body>
    </html>
  );
}
