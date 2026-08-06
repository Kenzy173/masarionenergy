import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PageHeader } from "./PageHeader";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <PageHeader
          title={title}
          description={description}
          cta={{ label: "Request a consultation", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
