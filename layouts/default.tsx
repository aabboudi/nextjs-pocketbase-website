import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export default function DefaultLayout({ children, pageTitle }: DefaultLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="container flex-grow mx-auto px-6 py-16">
        <h1 className="text-3xl text-center font-bold pt-6">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
}
