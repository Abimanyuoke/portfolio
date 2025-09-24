# Contact Form Setup Guide

Form contact sudah dibuat dengan fitur lengkap. Untuk mengaktifkan pengiriman email, pilih salah satu dari opsi berikut:

## Option 1: EmailJS (Paling Mudah - Client Side)

1. Daftar di [EmailJS](https://www.emailjs.com/)
2. Buat service dan template
3. Uncomment kode EmailJS di `/components/contact/index.tsx`:

```javascript
const result = await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'your-email@gmail.com'
    },
    'YOUR_PUBLIC_KEY'
);
```

4. Install EmailJS: `npm install @emailjs/browser`

## Option 2: Resend (Recommended - Server Side)

1. Daftar di [Resend](https://resend.com/)
2. Install: `npm install resend`
3. Uncomment kode Resend di `/app/api/contact/route.ts`
4. Tambahkan ke `.env.local`:
```
RESEND_API_KEY=your-resend-api-key
```

## Option 3: Gmail + Nodemailer

1. Enable 2FA di Gmail
2. Generate App Password
3. Install: `npm install nodemailer @types/nodemailer`
4. Uncomment kode Nodemailer di `/app/api/contact/route.ts`
5. Tambahkan ke `.env.local`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Option 4: SendGrid

1. Daftar di [SendGrid](https://sendgrid.com/)
2. Install: `npm install @sendgrid/mail`
3. Uncomment kode SendGrid di `/app/api/contact/route.ts`
4. Tambahkan ke `.env.local`:
```
SENDGRID_API_KEY=your-sendgrid-api-key
```

## Fitur Form Contact

✅ **Validasi Form**
- Validasi nama, email, dan pesan
- Validasi format email
- Minimum 10 karakter untuk pesan

✅ **UI/UX**
- Design responsive
- Dark mode support
- Loading states
- Success/error messages
- Icons untuk setiap field

✅ **Accessibility**
- ARIA labels
- Keyboard navigation
- Screen reader support

✅ **Security**
- Input sanitization
- Rate limiting (dapat ditambahkan)
- CSRF protection (Next.js default)

## Struktur File

```
├── components/contact/index.tsx     # Form component
├── app/contact/page.tsx            # Contact page
├── app/api/contact/route.ts        # API endpoint
└── .env.example                    # Environment variables example
```

## Customization

### Mengubah Styling
Edit di `/components/contact/index.tsx`:
- Warna: `bg-orange-500` → `bg-blue-500`
- Spacing: `py-20` → `py-12`
- Border radius: `rounded-2xl` → `rounded-lg`

### Menambah Field
1. Tambah ke interface `FormData`
2. Tambah state di `formData`
3. Tambah field di form JSX
4. Update validasi
5. Update API endpoint

### Social Media Links
Update link di bagian social media:
```javascript
href="https://github.com/Abimanyuoke"  // GitHub
href="https://linkedin.com/in/yourprofile"  // LinkedIn
```

Ganti `your-email@gmail.com` dengan email Anda yang sebenarnya.

## Testing

Setelah setup, test form dengan:
1. Submit form kosong (harus error)
2. Submit dengan email invalid (harus error)
3. Submit dengan message < 10 karakter (harus error)
4. Submit form valid (harus berhasil)

Form sudah siap digunakan! 🚀