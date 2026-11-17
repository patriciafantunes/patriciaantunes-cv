export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-4xl mx-auto py-20">
      {children}
    </section>
  );
}