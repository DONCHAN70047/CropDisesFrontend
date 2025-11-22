// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "NBNK Web Service",
  description: "Fintech for the Fast-Changing Bharat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
