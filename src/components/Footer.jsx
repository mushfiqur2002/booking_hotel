import {
    Facebook, Twitter, Instagram, Youtube, Linkedin,
    MapPin, Phone, Mail, CreditCard, Shield,
    Headphones, Wifi, Car, Utensils, Dumbbell,
    Coffee, Waves, TreePine, Heart, Globe, Apple, PlayCircle, Award, Star,
    Send, Smartphone, Calendar, Users,
    HelpCircle,
    Settings,
    FileText
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-emerald-700 text-white">
            {/* Top Feature Banner */}
            <div className="bg-emerald-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Shield className="w-8 h-8 text-emerald-300" />
                            <div>
                                <div className="font-bold">Secure Booking</div>
                                <div className="text-sm text-emerald-200">SSL Encrypted</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Headphones className="w-8 h-8 text-emerald-300" />
                            <div>
                                <div className="font-bold">24/7 Support</div>
                                <div className="text-sm text-emerald-200">Always Available</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="w-8 h-8 text-emerald-300" />
                            <div>
                                <div className="font-bold">Best Price Guarantee</div>
                                <div className="text-sm text-emerald-200">Find Cheaper? We'll Match</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CreditCard className="w-8 h-8 text-emerald-300" />
                            <div>
                                <div className="font-bold">Flexible Payments</div>
                                <div className="text-sm text-emerald-200">Multiple Options</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <TreePine className="w-10 h-10 text-emerald-300" />
                            <div>
                                <h3 className="text-3xl font-bold">HotelBook</h3>
                                <p className="text-emerald-200">Luxury Stays Worldwide</p>
                            </div>
                        </div>
                        <p className="text-emerald-100 mb-6 leading-relaxed">
                            Discover exceptional accommodations with HotelBook. From cozy B&Bs to luxury resorts,
                            we bring you closer to your perfect getaway with exclusive deals and trusted reviews.
                        </p>

                        {/* Newsletter */}
                        <div className="mb-6">
                            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Send className="w-5 h-5" />
                                Subscribe to Newsletter
                            </h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-lg bg-emerald-600 border border-emerald-500 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                                />
                                <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                                    <Send className="w-4 h-4" />
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <Star className="w-4 h-4" />
                                    Popular Hotels
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Seasonal Deals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    Luxury Collection
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <TreePine className="w-4 h-4" />
                                    Eco Stays
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    Group Bookings
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Headphones className="w-5 h-5" />
                            Support
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <Settings className="w-4 h-4" />
                                    Manage Booking
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <HelpCircle className="w-4 h-4" />

                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Cancellation Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-emerald-300 mt-1 flex-shrink-0" />
                                <span className="text-emerald-100">
                                    123 Luxury Street, Suite 500<br />
                                    New York, NY 10001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                                <a href="tel:+11234567890" className="text-emerald-100 hover:text-white transition duration-300">
                                    +1 (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                                <a href="mailto:support@hotelbook.com" className="text-emerald-100 hover:text-white transition duration-300">
                                    support@hotelbook.com
                                </a>
                            </li>
                        </ul>

                        {/* App Downloads */}
                        <div className="mt-6">
                            <h5 className="font-bold mb-3 flex items-center gap-2">
                                <Smartphone className="w-4 h-4" />
                                Download App
                            </h5>
                            <div className="space-y-3">
                                <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-3">
                                    <Apple className="w-6 h-6" />
                                    <div className="text-left">
                                        <div className="text-xs">Download on the</div>
                                        <div className="font-bold">App Store</div>
                                    </div>
                                </button>
                                <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-3">
                                    <PlayCircle className="w-6 h-6" />
                                    <div className="text-left">
                                        <div className="text-xs">GET IT ON</div>
                                        <div className="font-bold">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-emerald-600 my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-emerald-200 text-sm">
                        © {currentYear} HotelBook. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-emerald-200 text-sm">Accepted Payments:</span>
                        <div className="flex gap-2">
                            <CreditCard className="w-6 h-6 text-emerald-300" />
                            <div className="text-xs bg-emerald-800 px-2 py-1 rounded">Visa</div>
                            <div className="text-xs bg-emerald-800 px-2 py-1 rounded">MasterCard</div>
                            <div className="text-xs bg-emerald-800 px-2 py-1 rounded">PayPal</div>
                            <div className="text-xs bg-emerald-800 px-2 py-1 rounded">Amex</div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Hotel Amenities Icons */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-emerald-600">
                    <div className="flex flex-col items-center">
                        <Wifi className="w-6 h-6 text-emerald-300 mb-1" />
                        <span className="text-xs text-emerald-200">Free WiFi</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Utensils className="w-6 h-6 text-emerald-300 mb-1" />
                        <span className="text-xs text-emerald-200">Restaurant</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Car className="w-6 h-6 text-emerald-300 mb-1" />
                        <span className="text-xs text-emerald-200">Parking</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Waves className="w-6 h-6 text-emerald-300 mb-1" />
                        <span className="text-xs text-emerald-200">Pool</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Dumbbell className="w-6 h-6 text-emerald-300 mb-1" />
                        <span className="text-xs text-emerald-200">Gym</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Coffee className="w-6 h-6 text-emerald-300 mb-1" />
                        <span className="text-xs text-emerald-200">Coffee</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heart className="w-6 h-6 text-emerald-300 mb-1" />
                        <span className="text-xs text-emerald-200">Spa</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;