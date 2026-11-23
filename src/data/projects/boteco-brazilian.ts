import { ProjectDetail } from "./index";

export const botecoProject: ProjectDetail = {
  slug: "boteco-brazilian",
  title: "Boteco Brazilian - Waxing Care",
  category: "Branding & Web",
  thumbnail: "",
  description: "Branding, Website Redesign & Frontend Implementation",
  presentation: {
    projectName: "Boteco Brazilian - Waxing Care",
    projectInterventions: "Branding, Website Redesign & Frontend Implementation",
  },
  sections: [
    {
      title: "The Challenge",
      intro: "This project focused on redefining the identity of a Brazilian-owned business operating in Denmark, within a very specific cultural context.",
      text: [
        "While the owner wanted to preserve the warmth and roots of Brazilian culture, the existing brand communication leaned toward a more expressive style that did not align with how wellness and personal care services are typically perceived in the local market — where calmness, trust, and discretion are key.",
        "The challenge was to realign the brand with its current environment, creating a calmer and more balanced identity that respected its origins while feeling appropriate, professional, and grounded in the context where the business operates."
      ]
    },

    {
      title: "Branding",
      intro: "The brand identity was created from scratch, with a strong focus on balance — between cultural roots, personal meaning, and the expectations of the local market.",
      text: [
        "The goal was to build an identity that felt calm, natural, and trustworthy, while still carrying subtle references to the origin and personality of the business owner."
      ],
      sections: [
        {
          title: "Symbol",
          intro: "The visual symbol is built around two key elements: a sunflower and honey.",
          text: [
            "The sunflower was chosen for its association with calm, well-being, and nature — values closely aligned with how this type of service is perceived in Denmark. It also carries personal meaning, as it was the former owner’s favorite flower, allowing the identity to acknowledge the brand’s history in a quiet and respectful way.",
            "Honeycomb shapes were integrated into the center of the flower to represent the wax used in the treatments, which is handcrafted by the owner. Beyond the reference to sugar-based wax, this element reflects the natural relationship between honey and wax, reinforcing ideas of care, process, and craftsmanship."
          ],
          composition: "botecoSymbol"
        },
        {
          title: "Colors",
          intro: "The color palette is centered around gold and green, selected for both symbolic and contextual reasons.",
          text: [
            "Gold references honey and the handcrafted wax, emphasizing the natural origin of the service and the care involved in its preparation. Green was introduced to convey calm, balance, and serenity — qualities strongly associated with wellness and self-care in the local cultural context.",
            "Although used in muted tonalities, both colors can also be found in the Brazilian flag, creating a subtle connection to the owner’s origins without making cultural references overt or dominant."
          ],
          composition: "colorPalette",
          compositionProps: {
            colors: ["#0D5D62", "#D19C1D", "#8AACAD", "#F3F7F8", "#2A2926"]
          }
        },
        {
          title: "Typography",
          intro: "The logo’s typography draws inspiration from early 20th-century design, with geometric forms and confident proportions.",
          text: [
            "This choice introduces a subtle sense of sensuality and character, echoing Brazilian cultural influences in a controlled and understated way. At the same time, its structure and clarity help maintain a calm, balanced tone, ensuring the identity feels refined, approachable, and appropriate for the context in which the business operates."
          ],
          image: {
            url: "/typography.png",
            alt: "typography image"
          }
        }
      ]
    },

    {
      title: "Website Redesign",
      intro: "The website redesign focused on reworking the existing structure and copy rather than introducing entirely new content.",
      text: [
        "Although the service is traditionally associated with women, the business also welcomes male clients, with clearly defined services and pricing for them. In addition, the owner wanted the space to be perceived as openly LGBTQ+ friendly. These requirements led to the decision to design a gender-neutral website — one that felt inclusive, calm, and welcoming without relying on visual cues traditionally associated with a single gender."
      ],
      sections: [
        {
          title: "Before & After",
          intro: "The homepage was redesigned to shift the first impression from functional and crowded to calm, clear, and welcoming.",
          text: [
            "The new structure prioritizes visual breathing space, real imagery, and a clearer message, while integrating booking actions naturally into the layout."
          ],
          composition: "beforeAfterSlider",
          compositionProps: {
            beforeImage: {
              src: "../PrintHeroOld.jpg", 
              alt: "Website antigo do Boteco Brazilian com design desatualizado"
            },
            afterImage: {
              src: "../PrintHero.jpg",
              alt: "Novo website do Boteco Brazilian com design moderno e limpo"
            },
            className: "mt-10 mb-40"
          }
        },
        {
          intro: "The website structure was fully reorganized to create a coherent and readable narrative.",
          text: [
            "Content was grouped and reordered to support clarity, inclusivity, and ease of navigation, resulting in a gender-neutral experience that reflects the welcoming nature of the space."
          ],
          composition: "beforeAndAfter",
          compositionProps: {
            images: [
              { url: "/OtherSections2Old.jpg", alt: "Price List Old", role: "before" },
              { url: "/OtherSections2.jpg", alt: "Price List New", role: "after", variant: 'primary' }
            ]
          }
        },
        {
          composition: "beforeAndAfter",
          compositionProps: {
            images: [
              { url: "/OtherSections1.jpg", alt: "New Icons", role: "after", variant: 'primary' },
              { url: "/OtherSections3.jpg", alt: "Faq Organization", role: "after", variant: 'primary' }
            ]
          }
        },
        {
          intro: "Real imagery was introduced to strengthen trust and connection.",
          text: [
            "Showing the space, the environment, and the people behind the business helped reinforce transparency, care, and a sense of calm — essential values for this type of service."
          ],
          composition: "beforeAndAfter",
          compositionProps: {
            images: [
              { url: "/OtherSections4Old.jpg", alt: "Business and Space Old", role: "before" },
              { url: "/OtherSections4.jpg", alt: "Business and Space Old", role: "after", variant: 'primary' }
            ]
          }
        }
      ]
    },

    {
      title: "Implementation",
      text: [
        "The final stage focused on translating the redesigned experience into a stable, maintainable WordPress implementation using Elementor. Focusing on accuracy, flexibility, and ease of maintenance. The setup allows the client to manage content independently while preserving the consistency and intent of the design across devices."
      ]
    }
  ],
  conslusion: {
    text: "This project brought together branding, design, and implementation to support a meaningful transition — creating a clearer, calmer, and more inclusive digital presence grounded in context, care, and practical execution.",
    link: {
      href: "https://waxing-care.com",
      caption: "Visit live website →"
    }
  }
};