import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <TestimonialsSection />
      <CTA />
    </>
  );
}