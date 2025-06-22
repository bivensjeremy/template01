import { Fira_Code as FontMono, Inter as FontSans, Fira_Sans as FiraSans, Raleway } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontFira = FiraSans({
  subsets: ['latin'],
  weight: '900',
})

export const fontRaleway = Raleway({
  subsets: ['latin'],
  
})