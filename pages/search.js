import { useRouter } from "next/dist/client/router";
import {format} from "date-fns"
function Search(){
    const router =useRouter();
    const {location,startDate,endDate,noofGuests}=router.query;


    // const formattedStartDate = format(new Date(startDate),"dd MMMM yy");
    // console.log(formattedStartDate);
    

    return(
        <div>
            <main className="flex">
                <section>
                    <p className="text-xs"> 300+ stays - -  for {noofGuests}  guests</p>
                    <h1>Stays  in <span className="text-gray-900 font-bold">{location}</span> </h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
                         active:bg-gray-100 transition transform duration-100 ease-out"> 
                            Cancellation  flexibility
                        </p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
                         active:bg-gray-100 transition transform duration-100 ease-out"> 
                            Cancellation  flexibility
                        </p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
                         active:bg-gray-100 transition transform duration-100 ease-out"> 
                            Cancellation  flexibility
                        </p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
                         active:bg-gray-100 transition transform duration-100 ease-out"> 
                            Cancellation  flexibility
                        </p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
                         active:bg-gray-100 transition transform duration-100 ease-out"> 
                            Cancellation  flexibility
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Search