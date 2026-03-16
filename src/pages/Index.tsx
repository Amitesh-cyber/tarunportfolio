import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import DSASection from "@/components/DSASection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <WorkSection />
    <DSASection />
    <SkillsSection />
    <ResumeSection />
    <CertificatesSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
