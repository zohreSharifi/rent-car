const Ads = () => {
    return (
        <main className="grid  gap-8 grid-cols-[repeat(auto-fit,minmax(304px,1fr))]">
            <section className="bg-[#54A6FF]   text-white p-5 rounded-lg">
                <div className="flex flex-col gap-5 items-start ">
                    <div className="flex flex-col gap-4 items-start">
                        <p className=" font-semibold text-3xl ">The Best Platform for Car Rental</p>
                        <p className="font-medium text-base tracking-tight">
                            Ease of doing a car rental safely and reliably. Of course at a low
                            price.
                        </p>
                    </div>

                    <button className="rounded bg-[#3563E9] px-5 py-2 text-base font-semibold ">
                        Rental Car
                    </button>
                    <img
                        src={require("../images/pngwing.com (6).png")}
                        className="w-f h-f object-cover "
                        alt="image-7"
                    />
                </div>
            </section>
            <section className="bg-[#3563E9]   text-white p-5 rounded-lg ">
                <div className="flex flex-col gap-5 items-start ">
                    <div className="flex flex-col gap-4 items-start">
                        <p className=" font-semibold text-3xl ">The Best Platform for Car Rental</p>
                        <p className="font-medium text-base tracking-tight">
                            Ease of doing a car rental safely and reliably. Of course at a low
                            price.
                        </p>
                    </div>

                    <button className="rounded bg-[#54A6FF] px-5 py-2 text-base font-semibold ">
                        Rental Car
                    </button>

                    <img
                        src={require("../images/pngwing.com (3).png")}
                        className=" w-full h-full object-contain"
                        alt="image-7"
                    />
                </div>
            </section>
        </main>
    );
};

export default Ads;
