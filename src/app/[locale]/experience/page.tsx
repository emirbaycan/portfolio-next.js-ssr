import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/experience/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const t = createTranslator({ locale: params.locale as "en" | "tr", messages, namespace: "pages.experience" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: {
      canonical: `${siteConfig.url}/experience`,
    },
  };
}

const renderContent = (tabVal: string, experiences: any[]) => {
  let expArr = experiences;
  if (tabVal === "personal") {
    expArr = expArr.filter((val) => val.type === "Personal Project");
  } else if (tabVal === "professional") {
    expArr = expArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {expArr.map((exp) => (
        <ProjectCard project={exp} key={exp.id} />
      ))}
    </div>
  );
};

export default function ExperiencePage() {
    // @ts-ignore
  const t = useTranslations("pages.experience");
  const messages = useMessages();
  const experiences = (messages.Experiences as any[]).map((exp) => ({
    ...exp,
    company: exp.company ?? exp.companyName ?? "",
    description: exp.description ?? exp.shortDescription ?? "",
  }));

  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="conatiner grid max-w-[30rem] grid-cols-3">
          <TabsTrigger value="all">{t("tabs.all")}</TabsTrigger>
          <TabsTrigger value="personal">{t("tabs.personal")}</TabsTrigger>
          <TabsTrigger value="professional">{t("tabs.professional")}</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          {renderContent("all", experiences)}
        </TabsContent>
        <TabsContent value="professional">
          {renderContent("professional", experiences)}
        </TabsContent>
        <TabsContent value="personal">{renderContent("personal", experiences)}</TabsContent>
      </Tabs>
    </PageContainer>
  );
}
