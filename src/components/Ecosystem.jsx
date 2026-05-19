// Ecosystem.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Ecosystem.css";

const Ecosystem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ecosystem">
      <div className="container">
        <div className="header">
          <span className="badge">ALMOND ECOSYSTEM</span>

          <h2 className="title">
            Unified Intelligence
            <span className="gradient"> Almond Core</span>
          </h2>

          <p className="subtitle">
            Salesforce • Web • Shopify  
          </p>
        </div>

        <div className="network">
          <div className="coreBox">
            <div className="core-icon">✦</div>
            <span>Almond Softwares</span>
          </div>
        </div>

        <div className="metrics" ref={metricsRef}>
          <CountUpCard targetValue={3} label="Years of Experience" suffix="+" isVisible={isVisible} />
          <CountUpCard targetValue={20} label="Successful Projects" suffix="+" isVisible={isVisible} />
          <CountUpCard targetValue={6} label="Salesforce Certifications" suffix="×" isVisible={isVisible} />
          <CountUpCard targetValue={50} label="Custom Shopify Themes" suffix="+" isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

const CountUpCard = ({ targetValue, label, suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const duration = 1800; // 1.8 seconds - smooth but not too slow
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth acceleration and deceleration
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOutCubic * targetValue);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, targetValue]);

  return (
    <div className="card">
      <div className="val">
        {count}
        {suffix}
      </div>
      <div className="lab">{label}</div>
    </div>
  );
};

export default Ecosystem;