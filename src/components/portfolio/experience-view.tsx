"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";

import { education, experiences, personal } from "@/lib/portfolio-data";
import { accentBg, accentBorderLeft } from "@/lib/accents";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";

export function ExperienceView() {
  const { navigate } = useViewNav();
  const currentEducation = education[0];

  return (
    <div className="view-in">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
        <div className="absolute -right-6 top-32 hidden h-16 w-16 -rotate-12 border-2 border-brutal-black bg-brutal-mint md:block" />

        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("home")}
            className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-brutal-black hover:text-brutal-orange"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </button>

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange">
              <Briefcase size={16} /> {"// experience & leadership"}
            </span>
            <h1 className="display-serif mt-3 text-4xl font-black sm:text-5xl lg:text-7xl">
              Experience beyond the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">classroom</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brutal-coral md:h-4" />
              </span>
              .
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
              Mentoring, organizing and learning how to work with people — not
              just code.
            </p>
          </div>
        </div>
      </section>

      <Marquee variant="stripes" />

      {/* TIMELINE */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-1 border-l-2 border-dashed border-brutal-black lg:left-1/2" />

            <div className="flex flex-col gap-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative min-w-0 pl-14 lg:w-1/2 lg:pl-0 ${
                    i % 2 === 0
                      ? "lg:self-start lg:pr-12 lg:text-right"
                      : "lg:self-end lg:pl-12"
                  }`}
                >
                  {/* Node */}
                  <span
                    className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center border-2 border-brutal-black ${accentBg[exp.accent]} shadow-[3px_3px_0px_0px_#0A0A0A] ${
                      i % 2 === 0
                        ? "lg:-right-5 lg:left-auto"
                        : "lg:-left-5"
                    }`}
                  >
                    <Briefcase size={16} />
                  </span>

                  {/* Card */}
                  <div
                    className={`brutal-card brutal-card-hover flex flex-col p-6 ${accentBorderLeft[exp.accent]} border-l-[6px] ${
                      i % 2 === 0
                        ? `lg:border-l-2 lg:border-l-brutal-black lg:border-r-[6px] ${
                            exp.accent === "coral"
                              ? "lg:border-r-brutal-coral"
                              : exp.accent === "yellow"
                                ? "lg:border-r-brutal-yellow"
                                : "lg:border-r-brutal-orange"
                          }`
                        : ""
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        i % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                      <span className="inline-flex items-center gap-1 border-2 border-brutal-black bg-brutal-yellow-light px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <Calendar size={10} /> {exp.period}
                      </span>
                      {exp.current && (
                        <span className="border-2 border-brutal-black bg-brutal-orange px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-brutal-black">
                          ● Current
                        </span>
                      )}
                    </div>

                    <h3 className="display-serif mt-3 text-2xl font-black leading-tight break-words">
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brutal-orange break-words">
                      {exp.company}
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-neutral-600 lg:justify-start">
                      <MapPin size={10} /> {exp.location}
                      {i % 2 === 0 && (
                        <span className="lg:ml-auto lg:mr-0" />
                      )}
                    </p>

                    <p
                      className={`mt-3 text-sm leading-relaxed text-neutral-700 ${
                        i % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {exp.summary}
                    </p>

                    <ul
                      className={`mt-4 flex flex-col gap-2 ${
                        i % 2 === 0 ? "lg:items-end" : ""
                      }`}
                    >
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className={`flex items-start gap-2 text-sm font-medium text-brutal-black ${
                            i % 2 === 0
                              ? "lg:flex-row-reverse lg:text-right"
                              : ""
                          }`}
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-brutal-orange"
                          />
                          <span className="min-w-0 break-words">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Education node */}
              {currentEducation && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="relative min-w-0 pl-14 lg:w-1/2 lg:self-end lg:pl-12"
                >
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center border-2 border-brutal-black bg-brutal-mint text-brutal-black shadow-[3px_3px_0px_0px_#0A0A0A] lg:-left-5">
                    <GraduationCap size={18} />
                  </span>
                  <div className="brutal-card brutal-card-hover border-l-[6px] border-l-brutal-mint p-6">
                    <span className="inline-flex items-center gap-1 border-2 border-brutal-black bg-brutal-yellow-light px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                      <Calendar size={10} /> {currentEducation.period}
                    </span>
                    <h3 className="display-serif mt-3 text-2xl font-black leading-tight break-words">
                      {currentEducation.degree}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brutal-orange break-words">
                      {currentEducation.field} · CGPA {currentEducation.cgpa}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-neutral-600 break-words">
                      {currentEducation.school} · {currentEducation.location}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="brutal-card brutal-card-hover flex flex-col items-center gap-4 border-2 border-brutal-black bg-brutal-yellow-light p-6 text-center sm:p-8 md:p-12">
            <h2 className="display-serif text-3xl font-black leading-tight md:text-4xl">
              Interested in working together?
            </h2>
            <p className="max-w-xl text-base text-neutral-700 md:text-lg">
              I&apos;m open to learning opportunities, collaborative projects and
              conversations about thoughtful engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate("contact")}
                className="brutal-btn bg-brutal-orange text-brutal-black"
              >
                <Mail size={16} /> Get in Touch
              </button>
              <button
                onClick={() => navigate("projects")}
                className="brutal-btn bg-white text-brutal-black"
              >
                See Projects <ArrowRight size={16} />
              </button>
              <a
                href={personal.resumePath}
                download={personal.resumeName}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-brutal-black text-white"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
