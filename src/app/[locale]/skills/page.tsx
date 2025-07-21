import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
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
  const t = createTranslator({ locale: params.locale as "en" | "tr", messages, namespace: "pages.skills" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: {
      canonical: `${siteConfig.url}/skills`,
    },
  };
}

export default function SkillsPage() {
  // @ts-ignore
  const t = useTranslations("pages.skills");
  const messages = useMessages();
  const skills = messages?.skillsUnsorted ?? [];

  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
}
