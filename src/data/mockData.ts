import { MenuItem, EventItem, Testimonial, KeyFeature, AppScreen } from '../types';

export const RESTAURANT_MENU: MenuItem[] = [
  {
    id: 'pbr-ribz',
    name: 'Signature PBR Jerk BBQ Smoked Ribz',
    category: 'ribz',
    description: 'Slow-smoked St. Louis pork ribs glazed in our secret pimento jerk barbecue sauce with grilled sweet corn & festival.',
    priceJMD: 2850,
    priceUSD: 18.50,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isSpicy: true,
    prepTime: '25-35 min',
    calories: '820 kcal'
  },
  {
    id: 'pbr-rotisserie',
    name: 'Rotisserie Herb Jerk Chicken (Half/Whole)',
    category: 'chicken',
    description: 'Flame-roasted whole chicken marinated for 48 hours with Scotch bonnet, fresh thyme, scallions, and allspice.',
    priceJMD: 2100,
    priceUSD: 13.90,
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isSpicy: true,
    prepTime: '20-30 min',
    calories: '650 kcal'
  },
  {
    id: 'pbr-pizza',
    name: 'Island Jerk Chicken & Sweet Plantain Pizza',
    category: 'pizza',
    description: 'Crispy stone-baked crust topped with shredded jerk chicken, caramelized sweet plantains, bell peppers & mozzarella.',
    priceJMD: 2600,
    priceUSD: 16.80,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    prepTime: '20-25 min',
    calories: '740 kcal'
  },
  {
    id: 'pbr-burger',
    name: 'The Kingston Supreme Pepper Jack Burger',
    category: 'burgers',
    description: '100% prime beef patty, crispy bacon, melted pepper jack, pickled scotch bonnet onions, and jerk aioli on brioche.',
    priceJMD: 1950,
    priceUSD: 12.75,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    prepTime: '15-20 min',
    calories: '690 kcal'
  },
  {
    id: 'pbr-oxtail',
    name: 'Tender Braised Oxtail & Butter Beans',
    category: 'ribz',
    description: 'Rich, fall-off-the-bone Jamaican oxtail simmered in dark gravy served with traditional rice and peas & steamed cabbage.',
    priceJMD: 3400,
    priceUSD: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    prepTime: '25-35 min',
    calories: '880 kcal'
  },
  {
    id: 'pbr-patties',
    name: 'Golden Flaky Cocktail Patties (Box of 6)',
    category: 'sides',
    description: 'Hot flaky Jamaican pastries filled with spicy minced beef, seasoned curry chicken, or garden vegetable medley.',
    priceJMD: 1200,
    priceUSD: 7.90,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    prepTime: '10-15 min',
    calories: '420 kcal'
  }
];

export const EVENT_SUPPLIES: EventItem[] = [
  {
    id: 'ev-armbands-vip',
    name: 'Custom Holographic VIP Event Armbands',
    category: 'armbands',
    description: 'Tamper-evident, waterproof metallic Tyvek wristbands for party access, concerts, VIP areas, and club events.',
    priceJMD: 4500,
    priceUSD: 29.50,
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    minimumQuantity: 100,
    unit: 'Pack of 100',
    isPopular: true,
    leadTime: 'Instant or Scheduled'
  },
  {
    id: 'ev-balloon-garland',
    name: 'Tropical Caribbean Balloon Arch & Garland Kit',
    category: 'decor',
    description: '120-piece luxury balloon installation kit with green, gold, black, and coral accents plus mounting strip & glue dots.',
    priceJMD: 6200,
    priceUSD: 40.00,
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    minimumQuantity: 1,
    unit: 'Complete Kit',
    isPopular: true,
    leadTime: 'Instant / Same-Day'
  },
  {
    id: 'ev-chafing-dishes',
    name: 'Stainless Steel Catering Chafing Dish Set',
    category: 'chafing',
    description: 'Full-size 8-quart chafing dishes with water pans, food pans, fuel holders, and lids to keep your party buffet piping hot.',
    priceJMD: 5800,
    priceUSD: 37.50,
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    minimumQuantity: 2,
    unit: 'Set of 2 Units',
    leadTime: 'Schedule in Advance'
  },
  {
    id: 'ev-led-lights',
    name: 'Warm Festoon Outdoor Garden Party Lights',
    category: 'lighting',
    description: '50-foot commercial weatherproof LED string lights with warm amber glow, perfect for outdoor lawns and verandas.',
    priceJMD: 4800,
    priceUSD: 31.00,
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    minimumQuantity: 1,
    unit: '50ft Reel',
    leadTime: 'Instant Delivery'
  },
  {
    id: 'ev-armbands-tyvek',
    name: 'Neon Event Access Wristbands (Multi-Color Pack)',
    category: 'armbands',
    description: 'High-visibility security wristbands in neon green, mango yellow, and electric blue for festivals and private events.',
    priceJMD: 3200,
    priceUSD: 21.00,
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    minimumQuantity: 100,
    unit: 'Pack of 100',
    isPopular: true,
    leadTime: 'Instant Delivery'
  },
  {
    id: 'ev-tableware',
    name: 'Eco-Friendly Bamboo Catering Tableware Party Pack',
    category: 'tableware',
    description: '100% biodegradable palm leaf plates, wooden cutlery sets, and recyclable Jamaican-themed party cups for 50 guests.',
    priceJMD: 5200,
    priceUSD: 34.00,
    imageUrl: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=800&q=80',
    minimumQuantity: 1,
    unit: 'Party Pack for 50',
    leadTime: 'Instant Delivery'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Browse & Choose',
    description: 'Pick from sizzling Jamaican restaurant favorites or party armbands & event decor all in one unified app.',
    icon: 'UtensilsCrossed',
    accentColor: '#0A5C36'
  },
  {
    number: '02',
    title: 'Order Now or Schedule Later',
    description: 'Need food in 35 minutes or party supplies for next Saturday? Select immediate delivery or reserve your date.',
    icon: 'CalendarClock',
    accentColor: '#F5A623'
  },
  {
    number: '03',
    title: 'Pay Securely',
    description: 'Smooth checkout with Apple Pay, Google Pay, Visa, Mastercard, or PayPal with full fraud protection.',
    icon: 'ShieldCheck',
    accentColor: '#E4572E'
  },
  {
    number: '04',
    title: 'Track Live to Your Door',
    description: 'Watch your dedicated courier navigate straight to your gate with real-time GPS and live ETA countdown.',
    icon: 'Navigation',
    accentColor: '#0A5C36'
  }
];

export const KEY_FEATURES: KeyFeature[] = [
  {
    id: 'feat-zoom',
    iconName: 'ZoomIn',
    title: 'High-Detail Product Zoom',
    description: 'Inspect dish ingredients, portion sizing, and armbands finishes with ultra-clear high resolution zoom.',
    highlightTag: 'Crystal Clear'
  },
  {
    id: 'feat-schedule',
    iconName: 'CalendarCheck',
    title: 'Instant or Scheduled Ordering',
    description: 'Order hot meals in 30 minutes or reserve event supplies and party platters weeks in advance.',
    highlightTag: 'Flexible Timing'
  },
  {
    id: 'feat-live-map',
    iconName: 'MapPinCheckInside',
    title: 'Live Map Driver Tracking',
    description: 'Follow your delivery driver turn-by-turn with pinpoint GPS and direct courier call/chat.',
    highlightTag: 'Real-time GPS'
  },
  {
    id: 'feat-payments',
    iconName: 'CreditCard',
    title: 'Secure Card & PayPal Payments',
    description: 'Bank-grade 256-bit encrypted checkout supporting major local and international cards and PayPal.',
    highlightTag: 'Bank-Grade'
  },
  {
    id: 'feat-reorder',
    iconName: 'History',
    title: 'Full Order History & 1-Tap Reorder',
    description: 'Quickly repeat your favorite family meal combos or reorder party supplies with a single tap.',
    highlightTag: 'Time Saver'
  },
  {
    id: 'feat-drivers',
    iconName: 'UserCheck',
    title: 'Verified Local Jamaican Drivers',
    description: 'Friendly, background-checked delivery partners equipped with insulated food warmers and careful handling.',
    highlightTag: 'Trusted Team'
  }
];

export const APP_SCREENS: AppScreen[] = [
  {
    id: 'screen-browse',
    title: 'Instant Menu & Supplies Catalog',
    subtitle: 'Dual Marketplace Experience',
    badge: 'Catalog',
    description: 'Seamlessly toggle between our hot kitchen grill and party supply warehouse. Filter by dietary preference, spice levels, or event theme.',
    highlights: ['One-tap category switcher', 'Spice level selectors', 'Live inventory stock indicators']
  },
  {
    id: 'screen-schedule',
    title: 'Smart Scheduling & Custom Add-ons',
    subtitle: 'Book For Today or Next Month',
    badge: 'Flex Booking',
    description: 'Specify exact delivery time slots, request customized armband numbering, or add special chef preparation notes with ease.',
    highlights: ['Calendar date & time slot picker', 'Custom event notes', 'Advance booking reminders']
  },
  {
    id: 'screen-tracking',
    title: 'Live GPS Courier Radar',
    subtitle: 'Pinpoint Driver Tracking',
    badge: 'Live Radar',
    description: 'Watch your driver move on the live Kingston map with dynamic traffic calculations, courier contact, and delivery photo confirmation.',
    highlights: ['Live route coordinates', 'Direct WhatsApp/Phone driver call', 'Arrival notification bell']
  },
  {
    id: 'screen-history',
    title: 'Digital Invoices & Instant Reordering',
    subtitle: 'Effortless Account Management',
    badge: 'History',
    description: 'Access downloadable PDF receipts for event business expenses and one-click reorder your favorite signature dinners.',
    highlights: ['Tax & expense receipts', 'Past order favorites', 'Saved delivery addresses']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Shanice Campbell',
    role: 'Event Producer & Wedding Planner',
    location: 'St. Andrew, Jamaica',
    rating: 5,
    comment: 'PBR Hut is a lifesaver! I ordered 300 custom VIP wristbands and chafing dishes for a 3-day music pop-up, plus catered jerk ribs for our crew. Everything arrived right on time with live tracking!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    tag: 'Event Planner',
    date: '3 days ago'
  },
  {
    id: 't2',
    name: 'Andre Morrison',
    role: 'Tech Lead & Weekend Host',
    location: 'Kingston 6, Jamaica',
    rating: 5,
    comment: 'The Jerk Chicken Pizza and Rotisserie Ribz are out of this world. Being able to watch the driver turn right onto Hope Road on the live map makes planning family dinner so stress-free.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    tag: 'Regular Foodie',
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'Keisha Sterling',
    role: 'Birthday & Anniversary Host',
    location: 'Portmore, Jamaica',
    rating: 5,
    comment: 'I love that I can get party balloons, tableware, and piping hot Jamaican food in one checkout. The driver was super polite and handled our fragile party items with great care.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    tag: 'Party Host',
    date: '2 weeks ago'
  }
];

export const FAQS = [
  {
    q: 'How fast is the instant delivery for hot food?',
    a: 'Instant orders are prepared immediately and typically delivered to your door in 25 to 45 minutes depending on your location in Kingston, St. Andrew, or Portmore.'
  },
  {
    q: 'Can I combine food and party supplies in one order?',
    a: 'Yes! The PBR Hut app allows you to mix hot kitchen dishes with event supplies like wristbands, balloon kits, and chafing dishes in a single checkout.'
  },
  {
    q: 'How far in advance can I schedule an event booking?',
    a: 'You can schedule orders up to 60 days in advance. We send automated reminders before the delivery date and dispatch with guaranteed time slots.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept local and international Visa, Mastercard, American Express, Apple Pay, Google Pay, and PayPal with bank-grade 256-bit encryption.'
  },
  {
    q: 'How does live driver tracking work?',
    a: 'Once your order is picked up from our kitchen or warehouse, you receive a push notification with a live interactive map link to track the driver’s exact vehicle in real-time.'
  }
];

export const PARISHES = [
  { name: 'Kingston & St. Andrew', status: 'Instant & Scheduled (Under 35 min)', available: true },
  { name: 'Portmore & St. Catherine', status: 'Instant & Scheduled (Under 45 min)', available: true },
  { name: 'Ocho Rios / St. Ann', status: 'Scheduled & Event Delivery', available: true },
  { name: 'Montego Bay / St. James', status: 'Scheduled & Event Delivery', available: true },
  { name: 'Mandeville / Manchester', status: 'Scheduled Bulk Catering', available: true }
];
