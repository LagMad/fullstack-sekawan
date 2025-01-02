import React, { useEffect, useState } from "react";
import Button from "../Components/ui/Button";

const Order = ({ vehicles, drivers, approvers, onSubmit }) => {
    const [formData, setFormData] = useState({
        vehicle_name: "",
        driver: "",
        approver_1: "",
        approver_2: "",
        purpose: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order submitted:", formData);
        // onSubmit(formData);
    };

    useEffect(() => {
        console.log("Vehicles", vehicles);
    }, [vehicles]);

    return (
        <div className="flex flex-col pt-32 pb-10 justify-center gap-10">
            <div className="flex justify-center text-5xl font-black text-slate-800">
                Order
            </div>
            <form
                onSubmit={handleSubmit}
                className=" flex flex-col w-full justify-center items-center bg-white rounded gap-5"
            >
                <div className="w-full lg:w-96">
                    <label>Vehicle</label>
                    <select
                        name="vehicle_name"
                        value={formData.vehicle_name}
                        onChange={handleChange}
                        className="block py-3 px-3 w-full lg:w-96 rounded-lg text-sm text-black border-[1px]"
                    >
                        {vehicles && vehicles.length > 0 ? (
                            vehicles.map((v) => (
                                <option value={v.id} key={v.id}>
                                    {v.name}
                                </option>
                            ))
                        ) : (
                            <option>No vehicles available</option>
                        )}
                    </select>
                </div>
                <div className="flex flex-col w-full lg:w-96">
                    <label>Driver</label>
                    {/* <select name="driver_id" onChange={handleChange}>
                    {drivers && drivers.length > 0 ? (
                        drivers.map((d) => (
                            <option value={d.id} key={d.id}>
                                {d.name}
                            </option>
                        ))
                    ) : (
                        <option>No drivers available</option>
                    )}
                </select> */}
                    <input
                        id="driver"
                        type="text"
                        onChange={(e) => handleChange}
                        className={`block py-3 px-3 w-full lg:w-96 rounded-lg text-sm text-black border-[1px]`}
                        placeholder="Driver"
                    />
                </div>
                <div className=" w-full lg:w-96">
                    <label>Approver 1</label>
                    <select
                        name="approver_1"
                        onChange={handleChange}
                        className="block py-3 px-3 w-full lg:w-96 rounded-lg text-sm text-black border-[1px]"
                    >
                        {approvers && approvers.length > 0 ? (
                            approvers.map((a) => (
                                <option value={a.id} key={a.id}>
                                    {a.name}
                                </option>
                            ))
                        ) : (
                            <option>No approvers available</option>
                        )}
                    </select>
                </div>
                <div className=" w-full lg:w-96">
                    <label>Approver 2</label>
                    <select
                        name="approver_2"
                        onChange={handleChange}
                        className="block py-3 px-3 w-full lg:w-96 rounded-lg text-sm text-black border-[1px]"
                    >
                        {approvers && approvers.length > 0 ? (
                            approvers.map((a) => (
                                <option value={a.id} key={a.id}>
                                    {a.name}
                                </option>
                            ))
                        ) : (
                            <option>No approvers available</option>
                        )}
                    </select>
                </div>
                <div className="flex flex-col w-full lg:w-96">
                    <label>Purpose</label>
                    <textarea
                        name="purpose"
                        onChange={handleChange}
                        className="block py-3 px-3 w-full rounded-lg text-sm text-black border-[1px]"
                        placeholder="Why should we accept your request..?"
                    ></textarea>
                </div>
                <Button type={"submit"} variation={"primary"}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Order;
