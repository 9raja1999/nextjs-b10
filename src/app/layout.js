import "./globals.css";
import AuthProvider from "./providers/AuthProvider";


export const metadata = {
  manifest : '/manifest.json',
  title: 'PWA APP',
  description: 'progressive web application'
}

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
