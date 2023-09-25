
import { useLoaderData, useParams } from "react-router-dom";



const DonationDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detailsAll = details.find(detail => detail.id === idInt);
    console.log(detailsAll);

 

    
        
    return (
        <div className="mt-10">
                  <div className="card card-compact w-1/2 bg-base-100 shadow-xl ml-96">
                        <figure><img className="w-[80%]" src={detailsAll.img} /></figure>
                        <div className="relative -mt-14 ml-20">
                           <div className="w-[531px] p-1 bg-opacity-70 bg-black">
                           <button className="btn bg-[#FF444A;] rounded-lg border-none text-white hover:bg-red-400">Donate  ${detailsAll.price}</button>
                           </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center ml-5">{detailsAll.title}</h2>
                            <p className="text-center">{detailsAll.description}</p>
                        </div>
                    </div>          
        </div>
    );
};

export default DonationDetails;