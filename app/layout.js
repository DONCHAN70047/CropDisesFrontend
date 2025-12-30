import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Rice Disease Detection | KBTech",
  description: "AI-powered rice disease detection system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Header />
        <div style={{ paddingTop: "70px" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
