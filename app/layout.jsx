import "./../styles/globals.css";
import { Inter, DM_Serif_Display } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Body + UI text
const inter = Inter({ subsets: ["latin"], display: "swap" });
// Headings for stronger personality
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], display: "swap" });

export const metadata = {
  title: "Syed Uzair • Portfolio",
  description: "Clean, scalable software with measurable outcomes. Projects, experience and skills—on one page.",
  metadataBase: new URL("https://your-domain.example"),
  openGraph: {
    title: "Syed Uzair • Portfolio",
    description: "Clean, scalable software with measurable outcomes.",
    url: "/",
    siteName: "Syed Uzair Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Uzair • Portfolio",
    description: "Clean, scalable software with measurable outcomes.",
    images: ["/og.png"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-text`} style={{"--font-heading": dmSerif.style.fontFamily}}>
        <Nav />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
