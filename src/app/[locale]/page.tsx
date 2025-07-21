import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useTranslations, createTranslator, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImg from "@/public/emir.jpg";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const messages = await getMessages();
  // @ts-ignore
  const t = createTranslator({ locale: params.locale as "en" | "tr", messages, namespace: "pages.home" });

  return {
    title: `${t("metadata.title")} | Modern Next.js Developer Portfolio Template`,
    description: `${t("metadata.description")} ${t("intro")}`,
    alternates: {
      canonical: t("siteUrl"),
    },
  };
}

export default function IndexPage() {
  // @ts-ignore
  const t = useTranslations("pages.home");
  // @ts-ignore
  const tSkills = useTranslations("pages.skills");
  // @ts-ignore
  const tExp = useTranslations("pages.experience");
  // @ts-ignore
  const tContrib = useTranslations("pages.contributions");
  const messages = useMessages();

  // Use featured data from messages or fallback to empty arrays
  const featuredSkills = messages?.skillsUnsorted?.slice(0, 6) ?? [];
  const featuredExperiences = messages?.Experiences?.slice(0, 3) ?? [];
  const featuredContributions = messages?.contributionsUnsorted?.slice(0, 3) ?? [];

  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("name"),
    url: t("siteUrl"),
    image: t("ogImage"),
    jobTitle: t("jobTitle"),
    sameAs: [t("githubUrl"), t("twitterUrl")],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: t("softwareName"),
    applicationCategory: t("softwareCategory"),
    operatingSystem: t("softwareOS"),
    offers: {
      "@type": "Offer",
      price: t("softwarePrice"),
      priceCurrency: t("softwareCurrency"),
    },
    author: {
      "@type": "Person",
      name: t("name"),
      url: t("siteUrl"),
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={heroImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt={t("avatarAlt")}
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("name")}
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            {t("jobTitle")}
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              {t("intro")}
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={t("githubUrl")}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label={t("githubAria")}
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> {t("githubBtn")}
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label={t("contactAria")}
              >
                <Icons.contact className="w-4 h-4 mr-2" /> {t("contactBtn")}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" aria-label={t("scrollDownAria")} />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {tSkills("title")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {tSkills("description")}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills" aria-label={tSkills("viewAllAria")}>
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" aria-label={tSkills("viewAllAria")} /> {tSkills("viewAll")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {tExp("title")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {tExp("description")}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience" aria-label={tExp("viewAllAria")}>
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" aria-label={tExp("viewAllAria")} /> {tExp("viewAll")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="down"
        className="container space-y-6 bg-muted py-10 my-14"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {tContrib("title")}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {tContrib("description")}
          </AnimatedText>
        </div>
        <div className="mx-auto justify-center gap-4 md:w-full lg:grid-cols-3">
          <ContributionCard contributions={featuredContributions} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions" aria-label={tContrib("viewAllAria")}>
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" aria-label={tContrib("viewAllAria")} /> {tContrib("viewAll")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
