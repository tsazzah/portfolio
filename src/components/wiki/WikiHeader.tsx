import { Search } from "lucide-react";

export function WikiHeader() {
  return (
    <header className="bg-wiki-pink px-4 py-3 md:px-6 md:py-4">
      <div className="flex w-full items-center gap-4">
        <a href="/" className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-wiki-pink shadow-sm"
            aria-hidden
          >
            A
          </div>
          <div className="hidden sm:block">
            <div className="text-2xl font-bold leading-tight text-white">
              Azapedia
            </div>
            <div className="text-xs italic text-white/80">
              The personal encyclopedia
            </div>
          </div>
        </a>
        <div className="ml-auto flex w-full max-w-md items-center overflow-hidden rounded-full bg-white shadow-sm">
          <input
            type="search"
            placeholder="Search Azapedia"
            className="w-full bg-transparent px-4 py-2 text-sm outline-none"
          />
          <button className="flex h-9 w-11 items-center justify-center text-wiki-muted hover:text-wiki-text">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
