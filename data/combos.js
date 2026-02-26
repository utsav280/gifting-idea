export const combos = [
  {
    slug: 'comfort',
    title: 'Comfort Reset Box',
    price: '₹899',
    tagline: 'A slow-breathing pause for cozy evenings and mindful mornings.',
    theme: 'comfort',
    idealFor: 'Unwinding after long days, self-care Sundays, and thoughtful gifting.',
    featuredImage:
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80',
    purchaseUrl: 'https://www.amazon.in/',
    items: [
      {
        name: 'Minimal Ceramic Mug',
        image:
          'https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Premium Tea Blend',
        image:
          'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Soy Wax Candle',
        image:
          'https://images.unsplash.com/photo-1603006905393-c4fef59d5e74?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Handmade Wooden Coaster',
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    slug: 'romantic',
    title: 'Romantic Experience Box',
    price: '₹1099',
    tagline: 'Curated sparks for intimate conversations and memorable date nights.',
    theme: 'romantic',
    idealFor: 'Anniversaries, surprise date setups, or meaningful first celebrations.',
    featuredImage:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1400&q=80',
    purchaseUrl: 'https://www.amazon.in/',
    items: [
      {
        name: 'Couple Coffee Cups',
        image:
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Ambient Candle',
        image:
          'https://images.unsplash.com/photo-1602524812799-9de9188a5f0f?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Craft Chocolate Pack',
        image:
          'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Conversation Dice Set',
        image:
          'https://images.unsplash.com/photo-1634395422292-48a019730f44?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    slug: 'birthday',
    title: 'Birthday Celebration Box',
    price: '₹999',
    tagline: 'A bright little party kit to make every birthday feel extra special.',
    theme: 'birthday',
    idealFor: 'Best-friend birthdays, sibling surprises, and long-distance celebrations.',
    featuredImage:
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1400&q=80',
    purchaseUrl: 'https://www.amazon.in/',
    items: [
      {
        name: 'Celebration Mug',
        image:
          'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Birthday Candle',
        image:
          'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Confetti Mix',
        image:
          'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Mini Party Banner',
        image:
          'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    slug: 'desk',
    title: 'Desk Upgrade Box',
    price: '₹1199',
    tagline: 'Elevate your workspace with essentials that keep focus and flow in sync.',
    theme: 'desk',
    idealFor: 'Students, creators, and professionals building a productive routine.',
    featuredImage:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80',
    purchaseUrl: 'https://www.amazon.in/',
    items: [
      {
        name: 'Minimal Work Mug',
        image:
          'https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Hardcover Notebook',
        image:
          'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Premium Pen',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Desk Plant',
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  }
];

export const comboBySlug = Object.fromEntries(combos.map((combo) => [combo.slug, combo]));
