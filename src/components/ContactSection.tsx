import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "youcefme2023@gmail.com",
      link: "mailto:youcefme2023@gmail.com"
    },
    {
      icon: Phone,
      title: "رقم الهاتف",
      value: "0504469214",
      link: "https://wa.me/966504469214"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "الرياض، السعودية",
      link: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // تنسيق الرسالة للواتساب
    const whatsappMessage = `مرحباً! رسالة جديدة من موقع يوسف العماري الشخصي

👤 *الاسم:* ${formData.name}
📧 *البريد الإلكتروني:* ${formData.email}
📝 *الموضوع:* ${formData.subject}
💬 *الرسالة:*
${formData.message}

📅 *التاريخ:* ${new Date().toLocaleDateString('ar-SA')}
⏰ *الوقت:* ${new Date().toLocaleTimeString('ar-SA')}`;

    // تشفير الرسالة للواتساب
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/966504469214?text=${encodedMessage}`;

    // فتح الواتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم فتح الواتساب",
      description: "تم فتح الواتساب مع رسالتك. يرجى إرسال الرسالة.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            تواصل <span className="text-gradient">معي</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-foreground-muted text-lg mt-6 max-w-2xl mx-auto">
            لا تتردد في التواصل معي للمناقشة حول الفرص المهنية أو التعاون في المشاريع
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">معلومات التواصل</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="p-6 bg-card border-card-border skill-card">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-foreground-muted hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground-muted">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="p-8 bg-gradient-primary text-primary-foreground border-0">
              <div className="text-center space-y-4">
                <MessageCircle size={48} className="mx-auto opacity-90" />
                <h3 className="text-xl font-bold">هل لديك مشروع في ذهنك؟</h3>
                <p className="opacity-90">
                  أحب العمل على المشاريع المثيرة والتحديات الجديدة. دعنا نناقش كيف يمكنني مساعدتك.
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                  onClick={() => window.open('https://wa.me/966504469214', '_blank')}
                >
                  ابدأ المحادثة
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">أرسل رسالة</h3>
            
            <Card className="p-8 bg-card border-card-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الاسم الكامل
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="اكتب اسمك هنا"
                      required
                      className="bg-muted border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      required
                      className="bg-muted border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الموضوع
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="موضوع الرسالة"
                    required
                    className="bg-muted border-border focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الرسالة
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    required
                    className="bg-muted border-border focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-medium rounded-xl shadow-glow hover:shadow-elegant transition-all duration-300"
                >
                  <Send className="mr-2" size={20} />
                  إرسال عبر الواتساب
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;