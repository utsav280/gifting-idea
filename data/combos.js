export const combos = [
  {
    slug: 'comfort',
    title: 'Comfort Reset Box',
    price: '₹899',
    tagline: 'A slow-breathing pause for cozy evenings and mindful mornings.',
    theme: 'comfort',
    idealFor: 'Unwinding after long days, self-care Sundays, and thoughtful gifting.',
    featuredImage:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=80',
    purchaseUrl: 'https://www.amazon.in/',
    items: [
      {
        name: 'Minimal Ceramic Mug',
        image:
          'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Premium Tea Blend',
        image:
          'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Soy Wax Candle',
        image:
          'https://images.unsplash.com/photo-1603006905393-c4fef59d5e74?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Handmade Wooden Coaster',
        image:
          'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80'
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
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80',
    purchaseUrl: 'https://www.meesho.com/',
    items: [
      {
        name: 'Couple Coffee Cups',
        image:
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Ambient Candle',
        image:
          'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Craft Chocolate Pack',
        image:
          'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Conversation Dice Set',
        image:
          'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1000&q=80'
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
          'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Birthday Candle',
        image:
          'https://images.unsplash.com/photo-1602874801006-18db736736e0?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Confetti Mix',
        image:
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80'
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
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80',
    purchaseUrl: 'https://www.meesho.com/',
    items: [
      {
        name: 'Minimal Work Mug',
        image:
          'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Hardcover Notebook',
        image:
          'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Premium Pen',
        image:
          'https://images.unsplash.com/photo-1583485088034-697b5bc36b35?auto=format&fit=crop&w=1000&q=80'
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
