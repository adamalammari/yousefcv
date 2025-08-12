import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const AboutSection = () => {
  const personalInfo = [
    { icon: MapPin, label: "الموقع", value: "الرياض، السعودية" },
    { icon: Phone, label: "الهاتف", value: "0504469214", link: "https://wa.me/966504469214" },
    { icon: Mail, label: "البريد الإلكتروني", value: "youcefme2023@gmail.com", link: "mailto:youcefme2023@gmail.com" },
    { icon: Calendar, label: "العمر", value: "27 سنة" },
  ];

  return (
    <section id="about" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* About Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                نبذة <span className="text-gradient">عني</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
              <p>
                <strong>الهدف الوظيفي:</strong> تطوير طموحي المكتسب في بيئة عمل تنافسية، لتعزيز قدراتي الذاتية والمهنية، ورفع كفاءتي في اكتساب الخبرات والمهارات الجديدة.
              </p>
              
              <p>
                أخصائي تسويق إلكتروني مع خبرة متميزة في التصميم والتصوير وصناعة المحتوى التسويقي والإعلاني. 
                أتميز بقدرتي على تطوير الخطط والاستراتيجيات التسويقية وإدارة الإعلانات الممولة والتجارة الإلكترونية.
              </p>

              <p>
                حاصل على درجة البكالوريوس في إدارة الأعمال من جامعة إب بتقدير جيد جداً، مع خبرة عملية واسعة في 
                التسويق الإلكتروني وإدارة صفحات التواصل الاجتماعي والمتاجر الإلكترونية.
              </p>
            </div>
          </div>

          {/* Personal Info Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-center mb-8">معلومات شخصية</h3>
            
            <div className="grid gap-4">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-card-border hover:bg-card/80 transition-all duration-300 skill-card"
                  >
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground-muted">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="p-6 text-center bg-card border-card-border">
                <h4 className="text-3xl font-bold text-gradient">+5</h4>
                <p className="text-foreground-muted">سنوات خبرة</p>
              </Card>
              <Card className="p-6 text-center bg-card border-card-border">
                <h4 className="text-3xl font-bold text-gradient">+15</h4>
                <p className="text-foreground-muted">مشروع مكتمل</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;