import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_k400dag",
      "template_eju5mq9",
      form.current,
      "1JbtPn9y7Tbw9-SQS"
    )
    .then(() => {
      setSent(true);
      setLoading(false);
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
      setLoading(false);
    });
  };

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
            Initiate <span className="text-gradient">Communications</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants} style={{marginTop: "24px"}}>
            Ready to architect the future? Let's discuss your enterprise requirements and build something invincible.
          </motion.p>
        </motion.div>
      </header>

      {/* Contact Grid layout */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
          
          {/* Contact Info */}
          <motion.div 
            style={{ flex: "1 1 400px", maxWidth: "500px" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="service-card glass-panel" variants={itemVariants} style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.25rem" }}>📧 Default Route</h3>
              <p style={{ color: "var(--text-primary)", fontWeight: "500", marginTop: "8px" }}>softwarealmond@gmail.com</p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants} style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.25rem" }}>💬 Direct Channel</h3>
              <p style={{ marginTop: "8px" }}>
                <a href="https://t.me/almondsoft" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "var(--accent-blue)", fontWeight: "500" }}>
                  Connect on Telegram ↗
                </a>
              </p>
            </motion.div>

            <motion.div className="service-card glass-panel" variants={itemVariants} style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.25rem" }}>📸 Social Feed</h3>
              <p style={{ color: "var(--text-primary)", fontWeight: "500", marginTop: "8px" }}>@almondsoftware</p>
            </motion.div>
            
            <motion.div className="service-card glass-panel" variants={itemVariants}>
              <h3 style={{ fontSize: "1.25rem" }}>📍 Base</h3>
              <p style={{ color: "var(--text-primary)", fontWeight: "500", marginTop: "8px" }}>Raipur, India (CG)</p>
            </motion.div>
          </motion.div>


          {/* Contact Form */}
          <motion.div 
            className="glass-panel"
            style={{ flex: "1 1 400px", maxWidth: "600px", padding: "40px" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {!sent ? (
              <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Secure Transmission</h3>
                
                <input
                  type="text"
                  name="name"
                  placeholder="Designation / Name"
                  required
                  style={{
                    padding: "16px 20px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "12px",
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    fontFamily: "var(--font-sans)",
                    outline: "none",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enterprise Email"
                  required
                  style={{
                    padding: "16px 20px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "12px",
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    fontFamily: "var(--font-sans)",
                    outline: "none",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                />

                <textarea
                  name="message"
                  placeholder="System Requirements..."
                  rows="5"
                  required
                  style={{
                    padding: "16px 20px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "12px",
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    fontFamily: "var(--font-sans)",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-glass)"}
                ></textarea>

                <button 
                  className="btn-primary" 
                  type="submit" 
                  disabled={loading}
                  style={{ width: "100%", padding: "16px", marginTop: "10px", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Transmitting..." : "Initialize Sequence"}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{
                  width: "80px", height: "80px", background: "var(--accent-blue)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px",
                  margin: "0 auto 20px", color: "#fff"
                }}>
                  ✓
                </div>
                <h2>Transmission Verified</h2>
                <p style={{ color: "var(--text-secondary)", marginTop: "10px" }}>
                  Your packet has successfully arrived at our servers. A protocol engineer will connect with you momentarily.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "40px" }}>
        <div className="container">
          <h2 style={{fontWeight: 800, letterSpacing: "-0.05em"}}>Almond<span style={{color: "var(--text-secondary)"}}>Software</span></h2>
          <p style={{ margin: "20px 0" }}>Enterprise Digital Architecture</p>
          <p>© {new Date().getFullYear()} Almond Software. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}