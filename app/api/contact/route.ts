import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

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
        // nodemailer is already imported at the top

        // Debug environment variables
        console.log('📧 Email User:', process.env.EMAIL_USER);
        console.log('🔑 Email Pass exists:', !!process.env.EMAIL_PASS);
        console.log('🔐 Email Pass length:', process.env.EMAIL_PASS?.length);
        console.log('🌍 All env keys:', Object.keys(process.env).filter(key => key.includes('EMAIL')));

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('❌ Missing email configuration');
            return NextResponse.json(
                { error: 'Email configuration not found. Please check environment variables.' },
                { status: 500 }
            );
        }

        // Try STARTTLS first (port 587), then SSL (port 465) if needed
        const transporterConfigs = [
            {
                name: 'STARTTLS (587)',
                config: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false
                    },
                    connectionTimeout: 30000,
                    greetingTimeout: 15000,
                    socketTimeout: 30000,
                }
            },
            {
                name: 'SSL (465)',
                config: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false
                    },
                    connectionTimeout: 30000,
                    greetingTimeout: 15000,
                    socketTimeout: 30000,
                }
            }
        ];

        let transporter: nodemailer.Transporter | null = null;

        // Try different transporter configurations
        for (const { name, config } of transporterConfigs) {
            try {
                console.log(`🔧 Trying ${name} configuration...`);
                const testTransporter = nodemailer.createTransport(config);

                // Quick verification test
                await new Promise<void>((resolve, reject) => {
                    const timeout = setTimeout(() => reject(new Error('Verification timeout')), 3000);
                    testTransporter.verify((error: any, success: any) => {
                        clearTimeout(timeout);
                        if (error) reject(error);
                        else resolve();
                    });
                });

                transporter = testTransporter;
                console.log(`✅ Successfully configured with ${name}`);
                break;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                console.log(`❌ ${name} failed:`, errorMessage);
                continue;
            }
        }

        if (!transporter) {
            console.error('❌ All transporter configurations failed');
            return NextResponse.json(
                { error: 'Unable to establish email connection with any configuration' },
                { status: 500 }
            );
        }

        // Transporter is already verified above
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

        // Retry mechanism for sending email
        let lastError;
        const maxRetries = 3;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                console.log(`📤 Attempting to send email (attempt ${attempt}/${maxRetries})...`);

                const result = await transporter.sendMail(mailOptions);
                console.log('✅ Email sent successfully to:', process.env.EMAIL_USER);
                console.log('📧 Email result:', result.messageId);

                return NextResponse.json(
                    {
                        message: 'Message sent successfully!',
                        messageId: result.messageId
                    },
                    { status: 200 }
                );
            } catch (emailError) {
                lastError = emailError;
                console.error(`❌ Attempt ${attempt} failed:`, emailError);

                if (attempt < maxRetries) {
                    console.log(`⏳ Waiting 2 seconds before retry...`);
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            }
        }

        // All attempts failed
        console.error('❌ All email attempts failed:', lastError);
        const errorMessage = lastError instanceof Error ? lastError.message : 'Unknown email error';
        return NextResponse.json(
            { error: `Email sending failed after ${maxRetries} attempts: ${errorMessage}` },
            { status: 500 }
        );
    } catch (error) {
        console.error('❌ General error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
        return NextResponse.json(
            { error: `Server error: ${errorMessage}` },
            { status: 500 }
        );
    }
}