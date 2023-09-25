import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const DataShow = ({loader}) => {
    const {id,img,title,category,category_bg_color,card_bg_color,btn_bg_color} = loader
    return (
        <NavLink to={`/donationshow/${id}`}>
        <div className='mt-10'>
            
            <div className="card bg-base-100 shadow-xl rounded-lg">
                <figure><img src={img} /></figure>
                <div style={{backgroundColor: card_bg_color}} className="card-body">
                <button  style={{backgroundColor:btn_bg_color,color:category_bg_color}} className='btn w-24 border-none font-bold'>{category}</button>
                <p style={{color:category_bg_color}} className='font-bold'>{title}</p>
                
                </div>
            </div>
        </div>
         </NavLink>
    );
};
DataShow.propTypes ={
    loader : PropTypes.string.isRequired
}


export default DataShow;