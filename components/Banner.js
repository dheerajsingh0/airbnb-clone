import Image from "next/image"
function Banner(){
    return(
        <>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
          <Image 
          src="/Banner.webp"
          layout="fill"
          objectFit="cover"
          alt="Banner pic"
          />
          <div className=" absolute top-1/2 w-full text-center">
              <p className="text-sm sm:text-lg" >Not Sure Where to go? Perfect.</p>
              <button className="bg-white text-purple-500 my-3 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150" >I am flexible</button>
          </div>
        </div>
        </>
    );
}
export default Banner