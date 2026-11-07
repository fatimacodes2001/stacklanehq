type DiagramKind = "beagle" | "databricks" | "product";

const box =
  "rounded-xl border border-border bg-background/80 px-3 py-3 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.04)]";

function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  if (direction === "down") {
    return (
      <span className="font-mono text-accent" aria-hidden="true">
        ↓
      </span>
    );
  }
  return (
    <span className="hidden font-mono text-accent sm:inline" aria-hidden="true">
      →
    </span>
  );
}

function DatabricksDiagram() {
  const stages = [
    {
      title: "Ingest",
      detail: "Batch files and streams into the workspace",
    },
    {
      title: "Medallion",
      detail: "Bronze, silver, gold on Delta",
      layers: ["Bronze", "Silver", "Gold"],
    },
    {
      title: "Feature store",
      detail: "Offline training and online serving",
    },
    {
      title: "MLflow",
      detail: "Experiments and the model registry",
    },
    {
      title: "Serving",
      detail: "Batch jobs and realtime endpoints",
    },
    {
      title: "Monitoring",
      detail: "Freshness, drift, latency",
    },
  ];

  return (
    <figure className="rounded-2xl border border-accent/20 bg-background/40 p-4 md:p-6">
      <figcaption className="font-mono text-xs uppercase tracking-widest text-accent">
        Databricks on AWS
      </figcaption>
      <div className="mt-4 overflow-x-auto pb-2">
        <div className="flex min-w-[880px] items-stretch gap-2">
          {stages.map((stage, index) => (
            <div key={stage.title} className="flex flex-1 items-center gap-2">
              <div className={`${box} flex h-full min-h-36 flex-1 flex-col justify-between`}>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{stage.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{stage.detail}</p>
                </div>
                {stage.layers ? (
                  <div className="mt-3 space-y-1">
                    {stage.layers.map((layer) => (
                      <div
                        key={layer}
                        className="rounded-md border border-accent/20 bg-accent/5 px-2 py-1 text-xs text-accent"
                      >
                        {layer}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              {index < stages.length - 1 ? <Arrow /> : null}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-dashed border-accent/30 bg-accent/5 px-4 py-3">
        <span className="font-mono text-accent" aria-hidden="true">
          ↺
        </span>
        <p className="text-sm text-muted">
          Monitoring feeds freshness, drift, and latency back into the pipelines and the MLflow registry.
        </p>
      </div>
    </figure>
  );
}

function BeagleDiagram() {
  const tools = [
    { title: "Slack", detail: "The question, in the channel the team already uses" },
    { title: "Confluence", detail: "Runbooks and the docs the answer has to match" },
    { title: "GitHub", detail: "The repo, the pull request, the change" },
    { title: "Observability", detail: "Alerts, latency, and what production is doing" },
  ];

  return (
    <figure className="rounded-2xl border border-accent/40 bg-background/40 p-4 shadow-[0_0_40px_rgba(34,211,238,0.08)] md:p-6">
      <figcaption className="font-mono text-xs uppercase tracking-widest text-accent">
        Connected stack
      </figcaption>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <div key={tool.title} className={box}>
            <p className="text-sm font-semibold">{tool.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{tool.detail}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-2">
        <Arrow direction="down" />
      </div>
      <div className="rounded-2xl border border-accent/50 bg-accent/10 px-4 py-4 text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Connective layer</p>
        <p className="mt-1 text-lg font-semibold">Beagle</p>
        <p className="mt-1 text-sm text-muted">
          Auth, scope, and the path from each tool into one place Claude can use.
        </p>
      </div>
      <div className="flex justify-center py-2">
        <Arrow direction="down" />
      </div>
      <div className={`${box} border-accent/30`}>
        <p className="text-sm font-semibold">Claude</p>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Drafts the reply, the doc update, or the code change from that context.
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-dashed border-accent/30 bg-accent/5 px-4 py-3">
        <span className="font-mono text-accent" aria-hidden="true">
          ↺
        </span>
        <p className="text-sm text-muted">
          A person approves. Then it lands back in Slack, Confluence, or GitHub. Nothing posts itself.
        </p>
      </div>
    </figure>
  );
}

function ProductDiagram() {
  const stack = [
    { title: "Frontend", detail: "The job a person does. The agent is in the flow, not a side chat." },
    { title: "Backend", detail: "APIs and services. Contracts the app and the agent both call." },
    { title: "Agent runtime", detail: "Tool calls, a review step, and a record of what the agent did." },
    { title: "Cloud platform", detail: "Queues, caching, and a deploy you can roll back." },
  ];
  const rail = [
    { title: "CI/CD", detail: "Every change through the pipeline." },
    { title: "Environments", detail: "Dev, staging, and production in the same shape." },
    { title: "Monitoring MCPs", detail: "Latency, errors, and usage, readable by the agent." },
  ];

  return (
    <figure className="rounded-2xl border border-accent/20 bg-background/40 p-4 md:p-6">
      <figcaption className="font-mono text-xs uppercase tracking-widest text-accent">
        Engineering surface
      </figcaption>
      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-2">
          {stack.map((layer, index) => (
            <div key={layer.title}>
              <div className={box}>
                <p className="text-sm font-semibold">{layer.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{layer.detail}</p>
              </div>
              {index < stack.length - 1 ? (
                <div className="flex justify-center py-1">
                  <Arrow direction="down" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-3 rounded-2xl border border-dashed border-accent/30 p-3">
          <p className="px-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Around the product
          </p>
          {rail.map((item) => (
            <div key={item.title} className={box}>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

export function ArchitectureDiagram({ kind }: { kind: DiagramKind }) {
  if (kind === "beagle") return <BeagleDiagram />;
  if (kind === "databricks") return <DatabricksDiagram />;
  return <ProductDiagram />;
}
