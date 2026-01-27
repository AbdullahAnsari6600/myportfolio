import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { toggleLanguage, currentLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.portfolio"), path: "/portfolio" },
    { name: t("nav.certificates"), path: "/certificates" },
    { name: t("nav.testimonials"), path: "/testimonials" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMobileLanguageToggle = () => {
    toggleLanguage();            // Switch language
    setIsMobileMenuOpen(false);  // Close mobile menu
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-card/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center font-bold text-white shadow-glow">
              AA
            </div>
            <span className="font-bold text-lg hidden sm:block group-hover:text-primary transition-colors">
              {isRTL ? "عبدالله أنصاري" : "Abdullah Ansari"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {currentLanguage === "en" ? "العربية" : "English"}
            </Button>

            <a href="/Abdullah-FlowCV-Resume.pdf" download>
  <Button size="sm" className="flex items-center gap-2">
    <Download className="w-4 h-4" />
    {t("nav.downloadCV")}
  </Button>
</a>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in bg-card/95 backdrop-blur-md shadow-elegant">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Download CV button */}
              <a href="/Abdullah-FlowCV-Resume.pdf" download className="w-full">
  <Button className="w-full flex items-center gap-2">
    <Download className="w-4 h-4" />
    {t("nav.downloadCV")}
  </Button>
</a>


              {/* Mobile language toggle button */}
              <button
                onClick={handleMobileLanguageToggle}
                className="w-full px-4 py-3 rounded-lg bg-secondary text-white hover:bg-secondary/90 transition-colors font-medium"
              >
                {currentLanguage === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
