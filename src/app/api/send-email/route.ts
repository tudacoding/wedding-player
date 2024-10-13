import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, wishes } = await request.json();

  // Cấu hình transporter cho Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Gửi email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'New Wedding Wishes',
      text: `Name: ${name}\nWishes: ${wishes}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Wishes:</strong> ${wishes}</p>`,
    });

    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
    //   to: 'quynhphuongduong19@gmail.com',
    //   subject: 'New Wedding Wishes',
    //   text: `Name: ${name}\nWishes: ${wishes}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Wishes:</strong> ${wishes}</p>`,
    // });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}

