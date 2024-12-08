import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import ThemeProvider from "@/utilis/ThemeProvider";


export const metadata: Metadata = {
  title: "EcoVent",
  description: "EcoVanguard Ventures",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <html lang="en" suppressHydrationWarning>
        <body className="scroll-smooth">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />

            <main className="relative overflow-hidden ">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
