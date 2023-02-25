const SideBar = () => {
    return (
        <main className="border bg-white border-r-[#F3F5F7]  h-full flex flex-col justify-between p-5 ">
            <section className="flex flex-col gap-[28px]">
                <h2 className="text-[#90A3BF] text-xs font-semibold">T Y P E</h2>
                <div className="flex gap-1 items-center">
                    <input type="checkbox" checked/>
                    <label htmlFor="" className="text-[#596780] text-xl font-semibold">
                        Sport <span className="text-[#90A3BF]">(10)</span>{" "}
                    </label>
                </div>
                <div className="flex gap-1 items-center">
                    <input type="checkbox" checked/>
                    <label htmlFor="" className="text-[#596780] text-xl font-semibold">
                        SUV <span className="text-[#90A3BF]">(12)</span>{" "}
                    </label>
                </div>
                <div className="flex gap-1 items-center">
                    <input type="checkbox" checked/>
                    <label htmlFor="" className="text-[#596780] text-xl font-semibold">
                        MPV <span className="text-[#90A3BF]">(16)</span>{" "}
                    </label>
                </div>
                <div className="flex gap-1 items-center">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-[#596780] text-xl font-semibold">
                        SADAN <span className="text-[#90A3BF]">(20)</span>{" "}
                    </label>
                </div>
            </section>
            <section>
            <h2 className="text-[#90A3BF] text-xs font-semibold">C A P A C I T Y</h2>
                <div className="flex gap-1 items-center">
                    <input type="checkbox" checked/>
                    <label htmlFor="" className="text-[#596780] text-xl font-semibold">
                        2 person <span className="text-[#90A3BF]">(10)</span>{" "}
                    </label>
                </div>
            </section>
            <section>
            <h2 className="text-[#90A3BF] text-xs font-semibold">PRICE</h2>
            </section>
        </main>
    );
};

export default SideBar;
