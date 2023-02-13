const Footer = () => {
    return (
        <main className=" flex justify-center items-center bg-white w-full mt-8  ">
            <div className=" max-w-screen-xl w-[95%] flex-col justify-center items-center  ">
                <section className="flex  border-b-2  justify-between items-start px-3 py-10">
                    <div className="flex flex-col justify-center ">
                        <h1 className="text-xl font-bold text-[#3563E9]">MORENT</h1>
                        <p className="text-[#131313] opacity-60 font-medium text-base">
                            Our vision is to provide convenience <br /> and help increase your sales
                            business.
                        </p>
                    </div>
                    <div className="flex justify-between gap-4 ">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-xl font-bold text-[#1A202C]">About</h1>
                            <div className="flex flex-col gap-4 justify-center items-start text-[#131313] opacity-60 font-medium text-base">
                                <button>How it works </button>
                                <button>Featured</button>
                                <button>Partnership</button>
                                <button>Bussiness Relation</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-xl font-bold text-[#1A202C]">Community</h1>
                            <div className="flex flex-col gap-4 justify-center items-start text-[#131313] opacity-60 font-medium text-base">
                                <button>Events</button>
                                <button>Blog</button>
                                <button>Podcast</button>
                                <button>Invite a friend</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-xl font-bold text-[#1A202C]">Socials</h1>
                            <div className="flex flex-col gap-4 justify-center items-start text-[#131313] opacity-60 font-medium text-base">
                                <button>Discord</button>
                                <button>Instagram</button>
                                <button>Twitter</button>
                                <button>Facebook</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" flex justify-between items-center font-semibold text-base text-[#1A202C] px-3 py-5">
                    <p className="">©2022 MORENT. All rights reserved</p>
                    <div className="flex justify-between items-center gap-5 ">
                        <p className="">Privacy & Policy</p>
                        <p>Terms & Condition</p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Footer;
