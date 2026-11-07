type DiagramKind = "beagle" | "databricks" | "product";

const box =
  "flex h-full flex-col rounded-xl border border-border bg-background/80 px-3 py-3 text-left";

function DatabricksDiagram() {
  const stages = [
    { title: "Ingest", detail: "Batch files and streams into the workspace" },
    { title: "Medallion", detail: "Bronze, silver, and gold on Delta", layers: ["Bronze", "Silver", "Gold"] },
    { title: "Feature store", detail: "Offline training and online serving" },
    { title: "MLflow", detail: "Experiments and the model registry" },
    { title: "Serving", detail: "Batch jobs and realtime endpoints" },
    { title: "Monitoring", detail: "Freshness, drift, and latency" },
  ];

  return (
    <figure>
      <figcaption className="font-mono text-xs uppercase tracking-widest text-accent">
        Databricks on AWS
      </figcaption>
      <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {stages.map((stage, index) => (
          <li key={stage.title} className={box}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 text-sm font-semibold">{stage.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{stage.detail}</p>
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
          </li>
        ))}
      </ol>
      <p className="mt-3 rounded-xl border border-dashed border-accent/30 bg-accent/5 px-4 py-3 text-sm text-muted">
        Monitoring feeds freshness, drift, and latency back into the pipelines and the MLflow registry.
      </p>
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
    <figure>
      <figcaption className="font-mono text-xs uppercase tracking-widest text-accent">
        Connected stack
      </figcaption>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <div key={tool.title} className={box}>
            <p className="text-sm font-semibold">{tool.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{tool.detail}</p>
          </div>
        ))}
      </div>
      <div className="my-3 text-center font-mono text-sm text-accent" aria-hidden="true">
        ↓
      </div>
      <div className="rounded-2xl border border-accent/50 bg-accent/10 px-4 py-4 text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Connective layer</p>
        <p className="mt-1 text-lg font-semibold">Beagle</p>
        <p className="mx-auto mt-1 max-w-xl text-sm text-muted">
          Auth, scope, and the path from each tool into one place Claude can use.
        </p>
      </div>
      <div className="my-3 text-center font-mono text-sm text-accent" aria-hidden="true">
        ↓
      </div>
      <div className={`${box} border-accent/30 text-center`}>
        <p className="text-sm font-semibold">Claude</p>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Drafts the reply, the doc update, or the code change from that context.
        </p>
      </div>
      <p className="mt-3 rounded-xl border border-dashed border-accent/30 bg-accent/5 px-4 py-3 text-sm text-muted">
        A person approves. Then it lands back in Slack, Confluence, or GitHub. Nothing posts itself.
      </p>
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
    <figure>
      <figcaption className="font-mono text-xs uppercase tracking-widest text-accent">
        Engineering surface
      </figcaption>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <ol className="space-y-3">
          {stack.map((layer, index) => (
            <li key={layer.title} className={box}>
              <p className="font-mono text-[10px] text-accent">{String(index + 1).padStart(2, "0")}</p>
              <p className="text-sm font-semibold">{layer.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{layer.detail}</p>
            </li>
          ))}
        </ol>
        <div className="grid content-start gap-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Around the product</p>
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
