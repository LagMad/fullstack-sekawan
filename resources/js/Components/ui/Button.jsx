import React from "react";

const Button = ({
    variation,
    type,
    children,
    onClick,
    className,
    path,
    disabled = false,
}) => {
    const getButtonVariation = (variation, path) => {
        switch (variation) {
            case "primary":
                return "text-white bg-orange-500 hover:bg-orange-400 px-7 py-2 rounded-xl";
            case "secondary":
                return "text-white bg-slate-800 hover:bg-slate-700 border-[1.5px] border-white px-7 py-2 rounded-xl";
            default:
                return "";
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${getButtonVariation(variation, path)}
       font-medium text-xs md:text-sm transition-all duration-500 ease-in-out ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
