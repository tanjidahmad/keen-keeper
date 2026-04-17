
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineProvider } from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <TimelineProvider>
          <Navbar />

          {/* 🔥 MAIN FIX */}
          <main className="flex-1">
            {children}
          </main>

          <Footer />
          <Toaster />
        </TimelineProvider>

      </body>
    </html>
  );
}