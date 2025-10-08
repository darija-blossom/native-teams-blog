export default function PostPage({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>;
}
