# دليل حل مشاكل إرسال البريد الإلكتروني

## ✅ الحالة الحالية
- ✅ الخادم يعمل على المنفذ 3001
- ✅ API يستقبل الطلبات بنجاح
- ✅ الرسائل تُرسل إلى Resend بنجاح
- ✅ يتم الحصول على ID للرسالة من Resend

## 🔍 خطوات التحقق من وصول الرسائل

### 1. التحقق من صندوق الوارد
- تحقق من صندوق الوارد في `youcefme2023@gmail.com`
- تحقق من مجلد الرسائل غير المرغوب فيها (Spam)
- تحقق من مجلد Promotions في Gmail

### 2. التحقق من لوحة تحكم Resend
1. اذهب إلى [resend.com](https://resend.com)
2. سجل دخول بحسابك
3. اذهب إلى قسم "Logs" أو "Activity"
4. ابحث عن الرسائل المرسلة باستخدام ID الرسالة

### 3. التحقق من إعدادات Domain
- تأكد من أن domain `resend.dev` مُتحقق في حسابك
- أو قم بإضافة domain خاص بك

## 🛠️ حلول محتملة

### الحل 1: تغيير عنوان المرسل
```javascript
// في ملف server.js
from: 'Yousef Al-Amari <noreply@yourdomain.com>'
```

### الحل 2: إضافة بريد إلكتروني بديل
```javascript
// في ملف server.js
to: ['youcefme2023@gmail.com', 'backup@example.com']
```

### الحل 3: إضافة headers إضافية
```javascript
const data = await resend.emails.send({
  from: 'Yousef Al-Amari <onboarding@resend.dev>',
  to: ['youcefme2023@gmail.com'],
  subject: `رسالة جديدة من ${name}`,
  html: `...`,
  headers: {
    'X-Priority': '1',
    'X-MSMail-Priority': 'High',
    'Importance': 'high'
  }
});
```

### الحل 4: استخدام بريد إلكتروني مُتحقق
1. اذهب إلى لوحة تحكم Resend
2. أضف domain جديد
3. اتبع خطوات التحقق
4. استخدم البريد الإلكتروني الجديد

## 📧 اختبار إرسال الرسائل

### اختبار من Terminal
```powershell
Invoke-WebRequest -Uri "http://localhost:3001/api/contact" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"name":"اختبار","email":"test@test.com","message":"رسالة اختبار"}'
```

### اختبار من الموقع
1. اذهب إلى http://localhost:8080
2. انتقل إلى قسم "تواصل معي"
3. املأ النموذج وأرسل رسالة

## 🔧 إعدادات إضافية

### إضافة logging مفصل
```javascript
// في ملف server.js
app.post('/api/contact', async (req, res) => {
  console.log('Received contact request:', req.body);
  
  try {
    const { name, email, message } = req.body;
    console.log('Sending email to:', 'youcefme2023@gmail.com');
    
    const data = await resend.emails.send({
      // ... إعدادات البريد
    });
    
    console.log('Email sent successfully:', data);
    res.json({ success: true, data });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});
```

## 📞 الدعم
إذا استمرت المشكلة، يمكنك:
1. التحقق من logs الخادم
2. مراجعة إعدادات Resend
3. التواصل مع دعم Resend
