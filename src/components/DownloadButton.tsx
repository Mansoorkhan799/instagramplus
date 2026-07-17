import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

type DownloadButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/** Primary CTA that starts the APK download from the CDN. */
export function DownloadButton({
  children,
  className = "btn-primary",
  onClick,
}: DownloadButtonProps) {
  return (
    <a
      href={SITE.apkDownloadUrl}
      className={className}
      download
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
