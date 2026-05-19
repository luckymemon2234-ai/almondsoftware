import { motion } from "framer-motion";

export default function Services() {
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
      <div className="bg-blob bottom-right"></div>
      
      {/* Page Header */}
      <header className="page-header container">
        <motion.div initial="hidden" animate="show" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>
            Enterprise <span className="text-gradient">Capabilities</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants} style={{marginTop: "24px"}}>
            Highly scalable technology frameworks designed to automate operations, scale revenue, and build invincible digital infrastructure.
          </motion.p>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className="services" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Salesforce */}
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>☁️</div>
              <h3 className="text-gradient">Salesforce Architecture</h3>
              <p>
                End-to-end Salesforce implementations and architectural overhauls. We build deep integrations, 
                Platform Events, Lightning Web Components (LWC), robust Apex Triggers, complex Flows, 
                and specialized API pipelines to sync Salesforce with your entire technology stack.
              </p>
            </motion.div>

            {/* React */}
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>⚛️</div>
              <h3 className="text-gradient">React Engineering</h3>
              <p>
                Flawless, high-performance web applications built for speed and immense scale. 
                We specialize in Next.js/React SPA architecture, complex state management, 
                dashboard development, headless CMS integrations, and pixel-perfect UI execution.
              </p>
            </motion.div>

            {/* Shopify */}
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🛍️</div>
              <h3 className="text-gradient">Shopify Plus & Headless</h3>
              <p>
                Conversion-obsessed storefronts capable of handling Black Friday volume effortlessly. 
                Custom theme engineering, Liquid architecture, headless commerce integrations, 
                advanced filtering, and tailored checkout experiences.
              </p>
            </motion.div>

            {/* AI Integration */}
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🧠</div>
              <h3 className="text-gradient">AI & Automation</h3>
              <p>
                Deploy conversational AI, Agentforce systems, and automation logic directly into your 
                business processes to slash operational overhead and rapidly increase throughput.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-center">Our <span className="text-gradient">Process</span></h2>
          </motion.div>

          <motion.div 
            className="services" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }}
            style={{ 
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
              marginTop: "40px" 
            }}
          >
            <motion.div className="glass-panel" style={{ padding: "30px", textAlign: "center" }} variants={itemVariants}>
              <div style={{ fontSize: "1.5rem", color: "var(--accent-blue)", fontWeight: "800", marginBottom: "16px" }}>01.</div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "12px", color: "var(--text-primary)" }}>Discovery & Architecture</h4>
              <p style={{ fontSize: "0.875rem" }}>Deep dive into your business logic to architect the most scalable pipeline.</p>
            </motion.div>

            <motion.div className="glass-panel" style={{ padding: "30px", textAlign: "center" }} variants={itemVariants}>
              <div style={{ fontSize: "1.5rem", color: "var(--accent-purple)", fontWeight: "800", marginBottom: "16px" }}>02.</div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "12px", color: "var(--text-primary)" }}>Engineering Execution</h4>
              <p style={{ fontSize: "0.875rem" }}>Writing clean, optimized, and thoroughly tested code for the entire stack.</p>
            </motion.div>

            <motion.div className="glass-panel" style={{ padding: "30px", textAlign: "center" }} variants={itemVariants}>
              <div style={{ fontSize: "1.5rem", color: "var(--text-primary)", fontWeight: "800", marginBottom: "16px" }}>03.</div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "12px", color: "var(--text-primary)" }}>Deployment & Scale</h4>
              <p style={{ fontSize: "0.875rem" }}>Flawless launch and continued iteration for uncompromised performance.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Certified <span className="text-gradient">Engineers</span></h2>
          <motion.div 
            className="tech-stack"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {['Platform Developer I', 'Platform Developer II', 'Process Automation', 'Security & Privacy', 'AI Associate', 'Agentforce Specialist'].map(tech => (
              <motion.div key={tech} className="tech glass-panel" variants={itemVariants}>
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "60px" }}>
        <div className="container">
          <h2 style={{fontWeight: 800, letterSpacing: "-0.05em"}}>Almond<span style={{color: "var(--text-secondary)"}}>Software</span></h2>
          <p style={{ margin: "20px 0" }}>Enterprise Digital Architecture</p>
          <p>© {new Date().getFullYear()} Almond Software. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}