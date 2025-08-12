import { ArrowDown, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant profile-float">
                <img 
                  src="/lovable-uploads/3d175ab1-30b5-44f7-a380-75998e08ccc9.png" 
                  alt="Youssef Al-Hammari"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -inset-8 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-8 reveal">
            <div className="space-y-4">
              <p className="text-lg text-foreground-muted font-mono">مرحباً، أنا</p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-gradient">يوسف</span>{" "}
                <span className="text-foreground">العماري</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary font-medium typewriter">
                Digital Marketing & Social Media Specialist
              </h2>
            </div>

            <p className="text-lg text-foreground-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed reveal-delay">
              أخصائي تسويق إلكتروني – مهتم بكل ما يتعلق بالتصميم والتصوير وصناعة المحتوى التسويقي والإعلاني.
              (خطط واستراتيجيات تسويقية، إعلانات ممولة، تجارة إلكترونية، حسابات تواصل اجتماعي)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end reveal-delay">
              <Button 
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-medium rounded-xl shadow-glow hover:shadow-elegant transition-all duration-300"
              >
                <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                تواصل معي
              </Button>
              
              <Button 
                variant="outline"
                className="border-primary/20 text-foreground hover:bg-primary/10 px-8 py-6 text-lg font-medium rounded-xl hover:border-primary/40 transition-all duration-300"
              >
                <FileText className="mr-2" size={20} />
                تحميل السيرة الذاتية
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-foreground-muted hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;