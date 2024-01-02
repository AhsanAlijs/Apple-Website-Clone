
function Navbar() {
    return (
        <>
            <div className="bg-[#404040] flex items-center justify-center gap-[50px] p-[10px] max-sm:flex max-sm:items-center max-sm:justify-between fixed w-[100%]">

                <header className="flex items-center justify-between gap-[50px]  max-md:gap-[10px] max-lg:gap-[5px]">
                    <div className="logo">
                        <a href="#"><img className="w-[20px] max-sm:w-[20px] " src="./src/assets/Websiteimages/Navbar.png" alt="Logo" /></a>
                    </div>
                    <nav className=" navbar flex items-center justify-center max-sm:justify-between ">

                        <ul className="flex items-center gap-[40px] text-[#bbbbbb] text-[12px] max-sm:hidden max-md:gap-[10px] max-lg:gap-[20px] ">
                            <li><a href="#">Store</a></li>
                            <li><a href="#">Mac</a></li>
                            <li><a href="#">ipad</a></li>
                            <li><a href="#">iphone</a></li>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">vision</a></li>
                            <li><a href="#">Airpods</a></li>
                            <li><a href="#">TV&Home</a></li>
                            <li><a href="#">Entertainment</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Support</a></li>

                        </ul>
                    </nav>

                </header>
                <div className="flex list-none items-center justify-center gap-[20px] pl-[10px] text-[#bbbbbb] text-[12px]">
                    <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                    <div className="text-[#bbbbbb] text-[12px] hidden max-sm:block">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;