import { MapPin, Zap, HardHat, RefreshCw, FileCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Site Acquisition",
    desc: "Macro, HPSC and NLD tower site acquisition including landlord negotiations and agreement support.",
  },
  {
    icon: Zap,
    title: "Electrical & Grid Connections",
    desc: "EB meter installation, new grid connections, electrical works and DG wiring.",
  },
  {
    icon: HardHat,
    title: "Civil Works",
    desc: "DG bed construction, tower basement works and site civil infrastructure support.",
  },
  {
    icon: RefreshCw,
    title: "Renewal Services",
    desc: "Renewal of agreements of existing customers on lease expiry.",
  },
  {
    icon: FileCheck,
    title: "ROW Approvals",
    desc: "District collectorate approvals, ROW regularization and compliance documentation.",
  },
  {
    icon: Building2,
    title: "New Build Deployment",
    desc: "HPSC pole erections, pole mounting and new sites deployment services.",
  },
];

const TelecomServices = () => (
  <section id="telecom-services" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
        Telecom Infrastructure Services
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
        End-to-end telecom infrastructure services across Tamil Nadu — from site
        acquisition to deployment.
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

export default TelecomServices;
