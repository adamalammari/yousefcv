# دليل اختبار نموذج الاتصال

## 🔍 خطوات الاختبار

### 1. تأكد من تشغيل الخوادم
```bash
# تشغيل الخادم
node server.js

# تشغيل الموقع (في terminal منفصل)
npm run dev
```

### 2. التحقق من المنافذ
```bash
# التحقق من خادم API
netstat -ano | findstr ":3001"

# التحقق من الموقع
netstat -ano | findstr ":8080"
```

### 3. اختبار API مباشرة
```powershell
Invoke-WebRequest -Uri "http://localhost:3001/api/contact" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"name":"اختبار","email":"test@test.com","message":"رسالة اختبار"}'
```

### 4. اختبار من الموقع
1. اذهب إلى http://localhost:8080
2. انتقل إلى قسم "تواصل معي"
3. املأ النموذج:
   - الاسم: اختبار
   - البريد الإلكتروني: test@test.com
   - الرسالة: رسالة اختبار من الموقع
4. اضغط "إرسال الرسالة"

### 5. مراقبة Console
- افتح Developer Tools في المتصفح (F12)
- انتقل إلى تبويب Console
- راقب الرسائل عند إرسال النموذج

### 6. مراقبة Terminal الخادم
- راقب terminal الخادم لرؤية:
  - `Received contact request: {...}`
  - `Email sent successfully: {...}`

## 🐛 حل المشاكل

### المشكلة: لا تظهر رسائل في Console
**الحل**: تأكد من فتح Developer Tools في المتصفح

### المشكلة: لا تظهر رسائل في Terminal الخادم
**الحل**: تأكد من أن الخادم يعمل على المنفذ 3001

### المشكلة: خطأ CORS
**الحل**: تأكد من أن الخادم يستخدم CORS middleware

### المشكلة: خطأ في الاتصال
**الحل**: تأكد من أن URL صحيح: `http://localhost:3001/api/contact`

## 📧 التحقق من وصول الرسائل

### 1. في Gmail
- تحقق من صندوق الوارد
- تحقق من مجلد Spam
- تحقق من مجلد Promotions

### 2. في Resend Dashboard
- اذهب إلى [resend.com](https://resend.com)
- تحقق من قسم Logs/Activity
- ابحث عن ID الرسالة

## 🔧 إعدادات إضافية

### إضافة بريد إلكتروني بديل للاختبار
```javascript
// في server.js
to: ['youcefme2023@gmail.com', 'test@example.com']
```

### إضافة headers إضافية
```javascript
headers: {
  'X-Priority': '1',
  'X-MSMail-Priority': 'High',
  'Importance': 'high'
}
```
