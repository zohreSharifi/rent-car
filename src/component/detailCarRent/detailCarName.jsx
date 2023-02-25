import { BsHeart } from "react-icons/bs";
const DetailCarName = () => {
    return (
        <main className="flex flex-col justify-between bg-white rounded-[10px] p-5">
            <section>
                <div className="flex">
                    <h2 className="text-[#1A202C] font-bold w-full text-xl">Nissan GT - R</h2>
                    <button>
                        <BsHeart color="#ED3F3F" size="24px" />
                    </button>
                </div>
                <div>
                    <p className="text-[#596780] text-sm">440+ Reviewer</p>
                </div>
            </section>
            <section className="text-[#596780]">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the
                most unforgiving proving ground, the "race track".
            </section>
            <section>
                <div className="flex justify-between items-center">
                    <p className="text-[#90A3BF] text-xl font-semibold">Type Car</p>
                    <p className="text-[#596780] text-xl font-semibold">Sport </p>
                    <p className="text-[#90A3BF] text-xl font-semibold">Capacity</p>
                    <p className="text-[#596780] text-xl font-semibold"> 2 Person</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[#90A3BF] text-xl font-semibold">Steering </p>
                    <p className="text-[#596780] text-xl font-semibold">Manual </p>
                    <p className="text-[#90A3BF] text-xl font-semibold">Manual</p>
                    <p className="text-[#596780] text-xl font-semibold">70L</p>
                </div>
            </section>
            <section className="flex justify-between items-center">
                <div>
                    <p className="text-[#1A202C] font-bold text-[28px]">
                        $80.00/ <span className="text-[#90A3BF] font-bold text-base">days</span>{" "}
                    </p>
                    <p className="text-[#90A3BF] font-bold text-base">$100.00</p>
                </div>
                <button className="rounded text-white bg-[#3563E9] px-5 py-2 text-base font-semibold ">
                    Rent Now
                </button>
            </section>
        </main>
    );
};

export default DetailCarName;
