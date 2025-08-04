import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { BookDemo } from "@/components/BookDemo";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <BookDemo />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
