import { useRouter } from "next/dist/client/router";
import { format } from "date-fns"
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
function Search({ searchResults }){
  
    const router =useRouter();
    const {location,startDate,endDate,noOfGuests}=router.query;
    const formattedStartDate=format(new Date(startDate),"dd MMMM yy");
    const formattedEndDate=format(new Date(endDate),"dd MMMM yy");

    const range=`${formattedStartDate} - ${formattedEndDate}`;
    

    return(
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section>
                    <p className="text-xs"> 300+ stays - {range} -  for {noOfGuests}  guests</p>
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
                    <div className="flex flex-col">
                    {searchResults.map(({img ,location,title,description,star,price,total})=>(
                        <InfoCard  
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                        />
                    ))}
                    </div>
                   
                </section>
            </main>
        </div>
    );
}
export default Search
export async function getServerSideProps(){
    const searchResults=await fetch("https://links.papareact.com/isz")
    .then((res) => res.json());

    return {
        props : {
            searchResults,
        }
    }
}