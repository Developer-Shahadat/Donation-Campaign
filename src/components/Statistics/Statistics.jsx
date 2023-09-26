
import { Chart } from "react-google-charts";
const Statistics = () => {
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
    return (
        <div className="mx-4 lg:mx-4">
           
            <Chart
                chartType="PieChart"
                data={[
                    ['Item', 'Numbers'],
                    ['Your Donation', 5000],
                    ['Total Donation', 20000],
                    
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
