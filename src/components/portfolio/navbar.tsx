"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";

import { personal } from "@/lib/portfolio-data";

const items = ["Home", "About", "Projects", "Writing", "Experience", "Contact"];

export function Navbar() {
  const router = useRouter();
  const sp = useSearchParams();
  const current = sp.get("view") || "home";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(scrollY > 12);
    handleScroll();
    addEventListener("scroll", handleScroll, { passive: true });
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    addEventListener("keydown", closeOnEscape);
    return () => removeEventListener("keydown", closeOnEscape);
  }, []);

  const go = (view: string) => {
    setOpen(false);
    const params = new URLSearchParams(sp.toString());
    if (view === "home") {
      params.delete("view");
      params.delete("id");
    } else {
      params.set("view", view);
      params.delete("id");
    }
    router.push(params.size ? `/?${params}` : "/", { scroll: false });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b-2 border-brutal-black bg-brutal-paper"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-2 text-left">
          <span className="flex h-10 w-10 items-center justify-center border-2 border-brutal-black bg-brutal-orange font-mono text-lg font-bold shadow-[3px_3px_0_#0A0A0A]">
            SA
          </span>
          <span className="hidden sm:block">
            <strong className="display-serif block text-lg leading-none">Sofia Abidi</strong>
            <span className="font-mono text-[10px] uppercase text-neutral-600">
              Computer Engineering · VJTI
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {items.map((label) => {
            const view = label.toLowerCase();
            return (
              <button
                key={view}
                onClick={() => go(view)}
                aria-current={current === view ? "page" : undefined}
                className={`border-2 px-3 py-2 font-mono text-sm font-semibold ${
                  current === view
                    ? "border-brutal-black bg-brutal-yellow-light"
                    : "border-transparent hover:border-brutal-black"
                }`}
              >
                {label}
              </button>
            );
          })}
          <a
            href={personal.resumePath}
            download={personal.resumeName}
            className="ml-2 border-2 border-brutal-black bg-brutal-orange px-4 py-2 font-mono text-sm font-bold shadow-[3px_3px_0_#0A0A0A]"
          >
            Resume ↗
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="border-2 border-brutal-black bg-brutal-orange p-2 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t-2 border-brutal-black bg-brutal-paper p-4 lg:hidden"
        >
          {items.map((label) => {
            const view = label.toLowerCase();
            const active = current === view;
            return (
              <button
                key={label}
                onClick={() => go(view)}
                aria-current={active ? "page" : undefined}
                className={`block w-full border-2 px-4 py-3 text-left font-mono text-sm font-semibold ${
                  active
                    ? "border-brutal-black bg-brutal-yellow-light"
                    : "border-transparent hover:border-brutal-black"
                }`}
              >
                {label}
              </button>
            );
          })}
          <a
            href={personal.resumePath}
            download={personal.resumeName}
            onClick={() => setOpen(false)}
            className="mt-2 block border-2 border-brutal-black bg-brutal-orange p-3 text-center font-mono font-bold"
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}
