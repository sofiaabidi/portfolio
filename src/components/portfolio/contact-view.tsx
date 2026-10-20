"use client";

import { FormEvent, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { personal, web3formsAccessKey } from "@/lib/portfolio-data";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";

const live = Boolean(web3formsAccessKey);
type State = "idle" | "submitting" | "success" | "error";

export function ContactView() {
  const { navigate } = useViewNav();
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!live) return;
    setState("submitting");
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: formData.get("name"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          subject: `Portfolio contact — ${formData.get("name")}`,
          from_name: "Sofia Abidi Portfolio",
          message: formData.get("message"),
        }),
      });
      const data = await response.json();
      if (data.success) {
        setState("success");
      } else {
        setError("The message could not be sent. Please email me directly.");
        setState("error");
      }
    } catch {
      setError("Network error. Please email me directly.");
      setState("error");
    }
  }

  const cards = [
    { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: <Mail />, bg: "bg-brutal-orange" },
    { label: "GitHub", value: "github.com/sofiaabidi", href: personal.github, icon: <Github />, bg: "bg-brutal-yellow" },
    { label: "LinkedIn", value: "in/sofia-abidi", href: personal.linkedin, icon: <Linkedin />, bg: "bg-brutal-coral" },
    { label: "Location", value: personal.location, icon: <MapPin />, bg: "bg-brutal-mint" },
  ];

  return (
    <div className="view-in">
      <section className="px-4 pt-28 pb-12 md:px-8 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-2 font-mono text-xs font-bold uppercase"
          >
            <ArrowLeft size={14} /> Back to Home
          </button>
          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-sm font-bold uppercase text-brutal-orange">
              <Mail size={16} /> {"// get in touch"}
            </span>
            <h1 className="display-serif mt-3 text-4xl font-black sm:text-5xl lg:text-7xl">
              Let&apos;s build something{" "}
              <span className="bg-brutal-yellow text-brutal-orange">interesting</span>{" "}
              together.
            </h1>
            <p className="mt-5 text-lg text-neutral-700">
              Have a project idea, research question, collaboration or opportunity in mind? Feel
              free to reach out.
            </p>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            {state === "success" ? (
              <div className="brutal-card bg-brutal-mint p-6 text-center sm:p-10">
                <CheckCircle2 className="mx-auto" size={56} />
                <h2 className="display-serif mt-4 text-3xl font-black">Message sent!</h2>
                <p className="mt-3">
                  Thanks for reaching out. Your message was submitted through Web3Forms.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="brutal-card space-y-5 p-6 md:p-8">
                <h2 className="display-serif text-3xl font-black">Send a message</h2>
                {!live && (
                  <div className="border-2 border-black bg-brutal-yellow-light p-4 text-sm">
                    <strong>Email form not configured.</strong> Submission is disabled so it cannot
                    pretend to send. Use the direct email button below.
                  </div>
                )}
                {state === "error" && (
                  <div className="flex gap-2 border-2 border-black bg-brutal-coral p-3 text-white">
                    <AlertCircle className="shrink-0" size={18} />
                    <span className="min-w-0 break-words">{error}</span>
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name">
                    <input className="brutal-input" name="name" required />
                  </Field>
                  <Field label="Email">
                    <input className="brutal-input" type="email" name="email" required />
                  </Field>
                </div>
                <Field label="Organization (optional)">
                  <input className="brutal-input" name="organization" />
                </Field>
                <Field label="Message">
                  <textarea className="brutal-input min-h-48" name="message" required />
                </Field>
                {live ? (
                  <button
                    disabled={state === "submitting"}
                    className="brutal-btn bg-brutal-orange disabled:opacity-50"
                  >
                    {state === "submitting" ? "Sending…" : "Send Message"}
                    <Send size={16} />
                  </button>
                ) : (
                  <a
                    href={`mailto:${personal.email}`}
                    className="brutal-btn max-w-full bg-brutal-orange"
                  >
                    <Mail className="shrink-0" size={16} /> Email me directly
                  </a>
                )}
              </form>
            )}
          </div>

          <aside className="min-w-0 space-y-3 lg:col-span-5">
            {cards.map((card) =>
              card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="brutal-card brutal-card-hover flex min-w-0 items-center gap-4 p-4"
                >
                  <span className={`shrink-0 border-2 border-black p-3 ${card.bg}`}>
                    {card.icon}
                  </span>
                  <span className="min-w-0">
                    <small className="font-mono uppercase">{card.label}</small>
                    <strong className="block break-all text-sm">{card.value}</strong>
                  </span>
                </a>
              ) : (
                <div
                  key={card.label}
                  className="brutal-card flex min-w-0 items-center gap-4 p-4"
                >
                  <span className={`shrink-0 border-2 border-black p-3 ${card.bg}`}>
                    {card.icon}
                  </span>
                  <span className="min-w-0">
                    <small className="font-mono uppercase">{card.label}</small>
                    <strong className="block break-words">{card.value}</strong>
                  </span>
                </div>
              ),
            )}
            <a
              href={personal.resumePath}
              download={personal.resumeName}
              className="brutal-card brutal-card-hover flex min-w-0 items-center justify-between gap-3 bg-brutal-orange p-5"
            >
              <span className="min-w-0">
                <strong className="display-serif text-lg">Download Resume</strong>
                <small className="block break-all font-mono uppercase">
                  PDF · {personal.resumeName}
                </small>
              </span>
              <Download className="shrink-0" />
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block font-mono text-xs font-bold uppercase">{label}</span>
      {children}
    </label>
  );
}
