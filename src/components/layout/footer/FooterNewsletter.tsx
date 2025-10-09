"use client";

import Link from "next/link";
import CustomInputGroup from "@/shared-ui/input-group/CustomInputGroup";
import Typography from "@/shared-ui/typography/Typography";

export default function FooterNewsletter() {
  return (
    <section className="w-full bg-[#0A0A2B]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          <Typography
            variant="h2"
            className="text-white md:text-[32px] font-bold leading-[100%]"
          >
            Never miss out our{" "}
            <span className="text-[#7AA7FF]">latest news</span>
          </Typography>

          <CustomInputGroup
            variant="signup"
            title="Email address"
            buttonLabel="Sign up"
            className="mt-8 w-full md:max-w-lg h-auto"
          />

          <Typography variant="small" className="text-white/70 max-w-[640px]">
            By submitting this form, you will receive emails from Native Teams.
            For details, view our{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            .
          </Typography>
        </div>
      </div>
    </section>
  );
}
