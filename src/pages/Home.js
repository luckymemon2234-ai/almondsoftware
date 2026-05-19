import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Ecosystem from "../components/Ecosystem";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
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
      
      <main id="main-content">
      {/* HERO */}
      <header className="hero">
        <div className="container hero-grid">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            style={{ width: "100%" }}
          >
            <motion.h1 variants={itemVariants}>
              AlmondSoftware <span className="text-gradient">Web Development, Shopify & Salesforce Solutions</span> Brands.
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Almond Software is an elite digital engineering agency providing 
              performance-obsessed React websites, highly converting Shopify experiences, 
              and enterprise-grade AI & Salesforce integrations.
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link to="/about" className="btn-secondary">
                Who We Are
              </Link>
            </motion.div>

            <motion.div className="msme-badge" variants={itemVariants} style={{ marginBottom: "60px" }}>
              <span className="blue-tick">✔</span>
              MSME Registered  
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", marginTop: "40px" }}
          >
             <Ecosystem />
          </motion.div>
        </div>
      </header>

      {/* TRUST */}
      <section className="trust" aria-label="Trusted Technologies">
        <div className="container">
          <h2 className="trust-title">
            Technologies Trusted by Global Enterprises
          </h2>
          <motion.div
            className="trust-logos"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 0.5, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>Shopify Plus</div>
            <div>Salesforce</div>
            <div>React</div>
            <div>Next.js</div>
            <div>AWS Core</div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" aria-label="Our Engineering Services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="section-title">
              Engineering <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-center" style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
              We don't just build, we engineer solutions. From headless commerce to deep enterprise CRM architecture, our code drives revenue.
            </p>
          </motion.div>

          <motion.div
            className="services"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">Custom Web & React</h3>
              <p>
                Silky smooth, high-performance React architectures optimized for SEO and core web vitals. We build digital experiences that feel native.
              </p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">Headless Shopify</h3>
              <p>
                Highly converting, deeply customized Shopify storefronts processing thousands of transactions flawlessly.
              </p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">Salesforce Architecture</h3>
              <p>
                Complex Apex automation, elegant data architecture, and custom Lightning web components for enterprise scale.
              </p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 className="text-gradient">Cloud & AI</h3>
              <p>
                Intelligent automation solutions using bespoke LLM workflows and robust AWS/GCP serverless deployments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="section-title">
              The Modern <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-center" style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
              We leverage the most powerful technologies available to ensure your infrastructure scales infinitely.
            </p>
          </motion.div>

          <motion.div 
            className="tech-stack"
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: true, margin: "-50px" }}
          >
            {['Salesforce', 'React 19', 'Next.js', 'Shopify Plus', 'TypeScript', 'Python', 'AWS', 'Firebase', 'Framer Motion', 'Tailwind CSS'].map(tech => (
              <motion.div key={tech} className="tech glass-panel" variants={itemVariants}>
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 style={{fontWeight: 800, letterSpacing: "-0.05em"}}>Almond<span style={{color: "var(--text-secondary)"}}>Software</span></h2>
          <p style={{ margin: "20px 0" }}>Enterprise Digital Architecture</p>
          <p>© {new Date().getFullYear()} Almond Software. All rights reserved.</p>
        </div>
      </motion.footer>
    </>
  );
}