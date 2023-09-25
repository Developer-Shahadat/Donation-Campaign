
import { useEffect, useState } from "react";
import Donation from "./Donation";



// import { Link } from "react-router-dom";
const Donations = () => {
    const [donation,setDonationItem] = useState([]);
    const [noDataFounded,setNoDataFounded] = useState("");
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
                noDataFounded ? <p>{noDataFounded} </p> : <div>
                    
                        <div className=" container mx-auto grid grid-cols-2 gap-10">
                        {
                            donation.map(details => <Donation details={details}></Donation>)
                        }
                        </div>
                    
                </div>
            
            }
           
        </div>
    );
};

export default Donations;
//    donation.map(details => <Donation details={details}></Donation>)
