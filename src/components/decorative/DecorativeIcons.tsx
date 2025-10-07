import Image from "next/image";

export default function DecorativeIcons() {
  return (
    <>
      <div
        className="absolute top-[9.5%] left-[4.85%] w-[46px] h-[43.12px] 
            sm:w-[58px] sm:h-[54px]
            md:w-[68px] md:h-[65px] md:top-[3.5%] md:left-[12.85%]
            lg:w-[82px] lg:h-[78px]"
      >
        <Image
          src="/assets/heart.svg"
          alt="Heart decorative icon"
          fill
          className="object-contain absolute top-[3.5%] left-[12.85%] w-[46px] h-[43.12px] 
            sm:w-[58px] sm:h-[54px]
            md:w-[68px] md:h-[65px]
            lg:w-[82px] lg:h-[78px]"
          priority
        />
      </div>
      <div
        className="hidden sm:block absolute 
            top-[50.8%] left-[19.29%] 
            w-[30px] h-[30px] md:w-[50px] md:h-[50px]
            opacity-60"
      >
        <Image
          src="/assets/sparkle.svg"
          alt="Decorative sparkle icon"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Small Icon - Visible on mobile too */}
      <div
        className="absolute 
            top-[48.3%] left-[84.7%]       
            w-[29px] h-[29px] 
            sm:top-[2.86%] sm:left-[74.44%] 
            md:w-[30.5px] md:h-[30.5px]
            opacity-60"
      >
        <Image
          src="/assets/sparkle.svg"
          alt="Decorative sparkle icon top right"
          fill
          className="object-contain"
          priority
        />
      </div>
    </>
  );
}
