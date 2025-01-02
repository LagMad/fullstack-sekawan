import React, { useState, useEffect } from "react";
import Button from "../Components/ui/Button";
import { Link, useForm } from "@inertiajs/react";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "user"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/register", {
            data: { ...data, confirm_password: data.password_confirmation },
            onSuccess: (response) => {
                console.log("Registration successful, redirecting to login...");
                window.location.href = '/login'
            },
            onError: (errors) => {
                console.log("Registration failed with errors:", errors);
                setErrorMessage("An error occurred during registration.");
            },
        });
    };

    useEffect(() => {
        // Check if passwords match and update the button's disabled state
        setIsButtonDisabled(data.password !== data.password_confirmation);
    }, [data.password, data.password_confirmation]);

    const passwordsMatch = data.password === data.password_confirmation;

    return (
        <div className="relative h-screen w-full flex justify-center items-center">
            <div className="flex flex-col w-[450px] bg-slate-800 text-white px-12 py-7 gap-10 justify-center items-center rounded-2xl">
                <div className="font-black text-6xl">
                    Vehi<span className="text-orange-400">Call</span>
                </div>
                <div className="font-bold text-2xl">Register</div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col justify-start items-center gap-5"
                >
                    <div className="flex flex-col w-full gap-1">
                        <label className="">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={`block py-3 px-3 w-full rounded-lg text-sm text-black border-[1px] ${
                                errors.name ? "border-red-500" : ""
                            }`}
                            placeholder="Name"
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>
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
                    <div className="flex flex-col w-full gap-1">
                        <label className="">Confirm Password</label>
                        <input
                            id="confirmpassword"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            className={`block py-3 px-3 w-full rounded-lg text-sm text-black border-[1px] ${
                                errors.name ? "border-red-500" : ""
                            }`}
                            placeholder="Confirm Password"
                        />
                        {errors.confirmpassword && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.confirmpassword}
                            </div>
                        )}
                    </div>
                </form>
                <div className="flex flex-col gap-2">
                    <Button
                        variation={"primary"}
                        disabled={processing || !passwordsMatch}
                        onClick={handleSubmit}
                    >
                        Register Me!
                    </Button>
                    <div>
                        Already have an account?{" "}
                        <Link
                            className="font-bold text-white hover:text-orange-500 transition-all duration-300 ease-in-out"
                            href="/login"
                        >
                            Login
                        </Link>
                    </div>
                </div>
                {!passwordsMatch && (
                    <p className="text-cust-white text-xs italic mt-4 bg-red-600 py-1 px-4 rounded-full">
                        Passwords do not match.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Register;
