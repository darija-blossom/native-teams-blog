import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
    </main>
  );
}
