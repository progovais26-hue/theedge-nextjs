import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug, SERVICE_CATEGORIES } from "@/lib/services-data";

import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} – The Hedge Media`,
    description: service.summary,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = getAllServices().filter(
    (s) => s.category === service.category && s.slug !== service.slug
  );

  return (
    <>
      <CustomCursor />
      <ParticleField />
      <Navbar />

      <section className="service-hero">
        <div className="service-hero-inner">
          <div className="service-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#services">Services</Link>
            <span>/</span>
            <span style={{ color: "#f97316" }}>{service.category}</span>
          </div>
          <div className="service-icon-badge">{service.icon}</div>
          <p className="sec-tag">{service.tagline}</p>
          <h1 className="sec-title" style={{ maxWidth: "820px" }}>
            {service.title}
          </h1>
          <p className="service-summary">{service.summary}</p>
        </div>
      </section>

      <section className="service-body">
        <div className="service-body-inner">
          <div className="service-desc">
            {service.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <Link href="/#contact" className="btn-fire" style={{ display: "inline-block", marginTop: "8px" }}>
              Discuss Your Project →
            </Link>
          </div>

          <div className="service-features">
            <h3>What&apos;s Included</h3>
            <ul>
              {service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="service-related">
          <div className="service-related-inner">
            <p className="sec-tag">More in {service.category}</p>
            <div className="service-related-grid">
              {relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="service-related-card">
                  {s.icon} &nbsp; {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="service-cta-band">
        <h2>
          Ready to Start Your <span style={{ color: "#f97316" }}>{service.title.split(" ")[0]}</span> Project?
        </h2>
        <p>Tell us about your brand and we&apos;ll get back to you within 24 hours.</p>
        <Link href="/#contact" className="btn-fire" style={{ display: "inline-block" }}>
          Work With Us →
        </Link>
      </div>

      <Footer />
    </>
  );
}
