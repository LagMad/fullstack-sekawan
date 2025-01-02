import { Head, Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Car from "../../../public/images/home/Car.svg";
import Button from "../Components/ui/Button";
import { motion } from "framer-motion";

const Home = () => {
    const { user, token } = usePage().props; // This will be available when you render the page with Inertia
    const [userData, setUserData] = useState(user || null);
    const [authToken, setAuthToken] = useState(token || null);

    const isAuthenticated = Boolean(authToken);

    useEffect(() => {
        if (!userData && localStorage.getItem("user")) {
            setUserData(JSON.parse(localStorage.getItem("user")));
            setAuthToken(localStorage.getItem("userToken"));
        }
    }, [userData, authToken]);

    return (
        <>
            <div className="w-full lg:min-h-screen flex flex-col md:flex-row justify-center items-center pt-5 md:pt-3 lg:pt-0 pb-10 gap-16">
                <motion.div
                    className=" w-full md:w-1/2 flex flex-col gap-2"
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            duration: 5.0,
                            damping: 10,
                            stiffness: 100,
                        },
                    }}
                >
                    <div className=" text-slate-800 text-lg lg:text-2xl font-semibold">
                        Welcome to
                        <span className="font-black ml-1.5">
                            Vehi<span className="text-orange-400">Call</span>
                        </span>
                        !
                    </div>
                    <div className="text-slate-800 text-3xl md:text-4xl lg:text-6xl font-black">
                        Your convenient vehicle pick ups web app.
                    </div>
                    <div className="mt-5 lg:mt-7 text-justify font-normal text-sm lg:text-md">
                        The ultimate solution for efficient vehicle management!
                        VehiCall simplifies tracking fuel consumption,
                        scheduling services, and logging vehicle usage, whether
                        for company-owned or rental vehicles.
                    </div>
                    <div className="flex flex-col font-normal text-sm lg:text-md">
                        <div className="flex flex-row">
                            With
                            <span className="font-black mx-1.5">
                                Vehi
                                <span className="text-orange-400">Call</span>
                            </span>
                            you can:
                        </div>
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                Streamline vehicle bookings with an intuitive
                                approval process.
                            </li>
                            <li>
                                Monitor vehicle performance and usage logs
                                effortlessly.
                            </li>
                            <li>
                                Gain insights through detailed and dynamic usage
                                graphs.
                            </li>
                        </ul>
                    </div>
                    <Link href="/register">
                        <Button
                            className={"w-full md:w-max"}
                            variation={"primary"}
                        >
                            Let's Get Started!
                        </Button>
                    </Link>
                </motion.div>
                <motion.div
                    className=" w-5/6 md:w-1/2 flex flex-col"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            duration: 5.0,
                            damping: 10,
                            stiffness: 100,
                        },
                    }}
                >
                    <img src={Car} />
                </motion.div>
            </div>
        </>
    );
};

export default Home;
