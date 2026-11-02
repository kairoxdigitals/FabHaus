/**
 * Central Content Store for Fab Haus
 * 
 * SOURCE OF TRUTH: Fab Haus Master Catalogue 2026 (client-supplied).
 * CONTENT RULE: Nothing about the firm may be stated as fact unless it comes from
 * the Master Catalogue 2026 or the client confirmed it. All unknown copy lives
 * here as bracketed placeholders.
 * 
 * Mandatory catalogue footnotes travel with their claims:
 * - Timeline footnote for "45 to 75 working days":
 *   "*Timeline depends on project scope and size and is confirmed in your quotation."
 * - Comparative positioning footnote for LGSF performance & table:
 *   "Comparative positioning. Project-specific performance is confirmed at design stage."
 */

export interface HeroSlide {
  id: string;
  label: string;
  headline: string;
  tagline: string;
  footnote?: string;
  buttonText: string;
  buttonHref: string;
  placeholderLabel: string;
  image?: string;
  alt: string;
}

export interface DisciplineItem {
  number: string;
  title: string;
  description: string;
}

export interface SegmentCard {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  placeholderImages: { label: string; src?: string; alt: string }[];
  portfolioUrl: string; // Destination URL or "[Architecture Portfolio URL]"
  linkLabel: string;
}

export interface LgsfFeature {
  title: string;
  description: string;
}

export interface TableRow {
  parameter: string;
  lgsf: string;
  conventional: string;
}

export interface MaterialSpecRow {
  component: string;
  standard: string;
  meaning: string;
}

export interface SignatureProject {
  id: string;
  city: string;
  title: string;
  description: string;
  placeholderLabel: string;
  image?: string;
  alt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const SITE_CONTENT = {
  brand: {
    wordmark: "FAB HAUS",
    tagline: "Architecture, Interiors, Prefab & Modular Factory",
    city: "Bengaluru",
    copyrightYear: new Date().getFullYear(),
  },

  utilityBar: {
    email: "[Email]",
    phone: "[Phone]",
    visible: true, // hidden < 768px in UI
  },

  navigation: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Prefab & LGSF", href: "#prefab-lgsf" },
      { label: "FH_Modulars", href: "#fh-modulars" },
      { label: "Process", href: "#process" },
    ],
    workDropdown: [
      {
        label: "Architecture ↗",
        href: "[Architecture Portfolio URL]",
        isExternal: true,
        description: "Residences, bioclimatic structures & master planning",
      },
      {
        label: "Interiors ↗",
        href: "[Interiors Portfolio URL]",
        isExternal: true,
        description: "Turnkey fit-outs, modular joinery & luxury finishes",
      },
    ],
    ctaButton: {
      label: "Get in touch",
      href: "#contact",
    },
  },

  hero: {
    slides: [
      {
        id: "hero-1",
        label: "One roof, four disciplines",
        headline: "Design. Engineer. Build.",
        tagline: "Architecture, interiors, prefab construction and our own modular factory, under one roof and one point of accountability.",
        buttonText: "View our work",
        buttonHref: "#signature-projects",
        placeholderLabel: "[Hero Image 1: Mysore Luxury Residence double-height living space]",
        image: "/src/assets/images/category_interiors_bespoke_1793465838346.jpg",
        alt: "Double-height living space with bespoke architectural fluted paneling",
      },
      {
        id: "hero-2",
        label: "Prefab & LGSF",
        headline: "3x to 4x",
        tagline: "faster delivery than conventional wet-brick and RCC construction",
        footnote: "Comparative positioning. Project-specific performance is confirmed at design stage.",
        buttonText: "Explore Prefab & LGSF",
        buttonHref: "#prefab-lgsf",
        placeholderLabel: "[Hero Image 2: LGSF villa or farmhouse structure]",
        image: "/src/assets/images/hero_architecture_pavilion_1793296206739.jpg",
        alt: "Engineered light gauge steel precision villa framing",
      },
      {
        id: "hero-3",
        label: "How we work",
        headline: "45 to 75 working days to handover*",
        tagline: "One team, one contract, one timeline.",
        footnote: "*Timeline depends on project scope and size and is confirmed in your quotation.",
        buttonText: "See our process",
        buttonHref: "#process",
        placeholderLabel: "[Hero Image 3: Factory joinery and on-site integration]",
        image: "/src/assets/images/fabrication_workshop_cnc_1793296209090.jpg",
        alt: "Precision manufacturing and joinery workshop",
      },
      {
        id: "hero-4",
        label: "Start your project",
        headline: "Let's build something exact",
        tagline: "Visit our office or talk to our team about your villa, apartment, farmhouse or commercial project.",
        buttonText: "Get in touch",
        buttonHref: "#contact",
        placeholderLabel: "[Hero Image 4: Completed residential architecture exterior]",
        image: "/src/assets/images/project_concrete_timber_residence_1793297377882.jpg",
        alt: "Architectural villa built with material honesty and precision",
      },
    ] as HeroSlide[],
    autoplayIntervalMs: 6000,
  },

  about: {
    label: "Who we are",
    headingPrefix: "ABOUT",
    headingHighlight: "FAB HAUS",
    paragraphs: [
      "Fab Haus is a multidisciplinary design-and-build firm based in Bengaluru. For more than nine years we have shaped villas, apartments, farmhouses and commercial spaces, and unlike most studios we do not hand our work to someone else to build.",
      "Architecture, interiors, prefab construction and our own modular factory operate together, so the team that designs your space is accountable for how it is made and delivered. Visit our office to discuss your project with our team.",
    ],
    images: [
      {
        placeholderLabel: "[About Image 1: Modular Cabin Architecture]",
        src: "/src/assets/images/project_timber_residence_1793296208604.jpg",
        alt: "Architectural cabin geometry and modular envelope",
      },
      {
        placeholderLabel: "[About Image 2: Atelier and Craftsmanship]",
        src: "/src/assets/images/studio_architectural_atelier_1793297378382.jpg",
        alt: "Fab Haus design and build atelier",
      },
    ],
    // Verified stats from Master Catalogue 2026
    stats: [
      { value: "9+", label: "Years of industry experience", verified: true },
      { value: "250+", label: "Projects completed", verified: true },
      { value: "25+", label: "Design and build specialists", verified: true },
      // Held back per spec Section 2 until client explicitly confirms
      { value: "100%", label: "Client satisfaction on delivery", pendingConfirmation: true },
    ],
  },

  renderVsReality: {
    hasComparePair: true, // fallback hides section if false
    label: "Proof of delivery",
    headingPrefix: "RENDER VS",
    headingHighlight: "REALITY",
    subtext: "Every project starts with a 3D visual you approve. Because one team designs, manufactures and installs, the finished space is built to match it.",
    renderLabel: "What you approve",
    builtLabel: "What we deliver",
    renderImage: {
      placeholderLabel: "[Render Image: 3D Visualization approved by client]",
      src: "/src/assets/images/project_timber_residence_1793296208604.jpg",
      alt: "3D architectural render approved at design stage",
    },
    builtImage: {
      placeholderLabel: "[Built Image: As-built site photograph]",
      src: "/src/assets/images/project_concrete_timber_residence_1793297377882.jpg",
      alt: "Completed physical build delivered on site",
    },
  },

  disciplines: {
    label: "Integrated capability",
    headingPrefix: "ONE ROOF,",
    headingHighlight: "FOUR DISCIPLINES",
    items: [
      {
        number: "01",
        title: "Architecture & Master Planning",
        description: "Sustainable, bioclimatic villas and commercial structures, with space planning and optimisation built into every plan.",
      },
      {
        number: "02",
        title: "Interior Design & Turnkey Fit-Outs",
        description: "Luxury residential and commercial interiors, executed end to end from concept and 3D visuals to handover.",
      },
      {
        number: "03",
        title: "Prefab & LGSF Solutions",
        description: "Cold-formed galvanised steel construction engineered for speed, durability and high-ROI projects.",
      },
      {
        number: "04",
        title: "FH_Modulars",
        description: "Our in-house modular factory: precision joinery for Fab Haus projects and OEM supply for partners.",
      },
    ] as DisciplineItem[],
    closingBand: "Design it. Engineer it. Manufacture it. Build it. One team answerable for the outcome.",
  },

  whatWeDo: {
    label: "Design services",
    headingPrefix: "ARCHITECTURE &",
    headingHighlight: "INTERIORS",
    cards: [
      {
        title: "Architecture & Master Planning",
        tagline: "Buildings that respond to light, air and site.",
        description: "Our architects design sustainable, bioclimatic residences and commercial structures, planning every square foot to work harder.",
        bullets: [
          "Bioclimatic villas and residences",
          "Commercial structures and space planning",
          "Space optimisation for compact and large plots",
        ],
        placeholderImages: [
          {
            label: "[Architecture Image 1: Resort project]",
            src: "/src/assets/images/project_parametric_facade_1793296209070.jpg",
            alt: "Resort architecture and facade geometry",
          },
          {
            label: "[Architecture Image 2: LGSF project, architectural plan]",
            src: "/src/assets/images/hero_architecture_pavilion_1793296206739.jpg",
            alt: "Architectural plan and steel structural envelope",
          },
        ],
        portfolioUrl: "[Architecture Portfolio URL]",
        linkLabel: "View architecture work",
      },
      {
        title: "Interior Design & Turnkey Fit-Outs",
        tagline: "Interiors delivered from first sketch to final handover.",
        description: "From luxury villas and farmhouses to hospitality spaces, one team manages design, manufacture, installation and finishing.",
        bullets: [
          "Villas, premium apartments and farmhouses",
          "Commercial and hospitality fit-outs",
          "Single-point accountability from start to finish",
        ],
        placeholderImages: [
          {
            label: "[Interior Image 1: Mysore residence interior]",
            src: "/src/assets/images/category_interiors_bespoke_1793465838346.jpg",
            alt: "Luxury residence custom joinery and interior detailing",
          },
          {
            label: "[Interior Image 2: Prestige apartment interior]",
            src: "/src/assets/images/studio_architectural_atelier_1793297378382.jpg",
            alt: "Apartment modular styling and integrated lighting",
          },
        ],
        portfolioUrl: "[Interiors Portfolio URL]",
        linkLabel: "View interior work",
      },
    ] as SegmentCard[],
  },

  prefabLgsf: {
    label: "Prefab & LGSF",
    headingPrefix: "STEEL-FRAMED",
    headingHighlight: "CONSTRUCTION",
    text: "Light Gauge Steel Framing builds precision-engineered, cold-formed galvanised steel structures off-site and assembles them fast, clean and accurate.",
    bigFigure: "3x to 4x",
    bigFigureTagline: "faster delivery than conventional wet-brick and RCC construction",
    image: {
      placeholderLabel: "[LGSF Image: Project structure, with before and after]",
      src: "/src/assets/images/hero_architecture_pavilion_1793296206739.jpg",
      alt: "Cold-formed galvanised steel structure assembled off-site",
    },
    features: [
      {
        title: "Zero termite",
        description: "Galvanised steel gives termites nothing to feed on.",
      },
      {
        title: "Fire resistant",
        description: "Non-combustible framing for safer structures.",
      },
      {
        title: "Zone V seismic",
        description: "Engineered to resist high seismic loads.",
      },
      {
        title: "Eco-sustainable",
        description: "Recyclable steel and dry, low-waste construction.",
      },
    ] as LgsfFeature[],
    typologies: [
      "Villas",
      "Farmhouses",
      "Eco-Resorts",
      "Modular Cabins",
      "Commercial Hubs",
      "Rooftop Add-ons",
    ],
  },

  lgsfComparison: {
    label: "The engineering case",
    headingPrefix: "LGSF VS",
    headingHighlight: "CONVENTIONAL",
    footnote: "Comparative positioning. Project-specific performance is confirmed at design stage.",
    headers: ["Parameter", "Fab Haus LGSF", "Conventional wet brick / RCC"],
    rows: [
      {
        parameter: "Delivery speed",
        lgsf: "3x to 4x faster",
        conventional: "Sequential wet trades, longer cycles",
      },
      {
        parameter: "Termite resistance",
        lgsf: "Zero termite risk",
        conventional: "Timber elements remain vulnerable",
      },
      {
        parameter: "Fire performance",
        lgsf: "Non-combustible framing",
        conventional: "Varies by material and finish",
      },
      {
        parameter: "Seismic performance",
        lgsf: "Zone V seismic resistance",
        conventional: "Depends on design and site execution",
      },
      {
        parameter: "Site conditions",
        lgsf: "Dry, clean, low dust",
        conventional: "Curing, wet trades and debris",
      },
      {
        parameter: "Sustainability",
        lgsf: "Recyclable steel, less waste",
        conventional: "Higher material wastage",
      },
      {
        parameter: "Quality control",
        lgsf: "Factory-precise, repeatable",
        conventional: "Varies with site workmanship",
      },
      {
        parameter: "Best suited for",
        lgsf: "Villas, farmhouses, resorts, rooftops",
        conventional: "General-purpose building",
      },
    ] as TableRow[],
  },

  fhModulars: {
    label: "Manufacturing arm",
    headingPrefix: "FH_MODULARS",
    headingHighlight: "FACTORY",
    text: "FH_Modulars is our newly established in-house modular facility, built to move joinery off the dusty site and into a controlled factory.",
    panels: {
      clients: {
        title: "For Fab Haus clients",
        description: "Precision factory joinery, zero site dust, seamless quality control, factory-direct pricing and rapid delivery.",
      },
      partners: {
        title: "For partners: B2B OEM supply",
        description: "Modular joinery and casework for architects, interior designers and real estate developers across South India, built to your drawings.",
      },
    },
    images: [
      {
        placeholderLabel: "[Modular Image: Factory CNC production]",
        src: "/src/assets/images/fabrication_workshop_cnc_1793296209090.jpg",
        alt: "Modular joinery CNC milling",
      },
      {
        placeholderLabel: "[Prefab Materials Image: Engineered steel cassettes]",
        src: "/src/assets/images/project_parametric_facade_1793296209070.jpg",
        alt: "Prefabricated components ready for dispatch",
      },
      {
        placeholderLabel: "[Joinery Materials Image: PUR edgebanded panels]",
        src: "/src/assets/images/category_interiors_bespoke_1793465838346.jpg",
        alt: "Precision joinery surface finishing",
      },
      {
        placeholderLabel: "[Design Sheets Image: Technical joinery detailing]",
        src: "/src/assets/images/studio_architectural_atelier_1793297378382.jpg",
        alt: "Production drawings and CAD/CAM sheets",
      },
    ],
  },

  materialsSpecs: {
    label: "Factory transparency",
    headingPrefix: "MATERIALS &",
    headingHighlight: "SPECIFICATIONS",
    headers: ["Component", "Standard", "What it means for you"],
    rows: [
      {
        component: "Carcass boards",
        standard: "HDHMR and plywood boards",
        meaning: "Stable, moisture-resistant cores for kitchens and wardrobes",
      },
      {
        component: "Edge finishing",
        standard: "PUR edgebanding",
        meaning: "A tight, durable seal along every exposed edge",
      },
      {
        component: "Hardware",
        standard: "Blum and Hafele",
        meaning: "Smooth, soft-close action and long service life",
      },
      {
        component: "Machinery",
        standard: "German machinery",
        meaning: "Accurate cutting and repeatable joinery",
      },
      {
        component: "Process",
        standard: "Factory-made, site-installed",
        meaning: "Zero site dust and fewer on-site delays",
      },
      {
        component: "Pricing and delivery",
        standard: "Factory-direct",
        meaning: "Transparent pricing and rapid delivery",
      },
    ] as MaterialSpecRow[],
    chips: [
      "GERMAN MACHINERY",
      "HDHMR + PLYWOOD",
      "PUR EDGEBANDING",
      "BLUM + HAFELE",
    ],
  },

  signatureProjects: {
    label: "Flagship interiors",
    headingPrefix: "SIGNATURE",
    headingHighlight: "PROJECTS",
    items: [
      {
        id: "mysore",
        city: "Mysore",
        title: "Mysore Luxury Residence",
        description: "Double-height living spaces, custom fluted wood paneling, brass pendant lighting and modern master suites. A home composed around volume, warmth and craft.",
        placeholderLabel: "[Project Image: Mysore living room]",
        image: "/src/assets/images/category_interiors_bespoke_1793465838346.jpg",
        alt: "Mysore Luxury Residence double-height living room",
      },
      {
        id: "prestige",
        city: "Bengaluru",
        title: "Prestige Jindal City Apartment",
        description: "Contemporary modular styling with hidden LED profile lighting and integrated wardrobe joinery, making a premium apartment feel calm and uncluttered.",
        placeholderLabel: "[Project Image: Apartment living or bedroom]",
        image: "/src/assets/images/studio_architectural_atelier_1793297378382.jpg",
        alt: "Prestige Jindal City Apartment contemporary modular styling",
      },
      {
        id: "nagarbhavi",
        city: "Bengaluru",
        title: "Nagarbhavi Kitchen",
        description: "A minimalist modular kitchen with a standalone quartz island, built-in appliances and fluted glass cabinetry.",
        placeholderLabel: "[Project Image: Kitchen with quartz island]",
        image: "/src/assets/images/project_timber_residence_1793296208604.jpg",
        alt: "Nagarbhavi Kitchen minimalist modular quartz island",
      },
    ] as SignatureProject[],
  },

  process: {
    label: "How we work",
    headingPrefix: "FROM DISCOVERY",
    headingHighlight: "TO HANDOVER",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description: "Site visit, brief and budget alignment at our office or on site.",
      },
      {
        number: "02",
        title: "Design",
        description: "Space planning, 2D drawings and 3D visuals shaped around your lifestyle.",
      },
      {
        number: "03",
        title: "Approval",
        description: "Detailed quotation, material selection and booking payment.",
      },
      {
        number: "04",
        title: "Build",
        description: "Factory production at FH_Modulars with parallel site works and quality checks.",
      },
      {
        number: "05",
        title: "Handover",
        description: "Final inspection, finishing touches and key handover.",
      },
    ] as ProcessStep[],
    timelineBlock: {
      days: "45 to 75",
      label: "working days to handover*",
      footnote: "*Timeline depends on project scope and size and is confirmed in your quotation.",
    },
    accountabilityBlock: {
      title: "Single-point accountability",
      description: "One team, one contract, one timeline. Design, manufacturing and installation sit under Fab Haus, so nothing is lost between handoffs.",
    },
  },

  video: {
    hasVideo: false, // Hidden per spec section 4 (no video in catalogue)
    posterImage: "/src/assets/images/hero_architecture_pavilion_1793296206739.jpg",
    videoUrl: "",
    title: "[Video URL]",
  },

  testimonials: {
    hasTestimonials: false, // Hidden per spec section 4 (none in catalogue, do not fake it)
    items: [],
  },

  contact: {
    label: "Start your project",
    heading: "Let's build something exact",
    subtext: "Visit our office or talk to our team about your villa, apartment, farmhouse or commercial project.",
    officeAddress: "Annapoorneshwari Nagar, Bengaluru, Karnataka",
    addressPlaceholder: "[Full street address and PIN code]",
    phone: "[Phone]",
    email: "[Email]",
    website: "www.fabhaus.in",
    
    // mailto and WhatsApp
    mailtoSubject: "Project Inquiry — Fab Haus",
    whatsappNumber: "919999999999", // digits only, country code, no + or spaces
    whatsappPrefill: "Hello Fab Haus, I would like to discuss a project.",
    hasMap: false, // Hidden until client supplies map link
    hasQrCode: false, // Hidden until client supplies QR destination
  },

  footer: {
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Disciplines", href: "#disciplines" },
      { label: "Prefab & LGSF", href: "#prefab-lgsf" },
      { label: "FH_Modulars", href: "#fh-modulars" },
      { label: "Signature Projects", href: "#signature-projects" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    work: [
      { label: "Architecture ↗", href: "[Architecture Portfolio URL]" },
      { label: "Interiors ↗", href: "[Interiors Portfolio URL]" },
    ],
    socials: [
      { label: "[Instagram]", href: "https://instagram.com" },
      { label: "[LinkedIn]", href: "https://linkedin.com" },
    ],
    brochure: {
      hasBrochure: false, // hidden unless supplied
      url: "",
      label: "[Download Brochure]",
    },
  },

  floatingActions: {
    whatsappNumber: "919999999999",
    phone: "[Phone]",
    instagramUrl: "https://instagram.com",
    hasInstagram: true,
  },
};
