import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";


const DonationCard = () => {
    const [details,setDetails] = useState({})
    const {id} = useParams()
    const cardDetails = useLoaderData()
    useEffect(()=>{
        const findData = cardDetails?.find((details) => details.id == id)
        setDetails(findData)
    },[id,cardDetails])
    return (
        <div>
            <DonationDetails details={details} ></DonationDetails>
        </div>
    );
};

export default DonationCard;