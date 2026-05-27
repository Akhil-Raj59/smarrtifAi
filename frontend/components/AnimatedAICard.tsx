"use client";

import { useState, useEffect } from "react";
import { Brain, Sparkles, Zap, Target, Award } from "lucide-react";
import IconTile from "./IconTile";

const icons = [Brain, Sparkles, Zap, Target, Award];

export default function AnimatedAICard() {
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const Icon = icons[iconIndex];

  return (
    <div className="ai-learning__card">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <IconTile icon={Icon} tone="orange" size="lg" />
      </div>
      <h3>AI-Powered Learning</h3>
      <p>Personalized roadmaps tailored to your skills and goals</p>
    </div>
  );
}
