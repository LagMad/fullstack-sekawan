import React, { useEffect, useState } from "react";
import VehicleTable from "../Components/VehicleTable";
import SearchBar from "../Components/ui/SearchBar";
import { Link } from "@inertiajs/react";

const VehicleList = ({ vehicles }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [vehicleData, setVehicleData] = useState([]);
    const [filteredVehicleData, setFilteredVehicleData] = useState([]);

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
        const filteredData = vehicleData.filter((vehicle) => {
            const { name, gas_usage, service_sched, usage_log } = vehicle;

            return (
                name.toLowerCase().includes(query.toLowerCase())
            );
        });

        setFilteredVehicleData(filteredData);
    };

    // useEffect(() => {
    //     console.log("Dataaaa", vehicleData);
    // }, [vehicleData]);

    useEffect(() => {
        setVehicleData(vehicles.data);
        setFilteredVehicleData(vehicles.data);
    }, []);

    return (
        <div className="flex flex-row w-full min-h-screen pt-32 px-0 md:px-0 lg:px-16 xl:px-32 pb-24 font-Poppins gap-16">
            <div className="flex flex-col w-full justify-start items-start gap-6">
                <div className=" w-full md:w-1/3">
                    <SearchBar
                        className={
                            "border-cust-black-light-active focus:border-cust-orange-normal"
                        }
                        onSearch={handleSearchQueryChange}
                    />
                </div>
                <table className="flex flex-col w-full border-[1.5px] border-collapse rounded-lg text-sm md:text-md overflow-hidden overflow-x-scroll md:overflow-visible">
                    <thead className="flex w-max md:w-full">
                        <tr className="flex  py-3 w-max md:w-full items-center">
                            <th className="w-12 md:w-1/12 text-left py-5 pl-6">No</th>
                            <th className="w-52 md:w-5/12 text-left py-5 pl-6">
                                Nama Kendaraan
                            </th>
                            <th className="w-40 md:w-2/12 text-center">
                                Konsumsi BBM
                            </th>
                            <th className="w-40 md:w-2/12 text-center">
                                Jadwal Service
                            </th>
                            <th className="w-40 md:w-2/12 text-center">
                                Riwayat Pemakaian
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredVehicleData.length > 0 ? (
                            filteredVehicleData.map((vehicle, index) => {
                                return (
                                    <VehicleTable
                                        data={vehicle}
                                        index={index}
                                        key={index}
                                        currentPage={vehicles.current_page}
                                        rowsPerPage={vehicles.per_page}
                                    />
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-5 text-center">
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-center w-full">
                    {vehicles.links.map((link) =>
                        link.url ? (
                            <Link
                                preserveScroll
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 ${
                                    link.active ? "text-orange-500 font-bold" : ""
                                }`}
                            />
                        ) : (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="p-1 mx-1 text-slate-300"
                            ></span>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default VehicleList;
