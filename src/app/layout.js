import "./globals.css";

export const metadata = {
  title: "Meembrella",
  description: "Dev with Meembrella by Saeed Khaled",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
