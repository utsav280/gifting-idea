'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Where can I buy your boxes?',
    a: 'Each combo page includes direct links to Amazon or Meesho where you can purchase instantly.'
  },
  {
    q: 'Why don’t you sell directly on this website yet?',
    a: 'We currently prioritize trusted marketplace checkout to give buyers secure payments, delivery reliability, and platform support.'
  },
  { q: 'Is packaging premium?', a: 'Yes. We use rigid magnetic boxes and carefully designed arrangements for a premium unboxing experience.' },
  { q: 'Are items quality checked?', a: 'Yes. Every item is reviewed for finish, utility, and presentation before being included in a combo.' },
  { q: 'Do you offer customization?', a: 'Limited customization is being planned. Subscribe to updates to get early access when this launches.' },
  {
    q: 'Is gifting safe and secure?',
    a: 'Yes. Checkout is handled by trusted platforms with buyer protection, secure payment options, and dependable logistics.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section>
      <h2 className="text-2xl font-semibold md:text-3xl">Frequently asked questions</h2>
      <div className="mt-5 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={faq.q} className="rounded-2xl border border-black/5 bg-[color:var(--surface)]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium">{faq.q}</span>
                <span className="text-xl leading-none text-[color:var(--muted)]">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="px-5 pb-5 text-sm text-[color:var(--muted)]">{faq.a}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
