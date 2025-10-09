"use client";

import Link from "next/link";
import Typography from "@/shared-ui/typography/Typography";
import FooterColumn from "./FooterColumn";

export default function FooterMain() {
  return (
    <section className="w-full bg-[#0B0A26] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#5152FB]" />
              <span className="text-lg font-semibold">Native Teams</span>
            </Link>
            <Typography variant="p" className="mt-4 text-white/70">
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

        <div className="my-10 h-px w-full bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
    </section>
  );
}
