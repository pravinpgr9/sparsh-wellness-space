
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import DoctorsSection from "@/components/DoctorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <DoctorsSection />
      <ContactSection />
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default Index;
