import Image from "next/image";
import { MotionSection } from "@/components/MotionSection";

export function InnerPage({
  section,
  title,
  heroTitle,
  heroImageSrc,
  lead,
  intro,
  blocks,
  stats,
}: {
  section: string;
  title: string;
  heroTitle: string;
  heroImageSrc: string;
  lead: string;
  intro: string;
  blocks?: Array<
    | {
        kind: "imageText";
        imageSrc: string;
        heading: string;
        text: string;
      }
    | {
        kind: "twoCol";
        leftTitle: string;
        rightText: string;
      }
    | {
        kind: "text";
        heading: string;
        text: string;
      }
  >;
  stats?: {
    title: string;
    items: Array<{ value: string; label: string; className: string }>;
  };
}) {
  const heroTitleText = heroTitle.replaceAll("\\n", "\n");
  const introText = intro.replaceAll("\\n", "\n");

  const renderParagraphs = (text: string) => {
    const paragraphs = text
      .split(/\n\s*\n/g)
      .map((p) => p.replaceAll(/\s*\n\s*/g, " ").trim())
      .filter(Boolean);

    return (
      <div className="text-sm leading-6 text-zinc-700">
        {paragraphs.map((p, idx) => (
          <p key={idx} className={idx === 0 ? "" : "mt-4"}>
            {p}
          </p>
        ))}
      </div>
    );
  };

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-3">
        <div className="text-sm text-zinc-500">
          <a href="/" className="hover:text-zinc-900">
            Home
          </a>
          <span className="px-2">›</span>
          <span className="text-zinc-900">{section}</span>
          <span className="px-2">›</span>
          <span className="text-zinc-900">{title}</span>
        </div>

        <MotionSection className="mt-4 overflow-hidden bg-white">
          <div className="grid min-h-[260px] md:grid-cols-12">
            <div className="relative md:col-span-4">
              <div className="absolute inset-0 bg-[#1E2A7B]" />
              <div className="absolute bottom-0 right-0 top-0 w-14 bg-[#D4A80F]" />
              <div className="absolute bottom-0 right-14 top-0 w-20 rounded-l-full bg-[#1E2A7B]" />
              <div className="relative p-8 text-white">
                <div className="whitespace-pre-line text-4xl font-semibold leading-[1.05]">{heroTitleText}</div>
              </div>
            </div>

            <div className="relative md:col-span-8">
              <div className="relative h-[260px] md:h-full">
                <Image
                  src={heroImageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="mt-12 grid gap-10 md:grid-cols-12" delay={0.05}>
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-10 text-2xl font-light leading-tight text-zinc-800">{lead}</div>
          </div>

          <div className="md:col-span-8">{renderParagraphs(introText)}</div>
        </MotionSection>

        {blocks?.length ? (
          <div className="mt-12 grid gap-12">
            {blocks.map((b, idx) => {
              const delay = 0.05;
              if (b.kind === "imageText") {
                const blockText = b.text.replaceAll("\\n", "\n");
                return (
                  <MotionSection
                    key={idx}
                    className="grid gap-0 bg-zinc-100 md:grid-cols-12"
                    delay={delay}
                  >
                    <div className="relative h-[280px] md:col-span-4 md:min-h-[320px]">
                      <Image
                        src={b.imageSrc}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-10 md:col-span-8">
                      <div className="text-3xl font-light text-zinc-900">{b.heading}</div>
                      <div className="mt-5">{renderParagraphs(blockText)}</div>
                    </div>
                  </MotionSection>
                );
              }

              if (b.kind === "twoCol") {
                const rightText = b.rightText.replaceAll("\\n", "\n");
                return (
                  <MotionSection key={idx} className="grid gap-10 md:grid-cols-12" delay={delay}>
                    <div className="md:col-span-4">
                      <div className="bg-zinc-100 p-10 text-3xl font-light leading-tight text-zinc-800">
                        {b.leftTitle}
                      </div>
                    </div>
                    <div className="md:col-span-8">{renderParagraphs(rightText)}</div>
                  </MotionSection>
                );
              }

              const blockText = b.text.replaceAll("\\n", "\n");
              return (
                <MotionSection key={idx} className="bg-zinc-100 p-10" delay={delay}>
                  <div className="text-3xl font-light text-zinc-900">{b.heading}</div>
                  <div className="mt-5">{renderParagraphs(blockText)}</div>
                </MotionSection>
              );
            })}
          </div>
        ) : null}

        {stats ? (
          <MotionSection className="mt-12" delay={0.05}>
            <div className="text-3xl font-light text-zinc-900">{stats.title}</div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {stats.items.map((it) => (
                <div
                  key={`${it.value}-${it.label}`}
                  className={`min-h-[120px] p-7 text-white ${it.className}`}
                >
                  <div className="text-4xl font-semibold leading-none">{it.value}</div>
                  <div className="mt-2 text-sm font-medium text-white/90">{it.label}</div>
                </div>
              ))}
            </div>
          </MotionSection>
        ) : null}
      </div>
    </main>
  );
}
