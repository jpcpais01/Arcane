import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoSpotlight } from "@/components/BentoSpotlight";
import { LiveStock } from "@/components/LiveStock";
import { CommunityEvents } from "@/components/CommunityEvents";
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
        <CommunityEvents />
        <Trust />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
