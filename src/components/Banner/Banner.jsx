

const Banner = () => {
    return (
        <div>
            <div className="mt-32 text-center">
                    <h1 className="text-4xl font-bold">I Grow By Helping People In Need</h1>
            </div>
                <div className="mt-10">
                    <input className="border-2 p-2 w-1/4 lg:ml-96 ml-20 rounded-lg" type="text" name="text" placeholder="search" />
                    <button className="p-2 pl-4 pr-4 m-2 bg-[#FF444A] text-white font-semibold rounded-lg">Search</button>
                </div>
        </div>
    );
};

export default Banner;