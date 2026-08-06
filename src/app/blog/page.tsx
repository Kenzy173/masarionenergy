import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blog | Masarion Energy",
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      description="We're setting up our blog. Check back soon for updates on our projects and the industries we serve."
    />
  );
}
