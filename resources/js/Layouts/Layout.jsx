import React from "react";
import { Head, usePage } from "@inertiajs/react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
    const { url } = usePage();
    const hideNavBar = url === "/login" || url === "/register";
    return (
        <>
            <Head>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
            </Head>
            <header>
                {!hideNavBar && (
                    <header>
                        <NavBar />
                    </header>
                )}
            </header>

            <main className=" h-max md:min-h-screen px-5 lg:px-16">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
