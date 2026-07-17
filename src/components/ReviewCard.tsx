import { SITE } from "@/lib/site";
import type { Review } from "@/data/reviews";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
      itemScope
      itemType="https://schema.org/Review"
    >
      <meta itemProp="itemReviewed" content="Instagram Plus Mod APK" />
      <div className="flex items-center justify-between gap-3">
        <p className="font-medium text-white" itemProp="author">
          {review.author}
        </p>
        <div
          className="flex items-center gap-1 text-[#f77737]"
          itemProp="reviewRating"
          itemScope
          itemType="https://schema.org/Rating"
        >
          <meta itemProp="ratingValue" content={String(review.rating)} />
          <meta itemProp="bestRating" content="5" />
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < review.rating ? "★" : "☆"}
            </span>
          ))}
          <span className="sr-only">
            {review.rating} out of {SITE.rating.best} stars
          </span>
        </div>
      </div>
      <h3 className="mt-3 text-base text-white" itemProp="name">
        {review.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60" itemProp="reviewBody">
        {review.body}
      </p>
      <time
        className="mt-3 block text-xs text-white/35"
        dateTime={review.date}
        itemProp="datePublished"
      >
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </time>
    </article>
  );
}
