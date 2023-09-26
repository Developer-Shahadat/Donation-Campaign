

// import { useLoaderData } from "react-router-dom";
// import { useParams } from "react-router-dom";

import swal from 'sweetalert';



const DonationDetails = ({details}) => {
  const {id,img,title,category_bg_color,btn_bg_color,description,price} = details


 
    const handleDonateClick = () => {
        
        const addedDonationArray = [];
        const donationItem = JSON.parse(localStorage.getItem('Donation Item'));
        if(!donationItem){
          addedDonationArray.push(details)
          localStorage.setItem('Donation Item',JSON.stringify(addedDonationArray))
          swal("Good job!", "Donate Successful", "success");
        }
        else{
          const isExits = donationItem.find((details) => details.id == id);

          if(!isExits){
            addedDonationArray.push( ...donationItem,details)
            localStorage.setItem('Donation Item',JSON.stringify(addedDonationArray))
              swal("Good job!", "Donate Successful", "success");
          }
          else{
            swal("Already Donated", "Donate Complete", "error");
          }
          
        }
      };
    
        
    return (
        <div className="mt-10">
                  <div className="card card-compact lg:w-1/2 bg-base-100 shadow-xl lg:ml-96 ">
                        <figure><img className="w-[80%]" src={img} /></figure>
                        <div className=" ">
                           <div className="-mt-14 lg:ml-[70px] ml-[42px] absolute lg:w-[545px] w-[340px] md:ml-[78px] md:w-[612px] p-1 bg-opacity-70 bg-black">
                           <button onClick={handleDonateClick} className="btn font-bold" style={{backgroundColor: btn_bg_color,color:category_bg_color}}>Donate  ${price}</button>
                           </div>
                        </div>
                        <div className="card-body ">
                            <h2 className="card-title text-center ml-6 md:ml-16 lg:ml-14">{title}</h2>
                            <p className="text-justify ml-6 md:ml-16 lg:ml-14">{description}</p>
                        </div>
                    </div>          
        </div>
    );
};

export default DonationDetails;