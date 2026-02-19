'use client';

export default function EmailCapture() {
  return (
    <section className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 md:p-10">
      <h2 className="text-2xl font-semibold md:text-3xl">Get early access to new boxes.</h2>
      <p className="mt-3 text-[color:var(--muted)]">Be the first to know when we launch something new.</p>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm text-[color:var(--text)] outline-none ring-[color:var(--accent)]/40 focus:ring"
        />
        <button
          type="submit"
          className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--button-text)]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
