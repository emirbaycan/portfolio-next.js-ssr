import { Metadata } from "next";
import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { siteConfig } from "@/config/site";
import { useTranslations, createTranslator, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const messages = await getMessages();
  // @ts-ignore
  const t = createTranslator({ locale: params.locale as "en" | "tr", messages, namespace: "pages.career" as any });

  return {
    title: `${t("metadata.title")} | Interactive Developer Timeline`,
    description: `${t("metadata.description")} This interactive career timeline showcases professional experience in a visually appealing way. Part of our open-source Next.js portfolio template.`,
    keywords: [
      "career timeline template",
      "interactive timeline",
      "developer experience",
      "portfolio template",
      "Next.js",
    ],
    alternates: {
      canonical: `${siteConfig.url}/career`,
    },
  };
}

export default function CareerPage() {
  const t = useTranslations();
  const messages = useMessages();
  // Use the 'career' array instead of 'Experiences'
  const experiences = (messages.career as any[]).map((exp) => ({
    id: exp.id,
    position: exp.position ?? "",
    company: exp.company ?? exp.companyName ?? "",
    location: exp.location ?? "",
    description: Array.isArray(exp.description)
      ? exp.description
      : exp.description
        ? [exp.description]
        : exp.shortDescription
          ? [exp.shortDescription]
          : [],
    startDate: exp.startDate ?? "",
    endDate: exp.endDate ?? "",
    type: exp.type,
    category: exp.category,
    descriptionDetails: exp.descriptionDetails,
    achievements: exp.achievements ?? [],
    skills: exp.skills ?? [],
    // Add any other required fields with appropriate fallbacks
  }));

  return (
    <PageContainer
      title={t("pages.career.title")}
      description={t("pages.career.description")}
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  );
}
