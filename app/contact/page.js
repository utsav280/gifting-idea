import LayoutShell from "@/components/LayoutShell";

export const metadata = {
  title: "Contact AROHA",
  description:
    "Reach the AROHA team for questions, collaborations, and gifting support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <LayoutShell>
      <section className="grid gap-8 py-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Contact
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            We&apos;d love to hear from you.
          </h1>
          <p className="text-[color:var(--muted)]">
            Have a question, brand collaboration idea, or feedback? Drop us a
            message and our team will get back to you soon.
          </p>
          <div className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-5 text-sm text-[color:var(--muted)]">
            <p>
              Email:{" "}
              <a href="mailto:hello@giftlypremium.com">
                hello@giftlypremium.com
              </a>
            </p>
            <p className="mt-2">Instagram: @giftlypremium</p>
          </div>
        </article>

        <form className="space-y-4 rounded-3xl border border-black/5 bg-[color:var(--surface)] p-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none ring-[color:var(--accent)]/40 focus:ring"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none ring-[color:var(--accent)]/40 focus:ring"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none ring-[color:var(--accent)]/40 focus:ring"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--button-text)]"
          >
            Send message
          </button>
        </form>
      </section>
    </LayoutShell>
  );
}
