export const siteConfig = {
  name: "Stacklane",
  domain: "stacklanehq.com",
  url: "https://stacklanehq.com",
  tagline: "AI-native product studio",
  metaTitle: "Stacklane | AI-native product studio",
  description:
    "Stacklane builds agentic products and the platforms they run on. A working proof in 7 days for $100 USD, then an embedded team. US, Australia, Dubai, and Pakistan.",
  contactEmail: "stacklaneorg@gmail.com",
  contactPhone: "+61435801815",
  contactPhoneDisplay: "+61 435 801 815",
  locations: ["US", "Australia", "Dubai", "Pakistan"] as const,
  demoPrice: 100,
  demoDuration: "7 days",
  pocDuration: "7 days",
  heroTitle: "Agentic products your team can run.",
  heroAccent: "A working proof in 7 days.",
  heroDescription:
    "We put agents inside the product and inside the way your team works. Not a chat window on the side. The data platform, the app, and the cloud path exist so those agents can ship. Seven days to a proof you can use. Then we embed.",
  footerBlurb:
    "Agents in the product. The platform and the cloud path underneath. An embedded team after the proof.",
  footerCredit: "AI-native product studio",
} as const;

export const serviceNav = [
  { label: "AI agents", href: "#agents" },
  { label: "Agentic products", href: "#agentic-products" },
  { label: "Data and ML", href: "#data-ml" },
  { label: "Operating model", href: "#operating-model" },
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
    lightBg: true,
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
    id: "beagle",
    client: "Beagle",
    clientId: "",
    flagship: true,
    diagram: "beagle" as const,
    headline: "Claude on the tools the team already uses",
    industry: "Agentic workspace",
    cloud: "Beagle",
    duration: "Flagship",
    contact: "",
    problem:
      "The agent lives in one window. The work lives in Slack, Confluence, GitHub, and the observability tool. People copy errors into chat, paste docs into a prompt, and hope the answer matches production. Dev and comms never meet.",
    approach: [
      {
        phase: "Name the jobs",
        detail:
          "Pick the questions the team already asks in Slack: a failing deploy, a runbook lookup, a pull request that needs context. Leave the rest of the backlog alone.",
      },
      {
        phase: "Connect Beagle",
        detail:
          "Beagle is the layer between Claude and those systems. Slack for the conversation. Confluence for the docs. GitHub for the repo. Observability for what production is doing right now.",
      },
      {
        phase: "Close the loop",
        detail:
          "Claude drafts the reply, the doc update, or the code change. A person approves it before it lands in Slack, Confluence, or the repository.",
      },
      {
        phase: "Leave the path",
        detail:
          "Write who may connect the next tool, and how a new channel or repo joins the same path. The second workflow should not be a new project.",
      },
    ],
    results: [
      "Claude reaches Slack, Confluence, GitHub, and observability through Beagle",
      "One path for a question, the context, and the action",
      "A human approval before anything is posted or merged",
      "A rule for connecting the next tool",
    ],
    stack: ["Beagle", "Claude", "Slack", "Confluence", "GitHub", "Observability"],
  },
  {
    id: "chi-databricks",
    client: "CHI Technologies",
    clientId: "chi",
    flagship: false,
    diagram: "databricks" as const,
    headline: "A Databricks platform from ingest to monitoring",
    industry: "Data and ML platform",
    cloud: "AWS",
    duration: "Shipped to production",
    contact: "",
    problem:
      "Models and features had no shared platform. Training lived apart from serving. CHI Technologies needed a Databricks environment on AWS that engineers could run, with MLflow in the path to production.",
    approach: [
      {
        phase: "Ingest",
        detail:
          "Land batch and streaming sources into the Databricks workspace on AWS. One entry point, with an owner for each feed.",
      },
      {
        phase: "Medallion",
        detail:
          "Bronze, silver, and gold on Delta. Quality checks sit on the tables people query, not in a side spreadsheet.",
      },
      {
        phase: "Features and models",
        detail:
          "A feature store with offline and online parity. MLflow tracks experiments and the registry. The model that gets served is the model that was approved.",
      },
      {
        phase: "Serve and watch",
        detail:
          "Batch scoring and realtime endpoints. Monitoring on freshness, drift, and latency, with a path back to the pipeline and the registry when a signal moves.",
      },
    ],
    results: [
      "Databricks on AWS, with MLflow pipelines that continued into production",
      "Medallion tables, a feature store, and batch plus realtime serving",
      "Monitoring on the pipelines and the inference path",
      "CHI engineers worked in the same environment as ours",
    ],
    stack: ["AWS", "Databricks", "Delta", "Feature store", "MLflow", "Monitoring"],
  },
  {
    id: "agentic-product",
    client: "Product build",
    clientId: "",
    flagship: false,
    diagram: "product" as const,
    headline: "An agentic product, not a chatbot on a page",
    industry: "Full stack",
    cloud: "Cloud",
    duration: "Product build",
    contact: "",
    problem:
      "A chat box on a marketing site does not ship a product. The agent has to sit inside a frontend, call a backend, and survive a real deploy. Without CI, a matching environment, and monitoring the agent can read, the demo dies on the first spike.",
    approach: [
      {
        phase: "Product surface",
        detail:
          "A frontend for the job a person actually does, and a backend with contracts the app and the agent share. The agent takes a step in that flow. It does not live in a side panel.",
      },
      {
        phase: "Cloud path",
        detail:
          "The platform is sized for load: queues where work spikes, caching where reads repeat, and a deploy you can roll back.",
      },
      {
        phase: "CI and environments",
        detail:
          "CI/CD from the first week. Dev, staging, and production follow the same shape, so a Friday demo is not a different system from Monday.",
      },
      {
        phase: "Monitoring MCPs",
        detail:
          "MCPs on the monitoring and analytics tools. The agent and the on-call engineer can see latency, errors, and usage without a second login.",
      },
    ],
    results: [
      "Frontend and backend with the agent in the loop",
      "A cloud path that can take load and roll back",
      "CI/CD and dev, staging, and production environments",
      "Monitoring and analytics connected through MCP",
    ],
    stack: ["Next.js", "APIs", "Cloud", "CI/CD", "Environments", "Monitoring MCPs"],
  },
] as const;

export const testimonials = [
  {
    kind: "quote" as const,
    body:
      "They had a working PoC of our Databricks environment on AWS live in under fourteen days, something our previous integrator scoped at six months. Our engineers worked alongside theirs and the MLflow pipelines from the demo went on to production. Genuinely the most efficient data partner we've worked with.",
    name: "Ahmad Hassan Chaudhry",
    role: "Head of Engineering",
    company: "CHI Technologies",
    companyId: "chi",
    note: "",
  },
  {
    kind: "case-study" as const,
    body:
      "Dubai Health Authority is a Stacklane client. The work sat with engineering leadership: software and data in a health system, with the people who own those systems still in the room. We embedded, put a working proof in front of the team, and left the operating notes with them. This is our summary of that engagement. It is not a personal quote, and we have not attached a name to words nobody said.",
    name: "Engineering leadership",
    role: "Dubai Health Authority",
    company: "Dubai Health Authority",
    companyId: "dha",
    note: "Case-study summary written by Stacklane. Not a verbatim quote from a named person.",
  },
] as const;

export const servicePillars = [
  {
    id: "agents",
    title: "AI agents",
    subtitle: "A job, a tool list, and a person who can stop it",
    description:
      "An agent is useful when it can see the repo, call the tools, and stop for a person. We design that workflow and set the organisation up so the second agent is not a new science project.",
    delivers: [
      "Workflows with a start, a finish, and a review step a person owns",
      "An MCP catalog: which server, which system, who may use it, how it authenticates",
      "GitHub and GitLab connected so the agent sees the same repos the engineers do",
      "Skills written for jobs the team already does, not a generic prompt library",
      "Org setup: who owns the agent, who grants access, how the next workflow is added",
    ],
    bottlenecks: [
      "A demo chatbot with no job behind it",
      "A different MCP install on every laptop",
      "Repos the agent cannot read",
      "A pilot only one person can run",
    ],
    stack: ["Agent workflows", "MCP", "GitHub", "GitLab", "Claude", "Skills"],
    icon: "agents",
  },
  {
    id: "agentic-products",
    title: "Agentic products",
    subtitle: "Full stack, with the agent in the loop",
    description:
      "The product is the agent plus the software around it. Frontend, backend, and the path to production. A person uses the product. The agent drafts, looks up, or takes a step inside that flow.",
    delivers: [
      "Frontends for the actual job: screens, empty states, and the moment the agent is working",
      "Backends and APIs with contracts the app, the agent, and the data platform share",
      "An agent runtime in the product: tool calls, a review, and a record of what it did",
      "Cloud platforms that take load: queues, caching, and a deploy you can roll back",
      "CI/CD, plus dev, staging, and production environments that match",
      "MCPs on monitoring and analytics, so the agent and on-call can see latency, errors, and usage",
    ],
    bottlenecks: [
      "A chat window glued to the side of an app that cannot act",
      "APIs that change without a contract",
      "Deploys nobody can roll back",
      "A dev environment that lies about production",
      "Monitoring the agent cannot read",
    ],
    stack: ["Frontend", "Backend", "Cloud", "CI/CD", "Environments", "Monitoring MCPs"],
    icon: "product",
  },
  {
    id: "data-ml",
    title: "Data and ML platforms",
    subtitle: "The platform agents and models run on",
    description:
      "Agents and products fail in the same place when the platform under them is missing. We build the data and ML platform: pipelines, a lakehouse, the feature store, and a path from training to inference.",
    delivers: [
      "Ingest for batch and streaming, with an owner on each feed",
      "Lakehouse medallion: bronze, silver, gold, with checks on the tables people query",
      "Pipelines with orchestration and an alert when a job fails",
      "A feature store with offline and online parity, so training and serving match",
      "MLflow for experiments and the registry, then batch and realtime inference",
      "Monitoring on freshness, drift, and the serving path",
    ],
    bottlenecks: [
      "Models stuck in notebooks",
      "Training features that do not match serving",
      "Pipelines that fail and nobody knows until morning",
      "No lineage when someone asks where a number came from",
    ],
    stack: ["Databricks", "Lakehouse", "Pipelines", "Feature store", "MLflow", "Serving"],
    icon: "data",
  },
  {
    id: "operating-model",
    title: "The operating model",
    subtitle: "The team keeps shipping after we leave",
    description:
      "Becoming AI-native is a change in how the team works. We wire the tools, the skills, and the review habit, then leave them with people who can add the next workflow without us.",
    delivers: [
      "A shared setup: MCP catalog, approved servers, and auth that is not a screenshot",
      "Connections like Beagle: Claude with Slack, Confluence, GitHub, and observability",
      "Repos wired so agents and engineers work on the same projects",
      "A skill library and the workflows that use it",
      "Handover with owners, the access model, and the rule for the next tool",
    ],
    bottlenecks: [
      "A strategy deck and nothing running",
      "Every team inventing its own setup",
      "Skills that live in one person's head",
      "A pilot that ends when the studio leaves",
    ],
    stack: ["Beagle", "Slack", "Confluence", "GitHub", "Skills", "Handover"],
    icon: "org",
  },
] as const;

export const engineeringSurface = [
  {
    title: "Frontend",
    detail:
      "The screens a person uses, including the wait, the error, and the moment an agent is mid-task.",
  },
  {
    title: "Backend",
    detail:
      "APIs and services with contracts the product and the agent both call. Actions are explicit, logged, and reversible.",
  },
  {
    title: "Cloud scale",
    detail:
      "Platforms sized for load: queues where work spikes, caching where reads repeat, and a rollback when a release is wrong.",
  },
  {
    title: "CI/CD",
    detail:
      "Every change goes through the pipeline. The agent path is not a folder someone deploys from a laptop.",
  },
  {
    title: "Environments",
    detail:
      "Dev, staging, and production follow the same shape. A proof you accept is the system you will run.",
  },
  {
    title: "Monitoring MCPs",
    detail:
      "MCPs on the monitoring and analytics tools, so agents and engineers can see latency, errors, and usage in the same loop.",
  },
] as const;

export const demoWeeks = [
  {
    label: "1 to 3",
    title: "Pick the agent job",
    items: [
      "Choose one workflow or product path a person feels this week",
      "Map repos, Slack, docs, data, and who approves an action",
      "Look up the MCP servers and the monitoring hooks that job needs",
      "Draft the skills and the review steps with your team",
    ],
  },
  {
    label: "4 to 7",
    title: "Wire it and show it live",
    items: [
      "Connect Claude, the repos, and the tools. Beagle where that is the path",
      "Stand up the product slice or the platform slice the agent needs",
      "Run it on real work, with your engineers in the room",
      "Hand over skills, access notes, CI, and the live walkthrough",
    ],
  },
] as const;

export const pocDeliverables = [
  "One agent workflow running on real work",
  "Tools connected: repos, and where needed Slack, docs, and observability",
  "The product or platform slice that workflow sits on",
  "CI, an environment, and a monitoring hook for that slice",
  "Skills and review steps the team can keep",
  "Live walkthrough and handover notes",
] as const;

export const challengePoints = [
  {
    traditional: "6 to 12 month discovery",
    ours: "Working proof in 7 days",
  },
  {
    traditional: "$200K+ before anything runs",
    ours: "$100 USD until you're satisfied",
  },
  {
    traditional: "A chatbot on the side of the site",
    ours: "An agent inside the product",
  },
  {
    traditional: "A strategy deck and a staffing plan",
    ours: "Platform, product, and agents running",
  },
  {
    traditional: "Tools that never get connected",
    ours: "Claude, repos, chat, and docs on one path",
  },
  {
    traditional: "A pilot that leaves with the consultant",
    ours: "An operating model your team keeps",
  },
] as const;

export const aboutStats = [
  { value: "10+", label: "Projects delivered" },
  { value: "10+", label: "Employees" },
  { value: "5+", label: "Years in data, ML, and product" },
  { value: "7 days", label: "Typical PoC go-live" },
  { value: "4", label: "Global delivery hubs" },
] as const;

export const credentials = [
  "Over 10 projects delivered",
  "10+ employees across global delivery hubs",
  "5+ years across Australian and US data, ML, and product work",
  "Teams embedded across the US, Australia, Dubai, and Pakistan",
  "Clients include PrevHealth, CHI Technologies, and Dubai Health Authority",
  "Agentic products, data and ML platforms, and the cloud path under them",
  "Named quotes only where a client actually gave one",
  "Proof first: you use it before an embedded engagement starts",
] as const;

export function getClientById(id: string): ClientLogo | undefined {
  return clients.find((c) => c.id === id);
}
