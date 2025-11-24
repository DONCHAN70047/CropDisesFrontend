import "./globals.css";
import { UserProvider } from "./utils/context/user_context";

export const metadata = {
  title: "NBNK Web Service",
  description: "Fintech for the Fast-Changing Bharat",
  icons: {
    icon: "/CompanyLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
