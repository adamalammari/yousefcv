# دليل رفع المشروع إلى GitHub

## 📋 الخطوات المطلوبة

### 1. إنشاء مستودع جديد على GitHub
1. اذهب إلى [GitHub.com](https://github.com)
2. سجل دخول بحسابك: `adamadam2778190689@gmail.com`
3. اضغط على زر "+" في الأعلى → "New repository"
4. أدخل اسم المستودع: `yousef-portfolio`
5. اختر "Public" أو "Private" حسب رغبتك
6. **لا** تضع علامة على "Initialize this repository with a README"
7. اضغط "Create repository"

### 2. ربط المستودع المحلي بـ GitHub
بعد إنشاء المستودع، ستظهر لك الأوامر التالية. استخدم هذه الأوامر:

```bash
# إضافة المستودع البعيد
git remote add origin https://github.com/[username]/yousef-portfolio.git

# رفع المشروع
git branch -M main
git push -u origin main
```

### 3. استبدل [username] باسم المستخدم الخاص بك على GitHub

## 🔧 الأوامر الجاهزة

### إذا كان اسم المستخدم `adamadam2778190689`:
```bash
git remote add origin https://github.com/adamadam2778190689/yousef-portfolio.git
git branch -M main
git push -u origin main
```

### إذا كان اسم المستخدم مختلف:
```bash
git remote add origin https://github.com/[YOUR_USERNAME]/yousef-portfolio.git
git branch -M main
git push -u origin main
```

## 📁 محتويات المشروع

### الملفات الرئيسية:
- `README.md` - وصف المشروع
- `package.json` - تبعيات المشروع
- `server.js` - خادم API للبريد الإلكتروني
- `src/` - كود React الرئيسي

### الملفات التوثيقية:
- `WHATSAPP_GUIDE.md` - دليل استخدام الواتساب
- `TESTING_GUIDE.md` - دليل اختبار المشروع
- `TROUBLESHOOTING.md` - حل المشاكل

## 🚀 بعد الرفع

### 1. تفعيل GitHub Pages (اختياري):
1. اذهب إلى Settings → Pages
2. اختر Source: "Deploy from a branch"
3. اختر Branch: "main"
4. اضغط "Save"

### 2. إضافة وصف للمشروع:
- اذهب إلى المستودع
- اضغط على "About" في الجانب الأيمن
- أضف وصف للمشروع

### 3. إضافة Topics:
- أضف topics مثل: `portfolio`, `react`, `typescript`, `whatsapp`

## 🔐 الأمان

### ملفات حساسة:
- تأكد من أن `server.js` لا يحتوي على مفاتيح API حقيقية
- استخدم متغيرات البيئة للبيانات الحساسة

### .gitignore:
- تأكد من أن `node_modules/` و `dist/` في .gitignore

## 📞 الدعم

إذا واجهت أي مشاكل:
1. تحقق من اسم المستخدم على GitHub
2. تأكد من صحة رابط المستودع
3. تحقق من صلاحيات الحساب
