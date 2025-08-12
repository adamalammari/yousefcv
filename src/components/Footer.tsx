import { Instagram, MessageCircle, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-subtle border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-4">
            <a 
              href="https://wa.me/966504469214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
              aria-label="واتساب"
            >
              <MessageCircle size={24} />
            </a>
            <a 
              href="https://www.instagram.com/youcefme2023?utm_source=qr&igsh=MTRic3ZjdmYyMGlvNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
              aria-label="إنستغرام"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@youcefme2023?_t=ZS-8yobiSLH2Tn&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
              aria-label="تيك توك"
            >
              <Music size={24} />
            </a>
          </div>
          
          <p className="text-sm text-foreground-muted">
            © 2024 جميع الحقوق محفوظة
          </p>
          
          <div className="text-foreground-muted">
            <span>بواسطة </span>
            <span className="text-primary font-medium">يوسف العماري</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;