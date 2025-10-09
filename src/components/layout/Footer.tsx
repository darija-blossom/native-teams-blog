"use client";

import Link from "next/link";
import Typography from "@/shared-ui/typography/Typography";
import { cn } from "@/lib/utils";
// shadcn/ui
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full">
      <FooterCta />
      <FooterNewsletter />
      <FooterMain />
    </footer>
  );
}

/* 1) CTA / Promo (light) */
function FooterCta() {
  return (
    <section className="w-full bg-[#EAF0FF]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4">
          <Typography variant="h3" className="text-[#1E1E1E] md:text-[32px]">
            Explore Native Teams today
          </Typography>

          <Typography variant="p" className="max-w-3xl text-[#1E1E1E]/80">
            Unlock the full potential of your teams and elevate your business or
            personal growth with Native Teams. Explore our platform today and
            start your journey towards success.
          </Typography>

          <Button
            className="mt-2 rounded-full px-6 py-2 text-white bg-[#5152FB] hover:bg-[#3F40D6]"
            asChild
          >
            <Link href="#learn-more">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* 2) Newsletter (dark) */
function FooterNewsletter() {
  return (
    <section className="w-full bg-[#0F0E2E]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          <Typography
            variant="h3"
            className="text-white md:text-[32px] font-bold leading-[100%]"
          >
            Never miss out our{" "}
            <span className="text-[#7AA7FF]">latest news</span>
          </Typography>

          {/* form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-[560px] items-center gap-3"
          >
            <Input
              type="email"
              placeholder="Email address"
              className={cn(
                "h-10 md:h-11 rounded-[8px] bg-transparent text-white",
                "border border-[#3D3C6E] placeholder:text-white/50"
              )}
            />
            <Button
              type="submit"
              className="h-10 md:h-11 rounded-full px-5 bg-[#5152FB] hover:bg-[#3F40D6] text-white"
            >
              Sign up
            </Button>
          </form>

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

/* 3) Main footer (darker + columns) */
function FooterMain() {
  return (
    <section className="w-full bg-[#0B0A26] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0 py-14 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand / blurb */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              {/* Replace with your Logo component/image if you have one */}
              <div className="h-7 w-7 rounded-full bg-[#5152FB]" />
              <span className="text-lg font-semibold">Native Teams</span>
            </Link>
            <Typography variant="p" className="mt-4 text-white/70">
              Helping teams work anywhere. Payroll, compliance, benefits and
              more — in one platform.
            </Typography>
          </div>

          {/* Columns */}
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

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom row */}
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

/* column helper */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div>
      <Typography variant="h4" className="text-white md:text-[18px]">
        {title}
      </Typography>
      <ul className="mt-4 space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
