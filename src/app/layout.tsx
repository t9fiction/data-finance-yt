import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Data Finance",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
        <Navbar />
        {children}
      </div>
      </body>
    </html>
  );
}
