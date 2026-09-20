export const siteConfig = {
  name: "Stacklane",
  domain: "stacklanehq.com",
  url: "https://stacklanehq.com",
  tagline: "Enterprise data & ML consulting",
  description:
    "PoC go-live in 14 days with your stack migrated and demo-ready. Embedded engineers across the US, Australia, Dubai, and Pakistan at a fraction of local consultancy rates.",
  contactEmail: "stacklaneorg@gmail.com",
  contactPhone: "+61435801815",
  contactPhoneDisplay: "+61 435 801 815",
  locations: ["US", "Australia", "Dubai", "Pakistan"] as const,
  demoPrice: 100,
  demoDuration: "14 days",
  pocDuration: "14 days",
  heroDescription:
    "We embed expert engineers in your team and use our AI-native tooling, specialised for data engineering workflows across Databricks lakehouse migrations, MLOps pipelines, and Agentic Ops.",
} as const;

export const pricingTiers = [
  {
    level: "Mid-level",
    rate: 30,
    title: "Pipeline & platform engineers",
    description:
      "Databricks pipeline development, PySpark transformations, data quality checks, and medallion layer builds under senior guidance.",
    includes: [
      "PySpark and Delta Lake pipelines",
      "Bronze / silver / gold layers",
      "dbt and orchestration support",
    ],
  },
  {
    level: "Senior",
    rate: 40,
    title: "Lead engineers & architects",
    description:
      "End-to-end feature extraction pipelines, MLOps with MLflow, feature store design, and batch or real-time inference endpoints.",
    includes: [
      "Feature store architecture",
      "MLflow CI/CD and model registry",
      "Batch and real-time inferencing",
    ],
  },
  {
    level: "Principal",
    rate: 70,
    title: "Strategic & platform leadership",
    description:
      "Large-scale feature store strategy, multi-cloud architecture, Agentic Ops design, and production hardening across AWS and GCP.",
    includes: [
      "Platform and lakehouse architecture",
      "Agentic Ops and observability",
      "Team embedding and handover",
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
    id: "pcc",
    client: "Parramatta City Council",
    clientId: "pcc",
    headline: "Council legacy data to GCP PoC demo in 14 days",
    industry: "Government · Public Sector",
    cloud: "GCP",
    duration: "14 day PoC",
    contact: "Jack Wills, Chief Digital Officer",
    problem:
      "Council data lived across twelve disconnected systems: SQL Server, SaaS exports, and manual spreadsheets. Reporting took weeks. There was no single source of truth, and pipeline failures were discovered by staff, not by monitoring.",
    approach: [
      {
        phase: "Discovery and mapping",
        detail:
          "Catalogued all source systems, data owners, and downstream reports. Identified 4 critical datasets blocking daily operations.",
      },
      {
        phase: "Platform stand-up",
        detail:
          "Provisioned Databricks on GCP with Unity Catalog for governance. Configured IAM, VPC peering, and encrypted GCS landing zones.",
      },
      {
        phase: "Medallion migration",
        detail:
          "Bronze: automated ingest from SQL Server, API feeds, and CSV drops. Silver: deduplication, PII masking, schema enforcement. Gold: analytics-ready tables for Tableau and internal dashboards.",
      },
      {
        phase: "Agentic Ops layer",
        detail:
          "Deployed monitoring and alerting to track pipeline health and detect schema drift early. The team gets clear signals before issues reach downstream consumers.",
      },
    ],
    results: [
      "PoC go-live in 14 days with a demo of the migrated stack",
      "Daily council reports automated in the PoC (previously 3-day manual process)",
      "Working demo proved the architecture before full production rollout",
      "Unity Catalog satisfies internal audit and privacy requirements",
    ],
    stack: ["GCP", "Databricks", "Delta Lake", "PySpark", "Unity Catalog", "Delta Live Tables"],
  },
  {
    id: "chi",
    client: "CHI Technologies",
    clientId: "chi",
    headline: "Fragmented AWS ML to Databricks PoC in 10 days",
    industry: "Technology · Enterprise",
    cloud: "AWS",
    duration: "10 day PoC",
    contact: "Ahmad Hassan Chaudhry, Head of Engineering",
    problem:
      "ML experiments ran in isolated SageMaker notebooks with no tracking. A previous systems integrator quoted six months and $280K for a unified platform. Models rarely reached production. The gap between experiment and deploy was months.",
    approach: [
      {
        phase: "Infrastructure provisioning",
        detail:
          "Stood up Databricks workspace on AWS with VPC endpoints, S3-backed storage, and cluster policies. Demo-ready from day one.",
      },
      {
        phase: "Data lake migration",
        detail:
          "Converted existing S3 parquet datasets to Delta Lake with PySpark. Built bronze, silver, and gold pipelines with automated schema evolution and data quality checks.",
      },
      {
        phase: "MLOps pipeline",
        detail:
          "Integrated MLflow for experiment tracking and model registry. Built CI/CD pipelines for automated training, validation, and deployment to staging endpoints.",
      },
      {
        phase: "Feature store and inference",
        detail:
          "Large-scale feature store with end-to-end extraction pipelines. Batch inferencing for nightly scoring and real-time endpoints for online predictions with offline/online parity.",
      },
    ],
    results: [
      "PoC demo live in 10 days (vs. 6-month SI quote)",
      "Working MLflow pipelines proved the platform before full production scale",
      "Experiment-to-production path validated in the PoC environment",
      "Infrastructure cost reduced 40% vs. previous SageMaker setup",
    ],
    stack: ["AWS", "Databricks", "MLflow", "PySpark", "Feature Store", "Batch and Real-time Inference"],
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
    id: "data-engineering",
    title: "Large-Scale Data Engineering",
    subtitle: "Lakehouses on AWS and GCP",
    description:
      "We stand up enterprise Databricks platforms with medallion architecture, Delta Live Tables, and Unity Catalog. Full stack migration in weeks, not the six-month cycle your last vendor quoted.",
    stack: ["Databricks", "PySpark", "AWS", "GCP", "Delta Lake", "dbt"],
    icon: "layers",
    bottlenecks: [
      "Data silos across twelve or more source systems",
      "Fragile batch pipelines that fail silently overnight",
      "Legacy ETL debt blocking new data products",
      "No governance or audit trail for regulated industries",
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Feature Engineering",
    subtitle: "From notebook to production",
    description:
      "Custom tooling on Databricks, MLflow, AWS, and GCP. Large-scale feature stores, end-to-end extraction pipelines, and batch and real-time inference with offline/online parity.",
    stack: ["MLflow", "Feature Store", "PySpark", "SageMaker", "Vertex AI", "Real-time Inference"],
    icon: "pipeline",
    bottlenecks: [
      "Models stuck in notebooks with no production path",
      "No experiment tracking or reproducibility",
      "Training and serving skew across environments",
      "Months between experiment and deployed model",
    ],
  },
  {
    id: "agentic-ops",
    title: "Agentic Ops",
    subtitle: "Autonomous data and ML operations",
    description:
      "Workflows that monitor pipelines, surface data quality issues, and automate runbooks. Your ops team gets force-multipliers, not another dashboard to babysit.",
    stack: ["Agent workflows", "Runbook automation", "Observability", "Pipeline monitoring"],
    icon: "agent",
    bottlenecks: [
      "Manual runbooks and on-call firefighting",
      "Silent model degradation in production",
      "Schema drift breaking downstream consumers",
      "Pipeline failures discovered too late",
    ],
  },
] as const;

export const demoWeeks = [
  {
    week: 1,
    title: "Audit, migrate, and foundation",
    items: [
      "Audit existing landscape and identify bottlenecks",
      "Provision Databricks workspace on AWS or GCP",
      "Medallion architecture: bronze, silver, gold",
      "Ingest pipelines with our engineers embedded in your team",
    ],
  },
  {
    week: 2,
    title: "PoC go-live and live demo",
    items: [
      "Custom MLOps pipeline with MLflow integration",
      "Feature store and end-to-end extraction pipelines",
      "Batch and real-time inference demo endpoints",
      "Live demo of your migrated stack, handover and walkthrough",
    ],
  },
] as const;

export const pocDeliverables = [
  "Databricks lakehouse in your AWS or GCP account",
  "Production medallion pipelines",
  "Large-scale feature store setup",
  "End-to-end feature extraction pipelines",
  "Batch and real-time inference endpoints",
  "Agentic Ops live demonstration",
  "Full handover documentation",
] as const;

export const challengePoints = [
  {
    traditional: "6 to 12 month SI engagement",
    ours: "PoC demo go-live in 14 days",
  },
  {
    traditional: "$200K+ before you see anything working",
    ours: "$100 USD until you're satisfied",
  },
  {
    traditional: "AU, Dubai, or US rates ($150 to $350/hr)",
    ours: "From $30 AUD/hr, same senior quality",
  },
  {
    traditional: "Offshore team in the wrong timezone",
    ours: "Embedded in your team, your hours",
  },
  {
    traditional: "Manual runbooks and on-call firefighting",
    ours: "Proactive monitoring and automated runbooks",
  },
] as const;

export const aboutStats = [
  { value: "10+", label: "Employees" },
  { value: "5+", label: "Years in AU and US Data & ML" },
  { value: "14 days", label: "Typical PoC go-live" },
  { value: "4", label: "Global delivery hubs" },
  { value: "3×", label: "Faster than traditional SIs" },
] as const;

export const credentials = [
  "10+ employees across global delivery hubs",
  "5+ years across Australian and US Data and ML industries",
  "Teams embedded across the US, Australia, Dubai, and Pakistan",
  "Far more cost effective than local AU, Dubai, and US consultancies",
  "Intelligent tooling accelerates delivery without sacrificing senior oversight",
  "Enterprise clients in fintech, health, government, and technology",
  "PoC-first engagement: prove value before you scale spend",
] as const;

export function getClientById(id: string): ClientLogo | undefined {
  return clients.find((c) => c.id === id);
}
