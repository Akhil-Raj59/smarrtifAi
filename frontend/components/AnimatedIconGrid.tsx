"use client";

import { useState, useEffect } from "react";
import { Users, Target, BookOpen, LineChart, Globe2, Code2, Award, Sparkles, Database, FileText, Zap, CheckCircle2, Brain, Layout, Briefcase, Rocket, Phone } from "lucide-react";

const gridIcons = [
  [Users, Target, BookOpen, LineChart, Globe2],
  [Code2, Award, Sparkles, Database, FileText],
  [Zap, CheckCircle2, Brain, Layout, Briefcase],
  [Rocket, Phone, Users, Target, Code2]
];

const animatedIcons = [Brain, Sparkles, Zap, Target, Award];

export default function AnimatedIconGrid() {
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % animatedIcons.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const CenterIcon = animatedIcons[iconIndex];

  return (
    <div className="hero-grid-card">
      <div className="hero-grid-card__grid">
        {gridIcons.map((row, rowIndex) => (
          <div key={rowIndex} className="hero-grid-card__row">
            {row.map((Icon, colIndex) => {
              const isCenter = rowIndex === 2 && colIndex === 2;
              const CurrentIcon = isCenter ? CenterIcon : Icon;
              return (
                <div key={colIndex} className={`hero-grid-card__icon-wrapper ${isCenter ? 'hero-grid-card__icon-wrapper--center' : ''}`}>
                  <CurrentIcon size={isCenter ? 32 : 20} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="hero-grid-card__info">
        <h3>AI-Powered Learning</h3>
        <p>Personalized roadmaps tailored to your skills and goals</p>
      </div>
    </div>
  );
}
