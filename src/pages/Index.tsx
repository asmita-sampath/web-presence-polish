import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TelecomServices from "@/components/TelecomServices";
import ITServices from "@/components/ITServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <Hero />
    <About />
    <TelecomServices />
    <ITServices />
    <Contact />
    <Footer />
  </div>
);

export default Index;
