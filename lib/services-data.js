// Single source of truth for every service — used by the Services dropdown
// menu AND by the individual /services/[slug] landing pages.

export const SERVICE_CATEGORIES = [
  {
    category: "Digital Marketing & Technology",
    services: [
      {
        slug: "social-media-management-marketing",
        title: "Social Media Management & Marketing",
        icon: ["instagram", "facebook", "tiktok", "linkedin"],
        videos: [
          { id: "ekNTD9OLdbo", title: "Reel 1", client: "Sitarey By Mehnaz" },
          { id: "KzpTzB3jbcE", title: "Reel 2", client: "Sitarey By Mehnaz" },
          { id: "yncP145XgFk", title: "Reel 3", client: "Sitarey By Mehnaz" },
          { id: "hDqoYR7HjpM", title: "Reel 4", client: "Sitarey By Mehnaz" },
          { id: "mF0GiMgS4go", title: "Reel 5", client: "Sitarey By Mehnaz" },
          { id: "24tYtA2UgC4", title: "Content Reel 1", client: "Bun Affair" },
          { id: "-W_r4j8NwAE", title: "Content Reel 2", client: "Bun Affair" },
          { id: "jD1iY3Mqr8g", title: "Content Reel 3", client: "Bun Affair" },
          { id: "oTPwFLfger4", title: "Content Reel 4", client: "Bun Affair" },
          { id: "YMdcR8S-BMQ", title: "Animation Reel 1", client: "G&D Nutrition" },
          { id: "IA3TGzqPP94", title: "Animation Reel 2", client: "G&D Nutrition" },
          { id: "MsBWZdDZon0", title: "Animation Post", client: "Food Bar" }
        ],
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
        icon: ["layout"],
        images: [
          { src: "/services/website-development-ui-ux-design/gnd-nutritions.png", caption: "G&D Nutrition" },
          { src: "/services/website-development-ui-ux-design/shop-go.png", caption: "Shop GO" },
          { src: "/services/website-development-ui-ux-design/social-jockey.png", caption: "Social Jockey" },
        ],
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
        icon: ["google", "facebook", "youtube"],
        videos: [
          { id: "VNdz1Vfj7Jk", title: "AI Model Video Reel", client: "Spectrum Developers" },
          { id: "oPfBu06WC2E", title: "AI Video Reel 2", client: "Spectrum Developers" }
        ],
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
        icon: ["clapperboard"],
        videos: [
          { id: "FQAntfx06hE", title: "Brand Film", client: "Fibbi Builder" },
          { id: "-cGQArxuV-U", title: "Project Showcase", client: "Fibbi Builder" },
          { id: "XXyMVB2Fbcw", title: "Aerial Site Overview", client: "Estate 1 City Comfort" },
          { id: "7oeEJdCQniw", title: "Progress Documentation", client: "Estate 1 City Comfort" },
          { id: "HSSyAMkNc60", title: "Development Update", client: "Estate 1 City Comfort" },
          { id: "f3bd-f_9v0M", title: "Luxury Apartments Showcase", client: "Estate 1 City Comfort" },
          { id: "Hm2SOjqJWpg", title: "Reel", client: "City Comfort" },
          { id: "QpgKZN1v4m0", title: "Classic Residency Brand Film", client: "Saima Paari Builder" },
          { id: "qwKHHtlSidE", title: "Project Walkthrough", client: "Saima Paari Builder" },
          { id: "WKPtIAZCAYI", title: "Aerial Site Film", client: "Saima Paari Builder" },
          { id: "E0Rwceux6z4", title: "Tower Construction Film", client: "Burj Ul Ameen" },
          { id: "dKwYK6KlaXQ", title: "Rooms Apartments Showcase", client: "Burj Ul Ameen" },
          { id: "iLTusD9Y3cY", title: "Lifestyle Brand Film", client: "Burj Ul Ameen" },
          { id: "PpnwmWQaTig", title: "Site Progress Documentary", client: "Burj Ul Ameen" },
          { id: "8BwjaEm48Dg", title: "Project Highlights Reel", client: "Burj Ul Ameen" },
          { id: "BJ6unInyICs", title: "Brand Film", client: "Charlie Builder" },
          { id: "lMbQDIXXbCY", title: "Project Film", client: "Charlie Builder" },
          { id: "c0_wwhTiIzc", title: "Brand Video", client: "G&D Nutrition" }
        ],
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
        icon: ["camera"],
        images: [
          { src: "/services/photography-videography/high-level-description-a-cinematic-comme_2K9tULnGVZ-BDx74LibAhQ_zwkFCuDqSZGoS6lyd_QKQA_cover.jpg", caption: "Cinematic Studio Setup" },
          { src: "/services/photography-videography/high-level-description-a-cinematic-comme_oq9WzEd5X4-qwkSXFKbLDQ_zwkFCuDqSZGoS6lyd_QKQA.jpg", caption: "Professional Camera Rig" },
          { src: "/services/photography-videography/high-level-description-a-high-end-commer_HKyQ4ciWWZqielVqGuKSdw_zwkFCuDqSZGoS6lyd_QKQA.jpg", caption: "Commercial Production Setup" },
          { src: "/services/photography-videography/high-level-description-a-high-end-commer_W2_ggaAkWa2VF8CcpMKK9Q_zwkFCuDqSZGoS6lyd_QKQA.jpg", caption: "High-End Commercial Shoot" }
        ],
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
        icon: ["wand"],
        images: [
          { src: "/services/graphic-design-video-editing/spectrum-poster-1.jpg", caption: "Spectrum Developers — Poster" },
          { src: "/services/graphic-design-video-editing/modern-residency-1.jpg", caption: "Modern Residency" },
          { src: "/services/graphic-design-video-editing/paari-builders-1.jpg", caption: "Paari Builders & Developers" },
          { src: "/services/graphic-design-video-editing/food-bar-deal.jpg", caption: "Food Bar — Deal Promo" },
          { src: "/services/graphic-design-video-editing/mothers-day.jpg", caption: "Mother's Day Campaign" },
          { src: "/services/graphic-design-video-editing/moza-post.jpg", caption: "Moza — Social Post" },
        ],
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
        icon: ["mic"],
        images: [
          { src: "/services/studio-rental-services/high-level-description-a-photograph-of-a_oOyHm-8_X3awi2aV3Zt3Jw_7e5BMoVcQQyxK65hhwL-HA_cover.jpg", caption: "Professional Studio Space" },
          { src: "/services/studio-rental-services/high-level-description-a-photograph-of-a_oTuxzPhAWgKMHMc4L1Zpqg_7e5BMoVcQQyxK65hhwL-HA.jpg", caption: "Podcast Recording Setup" },
          { src: "/services/studio-rental-services/high-level-description-a-photograph-of-a_SQw0NhGqVdmpamBArzV4ZA_7e5BMoVcQQyxK65hhwL-HA.jpg", caption: "Fully Equipped Studio" },
          { src: "/services/studio-rental-services/high-level-description-a-photograph-of-a_Wz6AkeDrWEWbU-sQtJj_aw_7e5BMoVcQQyxK65hhwL-HA.jpg", caption: "Studio Lighting Setup" }
        ],
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
        icon: ["calendar"],
        videos: [
          { id: "a9TPiIdqzSU", title: "Opening Session", client: "National Incubation Center – NED" },
          { id: "GucDWoERtjM", title: "Speaker Keynote", client: "National Incubation Center – NED" },
          { id: "BsVWDU4NdlM", title: "Panel Discussion", client: "National Incubation Center – NED" },
          { id: "2Er-43mMpJc", title: "Startup Pitches", client: "National Incubation Center – NED" },
          { id: "_HUbTMLrGO8", title: "Event Highlights Reel", client: "National Incubation Center – NED" },
          { id: "oNExDxunv_o", title: "Conference Coverage", client: "SPDPA" },
          { id: "seMPIyDGJdk", title: "Awards Ceremony", client: "SPDPA" },
          { id: "YC0LCLqEIn8", title: "Event Documentary", client: "SPDPA" },
          { id: "szGTA31KCgM", title: "Workshop Coverage", client: "O'Level Workshop – Fazil Mania" },
          { id: "3tY0Qx7-u6A", title: "Highlights Reel", client: "O'Level Workshop – Fazil Mania" }
        ],
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
        icon: ["youtube", "radio"],
        images: [
          { src: "/services/audio-visual-setup-live-streaming/high-level-description-a-photograph-of-a_d_MDd142WoWC8xKNJRYFCg_lxKXaWRgRMC0UIO_h-W0LQ.jpg", caption: "Corporate Event AV Setup" },
          { src: "/services/audio-visual-setup-live-streaming/high-level-description-a-photograph-of-a_Ellct98KW1W2ZC9EMijFbQ_lxKXaWRgRMC0UIO_h-W0LQ_cover.jpg", caption: "Live Streaming Production" },
          { src: "/services/audio-visual-setup-live-streaming/high-level-description-a-photograph-of-a_f39_AK76WliDzq1RTUsLUA_lxKXaWRgRMC0UIO_h-W0LQ.jpg", caption: "Professional Stage Setup" },
          { src: "/services/audio-visual-setup-live-streaming/high-level-description-a-photograph-of-a_G_6I1r89VJ6T6Hd0ElUeNQ_lxKXaWRgRMC0UIO_h-W0LQ.jpg", caption: "Conference Live Stream" }
        ],
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
        icon: ["briefcase"],
        images: [
          { src: "/services/brand-company-profiling/trifold-mockup.jpg", caption: "Trifold Brochure Mockup" },
          { src: "/services/brand-company-profiling/brochure-1.png", caption: "Company Brochure" },
          { src: "/services/brand-company-profiling/brochure-3.png", caption: "Company Brochure" },
          { src: "/services/brand-company-profiling/brochure-5.png", caption: "Company Brochure" },
          { src: "/services/brand-company-profiling/menu-card.jpg", caption: "Menu Card Design" },
        ],
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
        icon: ["megaphone"],
        images: [
          { src: "/services/advertisement-outdoor-campaign/billboard.jpg", caption: "10x6 Billboard" },
          { src: "/services/advertisement-outdoor-campaign/pole-banner.jpg", caption: "3x5 Pole Banner" },
          { src: "/services/advertisement-outdoor-campaign/standee.jpg", caption: "Standee Design" },
        ],
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
        icon: ["newspaper"],
        images: [
          { src: "/services/media-pr-services/photo-1504711434969-e33886168f5c.jfif", caption: "Media & PR Campaign" }
        ],
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
