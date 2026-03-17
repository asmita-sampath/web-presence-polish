import heroImg from "@/assets/telecom-hero.jpg";

const highlights = [
  "Telecom Infrastructure Execution",
  "Brand Infrastructure Expansion",
  "Digital & Platform Modernization",
];

const Hero = () => (
  <section
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Telecom infrastructure"
        className="w-full h-full object-cover object-[30%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/80 to-secondary/90" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-40">
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
        Enabling Infrastructure &amp; Expansion Across Tamil Nadu
      </h1>

      <p className="text-primary-foreground/90 text-lg sm:text-xl leading-relaxed mb-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
        Amazing Minds partners with telecom operators, infrastructure providers,
        and growing brands to support site acquisition, regulatory approvals,
        electrical infrastructure, and civil deployment.
      </p>

      <p className="text-primary-foreground/75 text-base leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.25s" }}>
        We are also exploring opportunities to support cloud infrastructure
        expansion, data center site acquisition, and digital platform
        modernization.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.35s" }}>
        {highlights.map((h) => (
          <span
            key={h}
            className="bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-2 rounded-full border border-primary-foreground/20"
          >
            ✔ {h}
          </span>
        ))}
      </div>

      <a
        href="#telecom-services"
        className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg animate-fade-in"
        style={{ animationDelay: "0.45s" }}
      >
        Explore Our Services
      </a>
    </div>
  </section>
);

export default Hero;
