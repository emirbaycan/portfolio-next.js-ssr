import { MetadataRoute } from "next";
import { createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function sitemap({ params }: { params: { locale: string } }): Promise<MetadataRoute.Sitemap> {
  const messages = await getMessages();
  // @ts-ignore
  const t = createTranslator({ locale: params.locale, messages, namespace: "pages.home" });

  const baseUrl = t("siteUrl");
  const paths = t.raw("paths");

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${paths.skills}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${paths.experience}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${paths.career}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${paths.contributions}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${paths.contact}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/${paths.resume}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return routes;
}
