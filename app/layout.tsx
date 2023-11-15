import "dracula-prism/dist/css/dracula-prism.css"; // Import Dracula theme
import "./globals.css";

import { Inter } from "next/font/google";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyStyles = {
    backgroundColor: "#282a36",
  };

  return (
    <html lang="en">
      {/* ... (head and other elements) */}
      <body
        className={`${inter.className} h-screen border-neutral-800`}
        style={bodyStyles}
      >
        <div className="flex-1">{children}</div>
        <footer className="flex justify-center gap-6 py-12">
          <Link
            href="https://twitter.com/iamdavelevine"
            target="_blank"
            className="text-neutral-600"
          >
            <FaTwitter fontSize={26} />
          </Link>
          <Link
            href="https://github.com/davelevine/cron-ai"
            target="_blank"
            className="text-neutral-600"
          >
            <FaGithub fontSize={26} />
          </Link>
        </footer>
      </body>
    </html>
  );
}
