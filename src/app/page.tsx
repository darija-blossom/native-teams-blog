import HeroSection from "@/components/sections/HeroSection";
import Posts from "@/components/sections/posts/Posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Posts />
    </div>
  );
}
