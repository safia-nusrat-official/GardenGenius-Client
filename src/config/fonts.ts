import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Work_Sans,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Font files can be colocated inside of `pages`
export const fontCenturyGothicPro = localFont({
  src: "./../assets/fonts/CenturyGothicBold.ttf",
  variable: "--font-century",
});
