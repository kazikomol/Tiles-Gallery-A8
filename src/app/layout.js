import { Outfit } from "next/font/google";
import "./globals.css";
import 'animate.css';
import "react-toastify/dist/ReactToastify.css"; 

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

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
      data-theme="light"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
        <Navbar />

        {children}

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
        />
      </body>
    </html>
  );
}