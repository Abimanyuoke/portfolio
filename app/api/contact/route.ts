import { NextRequest, NextResponse } from 'next/server';

// You can use different email services:
// 1. Nodemailer with Gmail SMTP
// 2. SendGrid
// 3. Resend
// 4. EmailJS (client-side)

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Option 1: Using Nodemailer with Gmail
        const nodemailer = require('nodemailer');

        // Debug environment variables
        console.log('Email User:', process.env.EMAIL_USER);
        console.log('Email Pass exists:', !!process.env.EMAIL_PASS);

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('❌ Missing email configuration');
            return NextResponse.json(
                { error: 'Email configuration not found' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Test connection
        try {
            await transporter.verify();
            console.log('✅ Email transporter verified successfully');
        } catch (verifyError) {
            console.error('❌ Email transporter verification failed:', verifyError);
            return NextResponse.json(
                { error: 'Email service connection failed' },
                { status: 500 }
            );
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // your email to receive messages
            subject: `📧 New Contact Form Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
                        🚀 New Contact Form Submission
                    </h2>
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #f97316;">👤 Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #f97316;">📧 Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong style="color: #f97316;">💬 Message:</strong></p>
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #f97316;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
                    <p style="font-size: 12px; color: #666; text-align: center;">
                        This message was sent from your portfolio contact form
                    </p>
                </div>
            `,
            replyTo: email,
        };

        try {
            const result = await transporter.sendMail(mailOptions);
            console.log('✅ Email sent successfully to:', process.env.EMAIL_USER);
            console.log('Email result:', result.messageId);

            return NextResponse.json(
                {
                    message: 'Message sent successfully!',
                    messageId: result.messageId
                },
                { status: 200 }
            );
        } catch (emailError) {
            console.error('❌ Failed to send email:', emailError);
            const errorMessage = emailError instanceof Error ? emailError.message : 'Unknown email error';
            return NextResponse.json(
                { error: `Email sending failed: ${errorMessage}` },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('❌ General error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
        return NextResponse.json(
            { error: `Server error: ${errorMessage}` },
            { status: 500 }
        );
    }
}