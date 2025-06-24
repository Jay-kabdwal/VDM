import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "buyer"
    });
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleRole = (role) => setForm({ ...form, role });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            const user = users.find(u => u.email === form.email && u.password === form.password);

            if (user) {
                loginUser(user.email, user.role);
                navigate(user.role === "buyer" ? "/user" : "/admin");
            } else {
                alert("Invalid credentials");
            }
        } else {
            if (form.password !== form.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            users.push({ ...form });
            localStorage.setItem("registeredUsers", JSON.stringify(users));

            alert("Registered successfully. Please login.");
            setIsLogin(true); // switch to login tab
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left */}
            <div className="w-1/2 bg-blue-100 flex flex-col justify-center items-center text-center p-10 rounded-r-3xl">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">VDR</h1>
                <p className="text-lg font-semibold text-blue-700">Your Secure Virtual Deal Room</p>
                <p className="text-sm text-blue-700 mt-2 max-w-sm">
                    Facilitating seamless negotiations, document sharing, and secure transactions.
                </p>
            </div>

            {/* Right */}
            <div className="w-1/2 flex justify-center items-center">
                <div className="w-full max-w-md bg-gray-50 p-8 rounded-xl shadow">
                    {/* Tabs */}
                    <div className="flex mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 p-2 rounded-t-md font-medium ${isLogin ? "bg-white text-black" : "bg-gray-200 text-gray-500"}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 p-2 rounded-t-md font-medium ${!isLogin ? "bg-white text-black" : "bg-gray-200 text-gray-500"}`}
                        >
                            Register
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-center">
                            {isLogin ? "Welcome Back" : "Create Your Account"}
                        </h2>
                        <p className="text-sm text-center text-gray-500">
                            {isLogin ? "Sign in to your account" : "Join the Virtual Deal Room"}
                        </p>

                        {!isLogin && (
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full border p-2 rounded-md"
                                required
                            />
                        )}

                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border p-2 rounded-md"
                            required
                        />
                        <input
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            type="password"
                            placeholder={isLogin ? "Enter your password" : "Create a password"}
                            className="w-full border p-2 rounded-md"
                            required
                        />

                        {!isLogin && (
                            <>
                                <input
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="w-full border p-2 rounded-md"
                                    required
                                />

                                <div className="text-sm text-gray-600 font-medium">I am a:</div>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => handleRole("buyer")}
                                        className={`flex-1 p-2 rounded-md border ${form.role === "buyer" ? "bg-gray-400 text-white" : "bg-gray-100 text-gray-600"}`}
                                    >
                                        Buyer
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleRole("seller")}
                                        className={`flex-1 p-2 rounded-md border ${form.role === "seller" ? "bg-gray-400 text-white" : "bg-gray-100 text-gray-600"}`}
                                    >
                                        Seller
                                    </button>
                                </div>
                            </>
                        )}

                        {isLogin && (
                            <div className="text-right text-sm text-blue-600 cursor-pointer">
                                Forgot Password?
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                        >
                            {isLogin ? "Sign In" : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;
