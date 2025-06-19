export const metadata = {
  title: "Wentley Global LLC",
  description: "Smart Home & IoT Monitoring Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
