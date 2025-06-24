"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary transition-colors hover:text-accent">
              StickyChameleonNav
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
             <Button variant="ghost">Log In</Button>
             <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Sign Up</Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Link href="/" className="text-xl font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
                        StickyChameleonNav
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                         <span className="sr-only">Close menu</span>
                      </Button>
                  </div>
                  <nav className="flex-1 flex flex-col justify-center items-center gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-xl font-medium text-foreground/80 transition-colors hover:text-accent"
                         onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                   <div className="flex flex-col gap-4 p-4 border-t">
                     <Button variant="outline" onClick={() => setMobileMenuOpen(false)}>Log In</Button>
                     <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setMobileMenuOpen(false)}>Sign Up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
