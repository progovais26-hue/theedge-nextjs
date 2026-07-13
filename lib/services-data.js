// Single source of truth for every service — used by the Services dropdown
// menu AND by the individual /services/[slug] landing pages.

export const SERVICE_CATEGORIES = [
  {
    category: "Digital Marketing & Technology",
    services: [
      {
        slug: "social-media-management-marketing",
        title: "Social Media Management & Marketing",
        icon: "📱",
        tagline: "Build a following that actually buys.",
        summary:
          "End-to-end social strategy, content calendars, and community management across Instagram, TikTok, Facebook, and LinkedIn — built to grow real engagement, not vanity metrics.",
        description: [
          "We treat your social channels like a business asset, not a side project. Every post, story, and reel is planned against a content calendar tied to your actual growth and sales goals.",
          "From daily community management to full paid social campaigns, our team handles the day-to-day so your brand shows up consistently, on-strategy, every single day.",
        ],
        features: [
          "Platform strategy & content calendars",
          "Daily posting & community management",
          "Paid social campaign management",
          "Performance reporting & optimization",
          "Influencer collaboration coordination",
        ],
      },
      {
        slug: "website-development-ui-ux-design",
        title: "Website Development & UI/UX Design",
        icon: "💻",
        tagline: "Sites that convert visitors into clients.",
        summary:
          "Custom-built websites and web apps designed around your brand and your users — fast, responsive, and engineered to convert.",
        description: [
          "A website is often the first real interaction someone has with your brand. We design and build sites that load fast, look sharp on every device, and guide visitors toward an action.",
          "Whether it's a marketing site, an e-commerce store, or a custom web app, our design and development process is built around your users, not templates.",
        ],
        features: [
          "Custom UI/UX design",
          "Responsive development (React / Next.js / WordPress)",
          "E-commerce integration",
          "SEO-ready architecture",
          "Ongoing maintenance & support",
        ],
      },
      {
        slug: "ai-ads-video-production",
        title: "AI Ads & Video Production",
        icon: "🤖",
        tagline: "AI-powered creative, produced at scale.",
        summary:
          "We combine AI tools with professional production to generate high-volume, on-brand ad creative — faster and at a fraction of traditional cost.",
        description: [
          "Performance marketing needs volume — dozens of creative variations to find what actually works. We use AI-assisted workflows to produce that volume without sacrificing quality.",
          "Every asset is still reviewed and refined by our production team, so you get creative that's fast to produce but never feels generic.",
        ],
        features: [
          "AI-generated ad concepts & variations",
          "Rapid video ad production",
          "A/B creative testing sets",
          "Platform-specific formats (Meta, TikTok, YouTube)",
          "Performance-driven iteration",
        ],
      },
    ],
  },
  {
    category: "Creative & Media Production",
    services: [
      {
        slug: "video-production",
        title: "Video Production",
        icon: "🎬",
        tagline: "Cinematic storytelling for every brand.",
        summary:
          "Brand films, commercials, and documentary-style content shot with broadcast-grade equipment and a director's eye for narrative.",
        description: [
          "Great video starts with a story worth telling. Our team develops the concept, scripts the narrative, and shoots it with the same care as a commercial production house.",
          "From single-camera brand films to multi-day documentary shoots, we deliver footage that's cinematic, on-brief, and ready for every platform you need it on.",
        ],
        features: [
          "Concept development & scripting",
          "Multi-camera cinematic shoots",
          "Professional lighting & audio",
          "Color grading & sound design",
          "Multi-format delivery",
        ],
      },
      {
        slug: "photography-videography",
        title: "Photography & Videography",
        icon: "📷",
        tagline: "Every frame tells your story.",
        summary:
          "Product, portrait, event, and brand photography paired with videography — capturing your business at its best.",
        description: [
          "Whether it's product shots for your online store, headshots for your team, or full coverage of a live event, we bring the same production-level eye to every shoot.",
          "Photography and videography are captured together whenever possible, so you leave with a complete content library from a single session.",
        ],
        features: [
          "Product & commercial photography",
          "Corporate headshots & team photos",
          "Event coverage",
          "Behind-the-scenes videography",
          "Fast-turnaround editing",
        ],
      },
      {
        slug: "graphic-design-video-editing",
        title: "Graphic Design & Video Editing",
        icon: "✂️",
        tagline: "Polished visuals, every time.",
        summary:
          "From social creatives to full video edits — our design team turns raw ideas and footage into scroll-stopping, on-brand content.",
        description: [
          "Raw footage and rough ideas need a skilled hand to become finished, on-brand assets. Our editors and designers work from your brand guidelines so everything feels consistent.",
          "We handle everything from single social graphics to full video edits with motion graphics, sound design, and color correction.",
        ],
        features: [
          "Social media creatives & templates",
          "Brand collateral design",
          "Video editing & motion graphics",
          "Thumbnail & cover design",
          "Brand-consistent visual systems",
        ],
      },
      {
        slug: "studio-rental-services",
        title: "Studio Rental Services",
        icon: "🎙️",
        tagline: "A fully-equipped studio, ready when you are.",
        summary:
          "Rent our in-house studio space — lighting, backdrops, and equipment included — for shoots, podcasts, and content days.",
        description: [
          "Not every project needs a full production crew. Book our studio space by the hour or the day and shoot your own content with professional lighting and equipment already set up.",
          "Our on-site team is available for technical support so you can focus on what's in front of the camera, not the gear behind it.",
        ],
        features: [
          "Fully-equipped shooting space",
          "Professional lighting & backdrops",
          "Podcast recording setup",
          "Flexible hourly / daily booking",
          "On-site technical support",
        ],
      },
    ],
  },
  {
    category: "Events & Brand Solutions",
    services: [
      {
        slug: "complete-event-management",
        title: "Complete Event Management",
        icon: "🎯",
        tagline: "From concept to curtain call.",
        summary:
          "Full-service planning and execution for corporate events, launches, and brand activations — every detail handled.",
        description: [
          "We manage events the way we manage productions — with a plan for every hour and a backup for every plan. From concept through vendor coordination to on-site execution, nothing is left to chance.",
          "Whether it's a product launch, a corporate conference, or a brand activation, our team runs the event so yours can focus on the guests.",
        ],
        features: [
          "Event concept & planning",
          "Vendor & venue coordination",
          "On-site event execution",
          "Timeline & budget management",
          "Post-event reporting",
        ],
      },
      {
        slug: "audio-visual-setup-live-streaming",
        title: "Audio Visual Setup & Live Streaming",
        icon: "📡",
        tagline: "Broadcast-quality, wherever you are.",
        summary:
          "Multi-camera live production and AV setup for conferences, launches, and hybrid events — streamed and recorded flawlessly.",
        description: [
          "Live events need to work perfectly the first time. We handle multi-camera streaming, sound, and stage AV so your conference or launch broadcasts at a professional standard.",
          "Every stream is monitored in real time by our crew, and you walk away with polished highlight reels ready to reuse across your channels.",
        ],
        features: [
          "Multi-camera live streaming",
          "Professional sound & AV setup",
          "Stage & lighting design",
          "Real-time stream monitoring",
          "Post-event highlight reels",
        ],
      },
      {
        slug: "brand-company-profiling",
        title: "Brand & Company Profiling",
        icon: "🏢",
        tagline: "Tell your company's story, properly.",
        summary:
          "Corporate profile videos and brand documentation that communicate who you are to investors, partners, and clients.",
        description: [
          "A strong company profile does more than list what you do — it shows investors, partners, and clients why it matters. We build profile videos and brand documents that carry real weight in a boardroom.",
          "From leadership interviews to on-site B-roll, every profile is built to represent your company at its most credible.",
        ],
        features: [
          "Corporate profile videos",
          "Brand story development",
          "Leadership & team features",
          "Investor-ready presentation assets",
          "Multi-platform delivery",
        ],
      },
      {
        slug: "advertisement-outdoor-campaign",
        title: "Advertisement & Outdoor Campaign",
        icon: "🪧",
        tagline: "Get seen, on-screen and off.",
        summary:
          "TV commercials, billboards, and outdoor campaign creative — designed and produced for maximum reach.",
        description: [
          "Outdoor and broadcast advertising still commands attention that digital can't replicate. We concept, design, and produce TVCs and outdoor creative built to stop people in their tracks.",
          "We also coordinate directly with vendors and media partners so your campaign goes up correctly, on schedule, and in the right locations.",
        ],
        features: [
          "TVC concept & production",
          "Billboard & outdoor creative design",
          "Campaign media planning support",
          "Print-ready & broadcast-ready formats",
          "Nationwide vendor coordination",
        ],
      },
      {
        slug: "media-pr-services",
        title: "Media & PR Services",
        icon: "📰",
        tagline: "Shape the narrative.",
        summary:
          "Press releases, media placements, and PR strategy that build credibility and get your brand covered.",
        description: [
          "Earned media builds a kind of trust paid advertising can't buy. We write and distribute press releases, manage media outreach, and secure placements that put your brand in front of the right audience.",
          "When things get sensitive, we're also on hand for crisis communication — protecting your reputation when it matters most.",
        ],
        features: [
          "Press release writing & distribution",
          "Media outreach & placements",
          "Crisis communication support",
          "Reputation monitoring",
          "PR strategy & planning",
        ],
      },
    ],
  },
];

export function getAllServices() {
  return SERVICE_CATEGORIES.flatMap((cat) =>
    cat.services.map((s) => ({ ...s, category: cat.category }))
  );
}

export function getServiceBySlug(slug) {
  return getAllServices().find((s) => s.slug === slug) || null;
}
