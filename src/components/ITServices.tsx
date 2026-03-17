import { Database, Cloud, GitBranch, Globe, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Documentation & Data Services",
    desc: "Data migration, structured documentation, knowledge base preparation and data entry support.",
  },
  {
    icon: Cloud,
    title: "Cloud & Platform Modernization",
    desc: "Cloud migration strategy, container adoption and infrastructure-as-code transformation.",
  },
  {
    icon: GitBranch,
    title: "Engineering Enablement & DevOps",
    desc: "CI/CD pipeline design, developer experience consulting and system architecture modernization.",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    desc: "Custom platform builds, API gateways, microservices and website hosting services.",
  },
  {
    icon: BarChart3,
    title: "Data & API Services",
    desc: "Database tuning, ETL pipelines, API integrations and legacy system modernization.",
  },
];

const ITServices = () => (
  <section id="it-services" className="py-24 bg-muted">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
        Digital &amp; IT Services
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
        In addition to telecom infrastructure services, Amazing Minds is
        expanding into IT modernization and engineering support services.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-xl p-7 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-3">
              {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ITServices;
