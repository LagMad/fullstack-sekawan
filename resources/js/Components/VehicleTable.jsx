import React from "react";

const VehicleTable = ({ data, index, currentPage, rowsPerPage }) => {
    const { id, name, gas_usage, service_sched, usage_log } = data;

    const rowNumber = (currentPage - 1) * rowsPerPage + (index + 1);

    return (
        <tr
            className={`${
                index % 2 === 0 ? "bg-slate-200" : "bg-white"
            } flex w-max md:w-full items-center`}
        >
            <td className="w-12 md:w-1/12 text-left py-5 pl-6">{rowNumber}</td>
            <td className="w-52 md:w-5/12 text-left py-5 pl-6">{name}</td>
            <td className="w-40 md:w-2/12 text-center p-1 lg:p-5">
                {gas_usage} liters
            </td>
            <td className="w-40 md:w-2/12 text-center p-1 lg:p-5">
                {service_sched}
            </td>
            <td className="w-40 md:w-2/12 text-center p-1 lg:p-5">
                {usage_log} gram
            </td>
        </tr>
    );
};

export default VehicleTable;
