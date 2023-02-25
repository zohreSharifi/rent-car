import Ads from "../../component/Ads";
import DetailCarName from "../../component/detailCarRent/detailCarName";
import SideBar from "../../component/detailCarRent/sideBar/sideBar";

const DetailCarPage = () => {
    return (
        <main className="w-full flex mt-8 ">
            <SideBar />
            <div className="container max-w-screen-lg  mx-auto flex flex-col gap-6">
                <section className="flex gap-6">
                    <div className="flex flex-col">
                    <Ads />
                    <div className="flex">
                        <img  src={require("../../images/pngwing.com (1).png")}  className="w-full h-full object-cover" alt="image-1" />
                        <img src={require("../../images/pngwing.com (1).png")}  className="w-full h-full object-cover" alt="image-1" />
                        <img src={require("../../images/pngwing.com (1).png")}  className="w-full h-full object-cover" alt="image-1" />
                    </div>
                    </div>
                    <DetailCarName />
                </section>
                <section>Reviews</section>
                <section>Recent Car</section>
                <section>Recomendtial Car</section>
            </div>
        </main>
    );
};

export default DetailCarPage;
