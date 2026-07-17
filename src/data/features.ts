export type Feature = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "privacy" | "insights" | "stories" | "expression" | "control";
  icon: string;
  summary: string;
  description: string;
  benefits: string[];
  keywords: string[];
  imageAlt: string;
  image: string;
};

export const FEATURES: Feature[] = [
  {
    slug: "preview-stories",
    title: "Preview Stories Without Being Seen",
    shortTitle: "Preview Stories",
    category: "privacy",
    icon: "eye-off",
    summary:
      "View Instagram stories privately without triggering a seen receipt or appearing in the viewer list.",
    description:
      "Story Preview is one of the most requested Instagram Plus features. It lets you open a friend's story and watch it without the pressure to react — and without showing up on their viewer sheet. Perfect when you want to stay updated without starting a conversation.",
    benefits: [
      "Watch stories anonymously without a seen receipt",
      "Reduce social pressure around instant replies",
      "Stay informed on friends' updates on your own schedule",
    ],
    keywords: [
      "instagram plus story preview",
      "view stories without being seen",
      "anonymous story view instagram",
    ],
    imageAlt:
      "Instagram Plus Story Preview feature icon for viewing stories without being seen",
    image: "/images/17.webp",
  },
  {
    slug: "preview-messages",
    title: "Preview Messages Without Marking Them Seen",
    shortTitle: "Preview Messages",
    category: "privacy",
    icon: "message",
    summary:
      "Read direct messages quietly so conversations stay unmarked until you are ready to reply.",
    description:
      "Message Preview gives you breathing room in busy DMs. Open and read incoming chats without marking them as seen, so you can reply thoughtfully instead of instantly — a privacy control that many Instagram users have wanted for years.",
    benefits: [
      "Read DMs without the blue seen indicator",
      "Reply when you are ready, not when you open the chat",
      "Manage conversations with less social pressure",
    ],
    keywords: [
      "instagram plus preview messages",
      "read messages without seen",
      "instagram dm privacy",
    ],
    imageAlt:
      "Instagram Plus Preview Messages feature for reading DMs without marking them seen",
    image: "/images/13.webp",
  },
  {
    slug: "story-rewatch-insights",
    title: "Get Story Rewatch Insights",
    shortTitle: "Rewatch Insights",
    category: "insights",
    icon: "refresh",
    summary:
      "See how many times your stories were rewatched so you know which moments resonated most.",
    description:
      "Story Rewatch Insights show replay counts on your stories. Instead of only knowing who viewed once, you can spot the frames people returned to — useful for creators, friends, and anyone curious about engagement quality.",
    benefits: [
      "Track how often stories are replayed",
      "Identify your most engaging story moments",
      "Understand viewer interest beyond a single view",
    ],
    keywords: [
      "instagram plus rewatch insights",
      "story replay count instagram",
      "instagram story analytics plus",
    ],
    imageAlt:
      "Instagram Plus Story Rewatch Insights showing how many times stories were replayed",
    image: "/images/15.webp",
  },
  {
    slug: "search-story-viewers",
    title: "Search Your Story Viewer List",
    shortTitle: "Search Viewers",
    category: "insights",
    icon: "search",
    summary:
      "Quickly find whether a specific person viewed your story with a searchable viewer sheet.",
    description:
      "Search Viewer List removes the endless scroll through hundreds of viewers. Type a name and instantly confirm if someone saw your story — a simple but powerful Instagram Plus upgrade for busy accounts.",
    benefits: [
      "Find specific viewers in seconds",
      "Skip scrolling long viewer lists",
      "Confirm story reach for important contacts",
    ],
    keywords: [
      "instagram plus search viewer list",
      "find who viewed my story",
      "instagram story viewer search",
    ],
    imageAlt:
      "Instagram Plus Search Story Viewer List feature to find specific story viewers",
    image: "/images/16.webp",
  },
  {
    slug: "story-view-time",
    title: "See When Your Story Was Viewed",
    shortTitle: "View Timestamps",
    category: "insights",
    icon: "clock",
    summary:
      "Check timestamps for story views so you know when people actually watched.",
    description:
      "View-time insights add context to your story analytics. Learn when friends or followers opened your story — morning, lunch break, or late night — and plan future posts around real viewing habits.",
    benefits: [
      "See exact view timing on stories",
      "Spot peak engagement windows",
      "Plan story posts for better reach",
    ],
    keywords: [
      "instagram plus see when story viewed",
      "story view timestamp instagram",
      "instagram plus viewer notifications",
    ],
    imageAlt:
      "Instagram Plus feature showing when a story was viewed with timestamps",
    image: "/images/2.webp",
  },
  {
    slug: "viewer-notifications",
    title: "Get Notifications for Specific Story Viewers",
    shortTitle: "Viewer Alerts",
    category: "insights",
    icon: "bell",
    summary:
      "Receive alerts when selected people view your story so you never miss important views.",
    description:
      "Viewer Notifications let you follow the people who matter most. Set alerts for specific accounts and get notified the moment they watch your story — ideal for close friends, clients, or collaborations.",
    benefits: [
      "Alert when chosen people view your story",
      "Stay on top of high-priority viewers",
      "Respond faster to meaningful engagement",
    ],
    keywords: [
      "instagram plus viewer notifications",
      "notify when someone views story",
      "instagram story viewer alerts",
    ],
    imageAlt:
      "Instagram Plus notifications for specific story viewers feature icon",
    image: "/images/1.webp",
  },
  {
    slug: "spotlight-story",
    title: "Spotlight Your Story",
    shortTitle: "Story Spotlight",
    category: "stories",
    icon: "flame",
    summary:
      "Push your story to the top of friends' feeds so your best moments get priority visibility.",
    description:
      "Story Spotlight amplifies a selected story so it stands out among the many rings friends see daily. Use it for announcements, celebrations, or moments you do not want buried in the story tray.",
    benefits: [
      "Prioritize a story in friends' trays",
      "Boost visibility for important updates",
      "Stand out without posting more content",
    ],
    keywords: [
      "instagram plus story spotlight",
      "spotlight your story instagram",
      "instagram plus amplify story",
    ],
    imageAlt:
      "Instagram Plus Story Spotlight feature to push stories to the top of feeds",
    image: "/images/11.webp",
  },
  {
    slug: "extend-story-expiry",
    title: "Extend Your Story Expiry to 48 Hours",
    shortTitle: "Story Extend",
    category: "stories",
    icon: "timer",
    summary:
      "Keep stories live for an extra day so friends in other time zones still catch them.",
    description:
      "Story Extend adds another 24 hours to the usual 24-hour lifespan. Your best posts stay available longer — helpful for travel days, events, and global friend groups who check Instagram at different times.",
    benefits: [
      "Stories last up to 48 hours",
      "Reach friends across time zones",
      "Give important moments a longer window",
    ],
    keywords: [
      "instagram plus extend story",
      "48 hour instagram story",
      "instagram plus story expiry",
    ],
    imageAlt:
      "Instagram Plus Story Extend feature to keep stories visible for 48 hours",
    image: "/images/10.webp",
  },
  {
    slug: "super-hearts",
    title: "Send Super Hearts to Stories",
    shortTitle: "Super Hearts",
    category: "stories",
    icon: "heart",
    summary:
      "Send animated Super Hearts that burst across the screen to celebrate friends' stories.",
    description:
      "Super Hearts go beyond a standard like. They deliver a vibrant, animated reaction that pops in the creator's inbox — a louder way to celebrate birthdays, wins, and everyday moments that deserve extra energy.",
    benefits: [
      "Stand out with animated story reactions",
      "Celebrate friends more expressively",
      "Make your support impossible to miss",
    ],
    keywords: [
      "instagram plus super hearts",
      "send super hearts to stories",
      "instagram plus story reactions",
    ],
    imageAlt:
      "Instagram Plus Super Hearts animated reaction feature for stories",
    image: "/images/9.webp",
  },
  {
    slug: "multiple-story-audiences",
    title: "Create Multiple Story Audiences",
    shortTitle: "Audience Lists",
    category: "control",
    icon: "users",
    summary:
      "Build unlimited audience lists so each story reaches exactly the right circle.",
    description:
      "Unlimited Audience Lists let you share different stories with coworkers, family, close friends, or niche groups — without juggling Close Friends alone. More lists mean finer control over who sees what.",
    benefits: [
      "Create as many audience lists as you need",
      "Share the right story with the right people",
      "Keep personal and professional circles separate",
    ],
    keywords: [
      "instagram plus multiple audiences",
      "instagram story audience lists",
      "instagram plus close friends lists",
    ],
    imageAlt:
      "Instagram Plus multiple story audiences and custom lists feature",
    image: "/images/5.webp",
  },
  {
    slug: "post-to-profile-only",
    title: "Only Post Content to Your Profile",
    shortTitle: "Profile-Only Posts",
    category: "control",
    icon: "image-off",
    summary:
      "Publish to your grid without pushing the post into friends' main feeds.",
    description:
      "Profile-Only Posts help you curate your grid quietly. Update your profile aesthetic or archive a look without flooding followers' feeds — ideal for portfolio-style profiles and intentional posting.",
    benefits: [
      "Update your grid without feed spam",
      "Curate profile aesthetics privately",
      "Separate profile content from feed pushes",
    ],
    keywords: [
      "instagram plus post to profile only",
      "post without appearing in feed",
      "instagram plus grid only post",
    ],
    imageAlt:
      "Instagram Plus option to post content only to your profile grid",
    image: "/images/7.webp",
  },
  {
    slug: "share-to-highlights-only",
    title: "Only Share Stories to Highlights",
    shortTitle: "Highlights Only",
    category: "control",
    icon: "highlight",
    summary:
      "Add content straight to Highlights without broadcasting a temporary story ring.",
    description:
      "Share-to-Highlights-Only is built for evergreen profile content. Drop a photo or video into a highlight collection without it appearing as a 24-hour story — cleaner archiving for brands and creators.",
    benefits: [
      "Build highlights without temporary stories",
      "Keep your story tray intentional",
      "Archive useful content faster",
    ],
    keywords: [
      "instagram plus share to highlights only",
      "add to highlights without story",
      "instagram plus highlights",
    ],
    imageAlt:
      "Instagram Plus feature to share stories directly to highlights only",
    image: "/images/6.webp",
  },
  {
    slug: "pin-more-posts",
    title: "Pin More Posts on Your Profile",
    shortTitle: "More Profile Pins",
    category: "expression",
    icon: "pin",
    summary:
      "Pin up to six posts on your profile to showcase the work and moments that matter most.",
    description:
      "More Profile Pins expands the standard pin limit so your grid highlights a fuller story. Feature bestsellers, collaborations, travel chapters, or brand pillars at the top of your profile.",
    benefits: [
      "Pin up to 6 posts instead of fewer defaults",
      "Highlight more of your best work",
      "Shape a stronger first impression",
    ],
    keywords: [
      "instagram plus pin more posts",
      "pin 6 posts instagram",
      "instagram plus profile pins",
    ],
    imageAlt:
      "Instagram Plus More Profile Pins feature allowing up to six pinned posts",
    image: "/images/8.webp",
  },
  {
    slug: "custom-bio-fonts",
    title: "Unlock Custom Fonts for Your Bio",
    shortTitle: "Custom Bio Fonts",
    category: "expression",
    icon: "type",
    summary:
      "Style your profile bio with exclusive typography that matches your personal brand.",
    description:
      "Custom Bio Fonts turn a plain text bio into a design statement. Choose from Instagram Plus typography options to make your profile feel more intentional and on-brand at a glance.",
    benefits: [
      "Stand out with exclusive bio fonts",
      "Match typography to your aesthetic",
      "Strengthen personal or creator branding",
    ],
    keywords: [
      "instagram plus custom bio fonts",
      "instagram bio font unlock",
      "instagram plus typography",
    ],
    imageAlt:
      "Instagram Plus custom fonts for profile bio personalization feature",
    image: "/images/14.webp",
  },
  {
    slug: "custom-story-fonts",
    title: "Add Custom Fonts to Your Stories",
    shortTitle: "Story Fonts",
    category: "expression",
    icon: "Aa",
    summary:
      "Design story text with premium fonts beyond the standard Instagram type set.",
    description:
      "Custom story fonts give creators and everyday users richer typography for captions, quotes, and announcements. Pair bold headlines with soft body text without leaving the story editor.",
    benefits: [
      "Access exclusive story typefaces",
      "Design more polished story layouts",
      "Express mood through typography",
    ],
    keywords: [
      "instagram plus custom story fonts",
      "instagram story fonts plus",
      "instagram plus text styles",
    ],
    imageAlt:
      "Instagram Plus custom fonts for stories text styling feature",
    image: "/images/3.webp",
  },
  {
    slug: "custom-message-fonts",
    title: "Message with Custom Fonts",
    shortTitle: "DM Fonts",
    category: "expression",
    icon: "Aa",
    summary:
      "Send direct messages with custom fonts for chats that feel more personal and playful.",
    description:
      "Custom message fonts bring personality into DMs. Whether you are joking with friends or sending a stylish note, Instagram Plus typography options make everyday chats feel less generic.",
    benefits: [
      "Personalize DM conversations",
      "Use exclusive chat fonts",
      "Make messages more expressive",
    ],
    keywords: [
      "instagram plus message fonts",
      "custom fonts in instagram dm",
      "instagram plus chat typography",
    ],
    imageAlt:
      "Instagram Plus custom fonts for direct messages feature",
    image: "/images/4.webp",
  },
  {
    slug: "custom-app-icon",
    title: "Choose a Custom App Icon",
    shortTitle: "Custom App Icon",
    category: "expression",
    icon: "grid",
    summary:
      "Swap the default Instagram icon for curated designs from Instagram and creators.",
    description:
      "Custom App Icon lets you personalize how Instagram looks on your home screen. Pick from official and creator-made icon packs so the app matches your aesthetic without changing how it works.",
    benefits: [
      "Personalize your home screen icon",
      "Choose from curated creator designs",
      "Keep Instagram feeling uniquely yours",
    ],
    keywords: [
      "instagram plus custom app icon",
      "change instagram icon",
      "instagram plus icon pack",
    ],
    imageAlt:
      "Instagram Plus Custom App Icon feature for home screen personalization",
    image: "/images/12.webp",
  },
];

export const FEATURE_CATEGORIES = [
  {
    id: "privacy" as const,
    title: "Privacy & Quiet Viewing",
    description:
      "Preview stories and messages without the social pressure of seen receipts.",
  },
  {
    id: "insights" as const,
    title: "Viewer Insights",
    description:
      "Understand who watched, when they watched, and how often they came back.",
  },
  {
    id: "stories" as const,
    title: "Story Power Tools",
    description:
      "Spotlight moments, extend expiry, and react with Super Hearts.",
  },
  {
    id: "control" as const,
    title: "Audience & Sharing Control",
    description:
      "Decide exactly who sees your stories and how content lands on your profile.",
  },
  {
    id: "expression" as const,
    title: "Personalization",
    description:
      "Custom fonts, icons, and profile pins that make Instagram feel unmistakably yours.",
  },
];

export function getFeatureBySlug(slug: string) {
  return FEATURES.find((f) => f.slug === slug);
}

export function getFeaturesByCategory(category: Feature["category"]) {
  return FEATURES.filter((f) => f.category === category);
}
