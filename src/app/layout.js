import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const OutfitFont = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Tiles-Gallery",
  description: "A modern Tiles Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${OutfitFont.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        
        {children}

      <Footer/>
        
        </body>
    </html>
  );
}
