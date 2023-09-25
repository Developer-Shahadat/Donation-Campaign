
import { useLoaderData, useParams } from "react-router-dom";

import Swal from 'sweetalert2';


const DonationDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detailsAll = details.find(detail => detail.id === idInt);
    console.log(detailsAll);

 
    const handleDonateClick = () => {
        Swal.fire({
          title: 'Donation Confirmation',
          text: `Are you sure you want to donate $${detailsAll.price}?`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes, donate!',
          cancelButtonText: 'Cancel',
        })
        .then((result) => {
          if (result.isConfirmed) {
            // Handle donation logic here
            // You can perform the actual donation or redirect the user to a payment page
            // For example: alert('Donation successful!');
            Swal.fire('Donation successful!', '', 'success');
          }
        });
      };
    
        
    return (
        <div className="mt-10">
                  <div className="card card-compact w-1/2 bg-base-100 shadow-xl ml-96">
                        <figure><img className="w-[80%]" src={detailsAll.img} /></figure>
                        <div className="relative -mt-14 ml-20">
                           <div className="w-[531px] p-1 bg-opacity-70 bg-black">
                           <button onClick={handleDonateClick} className="btn font-bold" style={{backgroundColor: detailsAll.btn_bg_color,color:detailsAll.category_bg_color}}>Donate  ${detailsAll.price}</button>
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