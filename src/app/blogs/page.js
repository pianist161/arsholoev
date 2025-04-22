import BlogsMain from "@/components/layout/main/BlogsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Blogs() {
  return (
    <PageWrapper isInnerPage={true}>
      <BlogsMain />
    </PageWrapper>
  );
}
