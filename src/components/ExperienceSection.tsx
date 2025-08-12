import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "أخصائي تسويق إلكتروني",
      company: "شركة المنتجون المتميزون للصناعة",
      period: "24/09/2024 - حتى الآن",
      description: "تضمنت مهامي التالي: رسم الخطة التسويقية + تأسيس وإنشاء مواقع التواصل الاجتماعي - البروفايلات التسويقية - إعداد التقارير التسويقية - صناعة المحتوى التسويقي - التسويق الإلكتروني والإعلانات الممولة - المبيعات.",
      skills: ["التسويق الإلكتروني", "إدارة المحتوى", "الإعلانات الممولة", "المبيعات"]
    },
    {
      title: "أخصائي تسويق إلكتروني",
      company: "شركة المنصة الزرقاء للتشغيل والصيانة",
      period: "26/03/2023 - 22/09/2024",
      description: "تضمنت مهامي التالي: خطة التسويق الإلكتروني - البروفايلات التسويقية - إدارة حسابات السوشيال ميديا - صناعة المحتوى التسويقي - التواصل والرد على العملاء - الإعلانات الممولة.",
      skills: ["التسويق الإلكتروني", "إدارة السوشيال ميديا", "صناعة المحتوى", "خدمة العملاء"]
    },
    {
      title: "أخصائي تسويق إلكتروني",
      company: "شركة رواسيم دبي للأواني المنزلية",
      period: "25/06/2022 - 25/03/2023",
      description: "تضمنت مهامي التالي: إدارة حسابات السوشيال ميديا - تصوير المنتجات - صناعة المحتوى الإعلاني - التواصل والرد على العملاء - الإعلانات الممولة - مبيعات الأونلاين.",
      skills: ["إدارة السوشيال ميديا", "تصوير المنتجات", "صناعة المحتوى", "المبيعات الإلكترونية"]
    }
  ];

  const education = [
    {
      degree: "بكالوريوس إدارة أعمال",
      institution: "جامعة إب",
      period: "2020 - 2021",
      description: "تخصص في إدارة الأعمال بتقدير جيد جداً مع التركيز على الإدارة والتسويق."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            الخبرات <span className="text-gradient">والتعليم</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-foreground-muted text-lg mt-6 max-w-2xl mx-auto">
          رحلتي المهنية والأكاديمية في التسويق الالكتروني وتطوير الأعمال          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="mr-3 text-primary" size={24} />
              الخبرات المهنية
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                 <Card key={index} className="p-6 bg-card border-card-border hover:shadow-card transition-all duration-300 skill-card">
                   <div className="space-y-4">
                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                       <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                       <Badge variant="outline" className="border-primary/20 text-primary w-fit">
                         <Calendar size={14} className="mr-1" />
                         {exp.period}
                       </Badge>
                     </div>
                     
                     <div className="flex items-center text-foreground-muted">
                       <Building size={16} className="mr-2" />
                       <span>{exp.company}</span>
                     </div>
                     
                     <p className="text-foreground-muted leading-relaxed">
                       {exp.description}
                     </p>
                     
                     <div className="flex flex-wrap gap-2">
                       {exp.skills.map((skill, skillIndex) => (
                         <Badge 
                           key={skillIndex} 
                           variant="secondary" 
                           className="bg-primary/10 text-primary border-primary/20"
                         >
                           {skill}
                         </Badge>
                       ))}
                     </div>
                   </div>
                 </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="mr-3 text-primary" size={24} />
              التعليم
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-card-border hover:shadow-card transition-all duration-300 skill-card">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <Badge variant="outline" className="border-primary/20 text-primary w-fit">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-foreground-muted">
                      <Building size={16} className="mr-2" />
                      <span>{edu.institution}</span>
                    </div>
                    
                    <p className="text-foreground-muted leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">الكورسات التدريبية</h3>
              <div className="space-y-4">
                <Card className="p-4 bg-card border-card-border">
                  <h4 className="font-medium text-foreground">دورات التنمية البشرية 1 & 2</h4>
                  <p className="text-sm text-foreground-muted">المشروع الوطني لتدريب والتأهيل الشبابي - 2017</p>
                </Card>
                <Card className="p-4 bg-card border-card-border">
                  <h4 className="font-medium text-foreground">دورة IC3 من المستوى الثاني</h4>
                  <p className="text-sm text-foreground-muted">مركز الرورد العربي - 92.71% ممتاز - 2018</p>
                </Card>
                <Card className="p-4 bg-card border-card-border">
                  <h4 className="font-medium text-foreground">دورة التصميم الوظيفي</h4>
                  <p className="text-sm text-foreground-muted">مركز الرورد العربي - 97.50% ممتاز - 2019</p>
                </Card>
                <Card className="p-4 bg-card border-card-border">
                  <h4 className="font-medium text-foreground">دورة السكرتارية</h4>
                  <p className="text-sm text-foreground-muted">مركز الرورد العربي - 91% ممتاز - 2020</p>
                </Card>
                <Card className="p-4 bg-card border-card-border">
                  <h4 className="font-medium text-foreground">دبلوم احتراف اعلانات السوشيال ميديا</h4>
                  <p className="text-sm text-foreground-muted">ااكاديمية اعمل بيزنس - ممتاز - 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;