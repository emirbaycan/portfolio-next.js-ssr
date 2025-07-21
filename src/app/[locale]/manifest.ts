import type { MetadataRoute } from "next";
import { createTranslator } from "next-intl";
import { getMessages } from "next-intl/server";


export default async function manifest({ params }: { params: { locale: "en" | "tr" } }): Promise<MetadataRoute.Manifest> {
    const messages = await getMessages();
    // @ts-ignore
    const t = createTranslator({ locale: params.locale, messages, namespace: "pages.home" });

    return {
        name: t("manifest.name"),
        short_name: t("manifest.shortName"),
        description: t("manifest.description"),
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "64x64",
                type: "image/png",
            },
            {
                src: "/favicon.ico",
                sizes: "64x64",
                type: "image/png",
                purpose: "maskable",
            },
        ],
        categories: [
            "portfolio",
            "template",
            "development",
            "nextjs",
            "react",
            "developer",
            "web development",
            "open source",
        ],
        lang: params.locale,
        dir: "ltr",
        scope: "/",
    };
}
