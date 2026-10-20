"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Layers,
  Target,
  Wrench,
} from "lucide-react";

import { projects } from "@/lib/portfolio-data";
import { accentBg, accentTag } from "@/lib/accents";
import { ProjectIconSvg } from "@/lib/icon-map";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";

export function ProjectDetailView({ projectId }: { projectId: string | null }) {
  const { navigate } = useViewNav();
  const project = projects.find((item) => item.slug === projectId);

  if (!project) {
    return (
      <div className="px-4 pt-32 text-center">
        <h1 className="display-serif text-4xl font-black">Project not found</h1>
        <button
          onClick={() => navigate("projects")}
          className="brutal-btn mt-5 bg-brutal-orange"
        >
          <ArrowLeft size={14} /> All Projects
        </button>
      </div>
    );
  }

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <div className="view-in">
      <section className="px-4 pt-28 pb-12 md:px-8 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("projects")}
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase hover:text-brutal-orange"
          >
            <ArrowLeft size={14} /> Back to Projects
          </button>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <span className="brutal-tag max-w-full break-words bg-brutal-yellow-light">
                  {project.domain}
                </span>
                <span className="brutal-tag max-w-full break-words bg-white">
                  {project.context}
                </span>
                {project.period && (
                  <span className="brutal-tag max-w-full break-words bg-white">
                    {project.period}
                  </span>
                )}
              </div>
              <h1 className="display-serif mt-4 text-4xl font-black break-words sm:text-5xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700 [overflow-wrap:anywhere]">
                {project.intro.map((part, index) =>
                  typeof part === "string" ? part : <strong key={index}>{part.strong}</strong>,
                )}
              </p>
            </div>
            <div
              className={`brutal-card relative flex aspect-[16/10] items-center justify-center overflow-hidden sm:aspect-video lg:col-span-5 lg:aspect-square ${accentBg[project.accent]}`}
            >
              {project.detailImage && project.coverAlt ? (
                <Image
                  src={project.detailImage}
                  alt={project.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className={project.coverFit === "contain" ? "object-contain p-4" : "object-cover"}
                />
              ) : (
                <span className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-brutal-black bg-white/30 lg:h-56 lg:w-56">
                  <ProjectIconSvg icon={project.icon} size={96} />
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-px border-2 border-brutal-black bg-brutal-black sm:grid-cols-3">
          {project.impact.map((stat) => (
            <div key={stat.label} className="min-w-0 bg-white p-6 text-center">
              <p className="display-serif text-3xl font-black text-brutal-orange">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase text-neutral-600 break-words">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Marquee variant="reverse" />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Heading icon={<Target size={18} />} kicker="// context" title="Problem & approach" />
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">{project.longDesc}</p>
            <div className="mt-10">
              <Heading
                icon={<CheckCircle2 size={18} />}
                kicker="// verification & lessons"
                title="What the work shows"
              />
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 border-l-4 border-brutal-orange bg-brutal-yellow-light p-3"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brutal-orange" />
                    <span className="min-w-0 break-words">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.gallery?.length ? (
              <div className="mt-10">
                <Heading icon={<Layers size={18} />} kicker="// project media" title="Gallery" />
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((media) => (
                    <figure key={media.src} className="brutal-card overflow-hidden">
                      <Image
                        src={media.src}
                        alt={media.alt}
                        width={1400}
                        height={900}
                        className="h-auto w-full object-contain"
                      />
                      {media.caption && (
                        <figcaption className="border-t-2 border-brutal-black p-3 text-sm">
                          {media.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="min-w-0 space-y-6 lg:col-span-5">
            <div className="brutal-card p-6">
              <h2 className="display-serif flex items-center gap-2 text-xl font-black">
                <Wrench className="shrink-0" size={18} /> Tools & technologies
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`brutal-tag max-w-full break-words ${accentTag[project.accent]}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="brutal-card bg-brutal-yellow-light p-6">
              <h2 className="display-serif flex items-center gap-2 text-xl font-black">
                <FileText className="shrink-0" size={18} /> Outputs
              </h2>
              <ul className="mt-4 space-y-2">
                {project.deliverables.map((deliverable) => (
                  <li key={deliverable} className="text-sm font-medium break-words">
                    • {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("project", next.slug)}
            className="brutal-card brutal-card-hover flex w-full items-center justify-between gap-4 bg-brutal-orange p-5 text-left sm:p-6"
          >
            <span className="min-w-0">
              <span className="font-mono text-xs font-bold uppercase">Next case study</span>
              <strong className="display-serif mt-1 block break-words text-2xl">{next.title}</strong>
            </span>
            <ArrowRight className="shrink-0" />
          </button>
        </div>
      </section>
    </div>
  );
}

function Heading({
  icon,
  kicker,
  title,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <div>
      <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-brutal-orange">
        {icon}
        {kicker}
      </span>
      <h2 className="display-serif mt-2 text-3xl font-black">{title}</h2>
    </div>
  );
}
