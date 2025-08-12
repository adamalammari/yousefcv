import { Resend } from 'resend';

const resend = new Resend('re_JHejfhRk_69wMTbpoH12ETH9Q7sas2C4S');

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['youcefme2023@gmail.com'],
      subject: `رسالة جديدة من ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">رسالة جديدة من الموقع</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #007bff; margin-top: 0;">تفاصيل المرسل:</h3>
            <p><strong>الاسم:</strong> ${name}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #28a745; margin-top: 0;">الرسالة:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d; font-size: 14px;">
            <p>هذه الرسالة تم إرسالها من موقع يوسف العماري الشخصي</p>
            <p>تاريخ الإرسال: ${new Date().toLocaleDateString('ar-SA')}</p>
          </div>
        </div>
      `,
    });

    return Response.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}