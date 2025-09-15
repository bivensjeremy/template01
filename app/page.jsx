
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import FAQs from "../components/FAQs";

export default function Home() {
  return (
    <section className="">
      <Hero />

      <AboutMe />

      <Features />

      <Services />

      <Testimonials />

      <FAQs />

      <Contact />
    </section>
  );
}
