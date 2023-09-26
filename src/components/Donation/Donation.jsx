const Donation = ({ details }) => {
  return (
    <div className="md:mx-4 mx-4 lg:mx-0">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={details.img}
            
          />
        </figure>
        <div style={{backgroundColor: details.card_bg_color}} className="card-body">
          <h2  style={{backgroundColor:details.btn_bg_color,color:details.category_bg_color}}  className="w-20 font-medium text-center">{details.category}</h2>
          <p  style={{color:details.category_bg_color}}>{details.title}</p>
          <p style={{color:details.category_bg_color}}>${details.price}</p>
          <div className="card-actions justify-start">
            <button style={{backgroundColor: details.btn_bg_color}} className="btn w-32 border-none text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
