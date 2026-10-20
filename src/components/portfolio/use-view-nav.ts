"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Lightweight client-side navigation hook that drives view switches via
// URL search params. This gives the user shareable URLs like
// `/?view=projects` or `/?view=project&id=fleet-management-system`
// while staying on a single Next.js route.
export function useViewNav() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentView = searchParams.get("view") || "home";
  const currentProjectId = searchParams.get("id");

  const navigate = useCallback(
    (view: string, id?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (view === "home") {
        params.delete("view");
        params.delete("id");
      } else {
        params.set("view", view);
        if (id) {
          params.set("id", id);
        } else {
          params.delete("id");
        }
      }
      const qs = params.toString();
      router.push(qs ? `/?${qs}` : "/", { scroll: false });
      // Scroll to top on view change
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    },
    [router, searchParams]
  );

  return { currentView, currentProjectId, navigate };
}
