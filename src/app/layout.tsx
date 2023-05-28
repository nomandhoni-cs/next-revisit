import Nav from "@/components/Nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BMI Calculator",
  description: "A simple BMI calculator built with Next.js and Tailwind CSS"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
