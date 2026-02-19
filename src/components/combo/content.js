const packagingImages = {
  comfort: [
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1000&q=80'
  ],
  romantic: [
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80'
  ],
  birthday: [
    'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80'
  ],
  desk: [
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80'
  ]
};

const contentBySlug = {
  comfort: {
    experienceTitle: 'An evening reset designed for slower breathing.',
    experienceCopy:
      'Comfort Reset Box helps you step out of endless notifications and into a calmer rhythm. From the first touch to the final sip, each detail is designed to soften the day. It is a gift that creates quiet, not clutter.',
    occasions: [
      { title: 'After long workdays', description: 'A transition ritual from screen fatigue to grounded calm.' },
      { title: 'Sunday self-care', description: 'A gentle routine for slow mornings and mindful evenings.' },
      { title: 'Thoughtful support gift', description: 'Perfect for someone who needs a warm, restorative pause.' }
    ],
    faq: [
      {
        question: 'Is this good for someone who is always busy?',
        answer: 'Yes. It is designed for quick decompression and intentional downtime.'
      },
      {
        question: 'Will it feel useful beyond one day?',
        answer: 'Absolutely. The items are selected for repeat comfort rituals, not one-time novelty.'
      },
      {
        question: 'Is it suitable for gifting colleagues?',
        answer: 'Yes. The tone is premium, neutral, and universally appreciated.'
      },
      {
        question: 'Does it still look premium in delivery?',
        answer: 'Yes. Every box is quality checked and packed for clean presentation.'
      }
    ]
  },
  romantic: {
    experienceTitle: 'A warm, intimate moment—ready before the conversation begins.',
    experienceCopy:
      'Romantic Experience Box is curated for closeness without cliché. The mood feels elevated, the details feel intentional, and the entire setup invites meaningful time together. It is not about extravagance; it is about connection.',
    occasions: [
      { title: 'Date night at home', description: 'Turn a simple evening into a memorable shared experience.' },
      { title: 'Anniversary surprise', description: 'Celebrate thoughtfully with premium touches and emotional detail.' },
      { title: 'Long-distance reunion', description: 'Create an instant atmosphere when finally meeting again.' }
    ],
    faq: [
      {
        question: 'Is this box too flashy for subtle couples?',
        answer: 'Not at all. It is intimate and tasteful, not loud or overdone.'
      },
      {
        question: 'Can this work for first anniversaries?',
        answer: 'Yes. It is crafted for meaningful milestones both small and big.'
      },
      {
        question: 'Will the packaging feel gift-ready on arrival?',
        answer: 'Yes. The unboxing experience is part of the intended emotional impact.'
      },
      {
        question: 'Is checkout secure?',
        answer: 'Yes. Orders are completed on trusted marketplaces with secure payment systems.'
      }
    ]
  },
  birthday: {
    experienceTitle: 'A premium celebration kit that delivers instant joy.',
    experienceCopy:
      'Birthday Celebration Box brings energy, warmth, and polish into one ready-to-gift format. It helps you create a special moment fast, while still feeling curated and premium. Every element is chosen to spark excitement and smiles.',
    occasions: [
      { title: 'Last-minute birthday rescue', description: 'A fast, polished gifting solution that still feels thoughtful.' },
      { title: 'Best friend surprise', description: 'Add instant celebration energy with premium presentation.' },
      { title: 'Office birthday moments', description: 'Celebrate cleanly and confidently in shared spaces.' }
    ],
    faq: [
      {
        question: 'Is this suitable for adults too?',
        answer: 'Yes. The design is joyful yet premium, not childish.'
      },
      {
        question: 'Will it feel festive enough for a surprise?',
        answer: 'Definitely. The curation is built around instant celebration impact.'
      },
      {
        question: 'Can this be gifted across cities?',
        answer: 'Yes. Marketplace logistics make long-distance gifting easier.'
      },
      {
        question: 'Is quality checked before dispatch?',
        answer: 'Yes. We verify finish, utility, and presentation before packing.'
      }
    ]
  },
  desk: {
    experienceTitle: 'A refined desk ritual for clarity, focus, and better flow.',
    experienceCopy:
      'Desk Upgrade Box is built for modern work routines that value calm productivity. The curation balances utility and visual minimalism, making your setup look cleaner and feel more intentional. It is a practical gift with design integrity.',
    occasions: [
      { title: 'New role or semester', description: 'Set up a focused environment from day one.' },
      { title: 'Workspace refresh', description: 'Upgrade daily essentials without visual clutter.' },
      { title: 'Productivity gift', description: 'A thoughtful pick for creators, students, and professionals.' }
    ],
    faq: [
      {
        question: 'Is this useful for remote workers?',
        answer: 'Yes. It is curated to improve day-to-day desk comfort and focus.'
      },
      {
        question: 'Will it match minimalist setups?',
        answer: 'Absolutely. The styling is clean, neutral, and premium.'
      },
      {
        question: 'Is it practical beyond aesthetics?',
        answer: 'Yes. Every item is selected for real utility and daily use.'
      },
      {
        question: 'Can I trust checkout and delivery speed?',
        answer: 'Yes. Orders run through trusted marketplace infrastructure.'
      }
    ]
  }
};

export function getComboContent(slug) {
  return contentBySlug[slug] || contentBySlug.comfort;
}

export function getPackagingImages(slug) {
  return packagingImages[slug] || packagingImages.comfort;
}
