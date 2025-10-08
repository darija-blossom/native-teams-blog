import DecorativeIcons from "../decorative/DecorativeIcons";
import Typography from "@/shared-ui/typography/Typography";
import CustomInputGroup from "@/shared-ui/input-group/CustomInputGroup";
import Categories from "@/shared-ui/categories/Categories";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center pt-10 pb-14">
      <DecorativeIcons />

      <Typography variant="h3" className="mt-4">
        Native Teams Blog
      </Typography>

      <Typography
        variant="h2"
        className="max-w-[300px] md:max-w-[990px] mt-2 px-2"
      >
        Resources, Tips and Tricks About the Modern Way of Working
      </Typography>

      <CustomInputGroup
        variant="search"
        title="Search for posts"
        buttonLabel="Search"
        className="mt-8 w-full md:max-w-lg h-auto"
      />

      <Categories />
    </section>
  );
}
