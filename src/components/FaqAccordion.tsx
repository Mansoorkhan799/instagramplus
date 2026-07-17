"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-medium text-white">{item.question}</span>
              <span aria-hidden="true" className="text-lg text-white/50">
                {open ? "−" : "+"}
              </span>
            </button>
            {open && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-white/60">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
