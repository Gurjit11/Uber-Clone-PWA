export const metadata = {
  title: "Farm .AI",
  description: "agriculture project",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
