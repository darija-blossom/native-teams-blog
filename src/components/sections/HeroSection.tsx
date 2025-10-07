import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-5 pt-10 pb-14 overflow-hidden bg-white">
      {/* Decorative icons */}
      <Image
        src="/assets/decor/heart.svg"
        alt=""
        width={32}
        height={32}
        className="absolute top-6 left-4 w-6 h-6 md:w-8 md:h-8"
      />
      <Image
        src="/assets/decor/sparkle.svg"
        alt=""
        width={32}
        height={32}
        className="absolute top-12 right-6 w-6 h-6 md:w-10 md:h-10"
      />

      {/* Blog title */}
      <h2 className="text-[#4338CA] text-base font-semibold mt-4 md:text-xl">
        Native Teams Blog
      </h2>

      {/* Headline */}
      <h1 className="mt-2 text-2xl md:text-4xl font-bold text-gray-900 max-w-[300px] md:max-w-[720px] leading-tight">
        Resources, Tips and Tricks About the Modern Way of Working
      </h1>

      {/* Search bar */}
      <div className="flex mt-8 w-full max-w-sm md:max-w-lg items-center gap-2 bg-gray-50 p-2 rounded-full shadow-sm">
        <Input
          placeholder="Search for posts"
          className="flex-1 border-none bg-transparent text-gray-700 placeholder:text-gray-400 focus-visible:ring-0"
        />
        <Button className="rounded-full px-6 bg-[#5B43F1] text-white">
          Search
        </Button>
      </div>
    </section>
  );
}
