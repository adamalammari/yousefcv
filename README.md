# موقع يوسف العماري الشخصي

موقع شخصي يعرض السيرة الذاتية والخبرات المهنية في مجال التسويق الإلكتروني.

## المميزات

- تصميم عصري وجذاب
- عرض الخبرات المهنية والتعليم
- نموذج اتصال مع إرسال بريد إلكتروني
- متجاوب مع جميع الأجهزة
- واجهة مستخدم عربية

## التقنيات المستخدمة

- React + TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- Express.js (للخادم)
- Resend (لإرسال البريد الإلكتروني)

## التثبيت والتشغيل

### 1. تثبيت التبعيات
```bash
npm install
```

### 2. تشغيل الموقع والخادم معاً
```bash
npm run dev:full
```

أو تشغيل كل منهما منفصلاً:

#### تشغيل الموقع فقط
```bash
npm run dev
```

#### تشغيل خادم API فقط
```bash
npm run server
```

### 3. الوصول للموقع
- الموقع: http://localhost:8080
- خادم API: http://localhost:3001

## إعداد البريد الإلكتروني

يستخدم المشروع خدمة Resend لإرسال رسائل البريد الإلكتروني. تأكد من تحديث مفتاح API في ملف `server.js`:

```javascript
const resend = new Resend('YOUR_RESEND_API_KEY');
```

## البناء للإنتاج

```bash
npm run build
```

## هيكل المشروع

```
src/
├── components/          # مكونات React
│   ├── ui/             # مكونات واجهة المستخدم
│   ├── AboutSection.tsx
│   ├── ContactForm.tsx
│   ├── ExperienceSection.tsx
│   └── ...
├── api/                # ملفات API
│   └── contact.ts
└── ...
server.js               # خادم Express.js
```

## المطور

يوسف العماري - أخصائي تسويق إلكتروني
