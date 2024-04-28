import "./globals.css";

export const metadata = {
  title: "Sneakers.Dot",
  description: "Sneakers store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
