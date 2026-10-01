import { useCallback, useEffect, useRef, useState } from "react";
import { ScaledSlide } from "@/components/deck/ScaledSlide";
import { slides } from "@/components/deck/slides";
import {
  downloadAllPngsZip,
  downloadPdf,
} from "@/components/deck/exportDeck";
import {
  Maximize,
  Grid,
  FileDown,
  Archive,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

export function App() {
  const [current, setCurrent] = useState(0);
  const [grid, setGrid] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  const getEls = () =>
    Array.from(stageRef.current?.querySelectorAll<HTMLElement>("[data-slide]") ?? []);

  const runExport = async (label: string, fn: () => Promise<void>) => {
    setBusy(label);
    try {
      await fn();
    } catch (err) {
      console.error("Export failed", err);
    } finally {
      setBusy(null);
      setMobileMenuOpen(false);
    }
  };

  const go = useCallback(
    (n: number) => setCurrent((c) => Math.min(total - 1, Math.max(0, n))),
    [total],
  );

  useEffect(() => {
    document.title = `${current + 1}/${total} : ${slides[current].title} · The Long Game`;
  }, [current, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(current + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(current - 1);
      } else if (e.key.toLowerCase() === "g") {
        setGrid((g) => !g);
      } else if (e.key === "F5" || e.key.toLowerCase() === "f") {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      } else if (e.key === "Escape") {
        setGrid(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  return (
    <div className="flex h-screen flex-col bg-[#FAF7EE] text-[#0A1128] selection:bg-[#0052FF] selection:text-white">
      {/* ---------------- Navigation Header ---------------- */}
      <header className="print-hide flex shrink-0 items-center justify-between gap-4 border-b-[3.5px] border-[#0A1128] bg-[#FAF7EE] px-6 py-3 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-extrabold tracking-tight text-[#0D5C3A]">
            THE LONG GAME
          </span>
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-[0.16em] bg-[#EAF7ED] border-2 border-[#0A1128] px-3 py-1 text-[#0D5C3A]">
            Independence Edition · Youth Leadership Keynote
          </span>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className={`deck-ui-btn px-3 py-1.5 text-sm font-bold ${
              grid ? "bg-[#0D5C3A] text-white" : ""
            }`}
            onClick={() => setGrid((g) => !g)}
            title="Toggle Slide Grid (G)"
          >
            <Grid className="h-4 w-4" />
            {grid ? "Slide View" : "Grid (G)"}
          </button>
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-bold"
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen?.();
              } else {
                document.exitFullscreen?.();
              }
            }}
            title="Present Fullscreen (F)"
          >
            <Maximize className="h-4 w-4" />
            Present (F)
          </button>
          <span className="mx-1 h-5 w-[2px] bg-[#0A1128]/20" />
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-bold bg-[#0D5C3A] text-white hover:bg-[#08331D]"
            disabled={!!busy}
            onClick={() =>
              runExport("pdf", () =>
                downloadPdf(getEls(), "the-long-game-sheriffdeen-saula.pdf"),
              )
            }
          >
            <FileDown className="h-4 w-4" />
            Export PDF
          </button>
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-bold"
            disabled={!!busy}
            onClick={() =>
              runExport("zip", () =>
                downloadAllPngsZip(
                  getEls(),
                  slides.map((s) => s.title),
                ),
              )
            }
          >
            <Archive className="h-4 w-4" />
            Export ZIP
          </button>
          {busy ? (
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5C3A] animate-pulse ml-1">
              Exporting {busy}…
            </span>
          ) : null}
        </div>

        {/* Mobile Controls */}
        <div className="relative flex md:hidden items-center gap-2">
          {busy ? (
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5C3A] animate-pulse mr-2">
              Exporting…
            </span>
          ) : null}
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-bold bg-[#0D5C3A] text-white"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            <Menu className="h-4 w-4" /> Menu
          </button>

          {mobileMenuOpen ? (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/40"
                onClick={() => setMobileMenuOpen(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-56 border-[3px] border-[#0A1128] bg-white p-2 shadow-[6px_6px_0_0_#0A1128] z-50 flex flex-col gap-1.5">
                <button
                  className="w-full text-left px-3 py-2 text-sm font-bold hover:bg-[#EAF7ED]"
                  onClick={() => {
                    setGrid((g) => !g);
                    setMobileMenuOpen(false);
                  }}
                >
                  {grid ? "Slide View" : "Grid View"}
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-bold hover:bg-[#EAF7ED]"
                  onClick={() => {
                    document.documentElement.requestFullscreen?.();
                    setMobileMenuOpen(false);
                  }}
                >
                  Present Mode
                </button>
                <div className="my-1 border-t border-[#0A1128]/20" />
                <button
                  className="w-full text-left px-3 py-2 text-sm font-semibold hover:bg-[#EAF7ED]"
                  disabled={!!busy}
                  onClick={() =>
                    runExport("pdf", () =>
                      downloadPdf(getEls(), "the-long-game-sheriffdeen-saula.pdf"),
                    )
                  }
                >
                  Export PDF
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-semibold hover:bg-[#EAF7ED]"
                  disabled={!!busy}
                  onClick={() =>
                    runExport("zip", () =>
                      downloadAllPngsZip(
                        getEls(),
                        slides.map((s) => s.title),
                      ),
                    )
                  }
                >
                  Export ZIP
                </button>
              </div>
            </>
          ) : null}
        </div>
      </header>

      {/* ---------------- Main Slide Stage / Grid ---------------- */}
      {grid ? (
        <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-8 bg-[#FAF7EE]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[1800px] mx-auto">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  go(i);
                  setGrid(false);
                }}
                className="group text-left cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none"
              >
                <div
                  className={`aspect-[16/9] w-full border-[3px] border-[#0A1128] bg-white shadow-[5px_5px_0_0_#0A1128] overflow-hidden transition-all ${
                    current === i ? "ring-4 ring-[#0D5C3A]" : ""
                  }`}
                >
                  <ScaledSlide>{s.render({ index: i, total })}</ScaledSlide>
                </div>
                <div className="mt-2 text-sm font-bold text-[#0A1128] flex items-center justify-between">
                  <span className="truncate pr-2">
                    {String(i + 1).padStart(2, "0")} · {s.title}
                  </span>
                  {current === i ? (
                    <span className="text-[10px] uppercase font-extrabold bg-[#0D5C3A] text-white px-2 py-0.5 border border-[#0A1128]">
                      Active
                    </span>
                  ) : null}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col">
          {/* Slide stage */}
          <div className="min-h-0 flex-1 p-2 md:p-3 flex items-center justify-center overflow-hidden">
            <div className="relative aspect-[16/9] w-full max-w-[1920px] max-h-full border-[4px] border-[#0A1128] bg-[#0A1128] shadow-[10px_10px_0_0_#0A1128] overflow-hidden flex items-center justify-center">
              <ScaledSlide>{slides[current].render({ index: current, total })}</ScaledSlide>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="print-hide flex shrink-0 items-center justify-between gap-6 border-t-[3.5px] border-[#0A1128] bg-[#FAF7EE] px-6 py-3 z-20">
            <div className="hidden md:flex items-center gap-2 max-w-[70%] truncate">
              <span className="text-xs font-mono font-bold text-[#0D5C3A] uppercase shrink-0">
                SLIDE {current + 1} OF {total}:
              </span>
              <p className="truncate text-sm text-[#0A1128]/80 font-bold">
                {slides[current].title}
              </p>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <button
                className="deck-ui-btn px-4 py-2 text-sm font-bold"
                onClick={() => go(current - 1)}
                disabled={current === 0}
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-display text-sm font-bold tabular-nums px-2">
                {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                className="deck-ui-btn px-4 py-2 text-sm font-bold"
                onClick={() => go(current + 1)}
                disabled={current === total - 1}
                aria-label="Next Slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Offscreen Full-Resolution Stage (For High-Res Exports) ---------------- */}
      <div
        ref={stageRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 -z-50 opacity-0"
        style={{ width: 1920, height: 1080, overflow: "hidden" }}
      >
        {slides.map((s, i) => (
          <div key={s.id} data-slide style={{ width: 1920, height: 1080 }}>
            {s.render({ index: i, total })}
          </div>
        ))}
      </div>

      {/* ---------------- Print Slide Container (Native Vector Print-to-PDF) ---------------- */}
      <div className="hidden print:block">
        {slides.map((s, i) => (
          <div key={s.id} className="print-slide">
            {s.render({ index: i, total })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
