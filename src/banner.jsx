import banner from './assets/Websiteimages/banner.mp4'
function Banner() {
    return (
        <>
            <div>
                <div className="max-sm:hidden">
                    <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid" className="object-cover w-[100vw] h-[100%] fixed  left-0  z-[-1] cursor-pointer ">
                    <source src={banner} type="video/mp4" />
                    </video>
                </div>

                <div className="flex items-center justify-center fixed w-[100%] top-[60%] max-sm:top-[70%]">
                    <div className="hidden max-sm:block fixed top-[5%] z-[-1]">
                    <img className="object-cover w-[100vw] h-[100vh]" src="./src/assets/Websiteimages/banner02.jpg" alt="" />
                    </div>
                    <div className="text-center">
                        <img src="./src/assets/Websiteimages/02.png" className="m-[auto]" alt="Fitness" />
                        <div >
                            <a href="#" className="text-center text-[38px] leading-14 font-bold font-sans max-sm:text-[2rem]">Happy Move Your Year</a>
                        </div>
                        <div>
                            <p className="text-[35px]">From HIIT to Yoga, start the year moving anytime, anywhere</p>
                        </div>
                        <div>
                            <button className="bg-[#1D1D1F] py-[15px] px-[24px] rounded-full text-[white] hover:bg-[#2a2a2e] mb-[20px] ">Learn more</button>
                        </div>
                    </div>

                </div>


            </div>

        </>
    );
}

export default Banner;
