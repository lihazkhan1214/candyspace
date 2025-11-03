import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import LatestMembers from "@/components/LatestMembers";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
    <Header/>
      <main className="">
        <Hero />
        <Welcome />
        <LatestMembers />
        <FAQ />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
