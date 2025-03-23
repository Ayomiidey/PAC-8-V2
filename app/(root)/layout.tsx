import Header from "@/components/shared/header";
import Footer from "@/components/ui/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper pt-[72px] mt-4">{children}</main>
      <Footer />
    </div>
  );
}
