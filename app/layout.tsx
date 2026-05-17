import type { Metadata } from "next";
import { Inter, JetBrains_Mono, ADLaM_Display, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundWrapper } from "@/components/background-wrapper";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const adlam = ADLaM_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-adlam",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Md. Rahmatullah | MERN Stack Developer",
  description: "Portfolio of Md. Rahmatullah, a passionate MERN Stack Developer",
  icons: {
    icon: "/logo3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, adlam.variable, nunito.variable)}
    >
      <body>
        <ThemeProvider>
          <BackgroundWrapper>
            <Navbar />
            {children}
            <Footer />
          </BackgroundWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
