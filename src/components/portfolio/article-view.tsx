"use client";

import { ArrowLeft, PenLine } from "lucide-react";

import { personal, posts } from "@/lib/portfolio-data";
import { useViewNav } from "./use-view-nav";

export function ArticleView({ articleId }: { articleId: string | null }) {
  const { navigate } = useViewNav();
  const post = posts.find((item) => item.slug === articleId);

  if (!post) {
    return (
      <div className="px-4 pt-32 text-center">
        <h1 className="display-serif text-4xl font-black">Article not found</h1>
        <button
          onClick={() => navigate("writing")}
          className="brutal-btn mt-5 bg-brutal-orange"
        >
          <ArrowLeft size={14} /> Writing
        </button>
      </div>
    );
  }

  return (
    <article className="view-in px-4 pt-28 pb-20 md:px-8 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => navigate("writing")}
          className="flex items-center gap-2 font-mono text-xs font-bold uppercase hover:text-brutal-orange"
        >
          <ArrowLeft size={14} /> Back to Writing
        </button>
        <header className="mt-8 border-b-4 border-brutal-black pb-8">
          <span className="brutal-tag max-w-full break-words bg-brutal-orange">
            {post.category}
          </span>
          <h1 className="display-serif mt-4 text-3xl font-black leading-tight break-words sm:text-4xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 flex flex-wrap items-center gap-1 font-mono text-xs font-bold uppercase text-neutral-600">
            <PenLine className="shrink-0" size={13} /> {post.label} · {personal.name}
          </p>
        </header>
        <div className="mt-8 space-y-6">
          {post.body.map((paragraph, index) => (
            <p key={index} className="text-base leading-7 text-neutral-800 sm:text-lg sm:leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
