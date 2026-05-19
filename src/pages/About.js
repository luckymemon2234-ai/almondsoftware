import { motion } from "framer-motion";

export default function About() {
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

  return (
    <>
      <div className="bg-blob top-left"></div>
      
      {/* Page Header */}
      <header className="page-header container">
        <motion.div initial="hidden" animate="show" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>
            The Engineering <span className="text-gradient">Mindset</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants} style={{marginTop: "24px"}}>
            We believe in scalable architecture, clean code, and building systems that drive real business growth.
          </motion.p>
        </motion.div>
      </header>

      {/* Founder Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{maxWidth: "800px"}}>
          <motion.div 
            className="glass-panel" 
            style={{ padding: "60px 40px", textAlign: "center" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="section-title text-gradient" style={{fontSize: "2.5rem"}}>Hi, I’m Lucky Ali Memon</h2>
            <p style={{ color: "var(--accent-blue)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.875rem", marginBottom: "30px" }}>
              6x Salesforce Certified • Enterprise React & Shopify Architect
            </p>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              I am a Salesforce Platform Developer II with years of production experience building scalable CRM systems, automation pipelines, and enterprise-grade integrations.
            </p>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)" }}>
              I design and develop complete digital ecosystems—from CRM architecture and backend automation to modern React frontends and high-converting Shopify platforms. My focus is not just writing code, but delivering robust systems that scale with business maturity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Core <span className="text-gradient">Expertise</span></h2>
          </motion.div>

          <motion.div className="services" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">Salesforce Data Architecture</h3>
              <p>
                Extensive experience in Apex, Triggers, Batch Apex, Lightning Web Components (LWC), security models, APIs, and cross-cloud integrations.
              </p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">React Performance</h3>
              <p>
                Building blazing-fast Next.js and React applications, administrative dashboards, secure SPA architectures, and scalable UIs.
              </p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">Shopify Scale</h3>
              <p>
                Advanced custom theme architecture, headless Shopify, payment gateway integrations, and conversion-optimized storefronts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">The <span className="text-gradient">Journey</span></h2>

          <div style={{ maxWidth: "700px", margin: "40px auto 0", borderLeft: "2px solid var(--border-glass)", paddingLeft: "30px" }}>
            <motion.div 
              style={{ position: "relative", marginBottom: "50px" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ position: "absolute", left: "-37px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent-blue)" }}></div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "10px", color: "var(--text-primary)" }}>2018 – 2022</h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Bachelor of Engineering (Computer Science) — strong foundation in system design, architecture, and scalable application development.
              </p>
            </motion.div>

            <motion.div 
              style={{ position: "relative", marginBottom: "50px" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ position: "absolute", left: "-37px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent-purple)" }}></div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "10px", color: "var(--text-primary)" }}>2022 – 2024</h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Salesforce Developer engineering enterprise automation, Lightning Web Components, Apex architecture, and complex integrations.
              </p>
            </motion.div>

            <motion.div 
              style={{ position: "relative" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ position: "absolute", left: "-37px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--text-primary)" }}></div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "10px", color: "var(--text-primary)" }}>Founded Almond Software · 2024</h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Delivering elite Salesforce platforms, robust React ecosystems, and high-performance Shopify architectures to selected clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Certified <span className="text-gradient">Excellence</span></h2>
          <motion.div 
            className="tech-stack"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {['Platform Developer I', 'Platform Developer II', 'AI Associate', 'Process Automation', 'Security & Privacy', 'Agentforce Specialist'].map(cert => (
              <motion.div key={cert} className="tech glass-panel" variants={itemVariants}>
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="section">
        <div className="container">
          <motion.div className="services" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">The Mission</h3>
              <p>
                To assemble and deploy highly scalable, secure, and automation-driven digital architectures that precisely align with enterprise objectives and measurable market impact.
              </p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">The Vision</h3>
              <p>
                To operate as the definitive engineering partner for ambitious startups and global enterprises commanding flawless performance in Salesforce, React, and eCommerce domains.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact / Portfolio Link */}
      <section className="section" style={{ paddingBottom: "120px" }}>
        <div className="container text-center">
          <motion.div 
            className="glass-panel" 
            style={{ padding: "60px", maxWidth: "600px", margin: "0 auto" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>Start a Conversation</h3>
            <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "40px" }}>
              luckymemon02@gmail.com
            </p>
            <a className="btn-primary" href="https://luckyali.web.app/" target="_blank" rel="noreferrer">
              View Full Portfolio
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h2 style={{fontWeight: 800, letterSpacing: "-0.05em"}}>Almond<span style={{color: "var(--text-secondary)"}}>Software</span></h2>
          <p style={{ margin: "20px 0" }}>Engineering digital products with intelligence</p>
          <p>© {new Date().getFullYear()} Almond Software. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}