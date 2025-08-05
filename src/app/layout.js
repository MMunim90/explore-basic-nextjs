import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Learning next js",
    template: "%s | Learning next js"
  },
  keywords: ['Next.js', 'React', 'JavaScript', "Learning", "PlayGround"],
  description: "Explore nextjs feature and concept",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Navbar></Navbar>
        <main className="min-h-screen h-max-[600px]">{children}</main>
        <footer className="text-center bg-slate-600">
          Awesome nextjs project
        </footer>
      </body>
    </html>
  );
}
