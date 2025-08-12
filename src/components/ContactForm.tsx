import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // تنسيق الرسالة للواتساب
    const whatsappMessage = `مرحباً! رسالة جديدة من موقع يوسف العماري الشخصي

👤 *الاسم:* ${name}
📧 *البريد الإلكتروني:* ${email}
💬 *الرسالة:*
${message}

📅 *التاريخ:* ${new Date().toLocaleDateString('ar-SA')}
⏰ *الوقت:* ${new Date().toLocaleTimeString('ar-SA')}`;

    // تشفير الرسالة للواتساب
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/966504469214?text=${encodedMessage}`;

    try {
      // فتح الواتساب في نافذة جديدة
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "تم فتح الواتساب",
        description: "تم فتح الواتساب مع رسالتك. يرجى إرسال الرسالة.",
      });
      
      // إعادة تعيين النموذج
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      toast({
        title: "خطأ في فتح الواتساب",
        description: "حدث خطأ أثناء فتح الواتساب. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-8 bg-card border-card-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            الاسم الكامل
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="bg-background border-border"
            placeholder="أدخل اسمك الكامل"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            البريد الإلكتروني
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-background border-border"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            الرسالة
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            className="bg-background border-border resize-none"
            placeholder="اكتب رسالتك هنا..."
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium rounded-xl shadow-glow hover:shadow-elegant transition-all duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جارٍ التحضير...
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              إرسال عبر الواتساب
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;