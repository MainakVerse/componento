import { Inter } from "next/font/google";
import "./globals.css";

import { Metadata } from "next";
import { ThemeProviders } from "@/utils/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Componento | Web components",
  description:
    "Discover Dev Components, a unique platform providing fully customizable React components in TSX/JSX, seamlessly styled with Tailwind CSS. Unlock productivity and efficiency with our ready-to-use, highly flexible UI elements.",
  keywords:
    "web components, tsx react components, custom components, react components, UI components, web development, front-end development, customizable components, functional components, custom web design, reusable components, open-source components",
  openGraph: {
    title: "Dev Components | Fully Customizable Functional React Components",
    description:
      "Discover Dev Components, a unique platform providing fully customizable React components in TSX/JSX, seamlessly styled with Tailwind CSS. Unlock productivity and efficiency with our ready-to-use, highly flexible UI elements.",
    siteName: "Dev Components",
    images: [
      {
        url: "/assets/og-logo.png",
        secureUrl: "/assets/og-logo.png",
        width: 800,
        height: 600,
        alt: "Componento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Componento | Web components",
    description:
      "Discover Dev Components, a unique platform providing fully customizable React components in TSX/JSX, seamlessly styled with Tailwind CSS. Unlock productivity and efficiency with our ready-to-use, highly flexible UI elements.",
    images: {
      url: "/assets/og-logo.png",
      alt: "Componento",
    },
  },
  authors: [{ name: "Mainak Chaudhuri" }],
  creator: "Mainak",
  publisher: "Mainak",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-gradient-to-r from-[#0d091f] to-[#381d53] w-full overflow-hidden flex flex-col h-dvh`}
      >
        <ThemeProviders>
          {children}
         
        </ThemeProviders>
      </body>
    </html>
  );
}
