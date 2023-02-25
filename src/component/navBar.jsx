import React, { Component } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
const NavBar = () => {
    return (
        <main className=" bg-white w-full  min-h-[80px] flex justify-center items-center">
            <div className="max-w-screen-xl  w-[95%] flex justify-between items-center ">
                <section className="  flex justify-center items-center gap-4 ">
                    <h1 className="text-xl font-bold text-[#3563E9]">MORENT</h1>
                    <div className="border border-[#C3D4E966] rounded-[70px] px-3 py-1  flex items-center justify-center">
                        <IconContext.Provider value={{ color: "#596780",size:"20px" }}>
                            <button>
                                <FaSearch />
                            </button>
                        </IconContext.Provider>
                        <input
                            type="text"
                            className="text-[#596780] text-sm px-2 outline-none"
                            placeHolder="search something here"
                        />
                    </div>
                </section>
                <section className=" flex items-center justify-between ">
                    <IconContext.Provider value={{ color: "#596780", size: "20px" }}>
                        <button className="w-[44px] h-[44px] flex justify-center items-center hover:border rounded-full border-[rgba(195, 212, 233, 0.4)]">
                            <FaHeart />
                        </button>
                        <button className="relative w-[44px] h-[44px] flex justify-center items-center hover:border rounded-full border-[rgba(195, 212, 233, 0.4)]">
                            <IoIosNotifications />
                            <div className="absolute top-[2px] right-[.5px] w-[11px] h-[11px] rounded-full bg-[#FF4423]"></div>
                        </button>
                        <button className="w-[44px] h-[44px] flex justify-center items-center hover:border rounded-full border-[rgba(195, 212, 233, 0.4)]">
                            <IoIosSettings />
                        </button>
                    </IconContext.Provider>

                    <div className="w-[44px] h-[44px] flex justify-center items-center  hover:border rounded-full border-[rgba(195, 212, 233, 0.4)]">
                        <img
                            src={require("../images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg")}
                            alt="prifle-imge"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default NavBar;
