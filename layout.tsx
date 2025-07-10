export const metadata = {
  title: "AI Web Designer",
  description: "Twoja aplikacja AI do projektowania stron",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
