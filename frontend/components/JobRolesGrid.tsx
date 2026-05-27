"use client";

import { useState } from "react";
import { jobRoles } from "@/data/siteData";
import Button from "./Button";
import IconTile from "./IconTile";

export default function JobRolesGrid() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(jobRoles.length);
  };

  return (
    <>
      <div className="roles-grid container market-section__roles">
        {jobRoles.slice(0, visibleCount).map(([title, desc, salary, fresherSalary, exp, skills, companies, demand, growth, Icon, tone]: any) => (
          <article className="role-card" key={title}>
            <div className="role-card__top">
              <IconTile icon={Icon} tone={tone} />
              <div className="badges">
                <span>{demand}</span>
                <strong>{growth}</strong>
              </div>
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <hr />
            <div className="salary-row">
              <span>EXPERIENCED</span>
              <span>{exp}</span>
            </div>
            <span className="salary">{salary}</span>
            <span className="mini-label">FRESHERS</span>
            <span className="freshers">{fresherSalary}</span>
          </article>
        ))}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        {visibleCount < jobRoles.length ? (
          <Button onClick={showMore} icon={false}>
            View More Roles
          </Button>
        ) : (
          <Button to="/careers" variant="outline">
            Go to Careers Page
          </Button>
        )}
      </div>
    </>
  );
}
