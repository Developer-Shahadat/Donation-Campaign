import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DataShow from "../CardDataShow/DataShow";


const Home = () => {
    const home = useLoaderData()
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-10">
                {
                    home.map(loader => <DataShow key={loader.id} loader={loader}></DataShow>)
                }
            </div>
        </div>
    );
};

export default Home;