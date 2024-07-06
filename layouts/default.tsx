import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      {/* <main style={{ maxWidth: '100rem' }} className="container mx-auto px-6 flex-grow pt-16"> */}
      <main className="container mx-auto px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
