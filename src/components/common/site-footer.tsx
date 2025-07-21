import Link from "next/link";
import * as React from "react";
import { useMessages } from "next-intl";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons"; // Correct import for Icons

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const messages = useMessages();
  const socialLinks = messages?.SocialLinks ?? [];

  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center gap-8 mt-10 py-10 md:h-24">
        {socialLinks.map((item: any, ind: number) => (
          <CustomTooltip icon={item.icon} text={item.username} key={ind}>
            <Link
              href={item.link}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                "h-10 w-10 p-2"
              )}
            >
              {typeof item.icon === "string" && (Icons as any)[item.icon] ? (
                React.createElement((Icons as any)[item.icon], {
                  className: "h-5 w-5",
                })
              ) : (
                item.icon && React.createElement(item.icon, { className: "h-5 w-5" })
              )}
            </Link>
          </CustomTooltip>
        ))}
      </div>
    </footer>
  );
}
