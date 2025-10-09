"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Typography from "@/shared-ui/typography/Typography";

interface AuthorSectionProps {
  authorName?: string;
}

export default function AuthorSection({ authorName }: AuthorSectionProps) {
  const author = authorName || "Jane Doe";

  return (
    <section className="w-full flex justify-center items-center py-20 px-4">
      <Card className="relative max-w-[800px] w-full bg-[#1F2068] rounded-[16px] border-none shadow-lg text-center text-white pt-20">
        <Avatar className="absolute left-1/2 -top-10 transform -translate-x-1/2 w-[80px] h-[80px] ring-4 ring-white ring-offset-2 ring-offset-[#1F2068] bg-white">
          <AvatarImage src="https://i.pravatar.cc/150?img=12" alt={author} />
          <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>

        <CardContent className="flex flex-col items-center justify-center gap-3 px-6 pt-8 pb-10">
          <div>
            <Typography
              variant="h4"
              className="text-white font-semibold text-lg leading-none"
            >
              {author}
            </Typography>
            <Typography
              variant="p"
              className="uppercase text-[#B3B6F2] text-xs tracking-wide"
            >
              Author
            </Typography>
          </div>

          <Typography
            variant="p"
            className="text-white/80 text-[15px] leading-relaxed max-w-[500px] mt-2"
          >
            {`${author} writes about culture, policy, and innovation. Passionate about bridging people through words, their work reflects stories that matter.`}
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
}
