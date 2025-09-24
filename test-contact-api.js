// Test API endpoint
// Anda bisa jalankan ini di browser console untuk test

const testContactAPI = async () => {
    try {
        console.log('🧪 Testing Contact API...');

        const testData = {
            name: 'Test User',
            email: 'test@example.com',
            message: 'This is a test message to verify the contact form is working properly.'
        };

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
        });

        const result = await response.json();

        if (response.ok) {
            console.log('✅ API Test Success:', result);
        } else {
            console.error('❌ API Test Failed:', result);
        }

        return result;
    } catch (error) {
        console.error('❌ API Test Error:', error);
        return error;
    }
};

// Uncomment untuk test
// testContactAPI();