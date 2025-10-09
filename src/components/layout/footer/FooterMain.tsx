"use client";

import Link from "next/link";
import Image from "next/image";
import Typography from "@/shared-ui/typography/Typography";
import FooterColumn from "./FooterColumn";

export default function FooterMain() {
  return (
    <section className="w-full bg-[#1F2068] text-white md:h-[670px] flex items-center">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0 py-14 md:py-16 flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          <div className="md:col-span-2 flex flex-col">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="logoIcon.svg"
                alt="Native Teams logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-semibold">Native Teams</span>
            </Link>
            <Typography
              variant="p"
              className="mt-4 text-white/70 leading-relaxed"
            >
              Helping teams work anywhere. Payroll, compliance, benefits and
              more — in one platform.
            </Typography>
          </div>

          <FooterColumn
            title="Platform"
            links={[
              ["Employer of Record", "#"],
              ["FDI Services", "#"],
              ["Company as a Service", "#"],
              ["Global Payroll", "#"],
              ["Direct Payments", "#"],
              ["Global Mobility", "#"],
              ["Tax Management", "#"],
              ["Expense Management", "#"],
            ]}
          />

          <FooterColumn
            title="Information"
            links={[
              ["Legal Entity", "#"],
              ["Case Invoicing", "#"],
              ["Payment Requests", "#"],
              ["Employee Benefits", "#"],
              ["For Startups", "#"],
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              ["About", "#"],
              ["Our Countries", "#"],
              ["Affiliates", "#"],
              ["Partnerships", "#"],
              ["Charity", "#"],
              ["Docs & Security", "#"],
              ["Book a demo", "#"],
              ["Contact", "#"],
            ]}
          />
        </div>

        <div className="flex flex-col ">
          <div className="my-10 h-px w-full bg-white/10" />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Typography variant="small" className="text-white/60">
              © {new Date().getFullYear()} Native Teams, Limited
            </Typography>

            <div className="flex flex-wrap items-center gap-4 text-white/70">
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
