// Mock data for demonstration purposes
// In production, this would come from Supabase

export const portfolioItems = [
  {
    id: '1',
    title: 'Vogue Editorial Spring 2024',
    description: 'High fashion editorial shoot for Vogue magazine featuring spring collection from top designers. Shot on location in Paris during Fashion Week.',
    category: 'editorial' as const,
    image_url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Chanel Runway Show',
    description: 'Walking the runway for Chanel Fall/Winter collection at Paris Fashion Week. An unforgettable experience showcasing haute couture.',
    category: 'runway' as const,
    image_url: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800&q=80',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Nike Athletic Campaign',
    description: 'Commercial campaign for Nike showcasing their new athletic wear line. Focus on strength, determination, and performance.',
    category: 'commercial' as const,
    image_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    featured: true,
    order: 3,
  },
  {
    id: '4',
    title: 'Harper\'s Bazaar Cover',
    description: 'Featured on the cover of Harper\'s Bazaar magazine. A dream come true and milestone in my modeling career.',
    category: 'editorial' as const,
    image_url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    featured: true,
    order: 4,
  },
  {
    id: '5',
    title: 'Dior Fashion Campaign',
    description: 'Luxury fashion campaign for Dior featuring their iconic handbag collection and ready-to-wear pieces.',
    category: 'fashion' as const,
    image_url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    featured: false,
    order: 5,
  },
  {
    id: '6',
    title: 'Milan Fashion Week',
    description: 'Walking for multiple designers during Milan Fashion Week including Versace, Prada, and Dolce & Gabbana.',
    category: 'runway' as const,
    image_url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    featured: false,
    order: 6,
  },
  {
    id: '7',
    title: 'L\'Oréal Beauty Campaign',
    description: 'Beauty and cosmetics campaign for L\'Oréal Paris. Showcasing their new makeup line and skincare products.',
    category: 'commercial' as const,
    image_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    featured: false,
    order: 7,
  },
  {
    id: '8',
    title: 'Elle Magazine Feature',
    description: 'Multi-page spread in Elle magazine featuring sustainable fashion and eco-friendly designers.',
    category: 'editorial' as const,
    image_url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
    featured: false,
    order: 8,
  },
  {
    id: '9',
    title: 'Gucci Accessories Line',
    description: 'Campaign for Gucci accessories featuring handbags, sunglasses, and jewelry from their latest collection.',
    category: 'fashion' as const,
    image_url: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=80',
    featured: false,
    order: 9,
  },
  {
    id: '10',
    title: 'New York Fashion Week',
    description: 'Opening and closing shows for top designers at NYFW. A week filled with incredible fashion moments.',
    category: 'runway' as const,
    image_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    featured: false,
    order: 10,
  },
  {
    id: '11',
    title: 'Zara Summer Collection',
    description: 'Commercial shoot for Zara\'s summer collection featuring beachwear and casual summer styles.',
    category: 'commercial' as const,
    image_url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    featured: false,
    order: 11,
  },
  {
    id: '12',
    title: 'Marie Claire Editorial',
    description: 'Fashion editorial for Marie Claire magazine showcasing bold colors and statement pieces.',
    category: 'editorial' as const,
    image_url: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80',
    featured: false,
    order: 12,
  },
  {
    id: '13',
    title: 'Balenciaga Street Style',
    description: 'Urban fashion campaign for Balenciaga featuring their streetwear collection in NYC.',
    category: 'fashion' as const,
    image_url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    featured: false,
    order: 13,
  },
  {
    id: '14',
    title: 'Victoria\'s Secret Campaign',
    description: 'Lingerie and sleepwear campaign for Victoria\'s Secret featuring their new comfort collection.',
    category: 'commercial' as const,
    image_url: 'https://images.unsplash.com/photo-1494955464529-790512c65305?w=800&q=80',
    featured: false,
    order: 14,
  },
  {
    id: '15',
    title: 'London Fashion Week',
    description: 'Walking for emerging British designers at London Fashion Week, showcasing innovative designs.',
    category: 'runway' as const,
    image_url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    featured: false,
    order: 15,
  },
  {
    id: '16',
    title: 'Cosmopolitan Cover Story',
    description: 'Cover feature for Cosmopolitan magazine discussing career, lifestyle, and fashion industry insights.',
    category: 'editorial' as const,
    image_url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
    featured: false,
    order: 16,
  },
  {
    id: '17',
    title: 'Calvin Klein Denim',
    description: 'Denim campaign for Calvin Klein featuring their iconic jeans and casual wear collection.',
    category: 'fashion' as const,
    image_url: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    featured: false,
    order: 17,
  },
  {
    id: '18',
    title: 'H&M Conscious Collection',
    description: 'Sustainable fashion campaign for H&M\'s eco-friendly clothing line made from recycled materials.',
    category: 'commercial' as const,
    image_url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    featured: false,
    order: 18,
  },
  {
    id: '19',
    title: 'Allure Beauty Editorial',
    description: 'Beauty editorial for Allure magazine featuring avant-garde makeup and hairstyling.',
    category: 'editorial' as const,
    image_url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80',
    featured: false,
    order: 19,
  },
  {
    id: '20',
    title: 'Prada Resort Collection',
    description: 'Resort wear campaign for Prada shot in the Maldives featuring their luxury vacation collection.',
    category: 'fashion' as const,
    image_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    featured: false,
    order: 20,
  },
]

export const testimonials = [
  {
    id: '1',
    client_name: 'Sophie Laurent',
    client_role: 'Creative Director',
    client_company: 'Vogue Paris',
    content: 'Working with this model has been an absolute pleasure. Her professionalism, versatility, and ability to bring any vision to life is unmatched. She transforms every shoot into art.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    featured: true,
  },
  {
    id: '2',
    client_name: 'Marcus Chen',
    client_role: 'Fashion Photographer',
    client_company: 'Chen Studios',
    content: 'In my 20 years of fashion photography, I\'ve rarely encountered such natural talent. She understands lighting, angles, and how to convey emotion through the lens. A true professional.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    featured: true,
  },
  {
    id: '3',
    client_name: 'Isabella Romano',
    client_role: 'Brand Manager',
    client_company: 'Gucci',
    content: 'She embodies the essence of our brand perfectly. Her elegance and poise brought our campaign to life in ways we never imagined. The results exceeded all expectations.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    featured: true,
  },
  {
    id: '4',
    client_name: 'James Mitchell',
    client_role: 'Casting Director',
    client_company: 'Elite Model Management',
    content: 'A rare find in the industry. She has the complete package: stunning looks, professional attitude, and the ability to adapt to any style or concept. Clients love working with her.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    featured: true,
  },
  {
    id: '5',
    client_name: 'Amélie Dubois',
    client_role: 'Fashion Editor',
    client_company: 'Elle Magazine',
    content: 'Her editorial work is consistently outstanding. She brings creativity and fresh perspectives to every shoot. A joy to collaborate with and always delivers beyond expectations.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    featured: false,
  },
  {
    id: '6',
    client_name: 'David Park',
    client_role: 'Commercial Director',
    client_company: 'Nike',
    content: 'She brought incredible energy and authenticity to our athletic campaign. Her dedication to understanding our brand values made all the difference. Highly recommend!',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    featured: false,
  },
  {
    id: '7',
    client_name: 'Lucia Fernandez',
    client_role: 'Runway Coordinator',
    client_company: 'Milan Fashion Week',
    content: 'Her runway presence is commanding yet graceful. She knows how to work the camera and audience simultaneously. Designers specifically request her for their shows.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    featured: false,
  },
  {
    id: '8',
    client_name: 'Thomas Anderson',
    client_role: 'Art Director',
    client_company: 'Calvin Klein',
    content: 'Exceptional talent and work ethic. She understands the vision immediately and delivers consistently. Our campaigns with her have been some of our most successful.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    featured: false,
  },
  {
    id: '9',
    client_name: 'Yuki Tanaka',
    client_role: 'Beauty Director',
    client_company: 'L\'Oréal Paris',
    content: 'Perfect for beauty campaigns. Her features photograph beautifully and she knows how to showcase products naturally. A consummate professional in every way.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
    featured: false,
  },
  {
    id: '10',
    client_name: 'Emma Wilson',
    client_role: 'Senior Stylist',
    client_company: 'Harper\'s Bazaar',
    content: 'She makes my job easy! She can pull off any look from haute couture to street style. Her versatility and professionalism are unmatched in the industry.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
    featured: false,
  },
]

export const blogPosts = [
  {
    id: '1',
    title: 'My Journey to Paris Fashion Week',
    slug: 'journey-to-paris-fashion-week',
    excerpt: 'From small-town dreams to walking the most prestigious runways in the world. Here\'s how I made it to Paris Fashion Week and what I learned along the way.',
    content: `Walking the runway at Paris Fashion Week was a dream I\'ve had since I was a little girl. The journey wasn\'t easy, but every challenge made the moment I stepped onto that runway even more meaningful.

## The Beginning

It all started when I was discovered at a local mall at age 16. A scout from a modeling agency saw something in me that I didn\'t even see in myself. That chance encounter changed my life forever.

## Years of Preparation

The path to Paris wasn\'t straightforward. I spent years building my portfolio, attending countless castings, and learning the craft. I worked with local photographers, walked in regional fashion shows, and slowly built my reputation.

## The Big Break

My breakthrough came when I was selected for a major editorial shoot with Vogue. That exposure led to more opportunities, and eventually, I received the call every model dreams of - an invitation to walk at Paris Fashion Week.

## The Experience

Nothing can prepare you for the energy of Paris Fashion Week. The backstage chaos, the incredible designers, the rush of walking down the runway with hundreds of eyes on you - it\'s exhilarating and terrifying all at once.

## Lessons Learned

This journey taught me that success comes from persistence, professionalism, and staying true to yourself. Every "no" brought me closer to a "yes," and every challenge made me stronger.

The fashion industry is demanding, but for those who are passionate and dedicated, it offers incredible opportunities to travel the world, work with creative geniuses, and be part of something truly artistic.`,
    cover_image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=1200&q=80',
    author: 'Alexandra Morgan',
    published: true,
    tags: ['Fashion Week', 'Career', 'Paris', 'Runway'],
    read_time: 8,
  },
  {
    id: '2',
    title: 'Behind the Scenes: Editorial Photoshoots',
    slug: 'behind-scenes-editorial-photoshoots',
    excerpt: 'Ever wondered what really happens during a high-fashion editorial shoot? I\'m pulling back the curtain to show you the reality behind those stunning magazine spreads.',
    content: `Editorial photoshoots are where fashion becomes art. These shoots are different from commercial work - they\'re about creativity, storytelling, and pushing boundaries.

## The Team

A typical editorial shoot involves an incredible team: photographer, stylist, makeup artist, hair stylist, art director, and assistants. Everyone brings their creative vision to create something magical.

## Preparation

Preparation starts weeks before the shoot. Mood boards are created, locations are scouted, and outfits are carefully selected. Every detail matters in creating the final vision.

## The Shoot Day

Shoot days are long - often 10-12 hours. We might shoot in multiple locations, with numerous outfit changes. It requires stamina, patience, and the ability to stay focused and energized throughout.

## The Creative Process

What I love most about editorial work is the creative freedom. We experiment with poses, expressions, and concepts. The photographer might say "give me something unexpected," and that\'s when the magic happens.

## Challenges

Not every moment is glamorous. We shoot in all weather conditions, wear uncomfortable outfits, and hold difficult poses. But seeing the final images makes every challenge worthwhile.

## The Final Product

Months after the shoot, seeing your work in a magazine is incredibly rewarding. Those images represent the collaboration and creativity of an entire team working together to create art.`,
    cover_image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
    author: 'Alexandra Morgan',
    published: true,
    tags: ['Editorial', 'Photography', 'Behind the Scenes', 'Fashion'],
    read_time: 6,
  },
  {
    id: '3',
    title: 'Maintaining Wellness in the Fashion Industry',
    slug: 'maintaining-wellness-fashion-industry',
    excerpt: 'The fashion industry can be demanding. Here\'s how I maintain my physical and mental health while pursuing my modeling career.',
    content: `The fashion industry is known for its demanding nature, but I\'ve learned that taking care of yourself isn\'t just important - it\'s essential for longevity in this career.

## Physical Health

Staying in shape is part of the job, but I approach it from a health-first perspective. I work with a nutritionist and personal trainer to ensure I\'m fueling my body properly and exercising in a sustainable way.

## Mental Wellness

The constant scrutiny and rejection can take a toll mentally. I work with a therapist, practice meditation, and maintain strong boundaries between work and personal life.

## Nutrition

I don\'t believe in extreme diets. Instead, I focus on whole foods, proper hydration, and listening to my body. I eat to nourish myself, not to fit into a certain size.

## Exercise Routine

My fitness routine includes strength training, yoga, and cardio. I focus on feeling strong and healthy rather than achieving a specific look.

## Sleep and Recovery

Quality sleep is non-negotiable. I aim for 7-9 hours per night and have a consistent bedtime routine that helps me unwind after busy days.

## Setting Boundaries

Learning to say no has been crucial. I turn down jobs that don\'t align with my values or that would compromise my health and wellbeing.

## Support System

Having a strong support system of family, friends, and industry mentors helps me stay grounded and maintain perspective.

The fashion industry is evolving, and I\'m proud to be part of a generation of models who prioritize health and wellness while pursuing their careers.`,
    cover_image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
    author: 'Alexandra Morgan',
    published: true,
    tags: ['Wellness', 'Health', 'Mental Health', 'Lifestyle'],
    read_time: 7,
  },
  {
    id: '4',
    title: 'The Evolution of Sustainable Fashion',
    slug: 'evolution-sustainable-fashion',
    excerpt: 'Sustainability is no longer optional in fashion. Here\'s my perspective on the industry\'s shift toward eco-conscious practices and how models can make a difference.',
    content: `The fashion industry is one of the world\'s largest polluters, but change is happening. As models, we have a platform to advocate for sustainable practices and support brands making a difference.

## Understanding the Impact

The fashion industry\'s environmental impact is staggering - from water usage to textile waste. Understanding these issues is the first step toward being part of the solution.

## Choosing Sustainable Brands

I\'m increasingly selective about the brands I work with. I prioritize companies with transparent supply chains, ethical labor practices, and environmental commitments.

## Circular Fashion

The concept of circular fashion - where clothes are designed to be reused, repaired, and recycled - is gaining momentum. I\'ve worked on campaigns promoting clothing rental and resale.

## My Personal Practices

In my personal life, I shop secondhand, invest in quality pieces that last, and properly care for my clothes to extend their lifespan. I also donate or sell items I no longer wear.

## Industry Changes

More designers are using sustainable materials like organic cotton, recycled polyester, and innovative fabrics made from unexpected sources. It\'s exciting to see this creativity.

## The Role of Models

Models can use their influence to promote sustainable fashion. By speaking about these issues and supporting eco-conscious brands, we can help shift consumer behavior.

## Looking Forward

The future of fashion is sustainable. While we still have a long way to go, the progress being made gives me hope. Every small action contributes to larger change.`,
    cover_image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    author: 'Alexandra Morgan',
    published: true,
    tags: ['Sustainability', 'Environment', 'Fashion Industry', 'Ethics'],
    read_time: 9,
  },
  {
    id: '5',
    title: 'Breaking Into the Modeling Industry: Advice for Aspiring Models',
    slug: 'breaking-into-modeling-industry',
    excerpt: 'Thinking about pursuing a modeling career? Here\'s my honest advice about what it takes to succeed in this competitive industry.',
    content: `I receive countless messages from aspiring models asking for advice. While everyone\'s journey is unique, there are some universal truths about breaking into this industry.

## Is Modeling Right for You?

Before pursuing modeling, ask yourself why you want to do it. If it\'s just for fame or money, you might be disappointed. Successful models are passionate about fashion, art, and the creative process.

## Getting Started

You don\'t need to spend thousands on professional photos initially. Start with test shoots with emerging photographers building their portfolios. These collaborations benefit both parties.

## Finding Representation

Research agencies carefully. Legitimate agencies don\'t charge upfront fees. Attend open calls, submit your photos online, and be patient. Rejection is part of the process.

## Building Your Portfolio

Your portfolio should showcase versatility. Include headshots, full-body shots, and images showing different looks and styles. Quality over quantity always.

## Developing Your Skills

Take acting classes, practice posing in front of a mirror, study fashion magazines, and learn about the industry. The more prepared you are, the more confident you\'ll be.

## Professionalism Matters

Always be on time, be prepared, and maintain a positive attitude. Your reputation is everything in this industry. People remember how you make them feel.

## Handling Rejection

You\'ll hear "no" far more than "yes." Don\'t take it personally. Sometimes it\'s about the look they need for that specific job, not about your worth as a model.

## Social Media Presence

Build an authentic social media presence. Share your journey, but maintain professionalism. Many models are discovered through Instagram today.

## Education and Backup Plans

Don\'t put all your eggs in one basket. Continue your education and develop other skills. Modeling careers can be unpredictable.

## Final Thoughts

Modeling can be an incredible career, but it requires dedication, resilience, and professionalism. If you\'re passionate and willing to work hard, pursue your dreams - but do so with realistic expectations and a solid plan.`,
    cover_image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80',
    author: 'Alexandra Morgan',
    published: true,
    tags: ['Career Advice', 'Aspiring Models', 'Industry Tips', 'Getting Started'],
    read_time: 10,
  },
]

export const services = [
  {
    id: '1',
    title: 'Editorial Modeling',
    description: 'High-fashion editorial work for magazines, lookbooks, and creative campaigns. Perfect for brands looking to create artistic, story-driven content.',
    features: [
      'Magazine editorial shoots',
      'Fashion lookbooks',
      'Creative campaigns',
      'Artistic collaborations',
      'Digital and print media',
    ],
    price: 'Starting at $2,500/day',
    popular: false,
  },
  {
    id: '2',
    title: 'Commercial Modeling',
    description: 'Commercial campaigns for brands, products, and advertising. Ideal for companies seeking professional representation for their products and services.',
    features: [
      'Product campaigns',
      'Brand ambassadorship',
      'Social media content',
      'E-commerce photography',
      'Video commercials',
      'Billboard advertising',
    ],
    price: 'Starting at $3,500/day',
    popular: true,
  },
  {
    id: '3',
    title: 'Runway Modeling',
    description: 'Professional runway modeling for fashion shows, presentations, and events. Experienced in walking for both established and emerging designers.',
    features: [
      'Fashion week shows',
      'Designer presentations',
      'Trunk shows',
      'Fashion events',
      'Brand launches',
    ],
    price: 'Starting at $2,000/show',
    popular: false,
  },
  {
    id: '4',
    title: 'Brand Partnerships',
    description: 'Long-term brand partnerships and ambassadorships. Perfect for brands looking for ongoing representation and authentic promotion.',
    features: [
      'Social media promotion',
      'Event appearances',
      'Content creation',
      'Brand representation',
      'Exclusive partnerships',
      'Multi-campaign contracts',
    ],
    price: 'Custom packages available',
    popular: true,
  },
]

export const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Fashion Shows', value: '150+' },
  { label: 'Magazine Covers', value: '25+' },
  { label: 'Brand Campaigns', value: '100+' },
]

export const experience = [
  {
    year: '2024',
    title: 'International Fashion Icon',
    description: 'Featured in major campaigns for Chanel, Dior, and Gucci. Walked in all major fashion weeks.',
  },
  {
    year: '2023',
    title: 'Vogue Cover Model',
    description: 'Appeared on covers of Vogue Paris, Elle, and Harper\'s Bazaar. Established as top editorial model.',
  },
  {
    year: '2022',
    title: 'Rising Star',
    description: 'Breakthrough year with major campaigns for Nike, L\'Oréal, and Calvin Klein.',
  },
  {
    year: '2021',
    title: 'Fashion Week Debut',
    description: 'Made debut at New York Fashion Week. Walked for emerging and established designers.',
  },
  {
    year: '2020',
    title: 'Agency Signing',
    description: 'Signed with Elite Model Management. Began working with top photographers and brands.',
  },
  {
    year: '2019',
    title: 'Editorial Success',
    description: 'First major editorial spreads in fashion magazines. Built strong portfolio.',
  },
  {
    year: '2018',
    title: 'Professional Start',
    description: 'Began professional modeling career. Worked on local campaigns and test shoots.',
  },
  {
    year: '2016',
    title: 'Discovery',
    description: 'Discovered by modeling scout. Started building portfolio and learning the industry.',
  },
]

export const measurements = {
  height: '5\'10" / 178 cm',
  bust: '34" / 86 cm',
  waist: '24" / 61 cm',
  hips: '35" / 89 cm',
  dress: 'US 2-4 / EU 34-36',
  shoes: 'US 8.5 / EU 39',
  hair: 'Dark Brown',
  eyes: 'Hazel',
}

export const skills = [
  'Runway Walking',
  'Editorial Posing',
  'Commercial Acting',
  'Product Modeling',
  'Beauty Modeling',
  'Fitness Modeling',
  'Social Media Content',
  'Video Performance',
  'Improvisation',
  'Multiple Languages (English, French, Spanish)',
]
