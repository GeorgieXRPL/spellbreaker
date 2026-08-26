export const studio = {
  newStory: "https://story-studio-gilt.vercel.app/projects/new",
  connect: "https://story-studio-gilt.vercel.app/connect",
} as const;

export const chain = {
  name: "Robinhood Chain",
  id: 4663,
  explorer: "https://robinhoodchain.blockscout.com",
} as const;

export const copy = {
  title: "Spell Breaker",
  description:
    "Timeline studio for a brief, a beat map, and a cut. Imagine, Seedance, and a Grok desk.",
  sealLine: "Launching on Robinhood Chain",
  chainId: `Chain id ${chain.id}`,
  explorer: "Explorer",
  whatHeading: "The timeline studio",
  whatBody:
    "Drop a brief. The steward writes a bible and a beat map. Clips land on a timeline. You generate, recut, and score.",
  marksHeading: "Five marks on the parchment",
  cutHeading: "How a story gets cut",
  cutBody:
    "Short-form is 6 beats. Long-form is 12. Each clip picks Imagine or Seedance. Type over the steward line when it is wrong. Preview the cut. Lay one instrumental bed under it.",
  ctaHeading: "Open the studio",
  ctaPrimary: "New story",
  ctaSecondary: "Connect Grok",
  footer: "Spell Breaker. Robinhood Chain. Not financial advice.",
} as const;

export const agents = [
  {
    id: "claude",
    name: "Claude steward",
    line: "Memory, bible, beats, and where you are.",
    src: "/marks/claude.webp",
    side: "left",
  },
  {
    id: "imagine",
    name: "Grok Imagine",
    line: "Stills, edits, and extend.",
    src: "/marks/imagine.webp",
    side: "right",
  },
  {
    id: "seedance",
    name: "Seedance",
    line: "Story video on fal.",
    src: "/marks/seedance.webp",
    side: "left",
  },
  {
    id: "eleven",
    name: "ElevenLabs",
    line: "One instrumental bed under the cut.",
    src: "/marks/eleven.webp",
    side: "right",
  },
  {
    id: "grok-desk",
    name: "Grok desk",
    line: "Same board in the Grok app. Draft only. Render stays in the studio.",
    src: "/marks/grok-desk.webp",
    side: "left",
  },
] as const;
