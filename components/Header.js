import Image from "next/image";
import {SearchIcon,
MenuIcon,
UserCircleIcon,
UserIcon,
GlobeAltIcon,
MenuAlt1Icon,
} from "@heroicons/react/solid"
function Header(){
return(
    <>
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
        <div className="relative flex items-center h-10 cursor-pointer">
            <Image
            src="/Airbnb_Logo_Bélo.svg.webp"
            layout="fill"
            objectFit="contain"
            objectPosition="left"

            />
        </div>
        <div className="flex items-center border-2 rounded-full py-2 md:boder-2 md:shadow-sm hover:md:shadow-lg">
            <input type="text" className="text-gray-600 placeholder-gray-400 rounded-full outline-none pl-5 bg-transparent flex-grow" placeholder="Start Your Search"/>
            <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
        </div>
        <div className="flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer">Become a Host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
            </div>
        </div>
    </header>
    </>
);
}
export default Header