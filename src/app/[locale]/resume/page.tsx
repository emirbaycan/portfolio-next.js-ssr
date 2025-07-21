"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function ResumePage() {
  // @ts-ignore
  const t = useTranslations("pages.resume");
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
  }, []);
  return <div>{t("redirecting")}</div>;
}
