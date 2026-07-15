import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import BentoServices from '@/components/sections/BentoServices';
import Process from '@/components/sections/Process';
import Results from '@/components/sections/Results';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <BentoServices />
      <Process />
      <Results />
      <Testimonials />
      <Pricing />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
