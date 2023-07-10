import "../styles/globals.css";

export const metadata = {
  title: "Netlify Test",
  description: "This is a description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
