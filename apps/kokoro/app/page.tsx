import { TeamGridSection } from "@/features/landing/TeamSection";
import { Hero } from "@/features/landing/Hero";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { DiplomaSection } from "@/features/landing/Diploma";
import { ContactMessageSection } from "@repo/ui/components/contact/contactMessageSection";
import { Footer } from "@/features/landing/Footer";
import { ProcessSection } from "@/features/landing/ProcessSection";
import { ServiceSection } from "@/features/landing/ServiceSection";
import { ContactSection } from "@/features/landing/ContactSection";

export default function HomePage() {
  return (
    <div className="relative flex h-fit flex-col bg-background text-foreground">
      <div className="mt-16"></div>

      <LandingHeader />

      <Hero />

      <ProcessSection />

      <TeamGridSection />

      <DiplomaSection />

      <ServiceSection />

      <ContactSection />

      <ContactMessageSection />

      <Footer />
    </div>
  );
}
