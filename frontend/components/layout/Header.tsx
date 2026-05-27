"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Brand from "../Brand";
import Button from "../Button";
import { appRoutes } from "@/config/routes";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { token, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutConfirm(false);
    router.push("/login");
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Brand />
        <button className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="Main navigation">
          {appRoutes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link 
                key={route.path} 
                href={route.path} 
                onClick={() => setOpen(false)}
                className={isActive ? "active" : ""}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>
        <div className="nav-actions">
          <Link href="/assessment" className="assessment-link">
            Take Assessment
          </Link>
          {token ? (
            <button type="button" onClick={() => setShowLogoutConfirm(true)} className="assessment-link" style={{ background: "transparent", border: "none", cursor: "pointer", font: "inherit", color: "inherit", padding: 0 }}>
              Logout
            </button>
          ) : (
            <Link href="/login" className="assessment-link">
              Login
            </Link>
          )}
          <Button to="#" type="button" icon={false} className="btn--inactive" aria-disabled="true">Book Consultation</Button>
        </div>
      </div>

      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out of your account?</p>
            <div className="modal-actions">
              <button className="btn btn--outline" onClick={() => setShowLogoutConfirm(false)}>Cancel</button>
              <button className="btn btn--primary" onClick={handleLogoutConfirm}>Log Out</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
