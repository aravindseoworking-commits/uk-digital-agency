import SeoHead from '../components/SeoHead'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import CaseStudyCard from '../components/CaseStudyCard'
import PricingTable from '../components/PricingTable'

export default function Home(){
  return (
    <>
      <SeoHead title="UK Digital Marketing Agency | SEO & PPC" description="Professional UK digital marketing agency — SEO, PPC, Content, GEO marketing & web dev." />
      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="content">
            <h1>UK’s Trusted Digital Marketing Agency</h1>
            <p>We help UK businesses grow with advanced SEO, PPC, content strategy & GEO targeted marketing.</p>
            <a href="#contact"><button className="cta">Get Free Consultation</button></a>
          </div>
          <img src="/hero-marketing.jpg" alt="Digital Marketing UK" className="hero-img"/>
        </section>

        {/* SERVICES */}
        <section className="services">
          <h2>Our Core Digital Services</h2>
          <div className="grid">
            <ServiceCard title="Advanced SEO" icon="/seo.png" text="Technical SEO, On-Page SEO, Schema, GEO SEO."/>
            <ServiceCard title="PPC Ads" icon="/ppc.png" text="Google Ads, Meta Ads & lead generation."/>
            <ServiceCard title="Branding" icon="/branding.png" text="Brand strategy & identity."/>
            <ServiceCard title="Web Development" icon="/web.png" text="High-performance, fast-loading websites."/>
            <ServiceCard title="Social Media" icon="/smm.png" text="Content, management & growth."/>
            <ServiceCard title="Local GEO SEO" icon="/geo.png" text="City & region-based visibility."/>
            <ServiceCard title="Content Marketing" icon="/content.png" text="Unique blog content & campaigns."/>
          </div>
        </section>

        {/* WHY */}
        <section className="why">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Fast-loading, error-free websites</li>
            <li>100% UK-focused unique content</li>
            <li>Transparent reporting & measurable ROI</li>
            <li>White-glove support and local GEO expertise</li>
          </ul>
        </section>

        {/* PRICING */}
        <section className="pricing">
          <h2>Flexible UK-Friendly Pricing</h2>
          <PricingTable/>
        </section>

        {/* PORTFOLIO */}
        <section className="portfolio">
          <h2>Selected Work</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item card">
              <img src="/portfolio-1.jpg" alt="project"/>
              <h4>Local Retailer SEO</h4>
              <p style={{color:'#6b7280'}}>Grew organic traffic 120% in 6 months for a London-based retailer.</p>
            </div>
            <div className="portfolio-item card">
              <img src="/portfolio-1.jpg" alt="project"/>
              <h4>PPC Lead Gen</h4>
              <p style={{color:'#6b7280'}}>Reduced cost-per-lead by 38% for an e-commerce client.</p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="case-list">
          <h2>Case Studies</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
            <CaseStudyCard title="London Cafe — Local SEO" summary="Local listings + GEO landing pages increased footfall 22%." img="/portfolio-1.jpg"/>
            <CaseStudyCard title="E-Commerce PPC" summary="Optimised campaigns with ROAS 5.2x." img="/portfolio-1.jpg"/>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <h2>Client Reviews</h2>
          <div className="test-list">
            <Testimonial quote="They transformed our online leads." author="Sam H." role="Founder, Retail"/>
            <Testimonial quote="Professional, timely & measurable." author="Claire W." role="Marketing Lead"/>
          </div>
        </section>

        {/* BLOG - 3 short unique posts */}
        <section>
          <h2>Latest Articles</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:14,marginTop:12}}>
            <article className="card">
              <h3>How Local GEO SEO Boosts Small UK Businesses</h3>
              <p style={{color:'#6b7280'}}>Localised pages, GMB optimisation and city-specific keyword strategies — practical tactics for real results.</p>
              <small>Published: 1 Sep 2025</small>
            </article>
            <article className="card">
              <h3>5 PPC Mistakes UK SMEs Make (and Fixes)</h3>
              <p style={{color:'#6b7280'}}>Avoid wasted spend with better targeting, ad copy and conversion tracking.</p>
              <small>Published: 15 Aug 2025</small>
            </article>
            <article className="card">
              <h3>Technical SEO Checklist for 2025</h3>
              <p style={{color:'#6b7280'}}>Speed, schema, crawlability and index rules you must check monthly.</p>
              <small>Published: 28 Jul 2025</small>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{marginTop:30}}>
          <h2>Contact Us</h2>
          <div className="card" style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20}}>
            <form action="/api/contact" method="post" style={{display:'flex',flexDirection:'column',gap:10}}>
              <input name="name" placeholder="Full name" required style={{padding:10,borderRadius:6,border:'1px solid #e5e7eb'}}/>
              <input name="email" placeholder="Email" type="email" required style={{padding:10,borderRadius:6,border:'1px solid #e5e7eb'}}/>
              <input name="phone" placeholder="Phone (optional)" style={{padding:10,borderRadius:6,border:'1px solid #e5e7eb'}}/>
              <textarea name="message" rows="5" placeholder="Tell us about your project" required style={{padding:10,borderRadius:6,border:'1px solid #e5e7eb'}}/>
              <button type="submit" className="cta">Send Message</button>
            </form>

            <div>
              <h4>Office (UK)</h4>
              <p style={{color:'#6b7280'}}>London, United Kingdom<br/>Mon–Fri 9:00–18:00</p>
              <h4>Call</h4>
              <p style={{color:'#6b7280'}}>+44 20 7946 0XXX</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="container" style={{padding:'0 24px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
              <div>© {new Date().getFullYear()} UK Digital Marketing Agency — All rights reserved.</div>
              <div style={{color:'#6b7280'}}>Made for UK businesses • SEO-first design</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
