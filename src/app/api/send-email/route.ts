import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, wishes } = await request.json();

  // Cấu hình transporter cho Nodemailer với Gmail
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Sử dụng TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Sử dụng App Password ở đây
    },
  });

  // Lấy danh sách email người nhận và chuyển thành mảng
  const recipients = process.env.EMAIL_TO?.split(',') || [];

  try {
    // Gửi email đến tất cả người nhận
    await Promise.all(recipients.map(async (recipient) => {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: recipient.trim(), // Loại bỏ khoảng trắng thừa
        subject: 'New Wedding Wishes',
        text: `Name: ${name}\nWishes: ${wishes}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Wishes:</strong> ${wishes}</p>`,
      });
    }));

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send emails:', error);
    return NextResponse.json({ message: 'Failed to send emails' }, { status: 500 });
  }
}
