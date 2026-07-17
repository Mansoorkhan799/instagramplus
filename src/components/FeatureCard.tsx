import Image from "next/image";
import Link from "next/link";
import type { Feature } from "@/data/features";

type FeatureCardProps = {
  feature: Feature;
  priority?: boolean;
};

export function FeatureCard({ feature, priority = false }: FeatureCardProps) {
  return (
    <Link
      href={`/features/${feature.slug}`}
      className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-white/25 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-square overflow-hidden bg-[#0b1014]">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          title={feature.shortTitle}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-top transition duration-400 group-hover:scale-[1.04]"
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1014]/95 via-[#0b1014]/50 to-transparent px-3 pb-3 pt-10">
          <h3 className="truncate text-sm font-semibold text-white sm:text-[15px]">
            {feature.shortTitle}
          </h3>
        </div>
      </div>
    </Link>
  );
}
