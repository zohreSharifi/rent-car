import { BsHeart } from "react-icons/bs";
import { RiGasStationFill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
const CatalogueDatail = ({car}) => {
    return (
        <main className="bg-white rounded-[10px] flex  flex-col p-5">
            <section className="flex flex-col justify-center  gap-1">
                <div className="flex justify-betwwen items-center ">
                    <h2 className="text-[#1A202C] font-bold w-full text-xl">{car.title}</h2>
                    <button>
                        <BsHeart color="#90A3BF" size="24px" />
                    </button>
                </div>
                <p className="text-[#90A3BF] font-bold text-sm">{car.category}</p>
            </section>
            <section>
                <img
                    src={require(`../../images/pngwing.com (${car.id}).png`)}
                    // src={require(car.img)}
                    alt="img-1"
                    className="w-full h-full object-cover"
                />
            </section>
            <section className="flex justify-between items-center ">
                <div className="flex justify-between items-center">
                    <span>
                        <RiGasStationFill color="#90A3BF" size="24px" />
                    </span>
                    <p className="font-medium text-sm text-[#90A3BF]">90L</p>
                </div>
                <div className="flex justify-between items-center">
                    <span>
                        <TbSteeringWheel color="#90A3BF" size="24px" />
                    </span>
                    <p className="font-medium text-sm text-[#90A3BF]">Manual</p>
                </div>
                <div className="flex justify-between items-center">
                    <span>
                        <MdPeopleAlt color="#90A3BF" size="24px" />
                    </span>
                    <p className="font-medium text-sm text-[#90A3BF]">2 People</p>
                </div>
            </section>
            <section className="flex justify-between items-center">
                <p className="font-bold text-xl text-[#1A202C]">
                    {car.price}/ <span className="text-sm text-[#90A3BF]">day</span>
                </p>
                <button className="rounded text-white bg-[#3563E9] px-5 py-2 text-base font-semibold ">
                    Rental Now
                </button>
            </section>
        </main>
    );
};

export default CatalogueDatail;
