import Link from "next/link";
import { DownloadButton } from "@/components/DownloadButton";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="section-kicker">404</p>
      <h1 className="mt-3 font-display text-4xl text-white">Page not found</h1>
      <p className="mt-4 text-white/60">
        That URL doesn&apos;t exist. Try the features hub or download page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <DownloadButton className="btn-secondary">Download APK</DownloadButton>
      </div>
    </div>
  );
}
