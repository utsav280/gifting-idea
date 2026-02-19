const testimonials = [
  {
    name: 'Rhea, Bangalore',
    quote: 'It looked premium, arrived on time, and actually felt thoughtful. Way better than random gift hunting.'
  },
  {
    name: 'Aditya, Pune',
    quote: 'The desk box made gifting easy and still felt personal. The packaging quality genuinely stood out.'
  },
  {
    name: 'Naina, Delhi',
    quote: 'I ordered the romantic combo and the unboxing experience felt polished, calm, and intentional.'
  }
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-2xl font-semibold md:text-3xl">Loved by early customers</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-6">
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">“{testimonial.quote}”</p>
            <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
