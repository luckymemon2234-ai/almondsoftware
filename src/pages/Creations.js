import { motion } from "framer-motion";

export default function Creations() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const projects = [
    {
      title: "SK Hair Clinic",
      subtitle: "Hair Transplant & Medical Website",
      desc: "A professional, conversion-focused website designed for a hair transplant clinic, emphasizing trust and patient confidence through structured content and clean medical branding.",
      bulletPoints: ["Modern medical-grade branding", "Lead-focused landing page structure", "Clear service presentation", "Responsive performance UI"],
      link: "https://skhairstudio.com/"
    },
    {
      title: "Feoric",
      subtitle: "Premium Fashion E-commerce Platform",
      desc: "A modern clothing e-commerce store built to deliver high-quality fashion products with a smooth and reliable online shopping experience.",
      bulletPoints: ["Fully responsive online clothing store", "Secure checkout & payment integration", "Optimized for mobile shopping", "Designed for scalable growth"],
      link: "https://feoric.in"
    },
    {
      title: "Mongi’s Cake Shop",
      subtitle: "Local Bakery Business Website",
      desc: "A clean modern website built for a local cake shop to showcase products clearly and engage nearby customers with a mobile-first experience.",
      bulletPoints: ["Product-focused visual layout", "Mobile-friendly design", "Fast static deployment", "Simple maintenance structure"],
      link: "https://mongnis.shop/"
    },
    {
      title: "NeuralCrypto",
      subtitle: "Crypto Signal & Research Platform",
      desc: "A crypto signal platform focused on market structure, price action, and disciplined strategy execution built from extensive Bitcoin backtesting.",
      bulletPoints: ["Custom strategy signal engine", "Multi-timeframe market analysis", "100K+ organic reach", "Research-driven insights"],
      link: "https://neuralcrypto.space/"
    },
    {
      title: "Zaroni",
      subtitle: "Modern E-commerce Platform",
      desc: "A scalable e-commerce platform designed to support curated everyday products with smooth customer journeys across multiple regions.",
      bulletPoints: ["Complete e-commerce workflow", "Optimized checkout experience", "India launch completed", "International expansion roadmap"],
      link: "https://www.zaroni.store/"
    }
  ];

  return (
    <>
      <div className="bg-blob top-left"></div>
      <div className="bg-blob bottom-right"></div>
      
      {/* Page Header */}
      <header className="page-header container">
        <motion.div initial="hidden" animate="show" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>
            Engineered <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants} style={{marginTop: "24px"}}>
            Products and client solutions built with clarity, extreme performance, and real-world usability.
          </motion.p>
        </motion.div>
      </header>

      {/* Projects Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className="services" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((proj, i) => (
              <motion.div key={i} className="service-card glass-panel" variants={itemVariants}>
                <h3 className="text-gradient" style={{ fontSize: "1.75rem", marginBottom: "8px" }}>{proj.title}</h3>
                <p style={{ color: "var(--accent-blue)", fontSize: "0.875rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
                  {proj.subtitle}
                </p>
                <p style={{ marginBottom: "20px" }}>{proj.desc}</p>
                <ul style={{ paddingLeft: "20px", color: "var(--text-secondary)", marginBottom: "30px", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {proj.bulletPoints.map((bp, j) => (
                    <li key={j} style={{ marginBottom: "6px" }}>{bp}</li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <a className="btn-secondary" href={proj.link} target="_blank" rel="noreferrer" style={{ width: "100%" }}>
                    Initialize Platform ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="glass-panel" 
            style={{ padding: "60px 40px", textAlign: "center" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Unlisted <span className="text-gradient">Systems</span></h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "800px", margin: "0 auto" }}>
              {["⚡ Internal Automation Tools", "🤖 AI Experiments", "📊 Data Platforms", "📱 Mobile Apps", "🛒 E-commerce Stores", "🔧 Custom Client Systems"].map(item => (
                <div key={item} style={{ padding: "12px 24px", border: "1px solid var(--border-glass)", borderRadius: "50px", color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2 className="section-title">Client <span className="text-gradient">Intel</span></h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Trusted by global teams for web, Shopify, and enterprise Salesforce engineering.
            </p>
          </motion.div>

          <motion.div 
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                text: "They understood our requirements clearly and delivered a modern, responsive website. Communication was smooth — exactly what we needed.",
                client: "SK Studio",
                role: "Owner"
              },
              {
                text: "Built exactly as we wanted — fast performance, clean design, and works perfectly on all devices. Reliable support throughout.",
                client: "Feoric.in",
                role: "Owner"
              },
              {
                text: "Shopify store setup and customization done with great attention to detail. Completed on time with excellent technical knowledge.",
                client: "Zaroni",
                role: "Founder"
              },
              {
                text: "Project delivered on schedule with excellent quality. Professional, responsive, and genuinely easy to work with.",
                client: "Mongnis",
                role: "Owner"
              }
            ].map((test, i) => (
              <motion.div key={i} className="glass-panel" style={{ padding: "40px 30px" }} variants={itemVariants}>
                <div style={{ color: "var(--accent-blue)", fontSize: "1.5rem", marginBottom: "16px" }}>❝</div>
                <p style={{ color: "var(--text-primary)", fontStyle: "italic", marginBottom: "24px", lineHeight: "1.7" }}>
                  {test.text}
                </p>
                <div>
                  <strong style={{ display: "block", fontSize: "1rem" }}>{test.client}</strong>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{test.role}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "40px" }}>
        <div className="container text-center">
          <h2 style={{fontWeight: 800, letterSpacing: "-0.05em"}}>Almond<span style={{color: "var(--text-secondary)"}}>Software</span></h2>
          <p style={{ margin: "20px 0" }}>Enterprise Digital Architecture</p>
          <p>© {new Date().getFullYear()} Almond Software. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}