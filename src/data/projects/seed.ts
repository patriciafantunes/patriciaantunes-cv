import { ProjectDetail } from "./index";

export const seedProject: ProjectDetail = {
  slug: "seed",
  title: "SEED — Self-Service Campaign Platform & Angular 18 Migration",
  category: "Design Engineering & Product Architecture",
  thumbnail: "/seed/thumbnail.jpg",
  description: "From Call-Center Tool to Self-Service Product, Design System & Angular 18 Migration",
  presentation: {
    projectName: "SEED v3.0 — Campaign Management BackOffice",
    projectInterventions: "Product Architecture, UX Design, Design System & Angular 18 Engineering",
  },
  sections: [
    {
      title: "The Challenge",
      intro: "SEED originally began as an internal backoffice tool for call-center teams to inspect user subscriptions per campaign, later expanding organically with tabs for campaign phases, email dispatches, and basic analytics.",
      text: [
        "Because features had been layered incrementally over time, the platform suffered from high visual noise and a critical engineering bottleneck: while campaigners could schedule phase dates inside SEED, what each phase actually triggered on the live website — such as new user flows or state changes — still had to be developed manually case-by-case.",
        "Working alongside a fellow designer, our goal was to re-architect SEED into a scalable, self-service product that reduced manual engineering dependencies — accelerating time-to-market for campaigners while freeing developers to strengthen core platform stability. Alongside this redesign, I independently led the full frontend migration from legacy AngularJS to Angular 18."
      ]
    },

    {
      title: "Information Architecture & Navigation Overhaul",
      intro: "Supporting richer self-service campaign phase configurations required unlocking screen real estate and eliminating fragmented, multi-level navigation.",
      text: [
        "In the legacy interface, a dark global sidebar consumed horizontal space for module switching while campaign sections relied on cramped horizontal tabs and decorative header banners."
      ],
      sections: [
        {
          title: "Global Top Bar & Quick Access",
          intro: "Moving campaign switching to the top header to reclaim 100% module width.",
          text: [
            "We relocated the global module switcher and search bar to the top header — introducing searchable metadata tags (Year, Company, Campaign Type) and replacing decorative campaign banners with compact status tags. On the Home screen, we replaced manual favorites with automated Quick Access lists for Recently Created and Recently Used campaigns."
          ],
          image: {
            url: "/seed/navigation-architecture.png",
            alt: "SEED v3.0 top bar module search with metadata tags and Quick Access home screen",
            width: 750,
            height: 390
          }
        },
        {
          title: "Restructured Module Hierarchy",
          intro: "Replacing horizontal campaign tabs with a dedicated, simplified module sidebar.",
          text: [
            "Inside each campaign, horizontal tabs were replaced by a structured lateral menu (Subscriptions, Promotion & Calendar, Engagement, Communications, Lists & Segments, and Configurations) — consolidating overlapping entries like Description + Configurations and unifying Templates, Cast, and Performance under Communications."
          ],
          image: {
            url: "/seed/user-flows.png",
            alt: "Restructured SEED module sidebar and simplified information architecture",
            width: 750,
            height: 417
          }
        }
      ]
    },

    {
      title: "Interface Redesign & Operational Workflows",
      intro: "With a cleaner hierarchy and full-width workspace, we redesigned daily operational flows for Campaigners, Editors, and Call-Center support teams.",
      sections: [
        {
          title: "Before & After",
          intro: "Reducing visual noise and improving readability across data-dense operational views.",
          text: [
            "Comparing the legacy dark-sidebar layout against SEED v3.0 shows how cleaner colour tokens, structured tags, and contextual layout grouping transformed readability and daily task speed."
          ],
          composition: "beforeAfterSlider",
          compositionProps: {
            beforeImage: {
              src: "/seed/seed-before.jpg",
              alt: "Legacy SEED interface with dark left sidebar and horizontal tabs"
            },
            afterImage: {
              src: "/seed/seed-after.jpg",
              alt: "Redesigned SEED v3.0 interface with top navigation and full-width workspace"
            },
            className: "mt-10 mb-40"
          }
        },
        {
          title: "Streamlined Daily Operations",
          intro: "Upgrading high-frequency workflows across Subscriptions, Communications, Calendar Events, and CSV Exports.",
          text: [
            "Key workflow improvements included horizontal contract views and clearer status badges in Subscriptions, one-click email template duplication and import/export, automatic email event logging in Promotion & Calendar (alongside new WhatsApp event tracking), and bulk 'Select All' CSV exports in Lists & Segments."
          ],
          composition: "beforeAndAfter",
          compositionProps: {
            images: [
              { url: "/seed/workflow-analytics.jpg", alt: "Communications Performance metrics and email analytics table", role: "after", variant: "primary" },
              { url: "/seed/workflow-modals.jpg", alt: "Lists & Segments bulk CSV export modal and Subscription details layout", role: "after", variant: "primary" }
            ]
          }
        }
      ]
    },

    {
      title: "Design System & Angular 18 Migration",
      intro: "While we co-architected the visual system in Figma, I independently led the technical migration to Angular 18 — ensuring design standards translated directly into a modular, maintainable codebase.",
      text: [
        "Standardising the platform meant standardising its UI building blocks. Components were designed in Figma with their Angular implementation in mind: shared semantic tokens, strict state variants, and predictable layout rules."
      ],
      sections: [
        {
          title: "Foundations & Tokens",
          intro: "A cleaner, modern colour palette built for readability and semantic clarity across dense data views.",
          text: [
            "We replaced dated, heavy visual styles with low-glare neutral surfaces paired with clear semantic tokens (brand green, interactive blue, warning orange, highlight yellow, and error red) for status badges, metrics cards, and campaign tags."
          ],
          composition: "colorPalette",
          compositionProps: {
            colors: [
              "#009B77",
              "#0076BD",
              "#242423",
              "#3F3D3C",
              "#686664",
              "#F2F4F4",
              "#E25D00",
              "#E8BE00",
              "#D81E37"
            ]
          }
        },
        {
          title: "Component Architecture & Migration",
          intro: "Translating our Figma component library into modular, strongly-typed Angular 18 components.",
          text: [
            "I re-architected and migrated the legacy AngularJS codebase to Angular 18, building core UI primitives — top navigation search, metadata tag badges, collapsible data rows, modals, toggle switches, and calendar/event controls — as reusable components with encapsulated styling and clean TypeScript interfaces."
          ],
          image: {
            url: "/seed/component-system.png",
            alt: "Figma component variants alongside Angular 18 component architecture",
            width: 750,
            height: 828
          }
        }
      ]
    },

    {
      title: "Adoption & User Guide v3.0",
      intro: "To ensure smooth internal adoption across international teams, we produced a structured User Guide for SEED v3.0.",
      text: [
        "Every feature update was documented through a consistent visual framework — What changed, How it works, Benefit, and Step-by-step How to — enabling operational teams to transition seamlessly to the new layout."
      ],
      sections: [
        {
          image: {
            url: "/seed/user-guide-v3.png",
            alt: "SEED v3.0 User Guide overview and feature documentation",
            width: 750,
            height: 422
          }
        }
      ]
      
    }
  ],
  conslusion: {
    text: "By evolving SEED from a developer-dependent backoffice tool into a standardised, self-service platform backed by a shared design system and a modern Angular 18 architecture, we improved daily operational efficiency and laid a scalable foundation for future campaign automation."
  }
};