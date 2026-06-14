import type { ReactNode } from "react";
import { WikiHeader } from "./WikiHeader";
import { WikiSidebar } from "./WikiSidebar";


export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen font-wiki-sans text-wiki-text">
      <WikiHeader />
      <div className="flex w-full">
        <WikiSidebar />
        <main className="wiki-prose min-w-0 flex-1 bg-white px-5 py-6 md:px-8 md:py-8">
          <div className="-mx-5 -mt-6 mb-5 bg-wiki-pink-soft px-5 py-6 md:-mx-8 md:-mt-8 md:px-8 md:py-8">
            <h1 className="text-[2rem] font-bold leading-tight md:text-[2.4rem]">
              {title}
            </h1>
            {subtitle ? (
              <div className="mt-1 text-sm italic text-wiki-muted">
                {subtitle}
              </div>
            ) : null}
          </div>
          {children}
          <div className="clear-both" />
        </main>
      </div>
      
    </div>
  );
}
