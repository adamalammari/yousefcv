import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Target, 
  TrendingUp, 
  BookOpen, 
  MessageSquare, 
  Lightbulb,
  Award,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "التسويق الإلكتروني", level: 95, icon: TrendingUp },
    { name: "إدارة الحسابات الاجتماعية", level: 90, icon: Users },
    { name: "التصميم الجرافيكي", level: 88, icon: Target },
    { name: "الإعلانات الممولة", level: 92, icon: Award },
    { name: "صناعة المحتوى", level: 94, icon: MessageSquare },
    { name: "التصوير والمونتاج", level: 89, icon: Lightbulb },
    { name: "التجارة الإلكترونية", level: 85, icon: BookOpen },
    { name: "استخدام ادوات الذكاء الاصطناعي", level: 87, icon: Zap },
  ];

  const personalSkills = [
    "القدرة على التكيف",
    "حل المشكلات",
    "قيادة الفريق ",
    "  مهارات الاتصال والتواصل ",
    "مهارات الكمبيوتر",
    "  مهارات التخطيط والتنظيم",
    " تحليل البيانات والمعلومات",
    "  اعداد التقارير"
  ];

  return (
    <section id="skills" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            المهارات <span className="text-gradient">والكفاءات</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-foreground-muted text-lg mt-6 max-w-2xl mx-auto">
            مجموعة شاملة من المهارات المهنية والشخصية المطورة عبر سنوات من الخبرة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">المهارات المهنية</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={index} className="p-6 bg-card border-card-border skill-card">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="text-primary" size={20} />
                          </div>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground-muted font-mono">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Personal Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">المهارات الشخصية</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalSkills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-card border-card-border text-center hover:bg-primary/5 transition-all duration-300 skill-card group"
                >
                  <div className="p-2">
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">اللغات</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-card border-card-border">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">العربية</span>
                    <span className="text-sm text-foreground-muted">لغة أم</span>
                  </div>
                  <Progress value={100} className="h-2 bg-muted mt-2" />
                </Card>
                
                <Card className="p-6 bg-card border-card-border">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">الإنجليزية</span>
                    <span className="text-sm text-foreground-muted">جيد جداً</span>
                  </div>
                  <Progress value={85} className="h-2 bg-muted mt-2" />
                </Card>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">الإنجازات البارزة</h3>
              <div className="space-y-4">
                <Card className="p-4 bg-card border-card-border">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <Award className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-foreground">2023</h4>
                      <p className="text-sm text-foreground-muted">اعداد وتنفيذ الخطة التسويقية لشركة المنصة الزرقاء</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-card border-card-border">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <Target className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-foreground"> 2024 - 2025 </h4>
                      <p className="text-sm text-foreground-muted">تصميم وتنفيذ خطة التسويق الالكتروني لمصنع المنتجون المتميزون للصناعة</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;