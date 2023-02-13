/* <div className="flex justify-center items-center flex-wrap sm:flex-nowrap my-8 gap-3">
//  <PickUp />
//  <Switch />
//  <DropOff />
// </div>
// <CatalogueCar /> */

import Ads from "../../component/Ads";
import PickUp from "../../component/pickUp";
import CatalogueDatail from "../../component/catalogue/CatalogueDetail";
import { cars } from "../../Db/data";
import { BsArrowDownUp } from "react-icons/bs";
const HomePage = () => {
    return (
        <main className="flex flex-col gap-8 ">
            <section>
                <Ads />
            </section>
            <section className=" grid grid-cols-[repeat(auto-fit,minmax(304px,1fr))] gap-8">
                <PickUp title="Pick-Up" color="#afc2fa" color2="#3563E9" />
                <div className="w-16 h-16 bg-[#3563E9] rounded-[10px] flex items-center justify-center">
                    <BsArrowDownUp color="white" size={32} />
                </div>
                <PickUp title="Drop-Off" color="#b2d5fa" color2="#54A6FF" />
            </section>
            <section >
                <div className="flex flex-col justify-center items-start gap-5 w-full">
                    <div className="flex justify-between items-center w-full">
                        <button className="rounded-[4px] px-2 py-5 text-[#90A3BF] font-semibold text-base ">
                            Popular Car
                        </button>
                        <button className="rounded-[4px] px-2 py-5 text-[#3563E9] font-semibold text-base ">
                            View All
                        </button>
                    </div>
                    <div className="grid  gap-5 grid-cols-[repeat(auto-fit,minmax(304px,1fr))] ">
                        {cars.map((item) => (
                            <CatalogueDatail car={item} />
                        ))}
                    </div>
                </div>
            </section>
            <button>show more</button>
        </main>
    );
};

export default HomePage;
