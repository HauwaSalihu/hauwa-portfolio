import type { Metadata } from "next";
import { Outfit, Ovo} from "next/font/google"
import "./globals.css";

const outfit = Outfit({
  
  subsets: ["latin"],
  weight: ["400","500","600", "700"],
})

const ovo = Ovo({
  
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Hauwa Portfolio",
  description: "Web dev, full stack developer and IT project managemet professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* Or use .png: <link rel="icon" href="/favicon.png" /> */}
      </head>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
       {children}
      </body>
    </html>
  );
}
