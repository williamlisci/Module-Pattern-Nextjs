// src/app/page.tsx
'use client'; // Vì dùng hooks (optional, nhưng tốt cho client-side)

import {useState} from 'react';
import UserUtils from '@/utils/userUtils'; // Import module (sử dụng alias từ setup)

export default function Home() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [formattedName, setFormattedName] = useState('');

    const handleValidate = () => {
        const valid = UserUtils.validateEmail(email); // Gọi public method
        setIsValid(valid);
    };

    const handleFormat = () => {
        const name = UserUtils.formatUserName(firstName, lastName); // Gọi public method khác
        setFormattedName(name);
    };
 
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-2xl font-bold mb-8">Demo Module Pattern trong Next.js</h1>

            {/* Phần validate email */}
            <div className="mb-8">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    className="border p-2 mr-2"
                />
                <button onClick={handleValidate} className="bg-blue-500 text-white p-2 rounded">
                    Validate Email
                </button>
                <p className={`mt-2 ${isValid ? 'text-green-500' : 'text-red-500'}`}>
                    {isValid ? 'Email hợp lệ!' : 'Email không hợp lệ.'}
                </p>
            </div>

            {/* Phần format username */}
            <div>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="border p-2 mr-2"
                />
                <button onClick={handleFormat} className="bg-green-500 text-white p-2 rounded">
                    Format Username
                </button>
                <p className="mt-2 text-lg">Formatted: {formattedName}</p>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Private parts (như regex) không thể truy cập trực tiếp từ ngoài module.
            </p>
        </main>
    );
}