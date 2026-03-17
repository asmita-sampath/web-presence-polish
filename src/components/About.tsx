import { useState } from "react";
import aboutImg from "@/assets/about-amazing-minds.png";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Amazing Minds
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Amazing Minds is a team of passionate professionals committed to
              delivering reliable infrastructure and technology services. Our core
              team brings together deep experience in telecom operations as well as
              information technology, enabling us to support both field
              infrastructure and digital transformation initiatives.
            </p>

            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              {expanded ? "Show Less" : "Know More"}
            </button>

            {expanded && (
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed animate-fade-in">
                <p>
                  At Amazing Minds, we believe the real strength behind any
                  successful project is not just technology, equipment, or
                  infrastructure — it is the <strong className="text-foreground">human mind</strong> that plans,
                  solves, innovates, and executes.
                </p>
                <p>
                  With extensive experience in telecom infrastructure deployment
                  across Tamil Nadu, we assist telecom operators, infrastructure
                  providers, and enterprises with site acquisition, regulatory
                  approvals, civil execution, and electrical infrastructure
                  development to enable reliable network expansion.
                </p>
                <p>
                  Alongside our infrastructure expertise, our team has strong
                  experience working with enterprise data systems, cloud platforms,
                  and modern development practices. We support organizations with
                  structured data handling, documentation management, cloud
                  adoption strategies, and software-driven operational improvements.
                </p>
                <p>
                  Our engineers work with modern technologies including AWS, Google
                  Cloud Platform (GCP), Docker, Kubernetes, Amazon EKS, API
                  integrations, and cloud-native architectures to help businesses
                  migrate, modernize, and scale their digital systems.
                </p>
                <p>
                  By combining practical field execution with strong technical and
                  data capabilities, Amazing Minds delivers solutions that bridge
                  infrastructure, information, and innovation.
                </p>
                <p>
                  For us, <strong className="text-foreground">"Amazing Minds"</strong> is not just a company
                  name — it is a commitment. A commitment to bring thoughtful
                  planning, smart execution, and continuous improvement to every
                  project we undertake. Because when capable minds work together
                  with purpose, <strong className="text-foreground">amazing outcomes follow</strong>.
                </p>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="flex-1 min-w-0">
            <img
              src={aboutImg}
              alt="Amazing Minds team collaborating"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
