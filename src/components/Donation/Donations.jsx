
import { useEffect, useState } from "react";
import Donation from "./Donation";



// import { Link } from "react-router-dom";
const Donations = () => {
    const [donation,setDonationItem] = useState([]);
    const [noDataFounded,setNoDataFounded] = useState(false);

    // SEE ALL Btn State
    const[isShow,setSeeAll] = useState(false)

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('Donation Item'));
        if(donationItem){
            setDonationItem(donationItem);
        }
        else{
            setNoDataFounded("No Data Found");
        }
    },[])
  
    return (
        <div>
            {
                noDataFounded ? ( <p className="text-3xl text-center mt-60">{noDataFounded} </p> ) : 
                (
                    <div>
                    
                        {/* <div className=" container mx-auto grid grid-cols-2 gap-10">
                        {
                            donation.map(details => <Donation details={details}></Donation>)
                        }
                        </div> */}
                    <div className=" container mx-auto grid grid-cols-2 gap-10">
                    {
                        
                    isShow? donation.map(details => <Donation details={details}></Donation>) :
                    donation.slice(0,4).map(details => <Donation details={details}></Donation>)
                        
                    }
                    </div>
                   { donation.length > 4 && <button onClick={()=>setSeeAll(!isShow)} className="btn btn-success text-white block mx-auto mt-5">{isShow ? "SEE LESS" :  "SEE ALL"}</button>}
                    
                </div>
                )
            }
            
           
           
        </div>
    );
};

export default Donations;
//    donation.map(details => <Donation details={details}></Donation>)
