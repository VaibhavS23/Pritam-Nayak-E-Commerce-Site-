import React, { useEffect, useState } from "react";

export default function LoginModal({ onClose, setRoute, route }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <>
            <div
                className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-50"
                onClick={handleClose}
            >
                <div
                    className={`relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="relative h-56 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/Collection Card.png')",
                        }}
                    >
                        <h2 className="absolute bottom-4 left-6 text-left text-4xl text-white"
                            style={{ fontFamily: 'Galada' }}>
                            Sign In
                        </h2>

                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={handleClose}
                        >
                            &times;
                        </button>
                    </div>

                    <div className="p-6">
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-sm"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-sm"
                            />

                            <a
                                href="#"
                                className="block text-left text-sm text-gray-500 hover:underline"
                            >
                                Forgot Password?
                            </a>

                            <button
                                type="submit"
                                className="w-full py-3 bg-black text-white rounded-sm text-lg font-semibold"
                            >
                                Sign In
                            </button>

                            <button
                                type="button"
                                className="w-full py-3 border border-black text-black rounded-sm text-lg font-semibold"
                                onClick={() => setRoute("Signup")}
                            >
                                Create an Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}