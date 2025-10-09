"use client";

import Image from "next/image";
import Typography from "@/shared-ui/typography/Typography";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ThankYouPopover() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 5000);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={handleOpen}
          className="rounded-full font-semibold px-6 h-[49px] transition-colors duration-200
                   w-full sm:w-auto bg-[#5152FB] text-white hover:bg-[#303094]"
        >
          Sign up
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="center"
        className="flex flex-col items-center justify-center gap-4 bg-white p-10 rounded-[30px] w-[335px] h-[393px] shadow-xl"
      >
        <Image
          src="logoIcon.svg"
          alt="Native Teams logo"
          width={120}
          height={120}
          className="mb-2"
        />

        <Typography
          variant="h3"
          className="text-[#1E1E1E] font-semibold text-center"
        >
          Thank you for signing up!
        </Typography>

        <Typography
          variant="p"
          className="text-[#1E1E1E]/80 text-center text-[15px] leading-[140%]"
        >
          Your email has been added to our list. <br />
          Stay tuned for more news, and be the first to hear from us.
        </Typography>
      </PopoverContent>
    </Popover>
  );
}
