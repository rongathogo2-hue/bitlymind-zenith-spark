import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookDemo } from "@/components/BookDemo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <BookDemo />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;