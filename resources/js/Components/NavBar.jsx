import { Link, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import { Inertia } from "@inertiajs/inertia";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const NavBar = () => {
    const { url, props } = usePage();
    const isActive = (path) => url === path;
    const { user, token } = usePage().props; // This will be available when you render the page with Inertia
    const [userData, setUserData] = useState(user || null);
    const [authToken, setAuthToken] = useState(token || null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // If data is not available via Inertia, check localStorage
        if (!userData && localStorage.getItem("user")) {
            setUserData(JSON.parse(localStorage.getItem("user")));
            setAuthToken(localStorage.getItem("userToken"));
        }
    }, [userData, authToken]);
    const isAuthenticated = Boolean(authToken);

    const handleLogOut = () => {
        // Remove user data and token from localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("userToken");

        // Redirect to home or login page after logout
        Inertia.visit("/"); // You can choose to go to the login page
    };

    return (
        <nav className="flex flex-row justify-between px-5 lg:px-16 py-4 lg:py-6 bg-slate-800 text-white">
            <div className="flex items-center text-white font-black text-3xl md:text-4xl">
                Vehi<span className=" text-orange-400">Call</span>
            </div>
            <div className="hidden lg:flex flex-row justify-center items-center w-full gap-5">
                <Link
                    className={`p-2 hover:font-bold hover:text-orange-400 transition-all duration-500 ease-in-out ${
                        isActive("/") ? " text-orange-400 font-bold" : ""
                    }`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`p-2 hover:font-bold hover:text-orange-400 transition-all duration-500 ease-in-out ${
                        isActive("/vehicle-list")
                            ? " text-orange-400 font-bold"
                            : ""
                    }`}
                    href="/vehicle-list"
                >
                    Vehicle List
                </Link>
                <Link
                    className={`p-2 hover:font-bold hover:text-orange-400 transition-all duration-500 ease-in-out ${
                        isActive("/order") ? " text-orange-400 font-bold" : ""
                    }`}
                    href="/order"
                >
                    Order
                </Link>
                <Link
                    className={`p-2 hover:font-bold hover:text-orange-400 transition-all duration-500 ease-in-out ${
                        isActive("/admin-dashboard")
                            ? " text-orange-400 font-bold"
                            : ""
                    }`}
                    href="/admin-dashboard"
                >
                    Admin Dashboard
                </Link>
                <Link
                    className={`p-2 hover:font-bold hover:text-orange-400 transition-all duration-500 ease-in-out ${
                        isActive("/usage-graph")
                            ? " text-orange-400 font-bold"
                            : ""
                    }`}
                    href="/usage-graph"
                >
                    Graph
                </Link>
            </div>
            <div className="flex flex-row justify-end items-center gap-5">
                {!isAuthenticated && (
                    <>
                        <Link href="/register">
                            <Button
                                className={" border-2"}
                                variation={"secondary"}
                            >
                                Register
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variation={"primary"}>Login</Button>
                        </Link>
                    </>
                )}
                {/* Optionally, show a logout button if the user is logged in */}
                {isAuthenticated && (
                    <div className="relative">
                        <div className="flex lg:hidden">
                            <Button
                                variation={"primary"}
                                onClick={toggleDropdown}
                            >
                                <GiHamburgerMenu size={30} />
                            </Button>
                        </div>
                        <div className="relative hidden lg:flex">
                            <Button
                                className={
                                    "text-center flex flex-row justify-center items-start text-xl gap-2"
                                }
                                variation={"primary"}
                                onClick={toggleDropdown}
                            >
                                <span className="text-xl font-bold">
                                    {userData.name}
                                </span>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                >
                                    <IoMdArrowDropdown size={30} />
                                </div>
                            </Button>
                        </div>
                        {isOpen && (
                            <motion.div
                                className="absolute top-[72px] w-42 lg:w-full right-0 mt-1 bg-transparent text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        duration: 5.0,
                                        damping: 10,
                                        stiffness: 100,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        type: "spring",
                                        duration: 5.0,
                                        damping: 10,
                                        stiffness: 100,
                                    },
                                }}
                            >
                                <ul className="flex flex-col w-full gap-2 bg-white p-1 rounded-xl shadow-lg">
                                    <li className="text-slate-800 font-normal">
                                        Hello,{" "}
                                        <span className="font-bold text-orange-500">
                                            {userData.name}
                                        </span>
                                    </li>
                                    <li
                                        className="flex justify-center items-center text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl font-medium text-sm md:text-sm transition-all duration-500 ease-in-out"
                                        onClick={"#"}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Dashboard
                                    </li>

                                    <li
                                        className="flex lg:hidden justify-center items-center text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl font-medium text-sm md:text-sm transition-all duration-500 ease-in-out"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Link
                                            className={`p-2 hover:font-bold text-white transition-all duration-500 ease-in-out`}
                                            href="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li
                                        className="flex lg:hidden justify-center items-center text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl font-medium text-sm md:text-sm transition-all duration-500 ease-in-out"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Link
                                            className={`p-2 hover:font-bold text-white transition-all duration-500 ease-in-out`}
                                            href="/vehicle-list"
                                        >
                                            Vehicle List
                                        </Link>
                                    </li>
                                    <li
                                        className="flex lg:hidden justify-center items-center text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl font-medium text-sm md:text-sm transition-all duration-500 ease-in-out"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Link
                                            className={`p-2 hover:font-bold text-white transition-all duration-500 ease-in-out`}
                                            href="/order"
                                        >
                                            Order
                                        </Link>
                                    </li>
                                    <li
                                        className="flex lg:hidden justify-center items-center text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl font-medium text-sm md:text-sm transition-all duration-500 ease-in-out"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Link
                                            className={`p-2 hover:font-bold text-white transition-all duration-500 ease-in-out`}
                                            href="/admin-dashboard"
                                        >
                                            Admin Dashboard
                                        </Link>
                                    </li>
                                    <li
                                        className="flex lg:hidden justify-center items-center text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl font-medium text-sm md:text-sm transition-all duration-500 ease-in-out"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Link
                                            className={`p-2 hover:font-bold text-white transition-all duration-500 ease-in-out`}
                                            href="/usage-graph"
                                        >
                                            Graph
                                        </Link>
                                    </li>

                                    <li
                                        className="flex justify-center items-center text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl font-medium text-sm md:text-sm transition-all duration-500 ease-in-out"
                                        onClick={handleLogOut}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Log Out
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
