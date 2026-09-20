import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Challenge } from "@/components/Challenge";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <ClientMarquee />
        <Services />
        <Process />
        <CaseStudies />
        <Challenge />
        <Pricing />
        <Testimonials />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
