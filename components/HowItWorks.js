const steps = [
  { title: 'Choose your vibe', description: 'Pick the combo that fits the moment and personality.' },
  { title: 'Order from trusted platform', description: 'Complete your purchase securely on Amazon or Meesho.' },
  { title: 'Delivered to your doorstep', description: 'Reliable logistics and smooth delivery without confusion.' }
];

export default function HowItWorks() {
  return (
    <section>
      <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Step {index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
