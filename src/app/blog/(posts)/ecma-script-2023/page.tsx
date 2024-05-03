import Content from "./content.mdx";
import mainImage from "./main-image.jpg";
import { serverTranslation } from "@/i18n";
import BlogHeader from "@/components/blog/header";
import { Metadata } from "next";

export async function generateMetadata({}): Promise<Metadata> {
  const { t } = await serverTranslation("en", "blogPostsEcamScript2023");

  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      type: "article",
      url: `${domain}/blog/ecma-script-2023`,
      images: mainImage.src,
    },
  };
}

export default async function Page() {
  const { t } = await serverTranslation("en", "blogPostsEcamScript2023");
  const releaseDate = new Date("2024-05-03");
  return (
    <article>
      <BlogHeader imageAlt={t("mainImageAlt")} imageSrc={mainImage} title={t("title")} updatedTime={releaseDate} />
      <Content />
    </article>
  );
}
