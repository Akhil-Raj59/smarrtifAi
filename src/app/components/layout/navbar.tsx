"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Container } from "@/app/components/common/container";
import { Button } from "@/components/ui/button";

import { navigationLinks } from "@/app/data/navigation";
import { useScroll } from "@/app/hooks/use-scroll";

export function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            SmartifAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Button className="hidden md:inline-flex">
              Get Started
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}