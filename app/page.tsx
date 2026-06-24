import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoSpotlight } from "@/components/BentoSpotlight";
import { LiveStock } from "@/components/LiveStock";
import { HowItWorks } from "@/components/HowItWorks";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoSpotlight />
        <LiveStock />
        <HowItWorks />
        <Trust />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
