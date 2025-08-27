import "./../styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnePage Portfolio",
  description: "All-in-one minimalist portfolio on a single page."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-text`}>
        <Nav />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
