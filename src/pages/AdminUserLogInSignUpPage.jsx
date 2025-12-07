import React from 'react'

import { useState } from "react";
import LogIn from "../components/forms/LogIn";
import SignUp from "../components/forms/SignUp";


function AdminUserLogInSignUpPage() {
    const [activeForm, setActiveForm] = useState('login');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
            <div className="flex flex-col gap-8">
                {/* Right Side - Forms */}
                <div className="w-[auto] bg-white rounded-xl shadow-2xl p-8 lg:p-12">
                    {/* Form Toggle */}
                    <div className="flex mb-8">
                        <button
                            onClick={() => setActiveForm('login')}
                            className={`flex-1 text-center text-md transition-all duration-300 ${activeForm === 'login'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                } rounded-l-2xl`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setActiveForm('signup')}
                            className={`flex-1 text-center text-md py-3 transition-all duration-300 ${activeForm === 'signup'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                } rounded-r-2xl`}
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Form Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {activeForm === 'login' ? 'Welcome Back!' : 'Join Our Community'}
                        </h2>
                        <p className="text-gray-600 text-sm">
                            {activeForm === 'login'
                                ? 'Enter your credentials to access your account'
                                : 'Create an account to unlock exclusive benefits'}
                        </p>
                    </div>

                    {/* Forms */}
                    <div className="relative">
                        <div className={`transition-all duration-500 ease-in-out ${activeForm === 'login' ? 'opacity-100' : 'absolute opacity-0 pointer-events-none'}`}>
                            <LogIn onSubmit={handleFormSubmit} />
                        </div>
                        <div className={`transition-all duration-500 ease-in-out ${activeForm === 'signup' ? 'opacity-100' : 'absolute opacity-0 pointer-events-none'}`}>
                            <SignUp onSubmit={handleFormSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUserLogInSignUpPage
