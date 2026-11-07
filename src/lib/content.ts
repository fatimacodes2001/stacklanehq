export const siteConfig = {
  name: "Stacklane",
  domain: "stacklanehq.com",
  url: "https://stacklanehq.com",
  tagline: "AI agency",
  metaTitle: "Stacklane | AI agency",
  description:
    "Stacklane is an AI agency. A working proof of concept in 14 days for $100 USD, then embedded engineers from $30 AUD/hr across the US, Australia, Dubai, and Pakistan.",
  contactEmail: "stacklaneorg@gmail.com",
  contactPhone: "+61435801815",
  contactPhoneDisplay: "+61 435 801 815",
  locations: ["US", "Australia", "Dubai", "Pakistan"] as const,
  demoPrice: 100,
  demoDuration: "14 days",
  pocDuration: "14 days",
  heroDescription:
    "We embed with your team and put a working AI proof of concept in your hands in 14 days. Then we stay on, at a fraction of local consultancy rates.",
  footerCredit: "AI agency",
} as const;

export const pricingTiers = [
  {
    level: "Mid-level",
    rate: 30,
    title: "AI workflow engineers",
    description:
      "Hands-on implementation of skills, workflows, and tool wiring, delivered under senior guidance.",
    includes: [
      "Skill and workflow implementation",
      "Repo and tool wiring",
      "Guided agent setup",
    ],
  },
  {
    level: "Senior",
    rate: 40,
    title: "MCP and agent leads",
    description:
      "MCP lookup and wiring, GitHub and GitLab connected to Cursor and Claude, and agent workflows the team can run.",
    includes: [
      "MCP server selection and wiring",
      "GitHub and GitLab to Cursor and Claude",
      "Agent workflow design",
    ],
  },
  {
    level: "Principal",
    rate: 70,
    title: "AI transformation leads",
    description:
      "Org setup for success: skills, MCP servers, repo access, and the operating model your teams keep after the PoC.",
    includes: [
      "AI operating model",
      "Org-wide skills and access",
      "Embedding and handover",
    ],
  },
] as const;

export type ClientLogo = {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  /** Dark logos need a light pill so they stay visible on dark backgrounds */
  lightBg?: boolean;
};

export const clients: ClientLogo[] = [
  {
    id: "beforepay",
    name: "Beforepay Group",
    shortName: "Beforepay",
    logo: "/logos/beforepay.svg",
    lightBg: true,
  },
  {
    id: "chi",
    name: "CHI Technologies",
    shortName: "CHI",
    logo: "/logos/chi.jpg",
  },
  {
    id: "dha",
    name: "Dubai Health Authority",
    shortName: "DHA",
    logo: "/logos/dha.png",
  },
  {
    id: "prevhealth",
    name: "PrevHealth",
    shortName: "PrevHealth",
    logo: "/logos/prevhealth.png",
  },
  {
    id: "pcc",
    name: "Parramatta City Council",
    shortName: "Parramatta CC",
    logo: "/logos/parramatta.svg",
    lightBg: true,
  },
];

export const caseStudies = [
  {
    id: "mcp-catalog",
    client: "Illustrative pattern",
    clientId: "",
    headline: "An MCP catalog the team can look up and wire",
    industry: "Illustrative pattern",
    cloud: "MCP",
    duration: "14 day PoC",
    contact: "",
    problem:
      "People install whichever MCP server is trending. Nobody owns lookup, authentication, or which server is safe to connect to Cursor and Claude. The result is a pile of half-wired tools.",
    approach: [
      {
        phase: "Lookup",
        detail:
          "List the jobs the team actually runs, then look up MCP servers that match those jobs. Drop anything that cannot be authenticated or supported.",
      },
      {
        phase: "Shortlist",
        detail:
          "Keep a short catalog: what each server does, which system it touches, and who is allowed to use it.",
      },
      {
        phase: "Wiring",
        detail:
          "Connect the shortlisted servers to Cursor and Claude with the right credentials and scope. One path, not a different setup per person.",
      },
      {
        phase: "Handover",
        detail:
          "Leave a catalog and a rule for adding the next server, so the team can extend it without starting over.",
      },
    ],
    results: [
      "A shortlist of MCP servers matched to real work",
      "Auth and wiring into Cursor and Claude",
      "A catalog the team can extend",
      "One shared path for the next server",
    ],
    stack: ["MCP", "Cursor", "Claude", "Auth", "Catalog"],
  },
  {
    id: "repo-to-agent",
    client: "Illustrative pattern",
    clientId: "",
    headline: "GitHub and GitLab repos connected to Cursor and Claude",
    industry: "Illustrative pattern",
    cloud: "Repos",
    duration: "14 day PoC",
    contact: "",
    problem:
      "Source code lives in GitHub or GitLab. The AI tools live in another login. Agents cannot see the repo, and every engineer wires access a different way.",
    approach: [
      {
        phase: "Access map",
        detail:
          "Confirm which GitHub or GitLab projects matter, who owns them, and what an agent is allowed to read or change.",
      },
      {
        phase: "Connect",
        detail:
          "Connect those repos to Cursor and Claude with scoped credentials. Same projects, same permissions, for the people who need them.",
      },
      {
        phase: "First workflow",
        detail:
          "Run one real task through the connection: a review, a change, or a lookup the team already does by hand.",
      },
      {
        phase: "Repeatable setup",
        detail:
          "Write the steps for the next repository so the second repo does not become a new project.",
      },
    ],
    results: [
      "Repos connected with the right scope",
      "Cursor and Claude pointed at the same projects",
      "A first workflow proven on real code",
      "A repeatable path for the next repository",
    ],
    stack: ["GitHub", "GitLab", "Cursor", "Claude", "Repo access"],
  },
  {
    id: "workflow-transformation",
    client: "Illustrative pattern",
    clientId: "",
    headline: "A manual process rebuilt as an agent workflow",
    industry: "Illustrative pattern",
    cloud: "Workflows",
    duration: "14 day PoC",
    contact: "",
    problem:
      "A business process still runs on tickets, copy-paste, and tribal knowledge. Leadership wants AI, but there is no skill library, no access model, and no owner for how agents should work.",
    approach: [
      {
        phase: "Pick one workflow",
        detail:
          "Choose a single process with a clear start, a clear finish, and a person who feels the delay. Leave the rest of the backlog alone.",
      },
      {
        phase: "Skills and access",
        detail:
          "Write the skills the agent needs, and grant repo and tool access only for that workflow.",
      },
      {
        phase: "Agent workflow",
        detail:
          "Break the work into steps a person can review. The agent drafts, looks up, or prepares. A human still approves the outcome.",
      },
      {
        phase: "Prove it",
        detail:
          "Run the workflow on live work during the 14 days and hand the team the skills, access notes, and operating steps.",
      },
    ],
    results: [
      "One priority workflow mapped and rebuilt",
      "Skills and guardrails the team can reuse",
      "Agent steps a person can review",
      "A proof the organisation can choose to scale",
    ],
    stack: ["Skills", "MCP", "Agent workflows", "Repo access", "Handover"],
  },
] as const;

export const testimonials = [
  {
    quote:
      "They had a working PoC of our Databricks environment on AWS live in under fourteen days, something our previous integrator scoped at six months. Our engineers worked alongside theirs and the MLflow pipelines from the demo went on to production. Genuinely the most efficient data partner we've worked with.",
    name: "Ahmad Hassan Chaudhry",
    role: "Head of Engineering",
    company: "CHI Technologies",
    companyId: "chi",
  },
  {
    quote:
      "Council data projects move slowly by default. Stacklane broke that pattern with a PoC demo of our medallion architecture on GCP and proactive monitoring that catches pipeline failures before our team gets paged. I'd recommend them to any public sector organisation sitting on legacy data debt.",
    name: "Jack Wills",
    role: "Chief Digital Officer",
    company: "Parramatta City Council",
    companyId: "pcc",
  },
] as const;

export const nichePillars = [
  {
    id: "transformation",
    title: "AI-driven business transformation",
    subtitle: "One workflow at a time",
    description:
      "We take a process your team still does by hand and turn it into a working AI workflow. You see it run in the proof of concept, before you commit to a wider rollout.",
    stack: ["Workflow design", "Skills", "Human review", "Handover"],
    icon: "transform",
    bottlenecks: [
      "AI strategy with no working process behind it",
      "Copy-paste work that never gets a system",
      "Pilots that die after the slide deck",
      "No owner for how agents should behave",
    ],
  },
  {
    id: "mcp-wiring",
    title: "MCP lookup and wiring",
    subtitle: "GitHub and GitLab to Cursor and Claude",
    description:
      "We look up the MCP servers that match your work, then wire them up. GitHub and GitLab repos connect to Cursor and Claude so agents can see the code and tools you already use.",
    stack: ["MCP", "GitHub", "GitLab", "Cursor", "Claude"],
    icon: "mcp",
    bottlenecks: [
      "MCP servers installed with no owner",
      "Repos and AI tools in separate logins",
      "Credentials shared in chat threads",
      "Every engineer wiring access differently",
    ],
  },
  {
    id: "org-setup",
    title: "Org setup for success",
    subtitle: "Skills, servers, access, workflows",
    description:
      "We set up the organisation around the tools: skills, MCP servers, repo access, and agent workflows. The PoC leaves a setup your team can keep running.",
    stack: ["Skills", "MCP servers", "Repo access", "Agent workflows"],
    icon: "org",
    bottlenecks: [
      "No shared skill library",
      "Repo access that does not match the work",
      "Agents with no review step",
      "A pilot that only one person understands",
    ],
  },
] as const;

export const demoWeeks = [
  {
    week: 1,
    title: "Map the work and the access",
    items: [
      "Pick the workflow, repos, and tools that matter first",
      "Look up MCP servers that fit that work",
      "Confirm GitHub or GitLab access and who may use it",
      "Draft the skills and review steps with your team",
    ],
  },
  {
    week: 2,
    title: "Wire it and show it working",
    items: [
      "Connect repos and MCP servers to Cursor and Claude",
      "Stand up the agent workflow with human review",
      "Run it on real work, not a sample slide",
      "Hand over skills, access notes, and the live walkthrough",
    ],
  },
] as const;

export const pocDeliverables = [
  "Priority workflow, mapped and working",
  "MCP servers looked up and wired",
  "GitHub or GitLab connected to Cursor and Claude",
  "Skills, repo access, and agent workflows",
  "Human review steps your team can keep",
  "Live walkthrough and handover notes",
] as const;

export const challengePoints = [
  {
    traditional: "6 to 12 month discovery",
    ours: "Working PoC in 14 days",
  },
  {
    traditional: "$200K+ before anything runs",
    ours: "$100 USD until you're satisfied",
  },
  {
    traditional: "AU, Dubai, or US rates ($150 to $350/hr)",
    ours: "From $30 AUD/hr, senior oversight included",
  },
  {
    traditional: "An AI strategy deck and no setup",
    ours: "Skills, MCP servers, access, and workflows",
  },
  {
    traditional: "Tools that never get connected",
    ours: "Repos wired to Cursor and Claude",
  },
] as const;

export const aboutStats = [
  { value: "10+", label: "Employees" },
  { value: "5+", label: "Years in data, ML, and AI" },
  { value: "14 days", label: "Typical PoC go-live" },
  { value: "4", label: "Global delivery hubs" },
  { value: "3×", label: "Faster than a long discovery" },
] as const;

export const credentials = [
  "10+ employees across global delivery hubs",
  "5+ years across Australian and US data, ML, and AI work",
  "Teams embedded across the US, Australia, Dubai, and Pakistan",
  "Far more cost effective than local AU, Dubai, and US consultancies",
  "AI setup your team can run: skills, MCP servers, repo access, agent workflows",
  "Named client quotes only where a client actually gave one",
  "PoC-first engagement: prove it works before you scale spend",
] as const;

export function getClientById(id: string): ClientLogo | undefined {
  return clients.find((c) => c.id === id);
}
