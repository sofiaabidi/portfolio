"use client";

import { Suspense } from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { HomeView } from "@/components/portfolio/home-view";
import { AboutView } from "@/components/portfolio/about-view";
import { ProjectsView } from "@/components/portfolio/projects-view";
import { ProjectDetailView } from "@/components/portfolio/project-detail-view";
import { ExperienceView } from "@/components/portfolio/experience-view";
import { WritingView } from "@/components/portfolio/writing-view";
import { ContactView } from "@/components/portfolio/contact-view";
import { ArticleView } from "@/components/portfolio/article-view";
import { useViewNav } from "@/components/portfolio/use-view-nav";

function ViewRouter() {
  const { currentView, currentProjectId } = useViewNav();

  let content: React.ReactNode;
  switch (currentView) {
    case "home":
      content = <HomeView />;
      break;
    case "about":
      content = <AboutView />;
      break;
    case "projects":
      content = <ProjectsView />;
      break;
    case "project":
      content = <ProjectDetailView projectId={currentProjectId} />;
      break;
    case "experience":
      content = <ExperienceView />;
      break;
    case "writing":
      content = <WritingView />;
      break;
    case "contact":
      content = <ContactView />;
      break;
    case "article":
      content = <ArticleView articleId={currentProjectId} />;
      break;
    default:
      content = <HomeView />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-brutal-paper">
      <Navbar />
      <main className="flex-1">{content}</main>
      <Footer />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-brutal-paper">
          <div className="brutal-card border-2 border-brutal-black bg-white p-6">
            <p className="font-mono text-sm font-bold uppercase tracking-widest">
              Loading…
            </p>
          </div>
        </div>
      }
    >
      <ViewRouter />
    </Suspense>
  );
}
