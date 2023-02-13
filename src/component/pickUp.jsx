import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];



const PickUp = ({title,color,color2}) => {
    return (
        <main className="bg-white text-[#1A202C]  flex items-center justify-center   rounded-[10px]">
            <div className="flex flex-col justify-center gap-4">
                <section className="flex gap-2 items-center px-6 pt-4">
                    <div className={`w-4 h-4 p-1 bg-[${color}] rounded-[70px] flex justify-center items-center`}>
                        <div className={`bg-[${color2}]  w-2 h-2  rounded-full`}></div>
                    </div>

                    <p htmlFor="" className=" text-[#1A202C] font-semibold text-base">
                       {title}
                    </p>
                </section>
                <section className="flex items-start justify-center gap-6 px-6 mb-4">
                    <div className="flex flex-col border-r pr-6 gap-2  justify-center ">
                        <label htmlFor="" className=" text-[#1A202C] font-bold text-base">
                            Locations
                        </label>
                        <Select
                            placeholder="Select city"
                            options={options}
                            className="text-[#90A3BF] text-xs"
                        />
                    </div>

                    <div className="flex flex-col border-r pr-6 gap-2  justify-center rounded ">
                        <label htmlFor="" className=" text-[#1A202C] font-bold text-base">
                            Date
                        </label>
                        <Select
                            options={options}
                            placeholder="Select date"
                            className="css-1jqq78o-placeholder text-[#90A3BF] text-xs"
                        />
                    </div>
                    <div className="flex flex-col  pr-6  gap-2 justify-center rounded ">
                        <label htmlFor="" className=" text-[#1A202C] font-bold text-base">
                            Time
                        </label>
                        <Select
                            options={options}
                            className="text-[#90A3BF] text-xs   "
                            placeholder="Select time"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PickUp;
