import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection2 from "@/components/ContactSection2";
import DownloadSection from "@/components/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="background-image">
        <Header />
        <HeroSection />
      </div>
      <ServicesSection />
      <PricingSection />
      <WhyUsSection />
      <ContactSection2 />
      <DownloadSection />
    </div>
  );
};

export default Index;
