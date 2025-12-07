import { useState } from "react";
import LogIn from "../forms/LogIn";
import SignUp from "../forms/SignUp";
import {
    Hotel,
    Shield,
    CreditCard,
    Star,
    Award,
    Users,
    X,
    CheckCircle
} from 'lucide-react';

function FormSection() {
    const [activeForm, setActiveForm] = useState('login');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
            <div className="absolute top-0 left-0 right-0 py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 text-emerald-700">
                    <Hotel className="w-8 h-8" />
                    <span className="text-2xl font-bold">HotelBook</span>
                </div>
                <div className="text-sm text-emerald-600">
                    Trusted by 500k+ travelers worldwide
                </div>
            </div>

            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 mt-16">
                {/* Left Side - Info Panel */}
                <div className="lg:w-2/5 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl p-8 lg:p-12 text-white">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Hotel className="w-10 h-10" />
                            <h1 className="text-3xl font-bold">Welcome Back</h1>
                        </div>
                        <p className="text-emerald-100 text-lg">
                            Sign in to access exclusive deals, manage your bookings, and continue your journey with us.
                        </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-6 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-600 p-2 rounded-lg">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Secure Booking</h3>
                                <p className="text-emerald-200 text-sm">Bank-level security for all your transactions</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-600 p-2 rounded-lg">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Best Price Guarantee</h3>
                                <p className="text-emerald-200 text-sm">Find a better deal? We'll match it and give you 10% off</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-600 p-2 rounded-lg">
                                <Star className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Member Rewards</h3>
                                <p className="text-emerald-200 text-sm">Earn points on every booking for free stays</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-600 p-2 rounded-lg">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
                                <p className="text-emerald-200 text-sm">Our team is always here to help you</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-emerald-600/30 p-6 rounded-xl border border-emerald-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">Alex Johnson</h4>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-emerald-100 italic">
                            "Booking through HotelBook gave me the best hotel experience ever. The exclusive deals are unbelievable!"
                        </p>
                    </div>
                </div>

                {/* Right Side - Forms */}
                <div className="lg:w-3/5 bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
                    {/* Form Toggle */}
                    <div className="flex mb-8">
                        <button
                            onClick={() => setActiveForm('login')}
                            className={`flex-1 py-4 text-center text-lg font-semibold transition-all duration-300 ${activeForm === 'login'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                } rounded-l-2xl`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setActiveForm('signup')}
                            className={`flex-1 py-4 text-center text-lg font-semibold transition-all duration-300 ${activeForm === 'signup'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                } rounded-r-2xl`}
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <div>
                                <p className="font-semibold text-green-800">
                                    {activeForm === 'login' ? 'Welcome back!' : 'Account created successfully!'}
                                </p>
                                <p className="text-green-600 text-sm">
                                    {activeForm === 'login'
                                        ? 'Redirecting to your dashboard...'
                                        : 'Check your email to verify your account.'}
                                </p>
                            </div>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="ml-auto text-green-600 hover:text-green-800"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    {/* Form Title */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {activeForm === 'login' ? 'Welcome Back!' : 'Join Our Community'}
                        </h2>
                        <p className="text-gray-600">
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

                    {/* Divider */}
                    <div className="my-8 flex items-center">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="px-4 text-gray-500 text-sm">Or continue with</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button className="flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="font-medium text-gray-700">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300">
                            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="font-medium text-gray-700">Facebook</span>
                        </button>
                    </div>

                    {/* Terms & Privacy */}
                    <p className="text-center text-gray-500 text-sm">
                        By continuing, you agree to our{' '}
                        <a href="#" className="text-emerald-700 hover:text-emerald-800 font-medium">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-emerald-700 hover:text-emerald-800 font-medium">
                            Privacy Policy
                        </a>
                    </p>

                    {/* Quick Stats */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-emerald-700">500K+</div>
                                <div className="text-gray-600 text-sm">Happy Travelers</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-emerald-700">15K+</div>
                                <div className="text-gray-600 text-sm">Hotels Worldwide</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-emerald-700">24/7</div>
                                <div className="text-gray-600 text-sm">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSection;