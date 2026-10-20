"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { personal } from "@/lib/portfolio-data";
import { useViewNav } from "./use-view-nav";

export function Footer() {
  const { navigate } = useViewNav();

  return (
    <footer className="mt-auto border-t-4 border-brutal-orange bg-brutal-black text-white">
      <div className="overflow-hidden border-y-3 border-brutal-orange bg-brutal-orange py-4">
        <p className="whitespace-nowrap text-center font-mono text-sm font-bold uppercase tracking-widest text-brutal-black">
          ✦ OPEN TO LEARNING & OPPORTUNITIES ✦ COMPUTER ENGINEERING ✦ AI · ALGORITHMS · SOFTWARE
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 lg:grid-cols-3">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brutal-orange bg-brutal-orange font-mono text-xl font-bold text-black">
              SA
            </span>
            <div className="min-w-0">
              <strong className="display-serif block text-2xl">Sofia Abidi</strong>
              <span className="font-mono text-xs uppercase text-neutral-400 break-words">
                Computer Engineering · VJTI
              </span>
            </div>
          </div>
          <p className="mt-4 font-mono text-sm text-neutral-300">
            Building intelligent systems, full-stack products and optimization tools.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={personal.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-neutral-700 p-2 hover:border-brutal-orange"
            >
              <Github size={17} />
            </a>
            <a
              href={personal.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-neutral-700 p-2 hover:border-brutal-orange"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="border-2 border-neutral-700 p-2 hover:border-brutal-orange"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="display-serif text-xl text-brutal-orange">Quick Menu</h3>
          {["home", "about", "projects", "writing", "experience", "contact"].map((view) => (
            <button
              key={view}
              onClick={() => navigate(view)}
              className="block py-1 font-mono text-sm capitalize text-neutral-400 hover:text-brutal-orange"
            >
              {view}
            </button>
          ))}
        </div>

        <div className="min-w-0">
          <h3 className="display-serif text-xl text-brutal-orange">Get in Touch</h3>
          <a
            href={`mailto:${personal.email}`}
            className="mt-3 flex min-w-0 items-start gap-2 text-sm text-neutral-300 break-all"
          >
            <Mail className="mt-0.5 shrink-0" size={14} />
            {personal.email}
          </a>
          <p className="mt-2 flex items-start gap-2 text-sm text-neutral-300">
            <MapPin className="mt-0.5 shrink-0" size={14} />
            <span className="min-w-0 break-words">{personal.location}</span>
          </p>
          <a
            href={personal.resumePath}
            download={personal.resumeName}
            className="mt-4 inline-block border-2 border-brutal-orange bg-brutal-orange px-4 py-2 font-mono text-xs font-bold uppercase text-black"
          >
            Download Resume ↗
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 border-t border-neutral-800 px-4 py-5 font-mono text-xs text-neutral-500 sm:flex-row md:px-8">
        <span>© {new Date().getFullYear()} Sofia Abidi.</span>
        <span>MIT License</span>
      </div>
    </footer>
  );
}
