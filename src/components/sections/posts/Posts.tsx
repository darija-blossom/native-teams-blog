import FeaturedPost from "./featuredPost/FeaturedPost";
import NewPosts from "./newPosts/NewPosts";

export default function Posts() {
  return (
    <section className="flex flex-col items-center gap-10 mb-20">
      <FeaturedPost />
      <NewPosts />
    </section>
  );
}
