import React, { useState, useEffect } from "react";
import Button from "../Components/ui/Button";
import { Link, useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        post("/login", {
            data: { ...data, token_name: "user_token" },
            onSuccess: (response) => {
                if (response.props.user && response.props.token) {
                    // Store the user and token data in localStorage
                    localStorage.setItem("user", JSON.stringify(response.props.user));
                    localStorage.setItem("userToken", response.props.token);
    
                    // Redirect to the home page
                    Inertia.visit("/", {
                        method: "get",
                    });
                } else {
                    setErrorMessage("Invalid email or password!");
                }
            },
            onError: (error) => {
                console.log(error);
                setErrorMessage("An error occurred during login.");
            },
        });
    };
    

    return (
        <div className="relative h-screen w-full flex justify-center items-center">
            <div className="flex flex-col w-[450px] bg-slate-800 text-white px-12 py-7 gap-10 justify-center items-center rounded-2xl">
                <div className="font-black text-6xl">
                    Vehi<span className="text-orange-400">Call</span>
                </div>
                <div className="font-bold text-2xl">Login</div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col justify-start items-center gap-5"
                >
                    <div className="flex flex-col w-full gap-1">
                        <label className="">Email</label>
                        <input
                            id="email"
                            type="text"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className={`block py-3 px-3 w-full rounded-lg text-sm text-black border-[1px] ${
                                errors.name ? "border-red-500" : ""
                            }`}
                            placeholder="Email"
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label className="">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className={`block py-3 px-3 w-full rounded-lg text-sm text-black border-[1px] ${
                                errors.name ? "border-red-500" : ""
                            }`}
                            placeholder="Password"
                        />
                        {errors.password && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </div>
                        )}
                    </div>
                </form>
                <div className="flex flex-col gap-2">
                    <Button
                        variation={"primary"}
                        disabled={processing}
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                    <div>
                        Don't have an account?{" "}
                        <Link
                            className="font-bold text-white hover:text-orange-500 transition-all duration-300 ease-in-out"
                            href="/register"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
