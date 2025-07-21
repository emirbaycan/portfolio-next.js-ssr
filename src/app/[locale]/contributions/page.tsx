import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
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
  const t = createTranslator({ locale: params.locale as "tr" | "en", messages, namespace: "pages.contributions" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: {
      canonical: `${siteConfig.url}/contributions`,
    },
  };
}

export default function ContributionsPage() {
  // @ts-ignore
  const t = useTranslations("pages.contributions");
  const messages = useMessages();
  const contributionsUnsorted = messages?.contributionsUnsorted ?? [];

  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <ContributionCard contributions={contributionsUnsorted} />
    </PageContainer>
  );
}
