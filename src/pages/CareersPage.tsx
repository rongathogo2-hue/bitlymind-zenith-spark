import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Careers } from "@/components/Careers";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;