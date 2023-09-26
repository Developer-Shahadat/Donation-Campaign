
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
    const data = useLoaderData()
    console.log(data);
    const [item,setItem] = useState()

    

    const pieOptions = {
       
        pieHole: 1.0,
        slices: [
            {
                color: '#00C49F',
            },
            {
                color: '#FF444A',
            },
            
            
        ],
        legend: {
            position: 'bottom',
            alignment: 'center',
            textStyle: {
                color: '233238',
                fontSize: 14,
                
            },
        },
        tooltip: {
            showColorCode: true,
        },
        fontName: 'Roboto',
        fontSize: 20,
    }
    
    const myDonation = 4
    const totalDonation = data.length
    const result = (totalDonation/myDonation)
    return (
        <div className="mx-4 lg:mx-4">
            <Chart
                chartType="PieChart"
                data={[
                    ['Item', 'Numbers'],
                    ['Your Donation', result],
                    ['Total Donation', totalDonation],
                    
                ]}
                options={pieOptions}
                graph_id="PieChart"
                width={'100%'}
                height={'500px'}
                legend_toggle
            />
        </div>
    );
};




export default Statistics;
