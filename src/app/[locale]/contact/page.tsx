'use client';
import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  // @ts-ignore
  const t = useTranslations("pages.contact");

  return (
    <PageContainer
      title={t("title")}
      description={t("description")}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-center ">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
