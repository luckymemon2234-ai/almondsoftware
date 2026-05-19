import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AssistantChat.css";

export default function AssistantChat() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to Almond Enterprise. How can we optimize your infrastructure today?" }
  ]);

  const chatRef = useRef();

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const questions = [
    "Enterprise capabilities?",
    "Salesforce architecture?",
    "Next.js / React systems?",
    "Shopify Plus deployment?",
    "Implementation pricing?",
    "Initiate protocol"
  ];

  const answers = {
    "Enterprise capabilities?": "We engineer high-performance digital ecosystems—Salesforce architectures, bespoke React applications, headless Shopify, and intelligent AI automations.",
    "Salesforce architecture?": "Absolute expertise in Apex, complete Lightning Web Components (LWC), robust Flows, and seamless cross-platform enterprise integrations.",
    "Next.js / React systems?": "We build flawlessly optimized, SEO-dominant React/Next.js architectures designed for enterprise scale and conversion velocity.",
    "Shopify Plus deployment?": "Headless and completely custom Shopify builds with advanced liquid architecture, processing high-volume transactions securely.",
    "Implementation pricing?": "Platform architectures start at $2.5k USD. Complex CRM topologies and enterprise platforms scale based on technical depth. We quote on clarity.",
    "Initiate protocol": "Transmit requirements to softwarealmond@gmail.com, or navigate to our Contact channel to begin."
  };

  function handleQuestion(q) {
    setMessages(prev => [...prev, { from: "user", text: q }]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: "bot", text: answers[q] }]);
    }, 1200);
  }

  return (
    <>
      {/* BUBBLE */}
      <motion.div 
        className="chat-bubble" 
        role="button"
        tabIndex={0}
        aria-label="Toggle Enterprise Assistant"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        onKeyDown={(e) => { if(e.key === 'Enter') setOpen(prev => !prev); }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="pulse" aria-hidden="true"></div>
        <div className="emoji" aria-hidden="true">⌘</div>
      </motion.div>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* HEADER */}
            <div className="chat-header">
              <div style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>
                System Assistant
              </div>

              <div style={{ marginLeft: "auto" }}>
                <button 
                  className="chat-action-btn"
                  aria-label="Close Chat Assistant"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* BODY */}
            <div className="chat-body" ref={chatRef}>
              {messages.map((m, i) => (
                <div key={i} className={`msg ${m.from}`}>
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className="typing">
                  <span></span><span></span><span></span>
                </div>
              )}
            </div>

            {/* QUESTIONS */}
            <div className="chat-questions">
              {questions.map((q, i) => (
                <button key={i} aria-label={`Ask: ${q}`} onClick={() => handleQuestion(q)}>
                  {q}
                </button>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}