import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, Award } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "الرئيسية", icon: Home },
    { id: "about", label: "نبذة عني", icon: User },
    { id: "experience", label: "الخبرات", icon: Briefcase },
    { id: "skills", label: "المهارات", icon: Award },
    { id: "contact", label: "تواصل معي", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-floating">
      <div className="flex items-center space-x-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                ${isActive 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "text-foreground-muted hover:text-foreground hover:bg-muted"
                }
              `}
            >
              <Icon size={16} />
              <span className="text-sm font-medium hidden md:block">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;