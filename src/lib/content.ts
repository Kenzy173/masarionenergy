export const services = [
  {
    slug: "oilfield-finance",
    name: "Oilfield Finance",
    description:
      "Structuring and securing capital for oilfield operations, from development financing to working capital.",
    image: "/images/services/oilfield-finance.webp",
  },
  {
    slug: "oil-development",
    name: "Oilfield Development",
    description:
      "Taking fields from appraisal to first production with disciplined, cost-controlled project delivery.",
    image: "/images/services/oil-development.webp",
  },
  {
    slug: "oil-operations",
    name: "Oilfield Operation",
    description:
      "Day-to-day operation of FPSO, FSO, FPU, and MOPU assets, run for uptime and safety.",
    image: "/images/services/oil-operations.webp",
  },
  {
    slug: "oil-engineering",
    name: "Oilfield Engineering",
    description:
      "Engineering for offshore and onshore assets, including FLNG, across the field lifecycle.",
    image: "/images/services/oil-engineering.webp",
  },
  {
    slug: "gas-reduction",
    name: "Flare Gas Reduction",
    description:
      "Capturing flared gas and converting it into usable energy, cutting emissions and waste.",
    image: "/images/services/gas-reduction.webp",
  },
  {
    slug: "crude-trading",
    name: "Crude Trading",
    description:
      "Executing crude trading and offtake arrangements that expand market access and volume.",
    image: "/images/services/crude-trading.webp",
  },
] as const;

type ServiceSubsection = {
  heading: string;
  body?: string; // optional paragraph before the list
  items: string[];
};

export const serviceDetails: Record<
  (typeof services)[number]["slug"],
  { intro: string; body: string[]; capabilities: string[]; subsections: ServiceSubsection[] }
> = {
  "oilfield-finance": {
    intro:
      "Oil and gas ventures carry financing needs most lenders aren't built for. Masarion Energy connects operators with banking institutions and private equity partners who understand the sector, then structures the capital stack around the project instead of forcing the project to fit a generic loan.",
    body: [
      "Our company specialises in providing comprehensive financial services to oilfield owners. We understand the unique financial needs and challenges that come with operating in the oil and gas industry, and we are committed to helping our clients achieve their financial goals.",
      "With our expertise and experience, we are dedicated to helping oil field owners navigate the complex financial landscape of the industry and achieve long-term success. We engage banks, private equity firms, and other financial institutions that specialise in energy investments.",
      "Oil field financing can take many forms, including debt financing, equity financing, and project financing. Oil field financing can be a complex and challenging process, requiring careful planning and strategic decision-making, and this is where we best support our customers.",
    ],
    capabilities: [
      "Debt financing: arranging senior and structured debt through banking partners familiar with energy assets.",
      "Equity investment: introducing private equity capital for development-stage and expansion projects.",
      "Project financing: structuring capital around a specific field or asset rather than the balance sheet as a whole.",
    ],
    subsections: [],
  },
  "oil-development": {
    intro:
      "Taking a field from appraisal to first production means coordinating drilling, extraction, safety, and environmental compliance under one plan. Masarion Energy runs that plan directly across FPSO and MOPU assets.",
    body: [
      "At Masarion Energy we are committed to providing comprehensive support to oil field owners in all aspects of their operations, including FPSO and MOPU operations and oil field development. We understand the unique challenges and complexities of these operations, and we have the expertise and experience to help our clients navigate them successfully.",
      "We provide expert advice and guidance on all aspects of FPSO and MOPU operations, including design, construction, installation, and maintenance. In addition, we offer a range of services to support oil field development, including project management, engineering, procurement, and construction.",
      "We work closely with our clients to ensure that their projects are completed on time, within budget, and to the highest standards of quality and safety. With our expertise and experience, we are dedicated to helping oil field owners achieve long-term success and profitability in their operations.",
    ],
    capabilities: [
      "Production efficiency: sequencing development work to hit output targets without inflating cost.",
      "Drilling and extraction management: running extraction activity to schedule and to spec.",
      "Well safety and upkeep: maintaining wells to the standard the asset's full lifecycle demands.",
      "Environmental and safety compliance: built into the plan from the start, not audited in afterward.",
    ],
    subsections: [
      {
        heading: "Services include",
        items: [
          "Production optimisation",
          "Exploitation and drilling activities",
          "Well integrity and maintenance",
          "Environmental and safety solutions",
        ],
      },
    ],
  },
  "oil-operations": {
    intro:
      "Once a field is producing, the work shifts to keeping it producing: safely, efficiently, and at the lowest sustainable cost. We provide best-in-class operations and maintenance services across oilfield operations.",
    body: [],
    capabilities: [],
    subsections: [
      {
        heading: "Maintenance",
        body: "We apply best-in-class maintenance technologies from preventative to predictive technologies from fully scanned operations.",
        items: [],
      },
      {
        heading: "Operations",
        body: "Our team of experienced operations teams understand optimisation of oilfield production in an environmentally effective manner.",
        items: [],
      },
      {
        heading: "Safety",
        items: [
          "Efficiency",
          "Cost-effectiveness",
          "Continuous improvement",
          "Environmental responsibility",
          "Skilled workforce",
        ],
      },
    ],
  },
  "oil-engineering": {
    intro:
      "Engineering work spans the full field lifecycle, not just the build. We provide best-in-class operations and maintenance services across oilfield operations.",
    body: [],
    capabilities: [],
    subsections: [
      {
        heading: "Maintenance",
        body: "We apply best-in-class maintenance technologies from preventative to predictive technologies from fully scanned operations.",
        items: [],
      },
      {
        heading: "Operations",
        body: "Our team of experienced operations teams understand optimisation of oilfield production in an environmentally effective manner.",
        items: [],
      },
      {
        heading: "Safety",
        items: [
          "Efficiency",
          "Cost-effectiveness",
          "Continuous improvement",
          "Environmental responsibility",
          "Skilled workforce",
        ],
      },
    ],
  },
  "gas-reduction": {
    intro:
      "Routine flaring wastes energy and adds emissions that don't need to exist. Flare gas reduction refers to the process of minimising or eliminating the flaring of natural gas produced as a byproduct during oil and gas operations.",
    body: [
      "Flaring is a common practice in the industry, but it contributes to greenhouse gas emissions and is considered wasteful. We consider the following:",
      "Our teams work with partner companies to develop tailored solutions for flare gas to fuel gas conversion for flare-to-power projects.",
      "Harnessing the flare gas as fuel gas, we provide low-emission gas turbines for additional power generation; this power can be harnessed either onto the grid or to island operation on offshore installations.",
      "Official estimates count around 150 billion m³ of natural gas being flared each year, which corresponds to 350 million tons of carbon dioxide released into the atmosphere. Masarion Energy is supporting the oil and gas industry in its efforts to endorse the World Bank's \"Zero Routine Flaring by 2030\" initiative.",
    ],
    capabilities: [
      "Flare-to-fuel conversion: tailored capture solutions engineered with turbine partners.",
      "Low-emission power generation: turning flare gas into electricity instead of burning it off.",
      "Flexible deployment: grid-connected or isolated offshore configurations, depending on the asset.",
    ],
    subsections: [
      {
        heading: "Our approach",
        items: [
          "Efficiency",
          "Cost-effectiveness",
          "Continuous improvement",
          "Environmental responsibility",
          "Skilled workforce",
        ],
      },
    ],
  },
  "crude-trading": {
    intro:
      "Masarion Energy trades Bonny Light, a premium low-sulfur Nigerian export grade, connecting refineries and buyers worldwide with reliable, compliant supply.",
    body: [
      "We specialise in the sale of Bonny Light crude oil to clients around the world. Bonny Light crude is a high-quality, low-sulfur crude oil that is highly sought after by refineries and other buyers in the global market. We work closely with our clients to understand their specific needs and requirements, and we provide customised solutions to meet those needs.",
      "We ensure that all our transactions are conducted in a transparent and ethical manner, and we adhere to all relevant regulations and industry standards. We also provide comprehensive logistics and shipping services to ensure that our clients receive their orders on time and in the most cost-effective manner possible.",
    ],
    capabilities: [
      "Bonny Light supply: sourced and specified to buyer requirements.",
      "Logistics and shipping coordination: managing transport from source to delivery.",
      "Transparent, compliant transactions: terms that meet international trading standards.",
      "Global relationships: established connections across suppliers and purchasers.",
    ],
    subsections: [],
  },
};

export const industries = [
  {
    name: "Energy",
    description: "End-to-end solutions for upstream, midstream, and downstream operations.",
  },
  {
    name: "Renewable Energy",
    description: "Partnering on wind, solar, and sustainable energy projects.",
  },
  {
    name: "R&D",
    description: "Innovating with cutting-edge research to drive energy sector growth.",
  },
  {
    name: "Aquaculture",
    description: "Enhancing aquatic farming with advanced technologies.",
  },
  {
    name: "Carbon Capture & Utilization",
    description: "Transforming emissions into valuable resource.",
  },
  {
    name: "EPCIC",
    description: "Seamless delivery of complex engineering and construction projects.",
  },
] as const;

export const stats = [
  { value: "11+", label: "Years of Experience" },
  { value: "15", label: "Professional Team" },
  { value: "150+", label: "Clients" },
  { value: "99%", label: "Successful Projects" },
] as const;

export const outcomes = [
  {
    slug: "flare-gas-recovery",
    title: "Flare Gas Recovery",
    figure: "$10M",
    description: "95% of emissions captured and converted into clean energy.",
    tagline:
      "Turning an environmental liability into a $10M revenue line, with 95% of flare gas captured at the source.",
    summary:
      "An offshore flare gas recovery initiative captured 95% of emissions at the source, converting gas that would otherwise have been burned off into a usable power stream. The recovered energy generated $10M in value for the client, turning an environmental liability into a revenue line.",
    challenge:
      "Routine flaring is one of the most visible sources of waste in offshore operations, a byproduct gas stream burned off because capturing it was never economical. For this operator, the flared gas represented both a compliance exposure and a stranded asset: energy that could be sold, used, or injected, but was being consumed on site with no return. The challenge was to engineer a capture and conversion pathway that paid for itself rather than adding operating cost.",
    approach:
      "Masarion Energy worked with partner companies to design a flare-to-fuel conversion package sized to the asset's actual gas profile. The team mapped the flare stream, quantified recoverable volumes, and specified low-emission gas turbines capable of running on the captured fuel gas. Conversion infrastructure was engineered for minimal production disruption, with staged commissioning so the asset never lost uptime during the transition.",
    results: [
      "Captured 95% of emissions at the source, virtually eliminating routine flaring on the asset.",
      "Converted recovered gas into a usable power stream rather than burning it off.",
      "Generated $10M in clean-energy value for the client.",
      "Delivered the conversion with staged commissioning and no production downtime.",
    ],
    impact:
      "Beyond the direct financial return, the project removed a persistent environmental liability from the asset's ledger. The client now operates with a materially lower emissions profile, aligning with the industry's move toward the World Bank's Zero Routine Flaring by 2030 initiative, while monetising an energy stream that previously had no value.",
    stats: [
      { value: "95%", label: "Emissions captured" },
      { value: "$10M", label: "Clean-energy value generated" },
      { value: "0", label: "Days of production downtime" },
    ],
  },
  {
    slug: "crude-trading-expansion",
    title: "Crude Trading Expansion",
    figure: "$1.5B",
    description: "Trading volumes increased 40%, securing new contracts.",
    tagline:
      "40% volume growth and $1.5B in fresh contracts, a trading desk scaled for new markets.",
    summary:
      "A crude trading engagement grew a client's trading volumes by 40%, opening access to new buyers and securing $1.5B in fresh contracts. The expansion ran on the same transparent, compliance-first trading terms Masarion applies across every transaction.",
    challenge:
      "The client's trading desk had capacity and supply, but was locked into a narrow buyer base that left it exposed to concentrated demand. Growing volumes meant building new offtake relationships, structuring terms that satisfied international trading standards, and coordinating logistics across longer supply chains, without compromising the discipline that kept the desk compliant and counterparty-safe.",
    approach:
      "Masarion Energy's trading team opened the desk to a broader buyer network, sourcing and specifying Bonny Light supply to each counterparty's requirements. Contracts were structured under transparent, compliant terms from the outset, and logistics and shipping were coordinated end to end so delivery commitments were met on time and cost-effectively.",
    results: [
      "Increased trading volumes by 40%.",
      "Secured $1.5B in new contracts.",
      "Expanded the buyer base across new international markets.",
      "Maintained transparent, compliance-first transaction standards throughout.",
    ],
    impact:
      "The expansion diversified demand for the client's supply and created a repeatable template for growth: new buyers, compliant terms, and reliable delivery. What began as a volume push became a more resilient trading operation with relationships that continue to produce.",
    stats: [
      { value: "40%", label: "Volume growth" },
      { value: "$1.5B", label: "Contracts secured" },
      { value: "0", label: "Compliance exceptions" },
    ],
  },
  {
    slug: "oilfield-development",
    title: "Oilfield Development",
    figure: "500 jobs",
    description: "Production boosted 30% while creating local jobs.",
    tagline:
      "30% more production and 500 local jobs built on the same timeline.",
    summary:
      "A field development project lifted production by 30% while building local capacity alongside it, creating 500 jobs for the surrounding community. Production gains and workforce development ran on the same timeline, not as separate initiatives.",
    challenge:
      "Raising output from a producing field usually means choosing between speed and community. Fast-track development strains local capacity and can leave surrounding communities outside the benefit. This client wanted both: meaningful production gains and a workforce development outcome that the region could measure.",
    approach:
      "Masarion Energy ran the development plan across the full lifecycle, covering production optimisation, well integrity, and environmental and safety compliance, while sequencing work to hit output targets without inflating cost. Local hiring and skills development were built into the schedule as deliverable milestones, not afterthoughts, so the project created jobs at the same pace it created production.",
    results: [
      "Boosted production by 30%.",
      "Created 500 local jobs during the development.",
      "Built local capacity alongside production gains on the same timeline.",
      "Held environmental and safety compliance to plan from the start.",
    ],
    impact:
      "The field now produces more, and the community that hosts it has 500 more employed people and a workforce with transferable skills. The model, production and people advanced together, is now the standard Masarion brings to field development engagements.",
    stats: [
      { value: "+30%", label: "Production uplift" },
      { value: "500", label: "Local jobs created" },
      { value: "100%", label: "Compliance on schedule" },
    ],
  },
  {
    slug: "energy-financing",
    title: "Energy Financing",
    figure: "$500M",
    description: "Secured to fund advanced oilfield operations.",
    tagline:
      "$500M in structured capital for advanced oilfield operations.",
    summary:
      "An energy financing engagement secured $500M in capital to fund advanced oilfield operations, structured through Masarion's banking and private equity relationships rather than a single balance-sheet lender.",
    challenge:
      "Advanced oilfield operations rarely fit a single lender's box. The capital needed was too large for one balance-sheet facility, and the asset-backed structure required specialised energy investors who understood the sector's risk profile. The client needed a capital stack built around the project, not a project squeezed into a generic loan.",
    approach:
      "Masarion Energy connected the client with banking institutions and private equity partners who specialise in energy assets, then structured the capital stack around the project's specific profile. Senior and structured debt was arranged through banking partners, with private equity layered in for the development-stage and expansion components.",
    results: [
      "Secured $500M in capital to fund advanced oilfield operations.",
      "Structured the stack across banking and private equity relationships.",
      "Arranged debt and equity terms matched to the project, not a generic facility.",
      "Aligned capital deployment with the operation's build-out schedule.",
    ],
    impact:
      "The structured facility gave the client committed capital on terms their operation could actually support, with no forced-fit covenants or single-lender exposure. It demonstrated the finance-through-operations model at full scale: funding arranged by people who understand what the money is being spent on.",
    stats: [
      { value: "$500M", label: "Capital secured" },
      { value: "2", label: "Capital sources structured" },
      { value: "1", label: "Integrated financing package" },
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Masarion Energy exceeded our expectations with innovative, tailored solutions that boosted efficiency and cut costs. Their commitment to sustainability sets them apart, making them a valued energy partner.",
    name: "Adebayo Bolu",
    title: "Managing Director",
  },
  {
    quote:
      "Working with Masarion Energy has transformed our real estate projects. Their expertise in renewable energy and seamless integration set our properties apart, driving growth with professionalism and results.",
    name: "Kate Kwameh",
    title: "Agricultural Business Owner",
  },
  {
    quote:
      "Masarion Energy showcased exceptional expertise from consultation to implementation, delivering a seamless, sustainable energy solution with outstanding support. We couldn't be happier.",
    name: "Lebo Tomilora",
    title: "Hospitality Manager",
  },
  {
    quote:
      "Masarion Energy simplified our energy transition, guiding us seamlessly to clean, sustainable power. Our hospitality business now operates efficiently and appeals to eco-conscious clients.",
    name: "Fatima Sadiq",
    title: "Real Estate Developer",
  },
] as const;

export const coreValues = [
  {
    name: "Integrity",
    description:
      "Conducting business with honesty, transparency, and ethical standards.",
  },
  {
    name: "Safety First",
    description:
      "Placing the safety of our people, partners, and communities above all operational priorities.",
  },
  {
    name: "Innovation",
    description:
      "Embracing new technologies and approaches to improve efficiency, reduce costs, and enhance performance.",
  },
  {
    name: "Excellence",
    description:
      "Delivering work to the highest quality standards, consistently and without compromise.",
  },
  {
    name: "Sustainability",
    description:
      "Operating in a sustainable manner that minimises the impact on the environment and supports the social and economic development of local communities.",
  },
  {
    name: "Accountability",
    description:
      "Taking responsibility for actions and decisions and being accountable to stakeholders for performance and results.",
  },
  {
    name: "Customer Focus",
    description:
      "Building every engagement around our clients' needs, outcomes, and long-term success.",
  },
  {
    name: "Collaboration",
    description:
      "Working closely with partners, stakeholders, and local communities to achieve shared goals.",
  },
] as const;

export const companyProfile = {
  overview:
    "Masarion Energy is a Nigerian indigenous energy and infrastructure company providing innovative, reliable, and sustainable solutions across the oil and gas value chain. We specialise in upstream, midstream and downstream operations, marine logistics, port and dry docking services, crude oil trading, engineering, procurement, project management, and energy infrastructure development. Our mission is to become one of Africa's leading integrated energy companies by delivering world-class services that maximise operational efficiency, reduce project costs, and create long-term value for our clients, while maintaining the highest standards of safety, quality, and environmental stewardship.",
  vision:
    "To become Africa's preferred integrated energy partner delivering innovative solutions across oil, gas, marine, and energy infrastructure.",
  mission:
    "To provide safe, efficient, and cost-effective energy solutions through innovation, strategic partnerships, operational excellence, and sustainable business practices.",
} as const;

export const capabilities = [
  { name: "Upstream Oil & Gas", description: "Exploration, development, and production services across the upstream value chain." },
  { name: "Crude Oil Trading", description: "Sourcing, marketing, and international trading of crude oil." },
  { name: "Marine Logistics", description: "Marine logistics, offshore vessel support, tug and barge operations, and crew boats." },
  { name: "Port & Dry Docking", description: "Dry dock planning, vessel repairs, hull maintenance, steel fabrication, and inspections." },
  { name: "Oilfield Engineering", description: "FEED, detailed engineering, and process, mechanical, civil, and structural engineering." },
  { name: "EPC & Project Delivery", description: "Engineering, procurement, construction, installation, commissioning, and maintenance." },
  { name: "Oilfield Operations", description: "Best-in-class operations and maintenance services across oilfield assets." },
  { name: "Gas Solutions", description: "Gas commercialisation, gas processing, flare reduction, and LNG/LPG/CNG projects." },
  { name: "Energy Infrastructure", description: "Tank farms, pipelines, terminals, storage facilities, and export infrastructure." },
  { name: "Procurement & Supply Chain", description: "Strategic sourcing and supply chain management for energy projects." },
  { name: "Technical Manpower Supply", description: "Skilled technical manpower for operations, projects, and maintenance." },
  { name: "Renewable Energy", description: "Wind, solar, and sustainable energy project development and delivery." },
] as const;

export const contact = {
  email: "contact@masarionenergy.com",
  mobile: "+44 (0)7931 937 037",
  telephone: "+234 (80)3700 7802",
} as const;

export const aboutContent = {
  intro:
    "Masarion Energy is a registered company in Nigeria and the UK. We bring best practices in the field of oil and gas, design, operations, and maintenance, and focus on safety and low CAPEX and OPEX costs while focusing on the highest value activities. We provide smart tailored solutions for clients with a focus on a multi-skilled work force and collaboration that set new standards and objectives in the areas of aquaculture, renewable energy, and carbon capture storage and utilisation.",
  philosophy:
    "We are committed to providing comprehensive support to oil field owners in all aspects of their operations, including FPSO, FSO, FPU, MOPU and FLNG operations and cost-effective oil field development. We understand the unique challenges and complexities of these operations, and we have the expertise and experience to help our clients navigate them successfully. We provide professional consulting on all aspects of FPSO, FSO, FPU, MOPU and FLNG operations, including design, construction, installation, maintenance, and commissioning. We work closely with our clients to ensure that their projects are completed on time, within budget, and to the highest standards of quality and safety.",
  expansion:
    "The same multi-disciplined teams that run core oilfield work also serve renewable energy, aquaculture, carbon capture, and EPCIC projects, adjacent sectors where the same finance-through-operations discipline applies just as directly.",
} as const;

export const offices = [
  {
    region: "United Kingdom",
    address: "Suite 3-8, Brook Street Business Hub, 117 Brook Street, Glasgow, G40 3AP",
  },
  {
    region: "Nigeria",
    address: "Plot 74 Victor B K Crescent, Kado District, Federal Capital Territory, Abuja",
  },
] as const;

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
