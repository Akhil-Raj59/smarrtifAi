import { Link, useLocation } from "react-router-dom";
import { Menu, X, Target, Phone, User, LogIn, LogOut, Key, UserPlus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAppStore } from "@/store";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isConsultationHovered, setIsConsultationHovered] = useState(false);
  const location = useLocation();
  const { user, logout } = useAppStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Corporate Training", href: "/corporate-training" },
    { name: "Team", href: "/team" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SMARRTIF</span>
              <span className="ml-1 text-xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm transition-colors relative ${
                  isActive(item.href)
                    ? "text-[var(--brand-red)]"
                    : "text-gray-700 hover:text-[var(--brand-red)]"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[var(--brand-red)]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link
              to="/assessment"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg overflow-hidden text-white hover:shadow-xl font-semibold transition-all"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: isHovered ? 'right' : 'left',
                transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Target className="h-4 w-4" />
              <span className="text-sm">Take Assessment</span>
            </Link>
            <Link
              to="/corporate-training"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white transition-all duration-300 font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Book Consultation</span>
            </Link>
            
            {/* Account Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Account Menu"
                title="Account Menu"
              >
                {!user ? (
                  <LogIn className="h-5 w-5" />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-gray-100 shadow-xl py-2 z-50">
                  {!user ? (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--brand-orange)] transition-colors"
                      >
                        <LogIn className="h-4 w-4" />
                        <span>Login</span>
                      </Link>
                      <Link
                        to="/signup"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--brand-orange)] transition-colors"
                      >
                        <UserPlus className="h-4 w-4" />
                        <span>Sign up</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="px-4 py-1.5 border-b border-gray-100 text-xs text-gray-500 font-medium">
                        {user.email || "Logged in"}
                      </div>
                      <Link
                        to="/reset-password"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--brand-orange)] transition-colors"
                      >
                        <Key className="h-4 w-4" />
                        <span>Change Password</span>
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer font-medium"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm ${
                    isActive(item.href)
                      ? "text-[var(--brand-red)]"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-700"
              >
                Take Assessment
              </Link>
              <Link
                to="/corporate-training"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white text-center"
              >
                Book Consultation
              </Link>

              {/* Mobile Account Options */}
              <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-3">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <LogIn className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>Login</span>
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <UserPlus className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>Sign up</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="px-4 text-xs text-gray-500 font-medium">
                      Logged in as: {user.email}
                    </div>
                    <Link
                      to="/reset-password"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <Key className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>Change Password</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-red-600 hover:text-red-700 text-left w-full cursor-pointer font-medium"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}