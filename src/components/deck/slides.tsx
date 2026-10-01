import type { ReactNode } from "react";
import {
  Globe,
  Compass,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  RefreshCw,
  MapPin,
  Award,
  Users,
  Scale,
  Flame,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Target,
  BookOpen,
  Share2,
  TrendingUp,
} from "lucide-react";
import { SlideLayout, Card, Bullet, Badge, Kicker } from "./SlideLayout";

export type SlideDef = {
  id: string;
  title: string;
  notes?: string;
  render: (p: { index: number; total: number }) => ReactNode;
};

export const slides: SlideDef[] = [
  /* ==========================================================================
     SLIDE 1: COVER
     ========================================================================== */
  {
    id: "cover",
    title: "The Long Game: Reinventing Yourself for a Borderless Future",
    notes:
      "WELCOME & OPENING HOOK: Welcome participants to this Nigeria Independence Special keynote. Deliver the opening thesis with conviction: 'A nation whose youth remain in economic dependence lacks true independence.' Tonight is about closing the gap between classroom ambition and borderless reality.",
    render: () => (
      <div className="slide-content bg-[#FAF7EE] text-[#0A1128]">
        <div className="absolute inset-0 grid-paper" />
        <div className="relative flex h-full flex-col justify-between px-[90px] py-[65px]">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="slide-kicker brut-flat border-[3.5px] border-[#0A1128] bg-[#0D5C3A] px-6 py-2 uppercase tracking-widest text-white font-bold shadow-[4px_4px_0_0_#0A1128]">
                NIGERIA INDEPENDENCE SPECIAL · 1ST OCTOBER
              </span>
              <span className="slide-kicker brut-flat border-[3.5px] border-[#0A1128] bg-white px-5 py-2 uppercase tracking-wider text-[#0D5C3A] font-bold shadow-[4px_4px_0_0_#0A1128]">
                ECONOMIC FREEDOM &amp; GLOBAL OPPORTUNITIES
              </span>
            </div>
            <span className="slide-caption font-mono font-bold tracking-wider text-[#0D5C3A] uppercase">
              GROWTH THROUGH LEARNING
            </span>
          </div>

          {/* Main Title Hero */}
          <div className="my-auto max-w-[1700px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#0D5C3A] bg-[#EAF7ED] px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-[#0D5C3A]">
              <Sparkles className="h-4 w-4" /> Keynote Presentation
            </div>
            <h1 className="slide-title-lg text-[#0A1128] leading-[0.98]">
              The Long Game:
              <br />
              <span className="text-[#0D5C3A]">Reinventing Yourself</span> for a Borderless Future
            </h1>
            <div className="mt-8 inline-block brut-green bg-[#0D5C3A] px-10 py-5 text-white">
              <p className="slide-subtitle text-white font-display" style={{ fontSize: 36 }}>
                "A nation whose youth remain in economic dependence lacks true independence."
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <img
                src="/sheriffdeen.png"
                alt="Sheriffdeen Saula"
                className="h-[76px] w-[76px] rounded-full border-[3.5px] border-[#0A1128] object-cover shadow-[4px_4px_0_0_#0A1128]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div>
                <p className="font-display text-3xl font-extrabold tracking-tight text-[#0A1128]">
                  Sheriffdeen Saula
                </p>
                <p className="text-lg font-semibold text-[#0D5C3A] uppercase tracking-wider">
                  Software Engineer · Builder · Strategist
                </p>
              </div>
            </div>
          </div>

          {/* Footer Pills */}
          <div className="flex items-end justify-between border-t-[3.5px] border-[#0A1128] pt-4">
            <div className="flex gap-4">
              {["ECONOMIC FREEDOM", "MY PHILOSOPHY", "THE 2 GATEWAYS", "GLOCAL TO GLOBAL", "REINVENTION"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="slide-badge brut-flat border-[3px] border-[#0A1128] bg-white px-5 py-2 uppercase tracking-widest text-xs font-bold shadow-[3px_3px_0_0_#0A1128]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <span className="slide-caption font-bold text-[#0A1128] opacity-80">
              October 1, 2026 · Independence Special
            </span>
          </div>
        </div>
      </div>
    ),
  },

  /* ==========================================================================
     SLIDE 2: WHY YOUTHS SHOULD CHASE GLOBAL OPPORTUNITIES
     ========================================================================== */
  {
    id: "need-for-global-opportunities",
    title: "Why Youths Should Chase Global Opportunities: A Tale of Two Billionaires",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="01: The Debate & Strategic Imperative">
        <div className="flex h-full flex-col justify-between gap-4">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <h2 className="slide-title" style={{ fontSize: 62 }}>
                Why Youths Should Chase Global Opportunities
              </h2>
              <p className="slide-subtitle mt-1 text-[#0D5C3A] font-bold" style={{ fontSize: 30 }}>
                The Comparison of Two Billionaires: Iyinoluwa Aboyeji x Atedo Peterside
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.instagram.com/p/DbKXWU7omXs/?wa_status_inline=true&wa_logging_event=video_play_open"
                target="_blank"
                rel="noreferrer"
                className="deck-ui-btn px-4 py-2.5 bg-[#FAF7EE] text-[#0A1128] hover:bg-[#EAF7ED] text-sm font-extrabold shadow-[4px_4px_0_0_#0A1128]"
              >
                <ExternalLink className="h-4 w-4 mr-1.5 text-[#0D5C3A]" /> Reel 1: The Debate ↗
              </a>
              <a
                href="https://www.instagram.com/reel/Dd9cshURGiF/?stkn=MW1tYTUybDA4bDNwcw=="
                target="_blank"
                rel="noreferrer"
                className="deck-ui-btn px-4 py-2.5 bg-[#0D5C3A] text-white hover:bg-[#08331D] text-sm font-extrabold shadow-[4px_4px_0_0_#0A1128]"
              >
                <ExternalLink className="h-4 w-4 mr-1.5 text-white" /> Reel 2: Systemic Reality ↗
              </a>
            </div>
          </div>

          {/* Top: The Two Perspectives (Expanded) */}
          <div className="grid grid-cols-12 gap-7 flex-1 items-stretch">
            <Card className="col-span-6 p-7 flex flex-col justify-between" tone="paper">
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20">
                  <span className="font-mono text-sm font-extrabold uppercase tracking-widest text-[#0D5C3A]">
                    01 · The Builder's Critique
                  </span>
                  <span className="font-display font-extrabold text-base text-[#0A1128]">
                    Iyinoluwa Aboyeji (Andela / Unicorns)
                  </span>
                </div>
                <p className="font-display text-3xl font-extrabold text-[#0A1128] mt-4 leading-snug">
                  "Youths have become influencers and performing artists—not builders."
                </p>
                <p className="text-xl text-[#0A1128]/85 mt-3 leading-relaxed font-semibold">
                  Subjecting ourselves to mediocrity, chasing digital validation, and mistakenly believing there is no longer value in deep craft and excellence.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-[#0A1128]/20 flex items-center justify-between">
                <span className="text-sm font-mono font-bold text-red-600 uppercase">
                  Diagnosis: The trap of performative noise over tangible creation.
                </span>
                <a
                  href="https://www.instagram.com/p/DbKXWU7omXs/?wa_status_inline=true&wa_logging_event=video_play_open"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-black text-red-600 hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  Watch Reel 1 ↗
                </a>
              </div>
            </Card>

            <Card className="col-span-6 p-7 flex flex-col justify-between" tone="paper">
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20">
                  <span className="font-mono text-sm font-extrabold uppercase tracking-widest text-[#0D5C3A]">
                    02 · The Systemic Reality
                  </span>
                  <span className="font-display font-extrabold text-base text-[#0A1128]">
                    Atedo Peterside (Stanbic IBTC)
                  </span>
                </div>
                <p className="font-display text-3xl font-extrabold text-[#0A1128] mt-4 leading-snug">
                  "The current governance system actively stifles youth growth."
                </p>
                <p className="text-xl text-[#0A1128]/85 mt-3 leading-relaxed font-semibold">
                  The older generation who control governance and institutions have closed the ladder, failing to provide the enabling environment they enjoyed decades ago.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-[#0A1128]/20 flex items-center justify-between">
                <span className="text-sm font-mono font-bold text-[#0D5C3A] uppercase">
                  Diagnosis: The structural ceiling that forces us to look beyond borders.
                </span>
                <a
                  href="https://www.instagram.com/reel/Dd9cshURGiF/?stkn=MW1tYTUybDA4bDNwcw=="
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-black text-[#0D5C3A] hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  Watch Reel 2 ↗
                </a>
              </div>
            </Card>
          </div>

          {/* Bottom: Avenues for Corrective Action (WIDENED & HIGH LEGIBILITY) */}
          <div className="p-7 bg-white border-[4px] border-[#0A1128] shadow-[10px_10px_0_0_#0D5C3A] flex flex-col justify-between shrink-0">
            <div className="flex items-center justify-between pb-3 mb-4 border-b-[3px] border-[#0A1128]/20">
              <span className="font-mono text-sm font-extrabold uppercase tracking-wider text-[#0D5C3A]">
                The Critique Is Not Condemnatory — It Is A Blueprint For Systemic Transition
              </span>
              <span className="text-xs font-mono font-extrabold text-[#0A1128]/80 uppercase">
                3 Imperative Levers For Our Generation
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="p-5 bg-[#FAF7EE] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#0D5C3A] text-white font-mono font-extrabold text-xs">
                    01
                  </span>
                  <span className="font-mono text-xs font-black text-[#0D5C3A] tracking-wider uppercase">
                    EXPRESSION → INTROSPECTION
                  </span>
                </div>
                <p className="text-base font-bold text-[#0A1128] leading-snug mt-1">
                  Moving past superficial anger and complaining on social media toward deep introspection, structural planning, and securing local systems.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7EE] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#0D5C3A] text-white font-mono font-extrabold text-xs">
                    02
                  </span>
                  <span className="font-mono text-xs font-black text-[#0D5C3A] tracking-wider uppercase">
                    COALITION OF THE WILLING
                  </span>
                </div>
                <p className="text-base font-bold text-[#0A1128] leading-snug mt-1">
                  Abandoning performative rooms and youth confabs in favor of working directly with trusted peers to build hard infrastructure and economic value.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7EE] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#0D5C3A] text-white font-mono font-extrabold text-xs">
                    03
                  </span>
                  <span className="font-mono text-xs font-black text-[#0D5C3A] tracking-wider uppercase">
                    TAKING OWNERSHIP
                  </span>
                </div>
                <p className="text-base font-bold text-[#0A1128] leading-snug mt-1">
                  Accepting that older leadership will pass down broken systems—making it our imperative duty to construct functional institutions and long-term assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 3: PERSONAL PHILOSOPHY OF CHANGE & INTRODUCTION
     ========================================================================== */
  {
    id: "philosophy-of-change",
    title: "Personal Introduction: My Philosophy of Change: From Gutters to the Green Chamber",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="02: Relatability & Theory of Change">
        <div className="flex h-full flex-col justify-between gap-4">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <h2 className="slide-title" style={{ fontSize: 56 }}>
                My Philosophy of Change: <span className="text-[#0D5C3A]">Soil on Your Shoes</span>
              </h2>
              <p className="slide-subtitle mt-1 text-[#0A1128]/85 font-bold" style={{ fontSize: 24 }}>
                From Clearing Drainage Gutters in Lagos to the Green Chamber &amp; Ministry of Foreign Affairs
              </p>
            </div>
            <span className="slide-kicker brut-flat border-[3px] border-[#0A1128] bg-white px-5 py-2 uppercase tracking-widest text-[#0D5C3A] font-black shadow-[4px_4px_0_0_#0A1128] shrink-0">
              Sheriffdeen Saula
            </span>
          </div>

          {/* Credential Proof-of-Work Badges */}
          <div className="flex items-center gap-3 overflow-hidden shrink-0">
            <span className="px-3.5 py-1.5 bg-[#FAF7EE] border-2 border-[#0A1128] font-mono text-xs font-black uppercase text-[#0A1128] shadow-[2px_2px_0_0_#0A1128]">
              🏆 Gold Prize: 2024 ENYATA Buildathon
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7EE] border-2 border-[#0A1128] font-mono text-xs font-black uppercase text-[#0A1128] shadow-[2px_2px_0_0_#0A1128]">
              ⚙️ Co-Founder &amp; Lead Engineer: Dattego
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7EE] border-2 border-[#0A1128] font-mono text-xs font-black uppercase text-[#0A1128] shadow-[2px_2px_0_0_#0A1128]">
              🎖️ 2026 Nigerian Volunteers Award (NVA)
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7EE] border-2 border-[#0A1128] font-mono text-xs font-black uppercase text-[#0A1128] shadow-[2px_2px_0_0_#0A1128]">
              🏛️ 2026 Brands Chair: JCI Ikeja
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7EE] border-2 border-[#0A1128] font-mono text-xs font-black uppercase text-[#0A1128] shadow-[2px_2px_0_0_#0A1128]">
              🌟 2025 TOYP Nominee
            </span>
          </div>

          {/* Main Content: Left Photos, Right Theory */}
          <div className="grid grid-cols-12 gap-7 flex-1 min-h-0">
            {/* Left Column: Visual Proof-of-Work (The Two Realities) */}
            <div className="col-span-6 grid grid-rows-2 gap-4 h-full min-h-0">
              {/* Photo 1: Grassroots */}
              <div className="p-3.5 bg-white border-[3.5px] border-[#0A1128] shadow-[5px_5px_0_0_#0A1128] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between mb-1.5 shrink-0">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5">
                    Phase 1: Soil on the Shoes
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0A1128]/70">Lagos Streets &amp; Communities</span>
                </div>
                <div className="flex-1 min-h-0 w-full border-2 border-[#0A1128] overflow-hidden bg-[#FAF7EE] flex items-center justify-center p-1">
                  <img
                    src="/grassroots-volunteering.jpg"
                    alt="Sheriffdeen Saula grassroots volunteering"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-xs font-bold text-[#0A1128] mt-1.5 leading-snug shrink-0">
                  Clearing gutters with shovels, packing waste at EidFest Lagos, and earning credibility from zero through physical service.
                </p>
              </div>

              {/* Photo 2: Policy Chambers */}
              <div className="p-3.5 bg-[#EAF7ED] border-[3.5px] border-[#0A1128] shadow-[5px_5px_0_0_#0D5C3A] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between mb-1.5 shrink-0">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-[#0D5C3A] bg-white border border-[#0D5C3A] px-2 py-0.5">
                    Phase 2: The Policy Chambers
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0A1128]/70">Diplomatic Conference 2.0</span>
                </div>
                <div className="flex-1 min-h-0 w-full grid grid-cols-2 gap-2 border-2 border-[#0A1128] overflow-hidden bg-white p-1">
                  <div className="h-full w-full flex items-center justify-center overflow-hidden bg-[#FAF7EE] border border-[#0A1128]/20">
                    <img
                      src="/diplomatic-conf-mfa.png"
                      alt="Ministry of Foreign Affairs & Green Chamber"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-full w-full flex items-center justify-center overflow-hidden bg-[#FAF7EE] border border-[#0A1128]/20">
                    <img
                      src="/diplomatic-induction.jpg"
                      alt="Fellow African Transformer Institute induction"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs font-bold text-[#0A1128] mt-1.5 leading-snug shrink-0">
                  Inducted as Fellow, African Transformer Institute: Ministry of Foreign Affairs and Green Chamber (House of Reps).
                </p>
              </div>
            </div>

            {/* Right Column: The Core Philosophy & 80% Mantra */}
            <div className="col-span-6 flex flex-col justify-between gap-3.5 h-full min-h-0">
              {/* The 80% Callout Banner */}
              <div className="p-5 bg-[#0D5C3A] text-white border-[3.5px] border-[#0A1128] shadow-[6px_6px_0_0_#0A1128] shrink-0">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-[#FAF7EE] bg-white/20 border border-white/40 px-2.5 py-0.5 inline-block mb-1.5">
                  Core Conviction
                </span>
                <h3 className="font-display text-3xl font-black leading-tight text-white">
                  "80% of the Youth Population Must Become POLICYMAKERS!"
                </h3>
                <p className="text-base text-white/90 font-semibold mt-1.5 leading-snug">
                  Not by waiting for an appointment or a political godfather, but by taking radical ownership of local systems through undeniable proof-of-work.
                </p>
              </div>

              {/* 3 Relatable Action Axioms */}
              <div className="grid grid-rows-3 gap-2.5 flex-1 min-h-0">
                <div className="p-3.5 bg-white border-[2.5px] border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex items-start gap-3 overflow-hidden">
                  <span className="px-2 py-0.5 bg-[#0D5C3A] text-white font-mono font-black text-xs shrink-0 mt-0.5">
                    01
                  </span>
                  <div>
                    <h4 className="font-display text-base font-black text-[#0A1128] leading-tight">
                      Policy Begins at the Gutter Level
                    </h4>
                    <p className="text-xs font-semibold text-[#0A1128]/85 mt-0.5 leading-normal">
                      If you cannot organize 10 people on your campus or clean your immediate drainage, you have no business drafting policy for millions. Groundwork builds authority.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-white border-[2.5px] border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex items-start gap-3 overflow-hidden">
                  <span className="px-2 py-0.5 bg-[#0D5C3A] text-white font-mono font-black text-xs shrink-0 mt-0.5">
                    02
                  </span>
                  <div>
                    <h4 className="font-display text-base font-black text-[#0A1128] leading-tight">
                      Proof-of-Work Is Your Borderless Visa
                    </h4>
                    <p className="text-xs font-semibold text-[#0A1128]/85 mt-0.5 leading-normal">
                      I didn't enter the Ministry of Foreign Affairs because of connections. I entered because tangible community evidence makes you impossible to ignore.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-white border-[2.5px] border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex items-start gap-3 overflow-hidden">
                  <span className="px-2 py-0.5 bg-[#0D5C3A] text-white font-mono font-black text-xs shrink-0 mt-0.5">
                    03
                  </span>
                  <div>
                    <h4 className="font-display text-base font-black text-[#0A1128] leading-tight">
                      Global Reach Is Leverage, Not an Escape
                    </h4>
                    <p className="text-xs font-semibold text-[#0A1128]/85 mt-0.5 leading-normal">
                      We seek international networks, technology, and capital not to abandon where we come from, but to import the leverage required to rebuild our systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 4: THE MEANS TO ACCESS - THE 2 DIVISIONS
     ========================================================================== */
  {
    id: "the-two-divisions",
    title: "The Means to Access: The 2 Divisions of Global Opportunity",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="03: Access Vehicles">
        <div className="flex h-full flex-col justify-between gap-4">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <h2 className="slide-title" style={{ fontSize: 58 }}>
                The Two Gateways: <span className="text-[#0D5C3A]">Skill/Academic vs. Social Impact</span>
              </h2>
              <p className="slide-subtitle mt-1 text-[#0A1128]/85 font-bold" style={{ fontSize: 24 }}>
                Every global opportunity enters through one of these two doors, or their intersection.
              </p>
            </div>
            <span className="slide-kicker brut-flat border-[3px] border-[#0A1128] bg-[#0D5C3A] px-5 py-2 uppercase tracking-widest text-white font-black shadow-[4px_4px_0_0_#0A1128] shrink-0">
              Access Framework
            </span>
          </div>

          {/* Side-by-Side: The Two Divisions */}
          <div className="grid grid-cols-12 gap-7 flex-1 items-stretch min-h-0">
            {/* Division 01: Skill & Academic Route */}
            <Card className="col-span-6 p-7 flex flex-col justify-between h-full" tone="paper">
              <div className="flex-1 flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20 shrink-0">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-white bg-[#0D5C3A] px-3.5 py-1">
                    DIVISION 01
                  </span>
                  <GraduationCap className="h-7 w-7 text-[#0D5C3A]" />
                </div>

                <div>
                  <h3 className="font-display text-3xl font-extrabold text-[#0A1128]">
                    The Skill &amp; Academic Route
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#0D5C3A] uppercase tracking-wider mt-0.5">
                    CURRENCY: TECHNICAL MASTERY &amp; INTELLECTUAL RIGOR
                  </p>
                </div>

                {/* Primary Vehicles */}
                <div className="p-4 bg-[#FAF7EE] border-2 border-[#0A1128]">
                  <p className="font-bold text-base text-[#0A1128]">Primary Vehicles &amp; Local Access Points:</p>
                  <p className="text-sm text-[#0A1128]/90 font-medium mt-1 leading-relaxed">
                    Software engineering, data science, international scholarships (Chevening, Erasmus Mundus), plus proven Nigerian tech pipelines: <strong>3MTT Nigeria (NITDA)</strong>, <strong>Ingressive For Good (I4G)</strong>, and <strong>Tony Elumelu Foundation ($5k Seed)</strong>.
                  </p>
                </div>

                {/* How You Qualify */}
                <div className="p-4 bg-[#FAF7EE] border-2 border-[#0A1128]">
                  <p className="font-bold text-base text-[#0A1128]">How You Qualify:</p>
                  <p className="text-sm text-[#0A1128]/90 font-medium mt-1 leading-relaxed">
                    GitHub repositories, live deployed apps, publications, academic distinction, algorithmic proficiency, verifiable domain expertise.
                  </p>
                </div>

                {/* Supporting Proof: My Experience */}
                <div className="p-3.5 bg-white border-2 border-[#0D5C3A] shadow-[3px_3px_0_0_#0D5C3A]">
                  <p className="font-mono text-xs font-black uppercase text-[#0D5C3A]">
                    Supporting Evidence (My Experience):
                  </p>
                  <p className="text-xs font-bold text-[#0A1128] mt-1 leading-snug">
                    Co-Founder &amp; Lead Engineer at Dattego · Gold Prize: 2024 ENYATA National Buildathon · ProduceAfrica Code Champion.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-[#0A1128]/20 shrink-0">
                <span className="text-xs font-mono font-black text-[#0D5C3A] uppercase">
                  FOCUS: SOLVE HARD PROBLEMS WITH UNDENIABLE TECHNICAL COMPETENCE.
                </span>
              </div>
            </Card>

            {/* Division 02: Social Impact Route */}
            <Card className="col-span-6 p-7 flex flex-col justify-between h-full" tone="soft">
              <div className="flex-1 flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20 shrink-0">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-white bg-[#0A1128] px-3.5 py-1">
                    DIVISION 02
                  </span>
                  <HeartHandshake className="h-7 w-7 text-[#0D5C3A]" />
                </div>

                <div>
                  <h3 className="font-display text-3xl font-extrabold text-[#0D5C3A]">
                    The Social Impact Route
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#0A1128] uppercase tracking-wider mt-0.5">
                    CURRENCY: COMMUNITY MOBILIZATION &amp; MEASURABLE CHANGE
                  </p>
                </div>

                {/* Primary Vehicles */}
                <div className="p-4 bg-white border-2 border-[#0A1128]">
                  <p className="font-bold text-base text-[#0A1128]">Primary Vehicles &amp; Policy Fellowships:</p>
                  <p className="text-sm text-[#0A1128]/90 font-medium mt-1 leading-relaxed">
                    Campus initiatives (Cowrywise Ambassadors), UN SDGs, plus top Nigerian policy &amp; governance platforms: <strong>PLAC National Assembly Internship</strong>, <strong>YIAGA Africa</strong>, <strong>NESG Policy Forum</strong>, <strong>The Platform YPB</strong>, and <strong>JCI Nigeria</strong>.
                  </p>
                </div>

                {/* How You Qualify */}
                <div className="p-4 bg-white border-2 border-[#0A1128]">
                  <p className="font-bold text-base text-[#0A1128]">How You Qualify:</p>
                  <p className="text-sm text-[#0A1128]/90 font-medium mt-1 leading-relaxed">
                    Documented beneficiary impact, campaigns led, communities engaged, policy papers, advocacy data gathered, volunteer leadership.
                  </p>
                </div>

                {/* Supporting Proof: My Experience */}
                <div className="p-3.5 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128]">
                  <p className="font-mono text-xs font-black uppercase text-[#0A1128]">
                    Supporting Evidence (My Experience):
                  </p>
                  <p className="text-xs font-bold text-[#0A1128] mt-1 leading-snug">
                    2026 Brands Chair at JCI Ikeja · 2026 Nigerian Volunteers Award (NVA) · 2025 TOYP Nominee · Fellow, African Transformer Institute.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-[#0A1128]/20 shrink-0">
                <span className="text-xs font-mono font-black text-[#0A1128] uppercase">
                  FOCUS: SOLVE HUMAN PROBLEMS WITH EMPATHY, MOBILIZATION &amp; EVIDENCE.
                </span>
              </div>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 5: PERSONAL BRANDING DEMYSTIFIED
     ========================================================================== */
  {
    id: "personal-branding-demystified",
    title: "Personal Branding: What It Actually Means",
    notes:
      "DISPEL THE MYTH: Ask the audience: 'What do you think of when you hear Personal Brand?' Many students think it means posting motivational quotes or dancing on video. Clarify: Your personal brand is your REPUTATION AT SCALE. It is: Clarity of Value + Consistency of Execution + Public Evidence. If someone searches your name right now on Google, what appears? Confusion, silence, or clear proof of competence?",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="04: Personal Branding">
        <div>
          <h2 className="slide-title">
            Personal Branding:
            <span className="text-[#0D5C3A] ml-3">What It Actually Means</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            It is not hype, noise, or social media fame. It is simply what people trust you to deliver.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-5 p-8 flex flex-col justify-between" tone="paper">
            <div>
              <Kicker tone="white">What It Is NOT</Kicker>
              <ul className="mt-6 space-y-4">
                <Bullet tone="dark">
                  <strong>Not Social Media Numbers:</strong> Having thousands of followers or likes doesn't mean anyone trusts your skills or will hire you.
                </Bullet>
                <Bullet tone="dark">
                  <strong>Not Fancy Titles:</strong> Calling yourself a "CEO", "Strategist", or "Visionary" before you have solved real problems for anyone.
                </Bullet>
                <Bullet tone="dark">
                  <strong>Not Reposting Motivation:</strong> Copying and pasting quotes without sharing your own experiences, lessons, or honest work.
                </Bullet>
              </ul>
            </div>
            <div className="bg-[#FAF7EE] border-2 border-[#0A1128] p-4 brut-sm">
              <p className="font-mono text-sm font-bold text-[#0A1128]">
                "Noise and hype fade quickly. Real work speaks for you anywhere in the world."
              </p>
            </div>
          </Card>

          <Card className="col-span-7 p-8 flex flex-col justify-between" tone="blue">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-white bg-white text-[#0D5C3A] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_0_#000]">
                  The 3 Simple Essentials
                </span>
                <Sparkles className="h-8 w-8 text-white" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-white text-[#0A1128] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-xl font-extrabold text-[#0D5C3A]">
                    1. What Problem Do You Solve? (Clarity)
                  </h4>
                  <p className="text-sm mt-1 text-[#0A1128]/90 font-medium">
                    Can a friend, recruiter, or collaborator explain what you do in one simple sentence without getting confused?
                  </p>
                </div>

                <div className="p-4 bg-white text-[#0A1128] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-xl font-extrabold text-[#0D5C3A]">
                    2. Show Real Evidence (Proof of Work)
                  </h4>
                  <p className="text-sm mt-1 text-[#0A1128]/90 font-medium">
                    Don't just claim skills. Show real examples: projects completed, events organized, articles written, or campus initiatives led.
                  </p>
                </div>

                <div className="p-4 bg-white text-[#0A1128] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-xl font-extrabold text-[#0D5C3A]">
                    3. Can People Depend On You? (Reliability)
                  </h4>
                  <p className="text-sm mt-1 text-[#0A1128]/90 font-medium">
                    Do you meet deadlines? Do you communicate honestly? When people work with you, do they trust you to get it done?
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/30 pt-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/90">
                Personal Brand = What people say about your work ethic and character when you leave the room.
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 6: SELF-INVESTMENT ENGINE
     ========================================================================== */
  {
    id: "self-investment-engine",
    title: "Self-Investment: Learning, Consistency, and Learning Again",
    notes:
      "TACTICAL ADVICE: Talk about the half-life of skills. Frameworks come and go (React, Next.js, AI wrappers, tools). If you stop learning once you finish school or land a job, you will become obsolete in 24 months. Introduce the 'Re-skilling Loop': Learn -> Ship -> Unlearn -> Re-learn. Emphasize consistency over intensity: 1 hour of focused building every single day beats a 15-hour cram session once a month.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="05: Continuous Reinvention">
        <div>
          <h2 className="slide-title">
            The Self-Investment Engine:
            <span className="text-[#0D5C3A] ml-3">The Compounding Flywheel</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            In a fast-moving borderless economy, the only sustainable advantage is how fast you learn and apply new things.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-4 p-7 flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-[#EAF7ED] border-2 border-[#0A1128]">
                    <BookOpen className="h-6 w-6 text-[#0D5C3A]" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#0A1128]">
                    01. Active Practice
                  </h3>
                </div>
                <p className="slide-body mt-3 text-[#0A1128]/85 text-base">
                  Watching endless free videos without doing anything gives a false feeling of progress. Apply what you learn immediately by solving real problems.
                </p>
              </div>

              {/* Action: Pay for Courses */}
              <div className="p-3.5 bg-white border-2 border-[#0D5C3A] shadow-[3px_3px_0_0_#0D5C3A]">
                <span className="font-mono text-xs font-black uppercase text-[#0D5C3A] block mb-1">
                  Invest in Yourself · Pay for Courses:
                </span>
                <p className="text-xs font-bold text-[#0A1128] leading-snug">
                  Put real skin in the game. Paying for credible courses, books, and certifications forces discipline and unlocks curated, advanced knowledge.
                </p>
              </div>

              <div className="bg-[#FAF7EE] border-l-4 border-[#0D5C3A] p-3 text-xs font-bold text-[#0A1128]">
                The 2x Rule: For every 1 hour you spend learning, spend 2 hours building something real.
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-bold text-[#0D5C3A] uppercase">
                Stage 1: Turn Knowledge Into Real Experience
              </span>
            </div>
          </Card>

          <Card className="col-span-4 p-7 flex flex-col justify-between" tone="soft">
            <div className="flex-1 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-[#0D5C3A] border-2 border-[#0A1128] text-white">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#0D5C3A]">
                    02. Daily Consistency
                  </h3>
                </div>
                <p className="slide-body mt-3 text-[#0A1128]/85 text-base">
                  Progress doesn't come from working 15 hours once a month and burning out. It comes from quiet, daily discipline when nobody is clapping.
                </p>
              </div>

              {/* Action: Protect Daily Time */}
              <div className="p-3.5 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128]">
                <span className="font-mono text-xs font-black uppercase text-[#0A1128] block mb-1">
                  Invest in Yourself · Daily Time Discipline:
                </span>
                <p className="text-xs font-bold text-[#0A1128] leading-snug">
                  Your focused attention is capital. Committing 1 to 2 uninterrupted hours every single day to your craft builds unstoppable compound momentum.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#0A1128] p-3 text-xs font-bold text-[#0A1128]">
                The 1% Rule: Getting 1% better every day makes you 37 times better by the end of the year.
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-bold text-[#0A1128] uppercase">
                Stage 2: Daily Consistency Always Wins
              </span>
            </div>
          </Card>

          <Card className="col-span-4 p-7 flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-[#FAF7EE] border-2 border-[#0A1128]">
                    <RefreshCw className="h-6 w-6 text-[#0D5C3A]" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#0A1128]">
                    03. Perpetual Evolution
                  </h3>
                </div>
                <p className="slide-body mt-3 text-[#0A1128]/85 text-base">
                  Tools, job roles, and methods change constantly. What worked in year one won't be enough when you graduate. Always stay adaptable.
                </p>
              </div>

              {/* Action: Apply for Fellowships */}
              <div className="p-3.5 bg-white border-2 border-[#0D5C3A] shadow-[3px_3px_0_0_#0D5C3A]">
                <span className="font-mono text-xs font-black uppercase text-[#0D5C3A] block mb-1">
                  Invest in Yourself · Apply for Fellowships:
                </span>
                <p className="text-xs font-bold text-[#0A1128] leading-snug">
                  Never wait until you feel "100% ready". Apply for fellowships, bootcamps, and global programs. The application process itself refines your vision.
                </p>
              </div>

              <div className="bg-[#FAF7EE] border-l-4 border-[#0D5C3A] p-3 text-xs font-bold text-[#0A1128]">
                Lifelong Curiosity: The best performers stay willing to be beginners whenever the world changes.
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-bold text-[#0D5C3A] uppercase">
                Stage 3: Step Out &amp; Keep Reinventing Yourself
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 7: GLOCAL TO GLOBAL: THE UN AMBITION FALLACY
     ========================================================================== */
  {
    id: "glocal-to-global",
    title: "Going GLOCAL to GLOBAL: The UN Ambition Without the Groundwork",
    notes:
      "A MAJOR PUNCHLINE OF THE NIGHT: Deliver this with candor and tough love. Too many Nigerian youths want to speak at the United Nations General Assembly, hold international fellowship titles, or become global NGO directors—yet they haven't volunteered at their local LGA, haven't solved a problem on their campus, or haven't published a single case study of grassroots work. Global institutions are looking for operatives with SOIL ON THEIR SHOES. If you can't organize 20 students in your university department, how do you expect to lead a global coalition?",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="06: The Groundwork Imperative">
        <div>
          <h2 className="slide-title">
            Going GLOCAL to GLOBAL:
            <span className="text-[#0D5C3A] ml-3">The UN Ambition Trap</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Everyone wants to address the United Nations, but nobody wants to fix the gutter on their street.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="deep">
            <div>
              <div className="flex items-center gap-3">
                <span className="brut-flat border border-white/30 bg-red-500/20 text-red-200 px-3 py-1 font-mono text-xs uppercase font-bold">
                  The Fallacy
                </span>
              </div>
              <h3 className="font-display text-3xl font-extrabold text-white mt-4">
                The "Abstract Globalist" Trap
              </h3>
              <p className="text-white/80 mt-3 text-lg leading-relaxed">
                Applying to high-profile international programs with buzzwords: *"Passionate youth leader fighting climate change and poverty globally."*
              </p>

              <div className="mt-6 space-y-4">
                <div className="bg-white/10 border border-white/30 p-4.5 shadow-[2px_2px_0_0_rgba(255,255,255,0.2)]">
                  <p className="font-bold text-white text-base">The Fatal Flaw:</p>
                  <p className="text-sm text-white/85 mt-1 leading-relaxed">
                    Zero empirical proof. No localized community impact data. No track record of dealing with real-world administrative or logistical friction.
                  </p>
                </div>
                <div className="bg-white/10 border border-white/30 p-4.5 shadow-[2px_2px_0_0_rgba(255,255,255,0.2)]">
                  <p className="font-bold text-white text-base">What Selectors See:</p>
                  <p className="text-sm text-white/85 mt-1 leading-relaxed">
                    An application looking for a trophy, not a problem-solver equipped with grit and evidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-3">
              <span className="text-xs font-mono text-red-300 font-bold uppercase">
                Diagnosis: Ambition without local grounding is just daydreams.
              </span>
            </div>
          </Card>

          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="card">
            <div>
              <div className="flex items-center gap-3">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0D5C3A] text-white px-3 py-1 font-mono text-xs uppercase font-bold">
                  The Glocal Playbook
                </span>
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#0D5C3A] mt-4">
                Start in the Dirt, Scale to the World
              </h3>
              <p className="text-[#0A1128]/85 mt-3 text-lg leading-relaxed">
                Global selectors and international firms don't want armchair theorists. They look for operators with <strong>mud on their boots</strong>.
              </p>

              <ul className="mt-6 space-y-4">
                <Bullet>
                  <strong className="text-[#0D5C3A]">Fix Campus Friction:</strong> Organize a peer tutoring circle on your campus, build a simple timetable bot, or lead a financial literacy drive for your community.
                </Bullet>
                <Bullet>
                  <strong className="text-[#0D5C3A]">Document the Metrics:</strong> Don't just say you helped; document that you mobilized 140 students, reduced dropout risk, or processed 500 records.
                </Bullet>
                <Bullet>
                  <strong className="text-[#0D5C3A]">Local Truth Is Globally Unique:</strong> Your authentic experience navigating Nigerian constraints is your distinct global competitive advantage!
                </Bullet>
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0D5C3A] uppercase">
                "Prove it in Lagos, Yaba, or Abuja first. Geneva will listen."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 8: VOLUNTEERING INTENTIONALLY - BUILDING THE IMPACT CV
     ========================================================================== */
  {
    id: "volunteering-intentionally",
    title: "Volunteering Intentionally: Building the Impact CV",
    notes:
      "STRATEGY FOR CAMPUS AMBASSADORS: Address the Cowrywise Ambassadors directly. Being a campus ambassador or community volunteer is NOT a passive line on a CV. It is your live sandbox. Teach them the 'Impact CV Formula': Action + Context + Quantifiable Metric. Instead of writing 'I was a Cowrywise campus ambassador', write: 'Spearheaded financial inclusion drives across 3 faculties, onboarding 450+ students to disciplined savings and hosting 4 virtual masterclasses.'",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="07: The Impact CV">
        <div>
          <h2 className="slide-title">
            Volunteering Intentionally:
            <span className="text-[#0D5C3A] ml-3">Building the Impact CV</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Volunteering is not free labor; it is strategic apprenticeship and high-trust equity building.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-5 p-8 flex flex-col justify-between" tone="paper">
            <div>
              <Kicker tone="paper">The Passive Approach (Weak)</Kicker>
              <div className="mt-6 p-4 bg-white border-2 border-red-500 shadow-[3px_3px_0_0_#DC2626]">
                <p className="font-mono text-sm text-red-600 font-bold uppercase">Resume Line Item:</p>
                <p className="italic text-base text-[#0A1128] mt-2">
                  "Member / Ambassador, Student Community Chapter (2025 – 2026). Attended meetings, helped with events, and posted on WhatsApp groups."
                </p>
              </div>
              <p className="text-sm text-[#0A1128]/70 mt-4 leading-relaxed font-semibold">
                Why this fails: Tells the reviewer nothing about your initiative, problem-solving ability, or tangible contribution.
              </p>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-red-600 uppercase">Outcome: Blends into the pile</span>
            </div>
          </Card>

          <Card className="col-span-7 p-8 flex flex-col justify-between" tone="soft">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0D5C3A] text-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider">
                  The Intentional Impact CV (Undeniable)
                </span>
                <Award className="h-7 w-7 text-[#0D5C3A]" />
              </div>

              <div className="mt-6 p-5 bg-white border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <p className="font-mono text-sm text-[#0D5C3A] font-bold uppercase">The Optimized Impact Bullet:</p>
                <p className="text-base text-[#0A1128] font-semibold mt-2 leading-relaxed">
                  "Spearheaded a 4-day virtual career bootcamp for 350+ university students across 12 study centers, curating 6 industry speakers, coordinating logistics on Google Meet, and boosting financial literacy registrations by 85%."
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3 bg-white border-2 border-[#0A1128] shadow-[2px_2px_0_0_#0A1128] text-center">
                  <p className="font-mono font-bold text-xs uppercase text-[#0D5C3A]">Leadership</p>
                  <p className="text-sm font-bold text-[#0A1128] mt-1">Initiative &amp; Ownership</p>
                </div>
                <div className="p-3 bg-white border-2 border-[#0A1128] shadow-[2px_2px_0_0_#0A1128] text-center">
                  <p className="font-mono font-bold text-xs uppercase text-[#0D5C3A]">Metrics</p>
                  <p className="text-sm font-bold text-[#0A1128] mt-1">Quantifiable Scale</p>
                </div>
                <div className="p-3 bg-white border-2 border-[#0A1128] shadow-[2px_2px_0_0_#0A1128] text-center">
                  <p className="font-mono font-bold text-xs uppercase text-[#0D5C3A]">Artifact</p>
                  <p className="text-sm font-bold text-[#0A1128] mt-1">Documented Output</p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0D5C3A] uppercase">
                "Treat volunteer assignments as high-stakes professional auditions."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 9: NETWORKING - CREATING GRAVITATIONAL PULL
     ========================================================================== */
  {
    id: "networking-gravitational-pull",
    title: "Networking: Shifting from Begging to Creating Gravitational Pull",
    notes:
      "TACTICAL NETWORKING: Most student networking is awkward: cold DMs saying 'Hello sir, kindly mentor me' or 'Any job for me?'. Explain the Golden Rule of Networking: People do not respond to need; they respond to VALUE and CLARITY. Teach them how to reach out effectively: 1. Research the person deeply. 2. Highlight a specific project they built. 3. Offer a small improvement, a typo fix, or a smart summary. 4. Ask a concise question that takes 60 seconds to answer.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="08: High-Leverage Networking">
        <div>
          <h2 className="slide-title">
            Networking:
            <span className="text-[#0D5C3A] ml-3">Gravitational Pull vs. Begging</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Opportunities do not flow to people who need them; they flow to people who demonstrate value.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-5 p-8 flex flex-col justify-between" tone="paper">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-red-100 border-2 border-red-500 text-red-600 font-black text-xs font-mono">
                    AVOID
                  </span>
                  <h4 className="font-display text-2xl font-black text-[#0A1128]">
                    The "Entitlement" Cold DM
                  </h4>
                </div>
                <div className="mt-5 p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] font-mono text-sm leading-relaxed text-[#0A1128]">
                  "Hello Sir/Ma, I just graduated and I am looking for a global remote job or mentor. Please connect me or help my career. God bless you."
                </div>
                <ul className="mt-5 space-y-3 text-sm font-semibold text-[#0A1128]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Puts 100% of the cognitive burden on the recipient.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Gives zero proof or reason why anyone should invest their time in you.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Almost guaranteed to be left on "Read".
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-4 shrink-0">
              <span className="text-xs font-mono font-black text-red-600 uppercase">Result: 0% Response Rate</span>
            </div>
          </Card>

          <Card className="col-span-7 p-8 flex flex-col justify-between" tone="soft">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b-2 border-[#0A1128]/20">
                  <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0D5C3A] text-white px-3.5 py-1 font-mono text-xs font-black uppercase tracking-wider">
                    High-Leverage Formula
                  </span>
                  <Users className="h-7 w-7 text-[#0D5C3A]" />
                </div>
                <h4 className="font-display text-2xl font-black text-[#0D5C3A] mt-3">
                  The Value-First Protocol
                </h4>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3 my-3">
                <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                  <p className="font-display text-base font-black text-[#0D5C3A]">1. Deep Contextual Homework:</p>
                  <p className="text-sm font-semibold text-[#0A1128]/90 mt-1 leading-relaxed">
                    Read their recent blog, listen to their podcast, or inspect their GitHub project before you type a single word.
                  </p>
                </div>

                <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                  <p className="font-display text-base font-black text-[#0D5C3A]">2. Proactive Contribution:</p>
                  <p className="text-sm font-semibold text-[#0A1128]/90 mt-1 leading-relaxed">
                    "I noticed a small bug in your documentation and submitted a PR," or "I loved your essay on fintech and visualized it in this infographic."
                  </p>
                </div>

                <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                  <p className="font-display text-base font-black text-[#0D5C3A]">3. Low-Friction Asymmetry:</p>
                  <p className="text-sm font-semibold text-[#0A1128]/90 mt-1 leading-relaxed">
                    Never ask "can we hop on a 30-min call?". Ask one ultra-specific, high-clarity question they can answer in 2 sentences.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3 shrink-0">
              <span className="text-xs font-mono font-black text-[#0D5C3A] uppercase">
                "Be so useful that ignoring you feels like a loss to them."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 10: SELF-ASSESSMENT & THE THEORY OF COMPARISON
     ========================================================================== */
  {
    id: "theory-of-comparison",
    title: "Self-Assessment & Growth: Stop Comparing, Start Building",
    notes:
      "MENTAL HEALTH & RESILIENCE: One of the biggest killers of young talent in Nigeria is social media despair. You log onto LinkedIn or X and see someone claiming they got a huge role. You feel paralyzed. Clarify: You are comparing your hard work behind the scenes to someone else's public celebration. Benchmark yourself ONLY against who you were 6 months ago: Are you learning faster? Are you communicating better? Are you more disciplined?",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="09: Self-Assessment & Growth">
        <div>
          <h2 className="slide-title">
            Self-Assessment &amp; Growth:
            <span className="text-[#0D5C3A] ml-3">Stop Comparing, Start Building</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Comparing yourself to others will only make you bitter or discouraged. The only comparison that matters is you vs. who you were yesterday.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-6 p-7 flex flex-col justify-between" tone="paper">
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="brut-flat border-[3px] border-[#0A1128] bg-red-100 text-red-700 px-3 py-1 font-mono text-xs font-black uppercase">
                  The Social Media Trap
                </span>
                <h3 className="font-display text-2xl font-extrabold text-[#0A1128] mt-3">
                  Don't Compare Your Hard Work Behind the Scenes to Their Highlight Reel
                </h3>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3.5 mt-3">
                <div className="p-4 bg-[#FAF7EE] border-2 border-[#0A1128]/30 flex-1 flex flex-col justify-center">
                  <p className="font-display text-base font-black text-[#0A1128]">
                    1. You Only See Their Celebrations
                  </p>
                  <p className="text-sm text-[#0A1128]/90 mt-1 leading-relaxed font-semibold">
                    People post their big wins and congratulations, but they never post the 100 rejection emails or quiet struggles they had to endure before that moment.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7EE] border-2 border-[#0A1128]/30 flex-1 flex flex-col justify-center">
                  <p className="font-display text-base font-black text-[#0A1128]">
                    2. Everyone Starts from a Different Place
                  </p>
                  <p className="text-sm text-[#0A1128]/90 mt-1 leading-relaxed font-semibold">
                    Some people have family connections, early financial safety nets, or head starts. Comparing your exact timeline to theirs will only steal your peace of mind.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7EE] border-2 border-[#0A1128]/30 flex-1 flex flex-col justify-center">
                  <p className="font-display text-base font-black text-[#0A1128]">
                    3. Envy Paralyzes Your Energy
                  </p>
                  <p className="text-sm text-[#0A1128]/90 mt-1 leading-relaxed font-semibold">
                    Spending hours feeling discouraged by other people's posts leaves you with zero motivation to practice your own craft or apply for your own opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-black text-red-600 uppercase">
                TRAP: RUNNING SOMEONE ELSE'S RACE WITH YOUR OWN STAMINA. STAY IN YOUR LANE.
              </span>
            </div>
          </Card>

          <Card className="col-span-6 p-7 flex flex-col justify-between" tone="blue">
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="brut-flat border-[3px] border-white bg-white text-[#0D5C3A] px-3.5 py-1 font-mono text-xs font-black uppercase shadow-[3px_3px_0_0_#000]">
                  The Only Test That Matters
                </span>
                <h3 className="font-display text-2xl font-extrabold text-white mt-3">
                  How to Measure Real Personal Progress
                </h3>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3.5 mt-3">
                <div className="p-4 bg-white text-[#0A1128] border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                  <h4 className="font-display text-base font-black text-[#0D5C3A]">
                    Are You Better Than You Were 6 Months Ago?
                  </h4>
                  <p className="text-sm font-semibold text-[#0A1128]/90 mt-1 leading-relaxed">
                    Don't worry about how far ahead someone else seems. Ask yourself: Can you handle problems, build things, or communicate ideas today that used to confuse or scare you last year? That is genuine growth.
                  </p>
                </div>

                <div className="p-4 bg-white text-[#0A1128] border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                  <h4 className="font-display text-base font-black text-[#0D5C3A]">
                    Focus on What You Can Control Today
                  </h4>
                  <p className="text-sm font-semibold text-[#0A1128]/90 mt-1 leading-relaxed">
                    You cannot force a company to hire you or award you a grant today. But you CAN control whether you practiced for an hour, read a chapter, or submitted an application today.
                  </p>
                </div>

                <div className="p-4 bg-white text-[#0A1128] border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                  <h4 className="font-display text-base font-black text-[#0D5C3A]">
                    Turn Other People's Wins into Inspiration
                  </h4>
                  <p className="text-sm font-semibold text-[#0A1128]/90 mt-1 leading-relaxed">
                    When a peer from your school or community wins, celebrate them. It is proof that someone from your environment can break through. Ask questions and learn from their steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/30 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-black uppercase text-white tracking-wider">
                BENCHMARK YOURSELF AGAINST YOUR YESTERDAY, NEVER AGAINST SOMEONE ELSE'S SOCIAL MEDIA FEED.
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 11: CONSISTENCY & STAYING INVOLVED
     ========================================================================== */
  {
    id: "consistency-communities-mentors",
    title: "Communities & Mentorship: Why You Cannot Walk Alone",
    notes:
      "COMMUNITY POWER: Emphasize that nobody makes it alone in global opportunities. Why communities matter: They share opportunities weeks before they appear on LinkedIn. How to find mentors: Do not ask 'will you mentor me?'. Ask targeted questions, implement their feedback immediately, and report back with results.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="10: Staying in the Arena">
        <div>
          <h2 className="slide-title">
            Communities &amp; Mentorship:
            <span className="text-[#0D5C3A] ml-3">Why You Cannot Walk Alone</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Nobody succeeds in isolation. The people around you determine how far and how fast you will go.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-6 p-7 flex flex-col justify-between" tone="paper">
            <div className="flex-1 flex flex-col justify-between gap-3.5">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20 shrink-0">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0D5C3A] text-white px-3.5 py-1 font-mono text-xs font-black uppercase tracking-wider">
                  Community Is Your Leverage
                </span>
                <Users className="h-6 w-6 text-[#0D5C3A]" />
              </div>

              <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <h4 className="font-display text-base font-black text-[#0D5C3A]">
                  1. You Hear About Opportunities First
                </h4>
                <p className="text-sm font-semibold text-[#0A1128] mt-1.5 leading-relaxed">
                  The best internships, scholarships, and private grants are shared inside trusted student and builder circles long before they ever reach public job boards.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <h4 className="font-display text-base font-black text-[#0D5C3A]">
                  2. Active Peers Push You to Build
                </h4>
                <p className="text-sm font-semibold text-[#0A1128] mt-1.5 leading-relaxed">
                  When you surround yourself with fellow students who are actively applying, learning, and shipping projects, their momentum naturally destroys your excuses.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <h4 className="font-display text-base font-black text-[#0D5C3A]">
                  3. Your Classmates Today Are Tomorrow's Decision Makers
                </h4>
                <p className="text-sm font-semibold text-[#0A1128] mt-1.5 leading-relaxed">
                  The student beside you or your fellow Cowrywise Ambassador will be a team lead, founder, or director tomorrow. Build genuine relationships and trust now.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-black text-[#0D5C3A] uppercase">
                "SHOW ME WHO YOU SPEND TIME TALKING TO, AND I WILL SHOW YOU YOUR NEXT 3 YEARS."
              </span>
            </div>
          </Card>

          <Card className="col-span-6 p-7 flex flex-col justify-between" tone="soft">
            <div className="flex-1 flex flex-col justify-between gap-3.5">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20 shrink-0">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-white text-[#0D5C3A] px-3.5 py-1 font-mono text-xs font-black uppercase tracking-wider">
                  How Mentorship Actually Works
                </span>
                <Flame className="h-6 w-6 text-[#0D5C3A]" />
              </div>

              <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <h4 className="font-display text-base font-black text-[#0D5C3A]">
                  Step 1: Never Send Vague "Be My Mentor" DMs
                </h4>
                <p className="text-sm font-semibold text-[#0A1128] mt-1.5 leading-relaxed">
                  Busy leaders ignore generic "mentor me" messages. Instead, ask for 5 minutes of direct guidance on one specific problem you are currently solving.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <h4 className="font-display text-base font-black text-[#0D5C3A]">
                  Step 2: Act on Their Advice Immediately
                </h4>
                <p className="text-sm font-semibold text-[#0A1128] mt-1.5 leading-relaxed">
                  Don't just say thank you. Go build the thing, read the recommended book, or submit the application. Prove that their time was not wasted on you.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <h4 className="font-display text-base font-black text-[#0D5C3A]">
                  Step 3: Close the Loop with Proof
                </h4>
                <p className="text-sm font-semibold text-[#0A1128] mt-1.5 leading-relaxed">
                  Message them back: "I implemented your advice on X, and here is the result." That single message turns a busy stranger into a lifelong supporter.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-black text-[#0A1128] uppercase">
                MENTORS DON'T ADOPT PEOPLE WHO ONLY WANT TALK; THEY INVEST IN PEOPLE WHO SHOW RESULTS.
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 12: THE ACTION PLAN - CURATED ECOSYSTEM
     ========================================================================== */
  {
    id: "action-plan-ecosystem",
    title: "The Action Plan: People to Follow and Platforms to Join",
    notes:
      "PRACTICAL TOOLKIT: Concrete names and platforms to follow tonight. Curate your digital diet. Surround yourself with people of substance and proven platforms.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="11: Concrete Action Plan">
        <div>
          <h2 className="slide-title">
            The Action Plan:
            <span className="text-[#0D5C3A] ml-3">Curated Ecosystem &amp; Platforms</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Curate your digital diet. Your environment dictates your aspirations.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          {/* People to Learn From */}
          <Card className="col-span-6 p-7 flex flex-col justify-between" tone="paper">
            <div className="flex-1 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20 shrink-0">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0D5C3A] text-white px-3.5 py-1 font-mono text-xs font-black uppercase tracking-wider">
                  People of Substance &amp; Voices to Study
                </span>
                <Users className="h-6 w-6 text-[#0D5C3A]" />
              </div>

              {/* Youth Realities & Changemakers */}
              <div className="p-4 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-between">
                <p className="font-mono text-xs font-black uppercase text-[#0D5C3A] mb-2 shrink-0">
                  Youth Realities &amp; Changemakers to Follow:
                </p>
                <div className="grid grid-cols-2 gap-2.5 flex-1">
                  <div className="p-2.5 bg-[#FAF7EE] border border-[#0A1128]/30 flex flex-col justify-center">
                    <span className="text-sm font-black text-[#0A1128]">Bukola Aladesulu</span>
                    <span className="text-xs font-bold text-[#0D5C3A]">Youth Development</span>
                  </div>
                  <div className="p-2.5 bg-[#FAF7EE] border border-[#0A1128]/30 flex flex-col justify-center">
                    <span className="text-sm font-black text-[#0A1128]">Temiloluwa Bolawole</span>
                    <span className="text-xs font-bold text-[#0D5C3A]">Poetry &amp; Diplomacy</span>
                  </div>
                  <div className="p-2.5 bg-[#FAF7EE] border border-[#0A1128]/30 flex flex-col justify-center">
                    <span className="text-sm font-black text-[#0A1128]">Rafiat Atanda</span>
                    <span className="text-xs font-bold text-[#0D5C3A]">Underserved Communities</span>
                  </div>
                  <div className="p-2.5 bg-[#FAF7EE] border border-[#0A1128]/30 flex flex-col justify-center">
                    <span className="text-sm font-black text-[#0A1128]">Lasisi Godwin</span>
                    <span className="text-xs font-bold text-[#0D5C3A]">Public Health</span>
                  </div>
                  <div className="p-2.5 bg-[#FAF7EE] border border-[#0A1128]/30 flex flex-col justify-center">
                    <span className="text-sm font-black text-[#0A1128]">Saviour Iwezue &amp; Munnir Adams</span>
                    <span className="text-xs font-bold text-[#0D5C3A]">Climate Action</span>
                  </div>
                  <div className="p-2.5 bg-[#FAF7EE] border border-[#0A1128]/30 flex flex-col justify-center">
                    <span className="text-sm font-black text-[#0A1128]">Stanley Anigbogu</span>
                    <span className="text-xs font-bold text-[#0D5C3A]">Hardware Engineering</span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#0A1128]/15 text-center shrink-0">
                  <span className="font-mono text-xs font-black text-[#0D5C3A] italic">
                    "and many other people I follow"
                  </span>
                </div>
              </div>

              {/* Scholarship & Academic Champions */}
              <div className="p-4 bg-white border-2 border-[#0D5C3A] shadow-[3px_3px_0_0_#0D5C3A] shrink-0">
                <p className="font-mono text-xs font-black uppercase text-[#0D5C3A] mb-1">
                  Scholarship &amp; Academic Champions:
                </p>
                <p className="text-base font-black text-[#0A1128] leading-snug">
                  Dr. Dipo Awojide · Scholarship Region
                </p>
                <p className="text-xs text-[#0A1128]/85 font-bold mt-1 leading-normal">
                  Past alumni &amp; scholar networks of <strong className="text-[#0D5C3A]">Erasmus Mundus</strong>, <strong className="text-[#0D5C3A]">Mastercard Foundation</strong>, and <strong className="text-[#0D5C3A]">Chevening</strong>.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-black text-[#0D5C3A] uppercase">
                DIET RULE: UNFOLLOW PERFORMATIVE NOISE. FOLLOW BUILDERS DOING REAL WORK.
              </span>
            </div>
          </Card>

          {/* Platforms to Join */}
          <Card className="col-span-6 p-7 flex flex-col justify-between" tone="soft">
            <div className="flex-1 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20 shrink-0">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-white text-[#0D5C3A] px-3.5 py-1 font-mono text-xs font-black uppercase tracking-wider">
                  Ecosystems &amp; Proven Platforms
                </span>
                <Compass className="h-6 w-6 text-[#0D5C3A]" />
              </div>

              {/* High-Impact Fellowships & Gateway Platforms */}
              <div className="p-3.5 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <p className="font-mono text-xs font-black uppercase text-[#0D5C3A] mb-1">
                  High-Impact Fellowships &amp; Gateway Platforms:
                </p>
                <ul className="text-xs font-bold text-[#0A1128] space-y-1">
                  <li>• <strong className="text-sm">Millennium Campus Network (MCN)</strong> &amp; <strong className="text-sm">The Bridge Program</strong></li>
                  <li>• <strong className="text-sm">LEAP Africa</strong> (SIP &amp; Nigeria Youth Futures Fund — NYFF Grants)</li>
                  <li>• <strong className="text-sm">3MTT Nigeria (NITDA)</strong> &amp; <strong className="text-sm">Tony Elumelu Foundation ($5k Seed)</strong></li>
                </ul>
              </div>

              {/* Policy, Civic & Diplomatic Platforms */}
              <div className="p-3.5 bg-white border-2 border-[#0A1128] shadow-[3px_3px_0_0_#0A1128] flex-1 flex flex-col justify-center">
                <p className="font-mono text-xs font-black uppercase text-[#0D5C3A] mb-1">
                  Policy, Civic &amp; Diplomatic Platforms:
                </p>
                <ul className="text-xs font-bold text-[#0A1128] space-y-1">
                  <li>• <strong className="text-sm">PLAC NASS Internship</strong> &amp; <strong className="text-sm">YIAGA Africa</strong> (Legislative &amp; policy)</li>
                  <li>• <strong className="text-sm">NESG NextGen Policy Forum</strong> &amp; <strong className="text-sm">The Platform YPB</strong> (Policy think-tank)</li>
                  <li>• <strong className="text-sm">UN Volunteers (UNV)</strong>, <strong className="text-sm">NHEF</strong> &amp; <strong className="text-sm">MUNs (BIMUN, AFRIMUN)</strong></li>
                </ul>
              </div>

              {/* Immediate Launchpad */}
              <div className="p-3.5 bg-[#FAF7EE] border-2 border-[#0D5C3A] shadow-[3px_3px_0_0_#0D5C3A] shrink-0">
                <p className="font-mono text-xs font-black uppercase text-[#0D5C3A] mb-1">
                  Immediate Launchpad &amp; Opportunity Portals:
                </p>
                <p className="text-sm font-black text-[#0A1128] leading-snug">
                  ★ Cowrywise Campus Ambassadors: Your primary ground-level launchpad!
                </p>
                <p className="text-xs text-[#0A1128]/85 font-bold mt-0.5">
                  Portals: Opportunity Desk · Opportunities For Africans · Youth Hub Africa
                </p>
              </div>
            </div>

            <div className="border-t-2 border-[#0A1128]/20 pt-3 mt-3 shrink-0">
              <span className="text-xs font-mono font-black text-[#0A1128] uppercase">
                ACTION: BOOKMARK THESE PORTALS. CHECK APPLICATION CYCLES EVERY MONDAY.
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 13: CLOSING & Q/A - PLAY THE LONG GAME
     ========================================================================== */
  {
    id: "closing-play-the-long-game",
    title: "Closing & Q/A: Play The Long Game",
    notes:
      "GRAND FINALE & CALL TO ACTION: Reiterate: Landing your first opportunity is just day 0. The real test is: Can you reinvent yourself year after year? Thank the organizers and attendees for having you. Point to the live QR code and invite everyone to scan it to connect on LinkedIn, Twitter/X, and explore your projects. Open the floor for live questions on Google Meet!",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="12: The Grand Finale" tone="deep">
        <div className="grid grid-cols-12 gap-10 items-center flex-1 my-auto">
          {/* Left Column: Final Charge */}
          <div className="col-span-7 flex flex-col justify-between h-full py-4">
            <div>
              <span className="inline-block border border-white/30 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#FAF7EE]">
                Independence Day Special · Keynote Takeaway
              </span>
              <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-white mt-6 leading-tight">
                Play The <span className="text-[#0D5C3A] bg-white px-3 py-0.5">Long Game.</span>
              </h2>
              <p className="font-display text-2xl text-white/90 font-bold mt-6 leading-snug">
                "Landing the opportunity is the beginning, not the finish line. Reinvent yourself continuously."
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#0D5C3A] shrink-0 mt-1 bg-white rounded-full" />
                  <p className="text-lg text-white/85">
                    Start local: Ground your ambition in solving immediate friction.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#0D5C3A] shrink-0 mt-1 bg-white rounded-full" />
                  <p className="text-lg text-white/85">
                    Build undeniable proof-of-work that travels faster than any passport.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#0D5C3A] shrink-0 mt-1 bg-white rounded-full" />
                  <p className="text-lg text-white/85">
                    Never stop learning, unlearning, and re-skilling.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-6">
              <span className="text-2xl font-extrabold text-white">Q&amp;A Time</span>
              <span className="text-sm font-mono text-white/70 uppercase">
                Drop your questions in the Google Meet chat!
              </span>
            </div>
          </div>

          {/* Right Column: QR Code & Connect Card */}
          <div className="col-span-5 flex flex-col items-center justify-center">
            <div className="brut bg-white p-8 text-[#0A1128] text-center max-w-[420px] w-full shadow-[12px_12px_0_0_#0D5C3A]">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0D5C3A]">
                Let's Stay Connected
              </p>
              <h3 className="font-display text-2xl font-extrabold mt-1">
                Sheriffdeen Saula
              </h3>
              <p className="text-xs font-semibold text-[#0A1128]/70 uppercase tracking-wider mt-0.5">
                Software Engineer · Builder
              </p>

              {/* QR Code Container */}
              <div className="my-6 flex justify-center">
                <div className="p-3 bg-white border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linktr.ee/SheriffdeenSaula&color=0a1128"
                    alt="Sheriffdeen Saula Linktree QR Code"
                    className="h-[180px] w-[180px] object-contain"
                  />
                </div>
              </div>

              <a
                href="https://linktr.ee/SheriffdeenSaula"
                target="_blank"
                rel="noreferrer"
                className="deck-ui-btn w-full py-2.5 px-4 text-sm font-bold bg-[#0D5C3A] text-white hover:bg-[#08331D]"
              >
                linktr.ee/SheriffdeenSaula <ExternalLink className="h-4 w-4 ml-1" />
              </a>

              <p className="mt-4 font-mono text-xs text-[#0A1128]/70">
                LinkedIn · X/Twitter · GitHub · Projects
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
];
