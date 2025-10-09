"use client";

import Link from "next/link";
import Image from "next/image";
import Typography from "@/shared-ui/typography/Typography";
import { Button } from "@/components/ui/button";

export default function FooterCta() {
  return (
    <section className="w-full bg-[#EAF0FF] h-[456px] flex items-center justify-center relative overflow-hidden">
      <div className="max-w-[1200px] px-5 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-4">
        <Image
          src="/assets/personIcon.svg"
          alt="Native Teams logo background"
          width={535}
          height={456}
          className="absolute left-0 top-0 hidden sm:block"
        />
        <Typography
          variant="h3"
          className="text-[#1E1E1E] md:text-[32px] font-semibold"
        >
          Explore Native Teams today
        </Typography>

        <Typography
          variant="p"
          className="max-w-3xl text-[#1E1E1E]/80 leading-relaxed"
        >
          Unlock the full potential of your teams and elevate your business or
          personal growth with Native Teams. Explore our platform today and
          start your journey towards success.
        </Typography>

        <Button
          className="mt-4 w-full sm:w-auto rounded-full px-6 py-2 flex items-center justify-center gap-2 text-white bg-[#5152FB] hover:bg-[#3F40D6]"
          asChild
        >
          <Link href="#learn-more">Learn more</Link>
        </Button>
      </div>
    </section>
  );
}
