import LayoutShell from "@/components/LayoutShell";

export const metadata = {
  title: "About AROHA",
  description:
    "Learn how AROHA curates meaningful gifting boxes with intentional design, premium packaging, and trusted marketplace fulfillment.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  "Intentional curation over quantity.",
  "Premium presentation as part of the gift itself.",
  "Emotional relevance in every combo design.",
  "Trust-first commerce through reliable platforms.",
];

export default function AboutPage() {
  return (
    <LayoutShell>
      <article className="space-y-10 py-8">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            About us
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            A gifting brand built for thoughtful modern moments.
          </h1>
          <p className="max-w-3xl text-[color:var(--muted)] leading-relaxed">
            AROHA started with a simple observation: most gifting options feel
            impersonal. We built a focused brand that combines tasteful
            products, premium packaging, and emotional clarity so gifting feels
            effortless and meaningful.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
              To help people gift with confidence through beautifully curated
              boxes designed around real-life emotions.
            </p>
          </article>
          <article className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
              To become the most trusted premium gifting brand for India&apos;s
              next generation of intentional shoppers.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7">
          <h2 className="text-2xl font-semibold">Values</h2>
          <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
            {values.map((value) => (
              <li key={value}>• {value}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7">
          <h2 className="text-2xl font-semibold">Founder note</h2>
          <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
            I started AROHA after struggling to find a gift that felt meaningful
            yet premium without being excessive. Most options felt generic. I
            wanted to build something intentional — boxes designed around real
            emotions, not random bundles.
          </p>
        </section>
      </article>
    </LayoutShell>
  );
}
