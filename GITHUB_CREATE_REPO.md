# إنشاء مستودع GitHub خطوة بخطوة

## 🚀 الخطوات المطلوبة

### 1. إنشاء حساب GitHub (إذا لم يكن موجوداً)
1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط "Sign up"
3. أدخل البريد الإلكتروني: `adamadam2778190689@gmail.com`
4. اتبع خطوات التسجيل

### 2. إنشاء مستودع جديد
1. **سجل دخول** إلى GitHub
2. **اضغط على زر "+"** في الأعلى اليمين
3. **اختر "New repository"**
4. **أدخل المعلومات التالية:**
   - Repository name: `yousef-portfolio`
   - Description: `Personal portfolio website for Yousef Al-Amari with WhatsApp integration`
   - Visibility: اختر `Public` أو `Private`
   - **لا تضع علامة** على "Add a README file"
   - **لا تضع علامة** على "Add .gitignore"
   - **لا تضع علامة** على "Choose a license"
5. **اضغط "Create repository"**

### 3. بعد إنشاء المستودع
ستظهر لك صفحة مع الأوامر التالية. **لا تستخدم هذه الأوامر** لأننا قمنا بإعداد Git بالفعل.

بدلاً من ذلك، استخدم هذه الأوامر:

```bash
# تغيير اسم الفرع إلى main
git branch -M main

# رفع المشروع
git push -u origin main
```

## 🔧 إذا كان اسم المستخدم مختلف

إذا كان اسم المستخدم على GitHub مختلف عن `adamadam2778190689`، قم بتحديث المستودع البعيد:

```bash
# إزالة المستودع البعيد الحالي
git remote remove origin

# إضافة المستودع البعيد الجديد
git remote add origin https://github.com/[YOUR_USERNAME]/yousef-portfolio.git

# رفع المشروع
git push -u origin main
```

## 📋 قائمة التحقق

- [ ] إنشاء حساب GitHub
- [ ] تسجيل الدخول
- [ ] إنشاء مستودع جديد باسم `yousef-portfolio`
- [ ] عدم وضع علامة على "Add a README file"
- [ ] اختيار Public أو Private
- [ ] الضغط على "Create repository"
- [ ] استخدام أوامر Git المذكورة أعلاه

## 🆘 إذا واجهت مشاكل

### المشكلة: "Repository not found"
**الحل**: تأكد من إنشاء المستودع على GitHub أولاً

### المشكلة: "Authentication failed"
**الحل**: 
1. استخدم Personal Access Token
2. أو استخدم GitHub CLI
3. أو استخدم SSH keys

### المشكلة: "Permission denied"
**الحل**: تأكد من أن المستودع مملوك لك أو لديك صلاحيات الكتابة

## 📞 الدعم

إذا استمرت المشاكل:
1. تحقق من اسم المستخدم على GitHub
2. تأكد من إنشاء المستودع
3. تحقق من إعدادات الحساب
4. استخدم GitHub Desktop كبديل
