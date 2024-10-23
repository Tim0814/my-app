import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Menu from "./menu";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { AuthContext } from "@/app/account/AuthContext"; //絕對位置
// import { AuthContext } from "./account/AuthContext"; //相對位置
// import { createTheme } from "@mui/material/styles";
import { AuthContextProvider } from "./account/AuthContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <AuthContext.Provider value="email">
            {/* <AppRouterCacheProvider> */}
            <ThemeProvider theme={theme}>
              <Menu />
              {children}
            </ThemeProvider>
            {/* </AppRouterCacheProvider> */}
          </AuthContext.Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
